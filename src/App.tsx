import Button from "./components/Button";
import "./App.scss";

const App = () => {
  return (
    <>
      <main className="main">
        <h1 className="title">First test</h1>
        <div className="btns">
          <Button />
          <Button />
          <Button />
        </div>
      </main>
    </>
  );
};
export default App;
