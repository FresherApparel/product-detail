// id, prod_id, 'feature', 'value'
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./photos.csv'),
  output: process.stdout,
  terminal: false,
});

const photos = {};
let i = 0;
rl.on('line', (line) => {
  i++;
  const words = line.split(',');
  const url = words[2];
  const thumb = words[3];

  if (!(url in photos)) {
    photos[url] = thumb;
  }

  if (i === 11) {
    console.log(photos);
  }
});
