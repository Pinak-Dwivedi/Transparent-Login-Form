class LoginForm {
  form = document.querySelector("[data-form]");
  emailInput = document.querySelector("[data-form-email-input]");
  passwordInput = document.querySelector("[data-form-password-input]");
  loginButton = document.querySelector("[data-form-button]");
  emailError = document.querySelector("[data-email-error]");
  passwordError = document.querySelector("[data-password-error]");

  constructor() {
    this.form.addEventListener("submit", (e) => this.submit.call(this, e));
  }

  submit(e) {
    e.preventDefault();

    this.validate(new FormData(this.form));
  }

  validate(formData) {
    const email = formData.get("email")?.trim();
    const password = formData.get("password")?.trim();
    const errorObj = {};

    this.emailError.textContent = "";
    this.passwordError.textContent = "";
    this.emailInput.style.borderColor = "white";
    this.passwordInput.style.borderColor = "white";

    // email

    // For example, in the address
    // example@mail.com
    // "example" is the email prefix
    // "mail.com" is the email domain

    const validEmailRegex = /^[a-zA-Z0-9]+[._-]*@[a-zA-Z0-9]+[-]*.\w{2,3}$/i;

    // email prefix rule :---
    // Allowed characters: letters (a-z), numbers, underscores periods, and dashes.
    // An underscore, period, or dash must be followed by one or more letter or number.

    // email domain rule :---
    // Allowed characters: letters, numbers, dashes.
    // The last portion of the domain must be at least two characters, for example: .com, .org, .cc

    if (email == null) {
      this.emailError.textContent = "Something went wrong.";
      errorObj.email = true;
    } else if (!validEmailRegex.test(email)) {
      this.emailError.textContent = "please enter a valid email.";
      errorObj.email = true;
    }

    // password

    const validPasswordRegex = /^\S{8,}$/i;

    // password should be at least 8 non-space characters

    if (!validPasswordRegex.test(password)) {
      this.passwordError.textContent =
        "password must be at least 8 non-white-space characters.";
      errorObj.password = true;
    }

    if (errorObj.email) {
      this.emailInput.style.borderColor = "tomato";
    } else {
      this.emailInput.style.borderColor = "green";
    }

    if (errorObj.password) {
      this.passwordInput.style.borderColor = "tomato";
    } else {
      this.passwordInput.style.borderColor = "green";
    }
  }
}

const loginForm = new LoginForm();
