import Alert from "./components/Alert";
import ButtonBoot from "./components/ButtonBoot";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert((prevShowAlert) => !prevShowAlert);
  };
  return (
    <div>
      {showAlert && (
        <Alert>
          Hi <span>Test</span>
        </Alert>
      )}
      {/* <ButtonBoot /> */}
      <Button color="primary" onClick={handleShowAlert}>
        Click
      </Button>
    </div>
  );
}

export default App;
