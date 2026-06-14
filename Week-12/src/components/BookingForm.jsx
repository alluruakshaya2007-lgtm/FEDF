import { useState } from "react";

function BookingForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] =
    useState("");
  const [travelDate, setTravelDate] =
    useState("");
  const [travelTime, setTravelTime] =
    useState("");
  const [travelClass, setTravelClass] =
    useState("Economy");
  const [seats, setSeats] = useState(1);
  const [message, setMessage] = useState("");

  const farePerSeat = {
    Economy: 5000,
    Business: 10000,
    FirstClass: 15000,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      source.trim().toLowerCase() ===
      destination.trim().toLowerCase()
    ) {
      alert(
        "Source and Destination cannot be the same!"
      );
      return;
    }

    const totalFare =
      farePerSeat[travelClass] * seats;

    const bookingId = Math.floor(
      100000 + Math.random() * 900000
    );

    setMessage(`
🎫 Booking Confirmed!

Booking ID: ${bookingId}

📍 From: ${source}
📍 To: ${destination}

📅 Date: ${travelDate}
⏰ Time: ${travelTime}

✈️ Class: ${travelClass}

💺 Seats: ${seats}

💰 Total Fare: ₹${totalFare}
`);

    setSource("");
    setDestination("");
    setTravelDate("");
    setTravelTime("");
    setTravelClass("Economy");
    setSeats(1);
  };

  return (
    <>
      <div className="booking-card">
        <h2>Flight Booking</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Source City</label>
            <input
              type="text"
              placeholder="Source City"
              value={source}
              onChange={(e) =>
                setSource(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Destination City</label>
            <input
              type="text"
              placeholder="Destination City"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
              required
            />
          </div>

          <div className="row">
            <div className="form-group">
              <label>Travel Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) =>
                  setTravelDate(e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Travel Time</label>
              <input
                type="time"
                value={travelTime}
                onChange={(e) =>
                  setTravelTime(e.target.value)
                }
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Class</label>
              <select
                className="select-box"
                value={travelClass}
                onChange={(e) =>
                  setTravelClass(
                    e.target.value
                  )
                }
              >
                <option value="Economy">
                  Economy
                </option>
                <option value="Business">
                  Business
                </option>
                <option value="FirstClass">
                  First Class
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Seats</label>
              <input
                type="number"
                min="1"
                max="10"
                value={seats}
                onChange={(e) =>
                  setSeats(
                    Number(e.target.value)
                  )
                }
                required
              />
            </div>
          </div>

          <button type="submit">
            Book Ticket
          </button>
        </form>
      </div>

      {message && (
        <div className="confirmation">
          {message}
        </div>
      )}
    </>
  );
}

export default BookingForm;