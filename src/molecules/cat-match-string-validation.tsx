import useInputValidation from "../hooks/useInputValidation";

function CatMatchStringValidation() {
  const regex = /cat[\w]+/i;
  const { inputValue, validInput, handleInputChange, handleInputValidation } =
    useInputValidation({ regex });

  const validationClassName = validInput ? "valid" : "invalid";

  return (
    <div className='card'>
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
