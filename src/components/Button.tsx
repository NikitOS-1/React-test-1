import { useState } from "react";

type Count = {
  num: number;
};

const Button = () => {
  const [count, setCount] = useState<Count>({ num: 0 });

  const onIncrement = (num: number) => {
    setCount((prevState: Count) => ({
      ...prevState,
      num: prevState.num + 1,
    }));
  };
  return (
    <button className="btn-2" onClick={() => onIncrement(count.num)}>
      changeCount({count.num})
    </button>
  );
};

export default Button;
