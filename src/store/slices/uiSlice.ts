import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  isLoading: boolean
  notification: {
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    show: boolean
  }
  mobileMenuOpen: boolean
}

const initialState: UIState = {
  isLoading: false,
  notification: {
    type: 'info',
    message: '',
    show: false,
  },
  mobileMenuOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    showNotification: (state, action: PayloadAction<{ type: UIState['notification']['type']; message: string }>) => {
      state.notification = {
        type: action.payload.type,
        message: action.payload.message,
        show: true,
      }
    },
    hideNotification: (state) => {
      state.notification.show = false
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
  },
})

export const {
  setLoading,
  showNotification,
  hideNotification,
  toggleMobileMenu,
  closeMobileMenu,
} = uiSlice.actions

export default uiSlice.reducer
