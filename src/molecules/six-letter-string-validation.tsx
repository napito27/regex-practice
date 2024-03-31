import useInputValidation from "../hooks/useInputValidation";

function SixLetterStringValidation() {
  const regex = /^[a-z]{6}$/;
  const errorMessaje = "word";

  const {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  } = useInputValidation({ regex, errorMessaje });

  return (
    <>
      <div className='input-inner-cont'>
        <h4>Six letter string validation</h4>
        <input
          type='text'
          name='sixLetterString'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='banana'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default SixLetterStringValidation;
