import React, { useState } from "react"
import ParkingMap from "./ui/components/ParkingMap"
import BookingForm from "./ui/components/BookingForm"
import BookingDetails from "./ui/components/BookingDetails"
import SearchForm from "./ui/components/SearchForm"
import "./App.css"

export interface Booking {
  id: string
  name: string
  vehicleNumber: string
  duration: number
  startTime: Date
  spotId: string
}

const App: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<string[]>([])

  const handleBooking = (booking: Booking) => {
    setBookings([...bookings, booking])
    setSelectedSpot(null)
  }

  const handleSpotSelect = (spotId: string) => {
    setSelectedSpot(spotId)
  }

  const handleSearch = (criteria: string) => {
    const results = bookings
      .filter(
        (booking) => booking.spotId.includes(criteria) || booking.vehicleNumber.includes(criteria)
      )
      .map((booking) => booking.spotId)
    setSearchResults(results)
    console.log("Search results:", results)
  }

  return (
    <div className="app">
      <header>
        <h1>Car Parking Management System</h1>
      </header>
      <main>
        <div className="parking-map-container">
          <ParkingMap bookings={bookings} onSpotSelect={handleSpotSelect} />
        </div>
        <div className="forms-container">
          <BookingForm selectedSpot={selectedSpot} onBooking={handleBooking} />
          <SearchForm onSearch={handleSearch} />
        </div>
        <BookingDetails bookings={bookings} />
        {searchResults.length > 0 && (
          <div className="search-results">
            <h2>Hasil Pencarian:</h2>
            <ul>
              {searchResults.map((spotId) => (
                <li key={spotId}>{spotId}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
