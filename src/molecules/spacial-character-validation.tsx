import useInputValidation from "../hooks/useInputValidation";

function SpecialCharaterStringValidation() {
  const regex = /^.*[!@#$%^&*].*$/;
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
        <h4>Special character string validation</h4>
        <input
          type='text'
          name='specialCharacter'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='hello!world'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default SpecialCharaterStringValidation;
