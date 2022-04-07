import { useEffect, useState } from "react";

export default function HukEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали  ${count} раз`;
  });
  return (
    <div>
      <p>Вы нажали {count} раз!</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
