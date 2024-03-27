import React from "react";

const inputs = document.querySelectorAll("input");

const initialValues = {
  email: "",
  phone: "",
  letterMatch: "",
  catMatch: "",
  dateFormat: "",
  stringWithDigits: "",
  specialCharaterString: "",
  alphanumericString: "",
  stringWithSpace: "",
  sixLetterString: "",
};

function Patterns() {
  const [state, setState] = React.useState(initialValues);

  inputs.forEach((input) => {
    input.addEventListener("keyup", (e: any) => {
      const { name, value } = e.target;
      // const inputValue = e.target.value;
      console.log(name, value);

      // const inputName = e.target.getAttribute("name");
      // console.log(`Input name: ${inputName}`);
      // if (patterns.emailRegex.test(inputValue)) {
      //   console.log("Valid email:", inputValue);
      // }
      // if (patterns.letterMatch.test(inputValue)) {
      //   console.log("Contains letters:", inputValue);
      // }
      // Add more checks for other patterns as needed...
    });
  });

  return <div>Patterns</div>;
}

export default Patterns;

// const [state, setState] = React.useState({
//   userName: "",
//   age: ""
// })

// const handleChange = (evt) => {
//   const value = evt.target.value;
//   setState({
//     ...state,
//     [evt.target.name]: value
//   });
// }

// const patterns = {
//   emailRegex: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{3,})(\.[a-z]{2,8})?$/i,
//   phone: /^(\d{3})-?(\d{3})-?(\d{4})?$/,
//   letterMatch: /[a-zA-Z]{1,}/gim,
//   catMatch: /cat[\w]+/gim,
//   dateFormat: /^(\d{4})-(\d{2})-(\d{2})$/gim,
//   stringWithDigits: /^(?=.*\d).+$/gim,
//   specialCharaterString: /^.*[!@#$%^&*].*$/gim,
//   alphanumericString: /^[a-zA-Z0-9]+$/gm,
//   stringWithSpace: /(hello)\s+(world)/gim,
//   sixLetterString: /^[a-z]{6}$/gim,
// };

// inputs.forEach((input) => {
//   input.addEventListener("keyup", (e) => {
//     // console.log(e.target.attributes.name.value);
//   });
// });
