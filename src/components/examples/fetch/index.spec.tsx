import { FetchExample } from "./index";
import "./mocks";
import { mockResponse } from "./mocks";

import { render, waitFor } from "@test";

describe("Fetch testing with testing-library and nock", () => {
  it("renders the mock result", async () => {
    const { getByText, getByTestId } = render(<FetchExample />);

    await waitFor(() => {
      expect(getByTestId("main-domain")).toBeDefined();
      expect(getByText(mockResponse.domain)).toBeDefined();
    });
  });
});
