import Alert from "./components/Alert";
import ButtonBoot from "./components/ButtonBoot";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hi <span>Test</span>
      </Alert>
      <ButtonBoot />
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
