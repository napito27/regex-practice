import ToastManager from "./atoms/toast-manager";

// import Patterns from "./patterns";
import {
  AlphanumericStringValidation,
  CatMatchStringValidation,
  DateFormatValidation,
  EmailValidation,
  LetterStringValidation,
  PhoneValidation,
  SixLetterStringValidation,
  SpecialCharaterStringValidation,
  StringDigitsValidation,
  StringWithSpaceValidation,
} from "./molecules";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastManager />
      <h1>Regex Validations</h1>
      <EmailValidation />
      <PhoneValidation />
      <LetterStringValidation />
      <CatMatchStringValidation />
      <DateFormatValidation />
      <StringDigitsValidation />
      <SpecialCharaterStringValidation />
      <AlphanumericStringValidation />
      <StringWithSpaceValidation />
      <SixLetterStringValidation />
      {/* <Patterns /> */}
    </div>
  );
}

export default App;
