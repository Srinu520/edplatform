import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './slices/courseSlice'
import uiReducer from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
