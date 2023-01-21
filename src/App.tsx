import { useState } from "react";

type Count = {
  num: number;
};

const App = () => {
  const [count, setCount] = useState<Count>({ num: 0 });

  const onIncrement = (num: number) => {
    setCount((prevState: Count) => ({
      ...prevState,
      num: prevState.num + 1,
    }));
  };
  return (
    <>
      <div className="main">
        <h1 className="title">First test</h1>
        <button className="btn-1" onClick={() => onIncrement(count.num)}>
          changeCount({count.num})
        </button>
        <button className="btn-2" onClick={() => onIncrement(count.num)}>
          changeCount({count.num})
        </button>
        <button className="btn-3" onClick={() => onIncrement(count.num)}>
          changeCount({count.num})
        </button>
      </div>
    </>
  );
};
export default App;
