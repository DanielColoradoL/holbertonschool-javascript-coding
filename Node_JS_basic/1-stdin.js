process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}`);
  }
  process.exit();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
