import React from "react";
import Header from "./header";
import List from "./list";
import "./App.css";
import pokemonApi from "./pokemonApi";
import Alert from 'react-bootstrap/Alert'

const defaultFilter = { showMyPokemons: false };
const defaultAlert = { showAlert: 0 };

function App() {
    const [allPokemons, setAllPokemons] = React.useState([]);
    const [myPokemons, setMyPokemons] = React.useState([]);
    const [selectedPokemon, setSelectedPokemon] = React.useState([]);
    const [showing, setShowing] = React.useState(false);
    const [filter, setFilter] = React.useState(defaultFilter);
    const [loading, setLoading] = React.useState(true);
    const [showAlert, setShowAlert] = React.useState(defaultAlert);

    const loadAllPokemons = async () => {
        setLoading(true);
        const allPokemons = await pokemonApi.getAllPokemons();
        setAllPokemons(allPokemons.results);
        setLoading(false);
    };

    const loadMyPokemons = async () => {
        const myPokemons = await pokemonApi.getMyPokemons();
        setMyPokemons(myPokemons);
    };

    React.useEffect(() => {
        loadAllPokemons();
        loadMyPokemons();
    }, []);

    const addMyPokemon = async pokemon => {
        const index = await pokemonApi.addMyPokemon(pokemon);
        if(index === -1 ) {
            setShowAlert({ ...showAlert, showAlert: 1 })
        } else {
            setShowAlert({ ...showAlert, showAlert: 2 })
        }
        loadMyPokemons();
    };

    const removeMyPokemon = async pokemon => {
        await pokemonApi.removeMyPokemon(pokemon);
        loadMyPokemons();
    };

    const viewPokemon = async pokemon => {
        const pokemonDetail = await pokemonApi.getPokemon(pokemon);
        setSelectedPokemon(pokemonDetail);
        setShowing(true);
    };

    const filteredItems = filter.showMyPokemons ? myPokemons : allPokemons;

    return (
        <div className="fluid-container app-container">
            <Header show={showing} setShowing={setShowing} filter={filter} setFilter={setFilter} pokemon={selectedPokemon} />
            {showAlert.showAlert === 1 && 
                <Alert variant="success" onClose={() => setShowAlert({ ...showAlert, showAlert: 0 })} dismissible>
                    <Alert.Heading>Successfully added to your pokemon list</Alert.Heading>
                </Alert>
            }
            {showAlert.showAlert === 2 && 
                <Alert variant="warning" onClose={() => setShowAlert({ ...showAlert, showAlert: 0 })} dismissible>
                    <Alert.Heading>Pokemon already exist in your pokemon list</Alert.Heading>
                </Alert>
            }
            {!loading && (
                <div className="list">
                    <List items={filteredItems} filter={filter} addPokemon={addMyPokemon} viewPokemonDetail={viewPokemon} removePokemon={removeMyPokemon} />
                </div>
            )}
            {loading && (
                <div className="alert alert-info" role="alert">
                    Loading please wait...
                </div>
            )}
        </div>
    );
}

export default App;
