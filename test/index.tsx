import React, { ReactElement } from "react";
import { render as baseRender, RenderOptions } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../src/redux/store";

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <Provider store={store}>{children}</Provider>;
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, {
    wrapper: AllTheProviders as React.ComponentType,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
