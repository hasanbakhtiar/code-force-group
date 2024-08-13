import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer:productSlice
})
export default store;

export type RootStore = ReturnType<typeof store.getState>;
export const AppUseSelector:TypedUseSelectorHook<RootStore>=useSelector;

export type AppDispatch = typeof store.dispatch;
export const AppUseDispatch = () =>useDispatch<AppDispatch>();

