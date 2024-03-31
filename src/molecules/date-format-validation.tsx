import useInputValidation from "../hooks/useInputValidation";

function DateFormatValidation() {
  const regex = /^(\d{4})-([0-1][0-9])-([0-3][0-9])$/i;
  const errorMessaje = "date";

  const {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  } = useInputValidation({ regex, errorMessaje });

  return (
    <>
      <div className='input-inner-cont'>
        <h4>Date format validation</h4>
        <input
          type='text'
          name='date'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='2024-03-27'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default DateFormatValidation;
