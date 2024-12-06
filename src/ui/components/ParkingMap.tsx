import React from "react"
import { Stage, Layer, Rect, Text } from "react-konva"
import { Booking } from "../../App"

interface ParkingMapProps {
  bookings: Booking[]
  onSpotSelect: (spotId: string) => void
}

const ParkingMap: React.FC<ParkingMapProps> = ({ bookings, onSpotSelect }) => {
  const spots = [
    { id: "A1", x: 10, y: 10 },
    { id: "A2", x: 70, y: 10 },
    { id: "B1", x: 10, y: 70 },
    { id: "B2", x: 70, y: 70 }
  ]

  return (
    <Stage width={400} height={400}>
      <Layer>
        {spots.map((spot) => {
          const isOccupied = bookings.some((booking) => booking.spotId === spot.id)
          return (
            <React.Fragment key={spot.id}>
              <Rect
                x={spot.x}
                y={spot.y}
                width={50}
                height={50}
                fill={isOccupied ? "red" : "green"}
                onClick={() => onSpotSelect(spot.id)}
              />
              <Text x={spot.x + 15} y={spot.y + 15} text={spot.id} fill="white" />
            </React.Fragment>
          )
        })}
      </Layer>
    </Stage>
  )
}

export default ParkingMap
