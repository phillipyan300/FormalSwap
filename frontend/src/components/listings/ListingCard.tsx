import { type FC } from 'react'

interface ListingCardProps {
  date: string
  college: string
  capacity: number
  hostName: string
  description?: string
  onRequestJoin: () => void
}

export const ListingCard: FC<ListingCardProps> = ({
  date,
  college,
  capacity,
  hostName,
  description,
  onRequestJoin
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{college} Formal</h3>
          <p className="text-sm text-gray-500 mt-1">Hosted by {hostName}</p>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {capacity} {capacity === 1 ? 'spot' : 'spots'} available
        </span>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Date:</span> {new Date(date).toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={onRequestJoin}
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Request to Join
        </button>
      </div>
    </div>
  )
} 