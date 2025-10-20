import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterAction";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-white">Counter App</h1>
      <div className="text-3xl font-bold text-white mt-10">
        Counter : {count}
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={handleIncrement}
          className=" text-white p-2 rounded-md"
        >
          Increment
        </button>

        <button onClick={handleReset} className=" text-white p-2 rounded-md">
          Reset
        </button>

        <button
          onClick={handleDecrement}
          className=" text-white p-2 rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
