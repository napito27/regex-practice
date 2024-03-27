import React from "react";
import { toast } from "react-toastify";

function PhoneValidation() {
  const [phone, setPhone] = React.useState("");
  const [validPhone, setValidPhone] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneRegex = /^(\d{3})-?(\d{3})-?(\d{4})$/;

    const phoneValue = e.target.value;

    setPhone(phoneValue);

    if (phoneRegex.test(phoneValue)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };

  const validatePhone = () => {
    if (phone === "") {
      toast.warning("Please enter your phone number", {
        pauseOnFocusLoss: false,
      });
    } else if (validPhone) {
      toast.success("Valid phone numer!!", {
        pauseOnFocusLoss: false,
      });
    } else if (!validPhone) {
      toast.error("The number you entered is not valid", {
        pauseOnFocusLoss: false,
      });
    }

    setPhone("");
    setValidPhone(false);
  };

  const validationClassName = validPhone ? "valid" : "invalid";

  return (
    <>
      <div className='card'>
        <h4>Phone number validation</h4>
        <input
          type='text'
          name='phone'
          placeholder='Phone number'
          value={phone}
          onChange={handleInputChange}
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={validatePhone}>Check</button>
      </div>
    </>
  );
}

export default PhoneValidation;
