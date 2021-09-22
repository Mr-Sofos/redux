import {
  INCREMENT,
  DECREMENT,
  THEME_CHANGE,
  DISABLE_BTN,
  ENABLE_BTN,
} from "./Types";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function disableBtn() {
  return { type: DISABLE_BTN };
}

export function enableBtn() {
  return { type: ENABLE_BTN };
}

export function ascIncrement() {
  return function (dispatch) {
    dispatch(disableBtn());
    setTimeout(function () {
      dispatch(increment());
      dispatch(enableBtn());
    }, 3000);
  };
}

export function themeChange(newTheme) {
  return { type: THEME_CHANGE, payload: newTheme };
}
