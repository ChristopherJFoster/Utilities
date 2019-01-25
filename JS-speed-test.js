function loop1() {
  var count = 0;
  function addOne() {
    count = count + 1;
  }

  // Date.now() returns a big number representing the number of
  // milliseconds that have elapsed since Jan 01 1970
  var now = Date.now();

  // Loop until Date.now() is 1000 milliseconds (1 second) or more into
  // the future from when we started looping. On each loop, call addOne
  while (Date.now() - now < 1000) addOne();

  // Finally it has been >= 1000ms, so let's print out our total count
  return count;
}

function loop2() {
  var count = 0;
  function addOne() {
    count += 1;
  }
  var now = Date.now();
  while (Date.now() - now < 1000) addOne();
  return count;
}

function speedTester(func1, func2, laps) {
  let plural = "laps";
  if (laps === 1) {
    plural = "lap";
  }
  let score1 = 0;
  let score2 = 0;
  for (i = 0; i < laps; i++) {
    score1 += func1();
    score2 += func2();
  }
  console.log(`${func1.name}: ${score1}`);
  console.log(`${func2.name}: ${score2}`);
  const finalScore = Math.abs(((score1 / score2 - 1) * 100).toFixed(2));
  if (score1 > score2) {
    console.log(
      `After ${laps} ${plural}, ${func1.name} was faster than ${
        func2.name
      } by ${finalScore}%.`
    );
  } else {
    console.log(
      `After ${laps} ${plural}, ${func2.name} was faster than ${
        func1.name
      } by ${finalScore}%.`
    );
  }
}

speedTester(loop1, loop2, 10);
