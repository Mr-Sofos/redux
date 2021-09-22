import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./redux/rootReducer";
import {
  increment,
  decrement,
  ascIncrement,
  themeChange,
} from "./redux/actionCreators";
import "./styles.css";
import thunk from "redux-thunk";
import logger from "redux-logger";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const subAsc = document.getElementById("async");
const subTheme = document.getElementById("theme");

// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log("State", state.getState());
//       console.log("Action", action);
//       return next(action);
//     };
//   };
// }

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

subAsc.addEventListener("click", () => {
  store.dispatch(ascIncrement());
});

subTheme.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch(themeChange(newTheme));
});

store.subscribe(() => {
  const state = store.getState();

  counter.textContent = state.counter;
  document.body.className = state.theme.value;

  [addBtn, subBtn, subAsc, subTheme].forEach(
    (btn) => (btn.disabled = state.theme.disabled)
  );
});

store.dispatch({ type: "INIT__APPLICATION" });
