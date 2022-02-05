import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";

const renderApollo = (
  node: any,
  { mocks, addTypename, defaultOptions, cache, resolvers, ...options }: any
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
      // removeTypename
    >
      {node}
    </MockedProvider>,
    options
  );
};

export * from "@testing-library/react";
export { renderApollo };
