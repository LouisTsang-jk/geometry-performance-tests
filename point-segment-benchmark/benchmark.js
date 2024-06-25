import { performance } from "perf_hooks";
import { vectorCrossProduct } from "./vectorCrossProduct.js";
import { lineEquation } from "./lineEquation.js";

const testPoints = [];
for (let i = 0; i < 10000000; i++) {
  testPoints.push({
    p0: { x: Math.random() * 10, y: Math.random() * 10 },
    p1: { x: Math.random() * 10, y: Math.random() * 10 },
    p2: { x: Math.random() * 10, y: Math.random() * 10 },
  });
}

const warmUp = (fn) => {
  for (const { p0, p1, p2 } of testPoints.slice(0, 1000)) {
    fn(p0, p1, p2);
  }
};

const runBenchmark = (fn, name) => {
  const start = performance.now();
  for (const { p0, p1, p2 } of testPoints) {
    fn(p0, p1, p2);
  }
  const end = performance.now();
  console.log(`${name} took ${end - start} ms`);
};

console.log("Warming up...");
warmUp(vectorCrossProduct);
warmUp(lineEquation);
console.log("Warm up done.");

runBenchmark(vectorCrossProduct, "Vector Cross Product Method");
runBenchmark(lineEquation, "Line Equation Method");
