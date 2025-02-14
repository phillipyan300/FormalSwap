import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/layout/Navigation'
import { Landing } from './pages/Landing'
import { LoginForm } from './components/auth/LoginForm'
import { SignupForm } from './components/auth/SignupForm'
import { Dashboard } from './components/layout/Dashboard'
import { ListingForm } from './components/listings/ListingForm'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/signup" element={<SignupForm />} />
          
          {/* Protected Routes - TODO: Add auth guard */}
          <Route path="/dashboard" element={
            <Dashboard>
              <h1>Welcome to your dashboard</h1>
              {/* TODO: Add dashboard content */}
            </Dashboard>
          } />
          <Route path="/listings/create" element={
            <Dashboard>
              <ListingForm />
            </Dashboard>
          } />
          <Route path="/listings/browse" element={
            <Dashboard>
              <h1>Browse Listings</h1>
              {/* TODO: Add listings browse component */}
            </Dashboard>
          } />
          <Route path="/profile" element={
            <Dashboard>
              <h1>Profile Settings</h1>
              {/* TODO: Add profile settings component */}
            </Dashboard>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App 