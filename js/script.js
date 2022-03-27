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

	let newObj = {
		id: list.length + 1,
		firstName: firstName.value,
		lastName: lastName.value,
		age: userAge.value,
		category: category.value,
	};
	list.push(newObj);
	render(list);

	let list;

if (localStorage.getItem("info")) {
	list = JSON.parse(localStorage.getItem("info"));
} else {
	list = [];
}

	localStorage.setItem("info", JSON.stringify(newObj));
	input.forEach((i) => (i.value = ""));
});
