process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (idata) => {
  const data = idata.toString().trim();
  console.log(`Your name is: ${data}`);
  console.log('This important software is now closing');
  process.exit();
});
