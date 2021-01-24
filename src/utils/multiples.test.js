import multiples from './multiples';

describe("is mutliple numbers until given limit", () => {
  it("should find multiples of 2 until 6", () => {
    expect(multiples(2, 6)).toEqual([2, 4, 6]);
  });
  it("should find multiples of 8 until 72", () => {
    expect(multiples(8, 72)).toEqual([8, 16, 24, 32, 40, 48, 56, 64, 72]);
  });
  it("should find multiples of 90 until 144", () => {
    expect(multiples(90, 144)).toEqual([90]);
  });
  it("should find multiples of 20 until 144", () => {
    expect(multiples(20, 144)).toEqual([20, 40, 60, 80, 100, 120, 140]);
  });
});
