import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

/** GET_TRACK gql query to retrieve a specific track by its ID */
export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

interface TrackProps {
  path: string;
  trackId?: string;
}

/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
const Track = ({ trackId }: TrackProps) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });

  return (
    <Layout fullWidth={false} grid={undefined}>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
