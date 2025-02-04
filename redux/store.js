import { applyMiddleware, combineReducers, legacy_createStore, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducer from './reducers/countReducers';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

// Initial state
// middleware


const loggerMiddleware = (store) => (next) => (action) => {
    console.group(`Action: ${action.type}`);
    console.log('Previous State:', store.getState());
    console.log('Action Payload:', action);
    const result = next(action); // Pass action to the next middleware or reducer
    console.log('Next State:', store.getState());
    console.groupEnd();
    return result;
  };

// Reducer

const countPersistConfig = {
  key: 'counter',
  storage: storage,
  whitelist: ['counter']
};

const rootReducer = combineReducers({
    count: countReducer,
})


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// Create the store
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)), );
const persistor = persistStore(store);

// const store = createStore()

export default { store, persistor };