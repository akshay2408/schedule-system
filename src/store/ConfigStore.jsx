import { createStore, compose } from "redux";
import rootReducer from "../reducers/RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  return createStore(rootReducer, composeEnhancers());
}
export default configureStore;