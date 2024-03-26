import React from "react";

const patterns = {
  emailRegex: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,8})?$/i,
  phone: /^(\d{3})-?(\d{3})-?(\d{4})?$/,
  letterMatch: /[a-zA-Z]{1,}/gim,
  catMatch: /cat[\w]+/gim,
  dateFormat: /^(\d{4})-(\d{2})-(\d{2})$/gim,
  stringWithDigits: /^(?=.*\d).+$/gim,
  specialCharaterString: /^.*[!@#$%^&*].*$/gim,
  alphanumericString: /^[a-zA-Z0-9]+$/gm,
  stringWithSpace: /(hello)\s+(world)/gim,
  sixLetterString: /^[a-z]{6}$/gim,
};

function PracticeWorksheet() {
  const [email, setEmail] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(false);

  const validateEmail = (email) => {
    // Regular expression for email validation
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test if the email matches the regex
    const isValidEmail = patterns.emailRegex.test(email);
    setValidEmail(validEmail);
  };

  const handleInputChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setValidEmail(newEmail);
  };

  return (
    <>
      <label htmlFor="email">Email </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleInputChange}
      />
      <p>Email must be a valid address, e.g. me@domain.com</p>

      <label htmlFor="phone">Phone </label>
      <input
        type="text"
        name="phone"
        id="phone"
      />
      <p>Telephone number must be 10 digits</p>
    </>
  );
}

export default PracticeWorksheet;
