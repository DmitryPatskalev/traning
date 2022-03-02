import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Text />
      <Button />
    </div>
  );
}

const Text = () => {
  return (
    <>
      <p>Hello</p>
      <p>Dima</p>
    </>
  );
};

const Button = () => {
  let showMe = () => {
    let i = 1;
    let count = setInterval(() => {
      console.log(i++);
      if (i > 5) {
        clearInterval(count);
      }
    }, 1000);
  };
  return <button onClick={showMe}>Click</button>;
};

export default App;
