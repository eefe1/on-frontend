import { Outlet } from 'react-router-dom'
import HomeNavigation from '../components/HomeNavigation'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <HomeNavigation />
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout 