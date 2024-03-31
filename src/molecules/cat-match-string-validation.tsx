import useInputValidation from "../hooks/useInputValidation";

function CatMatchStringValidation() {
  const regex = /^cat[\w]+$/i;
  const errorMessaje = "word";

  const {
    inputValue,
    handleInputChange,
    handleInputValidation,
    validationClassName,
  } = useInputValidation({ regex, errorMessaje });

  return (
    <div className='input-inner-cont'>
      <h4>Cat string validation</h4>
      <input
        type='text'
        name='cat string match'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='example ->  cathello'
        className={`input-validation ${validationClassName}`}
      />
      <button onClick={handleInputValidation}>Check</button>
    </div>
  );
}

export default CatMatchStringValidation;
