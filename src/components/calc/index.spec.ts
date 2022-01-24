import sum from ".";

describe("calc functionality", () => {
  it("should sum to 12 on addng 5 and 7", () => {
    expect(sum(5, 7)).toBe(12);
  });
});
