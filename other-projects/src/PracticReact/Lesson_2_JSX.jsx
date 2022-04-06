function formatUser(user) {
  return user.name + " " + user.surName;
}
let user = {
  name: "Дмитрий",
  surName: "Анатольевич",
};

const elem = <h1>Hello, {formatUser(user)}!</h1>;
const link = (
  <a href="https://www.reactjs.org" target="_blank">
    LINK
  </a>
);
export default function JSX_lesson2() {
  return (
    <div>
      {elem}
      {link}
    </div>
  );
}
