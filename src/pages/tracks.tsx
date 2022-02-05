import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";

/** TRACKS gql query to retreive all tracks */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

interface TracksComponentProps {
  path: string;
}

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = (_props: TracksComponentProps) => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid={undefined} fullWidth={false}>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: any, index: number) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
