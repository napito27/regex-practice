import ToastManager from "./atoms/toast-manager";

import Patterns from "./patterns";
import {
  CatMatchStringValidation,
  EmailValidation,
  LetterStringValidation,
  PhoneValidation,
} from "./molecules";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastManager />
      <EmailValidation />
      <PhoneValidation />
      <LetterStringValidation />
      <CatMatchStringValidation />
      {/* <Patterns /> */}
    </div>
  );
}

export default App;
