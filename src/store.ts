import { configureStore } from "@reduxjs/toolkit";
import podDataReducer from "slices/podDataSlice";
import orderReducer from "slices/ordersSlice";
import connectionsReducer from "slices/connectionsSlice";
import messagesReducer from "slices/messagesSlice";
import { measurementsReducer } from "slices/measurementsSlice";

export const store = configureStore({
    reducer: {
        podData: podDataReducer,
        measurements: measurementsReducer,
        orders: orderReducer,
        connections: connectionsReducer,
        messages: messagesReducer,
    },
    middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
