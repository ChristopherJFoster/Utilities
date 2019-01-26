// Use pause() to insert hard pauses into Javascript. The rest of your JS will not run unil the pause() is complete.

const pause = seconds => {
  let now = Date.now();
  while (Date.now() - now < seconds * 1000);
};

pause(1);
console.log(`\nHere...\n`);
pause(2);
console.log(`...be...\n`);
pause(3);
console.log(`...pauses!`);
pause(1);
