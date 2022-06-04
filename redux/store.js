import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import reducers from "./reducers";

//localStorage에 저장
const persistConfig = {
  key: "reducer",
  storage,
  whitelist: ["search"],
  blacklist: [
    "auth",
    "content",
    "questions",
    "setPage",
    "setMinePage",
    "setQuestion",
    "setMine",
    "clearBigCriteria",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store;

function initStore(initialState) {
  return createStore(
    persistedReducer,
    initialState,
    //middleware안에 여러가지 라이브러리 넣는다.
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  const persistor = persistStore(store);

  return { store, persistor };
}
