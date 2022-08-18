
import { createReadStream, ReadStream } from 'fs';

var readStream: ReadStream = createReadStream('./data.txt');

readStream.on('data', chunk => {
    console.log('---------------------------------');
    console.log(chunk);
    console.log('---------------------------------');
});

readStream.on('open', () => {
    console.log('Stream opened...');
});

readStream.on('end', () => {
    console.log('Stream Closed...');
});