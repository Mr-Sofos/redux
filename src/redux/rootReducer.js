import {
  INCREMENT,
  DECREMENT,
  THEME_CHANGE,
  DISABLE_BTN,
  ENABLE_BTN,
} from "./Types";
import { combineReducers } from "redux";

export function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
}

const initialThemeState = {
  value: "light",
  disabled: false,
};

export function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case THEME_CHANGE: {
      return { ...state, value: action.payload };
    }
    case DISABLE_BTN: {
      return { ...state, disabled: true };
    }
    case ENABLE_BTN: {
      return { ...state, disabled: false };
    }
    default: {
      return state;
    }
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
