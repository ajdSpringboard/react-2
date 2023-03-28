const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 2x2 square correctly", function () {
    const square = [
      [1, 2],
      [4, 3],
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4]);
  });

  it("unrolls a 3x3 square correctly", function () {
    const square = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("unrolls a 4x4 square correctly", function () {
    const square = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    expect(unroll(square)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    ]);
  });

  it("unrolls a 5x5 square correctly", function () {
    const square = [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ];
    expect(unroll(square)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ]);
  });

  it("unrolls a square with one element correctly", function () {
    const square = [[42]];
    expect(unroll(square)).toEqual([42]);
  });

  it("unrolls an empty square correctly", function () {
    const square = [];
    expect(unroll(square)).toEqual([]);
  });
});
