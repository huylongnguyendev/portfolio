import { createSlice } from "@reduxjs/toolkit"

interface ToggleType {
  isOpenMenu: boolean
}

const initialState = {
  isOpenMenu: false
} satisfies ToggleType as ToggleType

const ToggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setIsOpenMenu: (state) => {
      state.isOpenMenu = true
    },
    setIsCloseMenu: (state) => {
      state.isOpenMenu = false
    },
  }
})

const ToggleReducer = ToggleSlice.reducer
export default ToggleReducer
export const { setIsOpenMenu, setIsCloseMenu } = ToggleSlice.actions
