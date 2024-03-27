import React from "react";

import PracticeWorksheet from "./pages/practice-worksheet";
import ToastManager from "./atoms/toast-manager";

import "react-toastify/dist/ReactToastify.css";
import PhoneValidation from "./molecules/phone-validation";

function App() {
  return (
    <div>
      <ToastManager />
      <PracticeWorksheet />
      <PhoneValidation />
    </div>
  );
}

export default App;
