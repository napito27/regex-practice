import useInputValidation from "../hooks/useInputValidation";

function AlphanumericStringValidation() {
  const regex = /^[a-zA-Z0-9]+$/;
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
        <h4>Alphanumeric string validation</h4>
        <input
          type='text'
          name='alphanumeric'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='alphanumeric only'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default AlphanumericStringValidation;
