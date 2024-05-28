process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (idata) => {
  const data = idata.toString().trim();
  process.stdout.write(`Your name is: ${data}\n`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
