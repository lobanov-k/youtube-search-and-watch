import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
	save({ states: ["history"] })
)(createStore);

const store = createStoreWithMiddleware(
	reducer,
	load({ states: ["history"] }),
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;