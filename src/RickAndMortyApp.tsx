import { Grid } from "@mui/material";
import React, { Component } from "react";
import "./App.css";
import OutlinedCard from "./components/OutlinedCard";
import styled from "@emotion/styled";
import Character from "./components/Character";
import RickMortyService from "./services/RickMortyService";

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 64px);
    flex-direction: column;
    padding: 24px;
    background-color: #ededed;
  }
`;

interface AppProps {}

interface AppState {
  characters: any[];
}

class RickAndMortyApp extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await RickMortyService.fetchCharacters();
    this.setState({ characters: data.results });
  };

  render() {
    const { characters } = this.state;

    return (
      <>
        <Wrapper>
          <Grid container spacing={2}>
            {characters.length > 0 &&
              characters.map((character) => {
                return (
                  <Grid key={character.id} item xs={12} md={6}>
                    <Character data={character} />
                  </Grid>
                );
              })}
          </Grid>
        </Wrapper>
      </>
    );
  }
}

export default RickAndMortyApp;
