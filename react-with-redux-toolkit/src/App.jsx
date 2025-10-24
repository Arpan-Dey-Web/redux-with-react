import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decreaseByAmount,
  decrement,
  increaseByAmount,
  increment,
  reset,
} from "./features/counter/counterSlice";
import { useEffect } from "react";
import { fetchUsers } from "./features/users/userSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const { isLoading, posts, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {/* Counters  App*/}
      <div>
        <h1 className="font-bold text-2xl">Counter : {count}</h1>
        <div className="my-10 flex gap-4 justify-center">
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(increaseByAmount(10));
            }}
          >
            Increase 10
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dispatch(decreaseByAmount(10));
            }}
          >
            Decrease 10
          </button>
        </div>
      </div>
      {/* fetched Data */}
      <div>
        {isLoading && <span>Loading....</span>}
        {error && <span>error....</span>}
        <section className="grid grid-cols-3 gap-4  mt-10 ">
          {posts.map((post) => {
            return (
              <div className="border p-4 rounded-xl " key={post.id}>
                <h5 className="text-xl font-bold mb-2"> {post.name}</h5>
                <p className="">{post.email}</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
