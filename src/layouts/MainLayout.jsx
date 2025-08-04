import { Outlet } from 'react-router-dom'
import HomeNavigation from '../components/HomeNavigation'

const MainLayout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <HomeNavigation />
      </header>
      
      <main className="app-main">
        <Outlet />
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p className="footer-text">
            © 2024 Your App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout 