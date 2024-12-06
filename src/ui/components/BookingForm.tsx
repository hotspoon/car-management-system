import React, { useState } from "react"
import { Booking } from "../../App"

interface BookingFormProps {
  selectedSpot: string | null
  onBooking: (booking: Booking) => void
}

const BookingForm: React.FC<BookingFormProps> = ({ selectedSpot, onBooking }) => {
  const [name, setName] = useState("")
  const [vehicleNumber, setVehicleNumber] = useState("")
  const [duration, setDuration] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSpot) {
      const newBooking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        vehicleNumber,
        duration,
        startTime: new Date(),
        spotId: selectedSpot
      }
      onBooking(newBooking)
      setName("")
      setVehicleNumber("")
      setDuration(1)
      setShowConfirmation(true)
      setTimeout(() => setShowConfirmation(false), 3000)
    }
  }

  return (
    <div className="booking-form-container">
      <h2>Book a Parking Spot</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (hours):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        <button type="submit" disabled={!selectedSpot} className="submit-button">
          Book Spot {selectedSpot}
        </button>
      </form>
      {showConfirmation && (
        <div className="confirmation-message">Booking confirmed for spot {selectedSpot}!</div>
      )}
    </div>
  )
}

export default BookingForm
