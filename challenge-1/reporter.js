class SimpleReporter {
  onRunComplete(_, results) {
    const passed = results.numPassedTests;
    const total = results.numTotalTests;
    const fs = require("fs");
    fs.writeFileSync("test-summary.txt", `${passed}/${total}\n`);
  }
}

module.exports = SimpleReporter;
