const $btnStart = document.querySelector('#btn-start');
const $btnStop = document.querySelector('#btn-stop');
const $btnClear = document.querySelector('#btn-clear');
const $el = document.querySelector('#screen');
let stopwatchId;
let count = 0;

$btnStart.addEventListener('click', () => {
	stopwatchId = setInterval( () => {
		count++;
		$el.textContent = count;
	}, 1000 );

	$btnStart.disabled = true;
	$btnStop.disabled = false;
	$btnClear.disabled = true;
});

$btnStop.addEventListener('click', () => {
	clearInterval(stopwatchId);
    $btnStart.disabled = false;
	$btnStop.disabled = true;
	$btnClear.disabled = false;
});

$btnClear.addEventListener('click', () => {
    count = 0;
	$el.textContent = 0;
	$btnClear.disabled = true;
})