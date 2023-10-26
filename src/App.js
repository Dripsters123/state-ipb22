import Counter from "./Counter";
import Check from "./Check";
import Hello from "./Hello";
import LabelCheck from "./LabelCheck";

function App() {
  const ratios = [7, 43, 101];
  const ratiosJSX = ratios.map((theRatios, indexx) => {
    return <Counter defaultRatios={theRatios} key={indexx} />;
  });

  const vardi = ["Kristapus", "Mini P.E.K.K.A", "Ositis"];
  const vardiJSX = vardi.map((theName, index) => {
    return <Hello defaultName={theName} key={index} />;
  });
  const check = [true, true, false];
  const checkJSX = check.map((theCheck, indexxx) => {
    return <Check checkValue={theCheck} key={indexxx} />;
  });
  const labelInputs = [
    { label: "Agree to the Policy", checked: true },
    { label: "Receive Offers", checked: false },
  ];
  const labelCheckJSX = labelInputs.map((lableInput, index) => {
    return (
      <LabelCheck
        key={index}
        label={lableInput.label}
        checked={lableInput.checked}
      />
    );
  });

  return (
    <div>
      {ratiosJSX}
      {vardiJSX}
      {checkJSX}
      {labelCheckJSX}
    </div>
  );
}

export default App;
