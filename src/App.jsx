import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { router } from './routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'antd/dist/reset.css'
import './styles/fonts.css'
import './assets/scss/main.scss'
import './assets/css/custom.css'
import './assets/css/feather.css'
import './assets/css/iconsax.css'
import './assets/icons/fontawesome/css/all.min.css'
import './App.css'

// Import jQuery, moment, and daterangepicker for DateRangePicker component
import $ from 'jquery'
import moment from 'moment'
import 'bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'

// Make jQuery and moment available globally
window.$ = window.jQuery = $
window.moment = moment

function App() {
  console.log('App component rendered')
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
