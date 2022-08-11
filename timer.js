const moment = require('moment');
const EventEmitter = require('events')
const emitter = new EventEmitter();
const [dateString] = process.argv.slice(2);
let date = moment(dateString, 'HH-DD-MM-YYYY');

const setTime = () => {
	const dateNow = moment().format();
	const diff = date.diff(dateNow);
	if (diff < 0) emitter.emit('stopTimer');
	else {
		console.clear();
		const a = moment.duration(diff);

		console.log(`${a.days()} дней ${a.hours()}:${a.minutes()}:${a.seconds()} `);
	}
}
const stopTimer = (timer) => {
	console.log('Время вышло!');
	clearInterval(timer);
}

if (!date.isValid()) {
	console.log('Ошибка! Введенные данные некорректны!');
} else {
	const timer = setInterval(() => {
		emitter.emit('timer');
	}, 1000);

	emitter.on('timer', setTime);
	emitter.on('stopTimer', () => {
		stopTimer(timer);
	})
}