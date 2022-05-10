var user = document.getElementById("sname");
var pass = document.getElementById("pass");
var button = document.getElementById("submit");
//modal
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

const handleLogin = function () {
	if (getId() && getPass()) {
		window.location.href = "profile.html";
	} else {
		$("#exampleModal").modal("toggle");
	}
};

//guest guest123
button.addEventListener("click", handleLogin);

// Detect pressing enter when input is focused
user.addEventListener("keypress", function onEvent(event) {
	if (event.key === "Enter") {
		handleLogin();
		return;
	}
});

// Detect pressing enter when input is focused
pass.addEventListener("keypress", function onEvent(event) {
	if (event.key === "Enter") {
		handleLogin();
		return;
	}
});

function getId() {
	return user.value == "guest";
}

function getPass() {
	return pass.value == "guest123";
}
