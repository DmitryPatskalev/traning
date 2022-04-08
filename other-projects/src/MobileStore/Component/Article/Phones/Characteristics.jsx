export default function Characteristic(props) {
  let list = [
    {
      OS: "OS: " + props.os,
      Screen: "Screen: " + props.screen,
      Processor: "Processor: " + props.processor,
      Storage: "Storage: " + props.storage,
      Battery: "Battery: " + props.battery,
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
