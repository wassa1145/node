const readline = require('readline');
const colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arrColors =['green', 'yellow', 'red'];

const outputPrimeNumbers = () => {
	rl.question('Укажите диапазон: ', (answer) => {
		const range = answer.split(' ');
		if (answer === 'exit') rl.close();
		else if (range.length !== 2 || isNaN(Number(range[0])) || isNaN(Number(range[1]))) {
			console.log('Вы ввели некорректный диапазон');
			outputPrimeNumbers();
		} else {
			printNumbers(getPrimeNumbers(Number(range[0]), Number(range[1])));
			rl.close();
		}
	});
}

const isSimple = (n) => {
	if (n === 1 || n === 0) {
		return false;
	} else {
		for(let i = 2; i < n; i++) {
			if(n % i === 0) {
				return false;
			}
		}
		return true;  
	}
}

const getPrimeNumbers = (a, b) => {
	const arrNumbers = [];
	for (let i = a; i <= b; i++) {
		if (isSimple(i)) arrNumbers.push(i)
	}
	return arrNumbers;
}

const printNumbers = (arr) => {
	if (!arr.length) console.log(colors.red('Нет простых чисел в указанном диапазоне'));
	else {
		arr.forEach((number, index) => {
			console.log(colors[arrColors[index % 3]](number));
		});
	}
}
outputPrimeNumbers();
