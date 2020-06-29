import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'
import "./pokemon.css";

function Pokemon({ item, filter, addMyPokemon, removeMyPokemon, viewPokemon }) {
    const itemClass = `list-group-item list-group-item-info`;
    return (
        <li className={itemClass}>
            <div className="item">
                <h4>
                    {`${item.name}`}
                </h4>
                {!filter.showMyPokemons && <Button variant="success" size="sm" onClick={addMyPokemon}>
                    Add To My Pokemon List
                </Button>}
                {filter.showMyPokemons && <Button variant="danger" size="sm" onClick={removeMyPokemon}>
                    Remove From My Pokemon List
                </Button>}
                <Button variant="secondary" size="sm" onClick={viewPokemon}>
                    View Pokemon Detail
                </Button>
            </div>
        </li>
    );
}

Pokemon.propTypes = {
    filter: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    addMyPokemon: PropTypes.func.isRequired,
    removeMyPokemon: PropTypes.func.isRequired,
    viewPokemon: PropTypes.func.isRequired,
};

export default Pokemon;
