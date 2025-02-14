import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility for combining Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date formatting utility
export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Email validation for Oxford emails
export function isOxfordEmail(email: string) {
  return email.endsWith('ox.ac.uk')
}

// Local storage utilities
export const storage = {
  get: (key: string) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  },
  
  set: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  
  remove: (key: string) => {
    localStorage.removeItem(key)
  }
}
