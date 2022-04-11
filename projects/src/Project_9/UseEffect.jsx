import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => {
      return count + 1;
    });
  };
  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });
  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={increment}>Click</button>
    </div>
  );
}
