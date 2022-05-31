/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button, Grid, Card, CardMedia, CardContent, } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";
import axios from "axios";
import { mergeClasses } from "@material-ui/styles";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const { front_default } = sprites;
    return (
      <>
      
        <Card align="center">
          <Typography variant="h4"> {`${id}.`} {toFirstCharUppercase(name)}</Typography>

          <CardMedia width="150px" 
          className={mergeClasses.cardMedia}
          image={front_default} 
          style={{ width: "150px", height: "150px" }} 
          />
          <CardContent className={mergeClasses.CardContent}>
        <Typography variant="h5">Pokémon Info :</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <Typography>Height : {height} </Typography>
        <Typography>Weight : {weight} </Typography>
        <Typography variant="h5"> Types :</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
        </CardContent>
        </Card>
        <br />
      </>
    );
  };

  return (
    <>
    
    <Grid align="center">
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}

      {pokemon !== undefined && (
        <Button align="center" variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
      </Grid>
    </>
  );
};

export default Pokemon;
