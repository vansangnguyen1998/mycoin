// import { createStore } from 'redux'

// const initialState = {
//   sidebarShow: 'responsive'
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
// export default store
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const persistConfig = {
  key      : 'root',
  storage,
  whitelist: ['specification']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export const persistor = persistStore(store)

export default store
