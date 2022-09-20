class Code {
  public findMedianOfTwoArrays(nums1: number[], nums2: number[]): number {
    //combine the arr && sort
    let nums3 = [...nums1, ...nums2].sort((a: number, b: number) => a - b);

    const m = nums3.length >> 1;

    // get median
    return nums3.length & 1 ? nums3[m] : (nums3[m] + nums3[m - 1]) / 2;
  }
}

export default Code;
