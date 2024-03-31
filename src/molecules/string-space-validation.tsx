import useInputValidation from "../hooks/useInputValidation";

function StringWithSpaceValidation() {
  const regex = /(hello)\s+(world)/;
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
        <h4>String with space validation</h4>
        <input
          type='text'
          name='sringWithSpace'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='hello   world'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default StringWithSpaceValidation;
