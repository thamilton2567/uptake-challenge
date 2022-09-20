import Code from "../src/code";

test("Tests the test", () => {
  const Utils = new Code();
  it("test", () => {
    expect(Utils.findMedianOfTwoArrays([1, 2], [3, 4])).toEqual(2.5);
    expect(Utils.findMedianOfTwoArrays([1, 2, 3], [4, 5])).toEqual(3);
  });
});
