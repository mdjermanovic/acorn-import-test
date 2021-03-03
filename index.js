import * as acorn from "acorn";

console.log("static:", Object.keys(acorn));

import("acorn").then(a => console.log("dynamic:", Object.keys(a)));