export default function Props() {
  return (
    <div>
      <Welcome name="Dima" />
      <Welcome name="Tania" />
      <Welcome name="Danik" />
    </div>
  );
}
function Welcome(props) {
  return (
    <div>
      <h4>Hello, {props.name}!</h4>
    </div>
  );
}
