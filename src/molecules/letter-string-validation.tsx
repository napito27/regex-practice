import useInputValidation from "../hooks/useInputValidation";

function LetterStringValidation() {
  const regex = /^[a-zA-Z]+$/;
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
        <h4>Letter string validation</h4>
        <input
          type='text'
          name='phone'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='any letter'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default LetterStringValidation;
