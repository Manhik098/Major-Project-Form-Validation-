document.getElementById("signupForm")
document.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  });

function validateName() {
  let name = document.getElementById("name").value;
  let error = document.getElementById("nameError");
  if (name.length < 5) {
    error.textContent = "Name must be at least 5 characters.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;
  let error = document.getElementById("emailError");
  if (!email.includes("@")) {
    error.textContent = "Enter a valid email.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value;
  let error = document.getElementById("phoneError");
  if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
    error.textContent = "Enter a valid 10-digit phone number.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validatePassword() {
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let error = document.getElementById("passwordError");
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password === name
  ) {
    error.textContent =
      "Password must be at least 8 characters and not 'password' or your name.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let error = document.getElementById("confirmPasswordError");
  if (confirmPassword !== password) {
    error.textContent = "Passwords do not match.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateForm() {
  return (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validatePassword() &&
    validateConfirmPassword()
  );
}
