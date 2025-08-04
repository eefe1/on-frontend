import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { router } from './routes/AppRoutes'
import './styles/fonts.css'
import './assets/scss/main.scss'
import './assets/css/custom.css'
import './assets/css/feather.css'
import './assets/css/iconsax.css'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
