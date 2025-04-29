import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import blogSlice from "./blogSlice"

const rootReducer=combineReducers({
    blogs:blogSlice,
})

const persistConfig={
    key:"root",
    storage,
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

const store=configureStore(
    { 
        reducer:persistedReducer,
            
    }
)

export const persistor=persistStore(store);
export default store;




// const store=configureStore({
//     reducer: persistedReducer,
//   })
  
//   export const persistor=persistStore(store);
//   export default store;
