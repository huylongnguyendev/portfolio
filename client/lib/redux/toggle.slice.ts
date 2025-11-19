import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const ToggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {}
})

const ToggleReducer = ToggleSlice.reducer
export default ToggleReducer