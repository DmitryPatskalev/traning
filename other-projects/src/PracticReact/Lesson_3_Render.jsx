const element = (
  <div>
    <h2>Hello World!</h2>
    <h3>It is {new Date().toLocaleTimeString()}</h3>
  </div>
);

export default function Render() {
  return <div>{element}</div>;
}
