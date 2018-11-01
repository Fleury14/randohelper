import { combineReducers } from 'redux';
import TempReducer from './TempReducer';
import DirectoryReducer from './DirectoryReducer';

export default combineReducers({
  temp: TempReducer,
  directory: DirectoryReducer
});
