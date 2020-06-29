import React from "react";
import PropTypes from "prop-types";
import Detail from "./detail";
import Button from 'react-bootstrap/Button'

function Header({ show, setShowing, filter, setFilter, pokemon }) {

    const toggleFilter = () => setFilter({ ...filter, showMyPokemons: !filter.showMyPokemons });

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <h1 className="navbar-brand">{filter.showMyPokemons ? 'My Pokemon list' : 'Pokemon list'} </h1>
                <div style={{ flexDirection: "inherit", display: "flex", alignItems: "center" }}>
                    <Button variant="info"
                        onClick={toggleFilter}
                    >{filter.showMyPokemons ? 'Show All Pokemon List' : 'Show My Pokemon List'}</Button>
                </div>
            </nav>
            {show && <Detail close={() => setShowing(false)} selectedPokemon={pokemon} />}
        </header>
    );
}

Header.propTypes = {
    show: PropTypes.bool.isRequired,
    setShowing: PropTypes.func.isRequired,  
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
    pokemon: PropTypes.any.isRequired
};

export default Header;
