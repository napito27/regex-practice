import React from "react";

import { toast } from "react-toastify";

interface InputValidationProps {
  regex: RegExp;
  errorMessaje: string;
}

function useInputValidation({ regex, errorMessaje }: InputValidationProps) {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [validInput, setValidInput] = React.useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regularExpresion = regex;
    const newInputValue = e.target.value;

    if (inputValue !== undefined) {
      setInputValue(newInputValue);

      if (regularExpresion.test(newInputValue)) {
        setValidInput(true);
      } else {
        setValidInput(false);
      }
    }
  };

  const handleInputValidation = () => {
    if (inputValue === "") {
      toast.warning("Field cannot be empty!", {
        pauseOnFocusLoss: false,
      });
    } else if (validInput) {
      toast.success("Success!!", {
        pauseOnFocusLoss: false,
      });
    } else if (!validInput) {
      toast.error(`The ${errorMessaje} you entered is not valid.`, {
        pauseOnFocusLoss: false,
      });
    }

    setInputValue("");
    setValidInput(false);
  };

  const validationClassName = validInput ? "valid" : "invalid";

  return {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  };
}

export default useInputValidation;
