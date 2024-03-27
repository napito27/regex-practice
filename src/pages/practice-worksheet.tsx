import React from "react";
import { toast } from "react-toastify";

// const inputs = document.querySelectorAll("input");

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

function PracticeWorksheet() {
  const [email, setEmail] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /^([^\s!@#$%^&*]+)@([a-z0-9]+)\.([a-z]{3,})(\.[a-z]{2,8})?$/i;
    const emailValue = e.target.value;

    setEmail(emailValue);

    if (emailRegex.test(emailValue)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const validateEmail = () => {
    if (email === "") {
      toast.warning("Please enter your email", {
        pauseOnFocusLoss: false,
      });
    } else if (validEmail) {
      toast.success("Valid email!!", {
        pauseOnFocusLoss: false,
      });
    } else if (!validEmail) {
      toast.error("The email you entered is not valid", {
        pauseOnFocusLoss: false,
      });
    }

    setEmail("");
    setValidEmail(false);
  };

  const validationClassName = validEmail ? "valid" : "invalid";

  return (
    <>
      <div className="card">
        <h4>Email validation</h4>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleInputChange}
          className={`email-input ${validationClassName}`}
        />
        <button onClick={validateEmail}>Check</button>
      </div>
    </>
  );
}

export default PracticeWorksheet;
