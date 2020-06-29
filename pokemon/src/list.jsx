import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./pokemon";

function List({ filter, items, addPokemon, viewPokemonDetail, removePokemon }) {
    if (items.length === 0) {
        return (
            <div className="alert alert-success" role="alert">
                My pokemon list is empty!
            </div>
        );
    }
    return (
        <ul className="list-group">
            {items.map(item => (
                <Pokemon filter={filter} key={item.name} item={item} 
                addMyPokemon={() => addPokemon(item)} 
                viewPokemon={() => viewPokemonDetail(item)}
                removeMyPokemon={() => removePokemon(item)}  />
            ))}
        </ul>
    );
}

List.propTypes = {
    filter: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    addPokemon: PropTypes.func.isRequired,
    removePokemon: PropTypes.func.isRequired,
    viewPokemonDetail: PropTypes.func.isRequired,
};

export default List;
