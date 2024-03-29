import "isomorphic-unfetch";
import "@testing-library/jest-dom";
import dotenv from "dotenv";
import nock from "nock";

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});

dotenv.config({ path: ".env.test" });
window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();
