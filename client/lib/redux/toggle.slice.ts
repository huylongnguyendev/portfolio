import { createSlice } from "@reduxjs/toolkit"

interface ToggleState {
  isOpenMenu: boolean
}

const initialState = {
  isOpenMenu: false
} satisfies ToggleState as ToggleState

const ToggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setOpenMenu: (state) => {
      state.isOpenMenu = true
    },
    setCloseMenu: (state) => {
      state.isOpenMenu = false
    },
  }
})

const ToggleReducer = ToggleSlice.reducer
export default ToggleReducer
export const { setOpenMenu, setCloseMenu } = ToggleSlice.actions