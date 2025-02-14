const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

interface AuthResponse {
  token: string;
  expiresIn: number;
  user: {
    id: number;
    email: string;
    college: string;
  }
}

interface Profile {
  college: string;
  year: string;
  major: string;
}

interface Listing {
  date: string;
  capacity: number;
  description?: string;
}

export const api = {
  // Authentication endpoints
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    return res.json()
  },
  
  // Email verification
  verifyEmail: async (email: string) => {
    const res = await fetch(`${API_URL}/api/auth/verify-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    return res.json()
  },

  // Send verification email
  requestVerification: async (email: string) => {
    const res = await fetch(`${API_URL}/api/auth/request-verification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    return res.json()
  },

  // Verify one-time code
  verifyCode: async (email: string, code: string): Promise<AuthResponse> => {
    const res = await fetch(`${API_URL}/api/auth/verify-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code })
    })
    return res.json()
  },

  // You can add more API endpoints here
  listings: {
    create: async (listingData: Listing) => {
      const res = await fetch(`${API_URL}/api/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(listingData)
      })
      return res.json()
    },
    
    getAll: async () => {
      const res = await fetch(`${API_URL}/api/listings`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      return res.json()
    }
  },

  profile: {
    update: async (profileData: Profile) => {
      const res = await fetch(`${API_URL}/api/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(profileData)
      })
      return res.json()
    }
  },

  matches: {
    confirm: async (listingId: number) => {
      const res = await fetch(`${API_URL}/api/listings/${listingId}/confirm`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      return res.json()
    }
  }
} 