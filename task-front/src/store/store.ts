import { configureStore } from '@reduxjs/toolkit'
import answerReducer from './reducers/answers/answers_reducer';
import userReducer from './reducers/user/user_reducer'
export const store = configureStore({
  reducer: {
    answers : answerReducer,
    user : userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch