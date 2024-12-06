import React from "react"
import { Booking } from "../../App"

interface BookingDetailsProps {
  bookings: Booking[]
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ bookings }) => {
  return (
    <div className="booking-details">
      <h2>Rincian Pemesanan</h2>
      {bookings.length === 0 ? (
        <p>Belum ada pemesanan.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id} className="booking-item">
              <h3>Tempat Parkir: {booking.spotId}</h3>
              <p>
                <strong>Nama:</strong> {booking.name}
              </p>
              <p>
                <strong>Nomor Kendaraan:</strong> {booking.vehicleNumber}
              </p>
              <p>
                <strong>Waktu Mulai:</strong> {booking.startTime.toLocaleString("id-ID")}
              </p>
              <p>
                <strong>Durasi:</strong> {booking.duration} jam
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookingDetails
