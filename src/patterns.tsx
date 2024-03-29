import React from "react";
import { toast } from "react-toastify";

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

const patterns = {
  email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{3,})(\.[a-z]{2,8})?$/i,
  phone: /^(\d{3})-?(\d{3})-?(\d{4})$/,
  letterMatch: /[a-zA-Z]{1,}/gim,
  catMatch: /cat[\w]+/gim,
  dateFormat: /^(\d{4})-(\d{2})-(\d{2})$/gim,
  stringWithDigits: /^(?=.*\d).+$/gim,
  specialCharaterString: /^.*[!@#$%^&*].*$/gim,
  alphanumericString: /^[a-zA-Z0-9]+$/gm,
  stringWithSpace: /(hello)\s+(world)/gim,
  sixLetterString: /^[a-z]{6}$/gim,
};

function Patterns() {
  const [values, setValues] = React.useState(initialValues);
  const [validInput, setValidInput] = React.useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name in patterns) {
      let inputRegex = patterns[name as keyof typeof patterns];

      if (inputRegex.test(value)) {
        setValidInput(true);
      } else {
        setValidInput(false);
      }
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleInputValidation = (e: any) => {
    const { name, value } = e.target;

    // if (name.value === undefined) {
    //   toast.warning("Field can't be empty.", {
    //     pauseOnFocusLoss: false,
    //   });
    // } else if (validInput) {
    if (validInput) {
      toast.success("Data enter is valid!!", {
        pauseOnFocusLoss: false,
      });
    } else if (!validInput) {
      toast.error("The information entered is not valid", {
        pauseOnFocusLoss: false,
      });
    }

    setValues(initialValues);

    console.log({
      ...values,
      [name]: "",
    });

    setValidInput(false);
  };

  const validationClassName = validInput ? "valid" : "invalid";

  return (
    <div className='card input-inner-cont'>
      <div className='input-inner-cont '>
        <p>Email validation</p>
        <input
          type='email'
          name='email'
          id='email'
          value={values.email}
          onChange={handleInputChange}
          placeholder='example@email.com'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Phone validation</p>
        <input
          type='text'
          name='phone'
          id='phone'
          onChange={handleInputChange}
          placeholder='123-456-7890'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Letter match string validation</p>
        <input
          type='text'
          name='letterMatch'
          id='letterMatch'
          value={values.letterMatch}
          onChange={handleInputChange}
          placeholder='Hello World'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Cat match string valiadation</p>
        <input
          type='text'
          name='catMatch'
          id='catMatch'
          value={values.catMatch}
          onChange={handleInputChange}
          placeholder='cathello'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Date format validation</p>
        <input
          type='text'
          name='dateFormat'
          id='dateFormat'
          value={values.dateFormat}
          onChange={handleInputChange}
          placeholder='2024-03-28'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>String with digits validation</p>
        <input
          type='text'
          name='stringWithDigits'
          id='stringWithDigits'
          value={values.stringWithDigits}
          onChange={handleInputChange}
          placeholder='Hello123'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Special character string validation</p>
        <input
          type='text'
          name='specialCharaterString'
          id='specialCharaterString'
          value={values.specialCharaterString}
          onChange={handleInputChange}
          placeholder='Regex%^&*Test'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Alphanumeric string validation</p>
        <input
          type='text'
          name='alphanumericString'
          id='alphanumericString'
          value={values.alphanumericString}
          onChange={handleInputChange}
          placeholder='Hello123World'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>String with space validation</p>
        <input
          type='text'
          name='stringWithSpace'
          id='stringWithSpace'
          value={values.stringWithSpace}
          onChange={handleInputChange}
          placeholder='hello         world'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
      <div className='input-inner-cont'>
        <p>Six letter string validation</p>
        <input
          type='text'
          name='sixLetterString'
          id='sixLetterString'
          value={values.sixLetterString}
          onChange={handleInputChange}
          placeholder='Python'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </div>
  );
}

export default Patterns;
