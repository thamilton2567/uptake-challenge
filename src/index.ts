import Code from "../src/code";

let code = new Code();

document.getElementById("app").innerHTML = `
  <h1>Hello Candidate</h1>
  <div>
    <h2>
    The median of the two arrays is:
    </h2>
    ${code.findMedianOfTwoArrays([2, 3], [4, 5])} 
  </div>
`;
