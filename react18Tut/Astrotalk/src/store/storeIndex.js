import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import authUser from "./reducer/authUser";
import { astrologers } from "./reducer";

const reducer = {
  authUser,
  astrologers,
};

const rootReducer = combineReducers(reducer);

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(process.env.NODE_ENV === "development" ? createLogger() : []),
});

export const persistor = persistStore(store);
