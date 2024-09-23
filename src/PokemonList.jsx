import { Component } from "react";

import Carousel from "./Carousel";

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonId: 0,
      pokemonList: null,
    };
  }
  pokemonHandler = async (id) => {
    const data = await getPokemonlist(id);
    this.setState({ pokemonList: data });
  };

  IdCnageHandler = (e) => {
    this.setState({
      pokemonId: e.target.value,
    });
  };

  componentDidMount() {
    this.pokemonHandler(100);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.pokemonId === prevState.pokemonId) return;

    this.pokemonHandler(this.state.pokemonId);
  }

  render() {
    return (
      <>
        <Carousel pokemonList={this.state.pokemonList}></Carousel>
        <input
          type="number"
          value={this.state.pokemonId}
          onChange={this.IdCnageHandler}
        />
      </>
    );
  }
}

async function getPokemonlist(id) {
  const numberId = Number(id);
  const pokemonIdArr = Array(5)
    .fill()
    .map((_, i) => fetchPokemon(i + numberId));
  const data = await Promise.all(pokemonIdArr);

  return data;
}

async function fetchPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  const { sprites } = data;
  const { front_default } = sprites;
  return front_default;
}
