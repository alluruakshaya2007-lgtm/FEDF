import BookingForm from "./components/BookingForm";

function App() {
  const airlineName =
    import.meta.env.VITE_AIRLINE_NAME ||
    "SkyWings Airlines";

  return (
    <div className="app-container">
      <h1>{airlineName}</h1>
      <BookingForm />
    </div>
  );
}

export default App;