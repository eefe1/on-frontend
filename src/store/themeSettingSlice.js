import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataTheme: 'light'
}

const themeSettingSlice = createSlice({
  name: 'themeSetting',
  initialState,
  reducers: {
    setDataTheme: (state, action) => {
      state.dataTheme = action.payload
    }
  }
})

export const { setDataTheme } = themeSettingSlice.actions
export default themeSettingSlice.reducer 