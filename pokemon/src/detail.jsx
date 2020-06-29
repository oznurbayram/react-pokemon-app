import React from "react";
import PropTypes from "prop-types";
import "./detail.css";


function Detail({ selectedPokemon, close }) {

    return (
        <div className="add-item-form">
            <div className="form-group">
                <img src={selectedPokemon.sprites.front_default}/>
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Name: </label>
                {selectedPokemon.name}
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Height: </label>
                {selectedPokemon.height * 100} cm
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Weight: </label>
                {selectedPokemon.weight * 10} g
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Abilities: </label>
                {selectedPokemon.abilities.map(ability => <span className="badge badge-primary" key={ability.ability.name}>{ability.ability.name} </span>)}
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Moves: </label>
                {selectedPokemon.moves.map(move => <span className="badge badge-light" key={move.move.name}>{move.move.name} </span>)}
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Type(s): </label>
                {selectedPokemon.types.map(type => <span className="badge badge-warning" key={type.type.name}>{type.type.name}</span>)}
            </div>
            <div className="form-group">
                <label htmlFor="addItemInput">Stats: </label>
                {selectedPokemon.stats.map(stat => <span className="badge badge-info" key={stat.stat.name}>{stat.stat.name} - {stat.base_stat} </span>)}
            </div>
            <button className="btn btn-secondary" style={{ marginLeft: "20px" }} onClick={close}>
                Close
            </button>
        </div>
    );
}

Detail.propTypes = {
    selectedPokemon: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};

export default Detail;
