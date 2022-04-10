import { useState } from "react";

export default function CountFunc() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>Count</button>
    </div>
  );
}
