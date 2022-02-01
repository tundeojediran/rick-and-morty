import { CardContent, Avatar, Card, Chip } from "@mui/material";
import React, { Component } from "react";
import RickMortyService from "../services/RickMortyService";
import RickMortyUtils from "../utils/RickMortyUtils";

class Character extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      locationDetails: null,
      originDetails: null,
      episodes: []
    };
  }

  componentDidMount() {
    this.fetchCharacterData();
  }

  fetchCharacterData = async () => {
    const { location, origin, episode } = this.props.data;
    const locationDetails = await RickMortyService.fetchLocationDetails(
      location.url
    );
    const originDetails = await RickMortyService.fetchLocationDetails(
      origin.url
    );

    const episodes = await RickMortyService.fetchEpisodesDetails(
      RickMortyUtils.getIdsfromUrls(episode)
    );

    this.setState({ locationDetails, originDetails, episodes });
  };

  render() {
    const { data } = this.props;
    const { locationDetails, originDetails, episodes } = this.state;

    return (
      <>
        <Card variant="outlined">
          <CardContent>
            <Avatar
              alt={data.name}
              src={data.image}
              sx={{ width: 56, height: 56 }}
            />
            <h1>{data.name}</h1>
            <p>{data.species}</p>
            <p>{data.gender}</p>
            <p>{data.status}</p>
            <hr />
            <h3>Origin</h3>
            {originDetails && (
              <>
                <p>{data.origin.name}</p>
                <p>{`${originDetails.residents.length} residents`}</p>
                <p>{`Dimension : ${originDetails.dimension}`}</p>
              </>
            )}
            <hr />
            <h3>Location</h3>
            {locationDetails && (
              <>
                <p>{locationDetails.name}</p>
                <p>{`${locationDetails.residents.length} residents`}</p>
                <p>{`Dimension : ${originDetails.dimension}`}</p>
              </>
            )}
            <hr />
            <h3>Episodes appeared in</h3>
            {episodes.length > 0 &&
              episodes.map((episode: any) => {
                return (
                  <Chip
                    key={episode.id}
                    label={episode.name}
                    variant="outlined"
                  />
                );
              })}
          </CardContent>
        </Card>
      </>
    );
  }
}

export default Character;
