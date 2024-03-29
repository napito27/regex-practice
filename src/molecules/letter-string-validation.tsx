import React from "react";
import { toast } from "react-toastify";

function LetterStringValidation() {
  const [letterString, setLetterString] = React.useState<string>("");
  const [validInput, setValidInput] = React.useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letterMatch = /^[a-zA-Z]+$/;

    const inputValue = e.target.value;

    setLetterString(inputValue);

    if (letterMatch.test(inputValue)) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const handleInputValidation = () => {
    if (letterString === "") {
      toast.warning("Field cannot be empty!", {
        pauseOnFocusLoss: false,
      });
    } else if (validInput) {
      toast.success("Success!!", {
        pauseOnFocusLoss: false,
      });
    } else if (!validInput) {
      toast.error("The data you entered is not valid.", {
        pauseOnFocusLoss: false,
      });
    }

    setLetterString("");
    setValidInput(false);
  };

  const validationClassName = validInput ? "valid" : "invalid";

  return (
    <>
      <div className='card'>
        <h4>Letter string validation</h4>
        <input
          type='text'
          name='phone'
          value={letterString}
          onChange={handleInputChange}
          placeholder='Hello World'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default LetterStringValidation;
