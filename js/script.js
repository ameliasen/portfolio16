function validateForm() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");
    const usernameError = document.getElementById("username-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (!/^[A-Za-z]\w{5,29}$/.test(username)) {
        usernameError.textContent = "Please enter a valid username (letters and numbers, 6-30 characters).";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent = "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}



document.addEventListener('DOMContentLoaded',
	function () {
		const navItems = document
			.querySelectorAll('.nav-item');

		navItems.forEach(item => {
			item.addEventListener('click',
				function () {
					navItems.forEach(navItem => navItem
						.classList.remove('active'));
					this.classList.add('active');
				});
		});
	});
