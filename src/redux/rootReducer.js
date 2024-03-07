import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import {apiPodcast} from "./apiPodcast";

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['podcastApi']
};

const rootReducer = combineReducers({
  [apiPodcast.reducerPath]: apiPodcast.reducer,
});

export { rootPersistConfig, rootReducer };
