console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (idata) => {
  const data = idata.toString().trim();
  process.stdout.write(`Your name is: ${data}\n`);
  console.log('This important software is now closing');
  process.exit();
});
