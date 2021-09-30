const StreamArray = require('stream-json/streamers/StreamArray');
const fs = require('fs');
const jsonStream = StreamArray.withParser();

fs.createReadStream('./input.json').pipe(jsonStream.input);
const pipeline = fs
  .createReadStream('input.json')
  .pipe(StreamArray.withParser());
let dataf;
pipeline.on('data', (data) => {
  dataf = Object.entries(data).map(([id, name]) => ({ id, name }));
  console.log('id : ', dataf[1].name['id'], ' name: ', dataf[1].name['name']);
});
