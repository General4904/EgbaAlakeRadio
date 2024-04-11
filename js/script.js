let clock = document.getElementById("time");

setInterval(() => {
	let x = new Date();

	clock.innerHTML = x.toLocaleDateString() + "  |  " + x.toLocaleTimeString();
}, 1000);

//<small> &copy; 2022 - v2.3.0 </small>

let version = document.getElementById("copy");

version.innerHTML = "<small> &copy; 2022 - v2.5.0 </small>";
