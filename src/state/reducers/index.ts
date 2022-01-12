import { combineReducers } from "redux";
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
});

export default reducers;


//Follow official document that is to say
// Whenever we call that function, it's going to internally call some of our different reducers, give
// us back some object that has a structure that kind of looks like this right here.
// So we are making use of a built in helper inside of typescript to say, take this function and give
// us back the type of whatever that function returns.
// We're then going to assign that type to Route States Snappily Mouse over RooteState
export type RootState = ReturnType<typeof reducers> 