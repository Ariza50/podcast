import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import podcastReducer from './slices/podcast';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const podcastPersistConfig = {
  key: 'podcast',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['podcastList']
};

const rootReducer = combineReducers({
  podcast: persistReducer(podcastPersistConfig, podcastReducer),
});

export { rootPersistConfig, rootReducer };
