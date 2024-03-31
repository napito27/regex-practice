import useInputValidation from "../hooks/useInputValidation";

function PhoneValidation() {
  const regex = /^(\d{3})-?(\d{3})-?(\d{4})$/;
  const errorMessaje = "number";

  const {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  } = useInputValidation({ regex, errorMessaje });

  return (
    <>
      <div className='input-inner-cont'>
        <h4>Phone number validation</h4>
        <input
          type='text'
          name='phone'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='123-456-7890 or 1234567890'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default PhoneValidation;
