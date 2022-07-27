import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, toggleLogin } from "./actions";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello Wrolds</h1>
      <h1>Counter = {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(toggleLogin())}>{isLogged? 'Logout ': 'Login' }</button>
      {
        isLogged ?
        <h3>Your Password is : 's@haihsnBDoih894 </h3>
        : <h3>Login to see Confidential Information</h3>
      }
      
    </div>
  );
}

export default App;
