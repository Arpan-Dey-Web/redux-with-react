import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./actions/counterAction";
import "./App.css";
import { useEffect } from "react";
import { getAllTodos } from "./services/actions/TodoActions";

function App() {
  const count = useSelector((state) => state.counterR.count);
  const { loading, todo, error } = useSelector((state) => state.todosR);

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

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
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
      <div>
        <h2 className="text-center my-10">Todos App</h2>
        {loading && <h3>Loading ...</h3>}
        {error && <h3>{error.message}</h3>}
        <section>
          {todo &&
            todo.map((element) => {
              return (
                <article key={element.id}>
                  <h4>{element.id}</h4>
                  <p>{element.title}</p>
                </article>
              );
            })}
        </section>
      </div>
    </>
  );
}

export default App;
