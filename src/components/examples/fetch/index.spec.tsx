import { FetchExample } from "./index";
import "./mocks";

import { render, waitFor, screen } from "@test";

describe("Fetch testing with testing-library and nock", () => {
  it("renders the mock result", async () => {
    render(<FetchExample />);

    await waitFor(() => {
      expect(screen.getByTestId("main-domain")).toBeDefined();
    });
  });
});
