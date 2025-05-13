import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation will go here */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth/verify" element={<h1>Login/Verify Page</h1>} />
          
          {/* Protected Routes */}
          <Route path="/marketplace" element={<h1>Browse Formal Listings</h1>} />
          <Route path="/profile" element={<h1>My Profile & Listing</h1>} />
          <Route path="/requests/outgoing" element={<h1>My Requests</h1>} />
          <Route path="/requests/incoming" element={<h1>Incoming Requests</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 