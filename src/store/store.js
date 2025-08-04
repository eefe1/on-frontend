import { configureStore } from '@reduxjs/toolkit'
import themeSettingReducer from './themeSettingSlice'

export const store = configureStore({
  reducer: {
    themeSetting: themeSettingReducer,
  },
}) 