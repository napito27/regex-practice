import useInputValidation from "../hooks/useInputValidation";

function EmailValidation() {
  const regex = /^([^\s!@#$%^&*]+)@([a-z0-9]+)\.([a-z]{3,})(\.[a-z]{2,8})?$/i;
  const errorMessaje = "email";

  const {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  } = useInputValidation({ regex, errorMessaje });

  return (
    <>
      <div className='input-inner-cont'>
        <h4>Email validation</h4>
        <input
          type='email'
          name='email'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='example@email.com'
          className={`input-validation ${validationClassName}`}
        />
        <button onClick={handleInputValidation}>Check</button>
      </div>
    </>
  );
}

export default EmailValidation;
