const socket = io();

function main() {
	const p1 = document.querySelector('.player1Btn');
	p1.addEventListener('click', () => {
		socket.emit('button clicked', {player: '.player1', distance: p1.style.left});
	});
	const p2 = document.querySelector('.player1Btn');
	document.querySelector('.player2Btn').addEventListener('click', () => {
		socket.emit('button clicked', {player: '.player2', distance: p2.style.left});
	});
	socket.on('move', data => {
		console.log(data.player);
		let div = document.querySelector(data.player);
		div.id = data.id;
		const pos = div.style.left;
        div.style.left = +pos.slice(0,pos.length-2) + 5 +"px";
	});
}
document.addEventListener("DOMContentLoaded", main);
