export default function Characteristic() {
  let list = [
    {
      OS: "OS: ",
      Screen: "Screen: ",
      Processor: "Processor:",
      Storage: "Storage:",
      Battery: "Battery:",
    },
  ];

  let result = list.map((elem) => {
    return (
      <div>
        <p>{elem.OS}</p>
        <p>{elem.Screen}</p>
        <p>{elem.Processor}</p>
        <p>{elem.Storage}</p>
        <p>{elem.Battery}</p>
      </div>
    );
  });
  return <div>{result}</div>;
}
