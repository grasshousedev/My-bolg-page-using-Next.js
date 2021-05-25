import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {createWrapper } from 'next-redux-wrapper'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const makeStore = context => {
  const store = createStore(persistedReducer)
  return store
}


const store = createStore(persistedReducer);


export const wrapper = createWrapper(makeStore,{debug: true});