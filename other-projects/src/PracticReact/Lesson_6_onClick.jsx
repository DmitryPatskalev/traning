function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form was sent");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">SEND</button>
    </form>
  );
}

export default function OnClick() {
  return (
    <div>
      <Form />
    </div>
  );
}
