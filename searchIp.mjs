import fs from 'fs'
import readline from "readline";

const readStream = fs.createReadStream('./access.log');
const writeStream1 = fs.createWriteStream('./89.123.1.41_requests.log', 'utf8');
const writeStream2 = fs.createWriteStream('./34.48.240.111_requests.log', 'utf8');

const rl = readline.createInterface({
	input: readStream,
	terminal: true,
})
readStream.on('open', () => console.log('Пожалуйста, подождите...'));
rl.on('line', (line) => {
	if (line.includes('89.123.1.41')) {
		writeStream1.write(line + '\n');
	}
	if (line.includes('34.48.240.111')) {
		writeStream2.write(line + '\n');
	}
});
readStream.on('end', () => console.log('Чтение файла завершено!'));
	