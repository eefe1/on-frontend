import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import LawyerListView from '../pages/LawyerListView/LawyerListView'
import LawyerDashboard from '../pages/Dashboard/LawyerDashboard'
import AppointmentRequest from '../pages/Dashboard/AppointmentRequest'
import Appointments from '../pages/Dashboard/Appointments'
import AvailableTiming from '../pages/Dashboard/AvailableTiming'
import Costumers from '../pages/Dashboard/Costumers'
import Specialities from '../pages/Dashboard/Specialities'
import Messages from '../pages/Dashboard/Messages'
import Tekvil from '../pages/Dashboard/Tekvil'
import Lawyerblog from '../components/blog/lawyerblog/lawyerblog'
import SocialMedia from '../pages/Dashboard/SocialMedia'
import BookingWizard from '../pages/Booking/Booking'
import LawyerProfile from '../pages/LawyerProfile/LawyerProfile'

// Create the router configuration
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'kayit_ol',
        element: <Register />
      },
      {
        path: 'giris',
        element: <Login />
      },
      {
        path: 'sifremi_unuttum',
        element: <ForgotPassword />
      },
      {
        path: 'avukat_liste',
        element: <LawyerListView />
      },
      {
        path: 'avukat_dashboard',
        element: <LawyerDashboard />
      },
      {
        path: 'avukat_randevu_talebi',
        element: <AppointmentRequest />
      },
      {
        path: 'avukat_randevular',
        element: <Appointments />
      },
      {
        path: 'avukat_uygun_saatler',
        element: <AvailableTiming />
      },
      {
        path: 'avukat_müvekkillerim',
        element: <Costumers />
      },
      {
        path: 'avukat_uzmanlik',
        element: <Specialities />
      },
      {
        path: 'avukat_mesajlar',
        element: <Messages />
      },
      {
        path: 'avukat_tekviller',
        element: <Tekvil />
      },
      {
        path: 'avukat_bloglar',
        element: <Lawyerblog />
      },
      {
        path: 'avukat_sosyal_medya',
        element: <SocialMedia />
      },
      {
        path: 'avukat_randevu_ayarla',
        element: <BookingWizard />
      },
      {
        path: 'avukat_profil',
        element: <LawyerProfile />
      },
      {
        path: '*',
        element: <Home />
      }
    ]
  }
]) 