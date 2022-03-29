const form = document.querySelector(".form");
const input = document.querySelector(".input");
const firstName = document.querySelector(".first__name");
const lastName = document.querySelector(".last__name");
const userAge = document.querySelector(".user__age");
const category = document.querySelector(".select");



let i = 0;
function addTable() {
	let firstName = document.querySelector(".first__name").value;
	let lastName = document.querySelector(".last__name").value;
	let userAge = document.querySelector(".user__age").value;
	let category = document.querySelector(".select").value;
	i++;
	let table =
		"<tr><td>" +
		i +
		"</td><td>" +
		firstName +
		"</td><td>" +
		lastName +
		"</td><td>" +
		userAge +
		"</td><td>" +
		category +
		"</td></tr>";

	document.querySelector("#table").innerHTML += table;
}


form.addEventListener("submit", (e) => {
	e.preventDefault();

	input.value = null;
	lastName.value = null;
	userAge.value = null;
});


