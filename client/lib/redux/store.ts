import { configureStore } from "@reduxjs/toolkit"
import ToggleReducer from "./toggle.slice"

export const store = () => {
  return configureStore(
    {
      reducer: {
        toggle: ToggleReducer,
      }
    }
  )
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]