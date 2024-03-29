import React from "react";

import { toast } from "react-toastify";

interface InputValidationProps {
  regex: RegExp;
}

function useInputValidation({ regex }: InputValidationProps) {
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
      toast.error("The data you entered is not valid.", {
        pauseOnFocusLoss: false,
      });
    }

    setInputValue("");
    setValidInput(false);
  };

  return {
    inputValue,
    validInput,
    handleInputChange,
    handleInputValidation,
  };
}

export default useInputValidation;
