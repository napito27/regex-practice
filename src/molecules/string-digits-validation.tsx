import useInputValidation from "../hooks/useInputValidation";

function StringDigitsValidation() {
  const regex = /^\w*\d\w*$/;
  const errorMessaje = "phrase";

  const {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  } = useInputValidation({ regex, errorMessaje });

  return (
    <>
      <div className='input-inner-cont'>
        <h4>String with digits validation</h4>
        <input
          type='text'
          name='stringDigits'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Hello123'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default StringDigitsValidation;
