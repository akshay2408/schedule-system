import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import scheduleReducer from './ScheduleReducer';
import jobReducer from './JobReducer';

const rootReducer = combineReducers({
  userReducer,
  scheduleReducer,
  jobReducer
});

export default rootReducer;