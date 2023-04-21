import { useState, useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(url);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
      setTours(newTour);
    
  }

  const fechTour = async () => {
    setLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };
  useEffect(() => {
    fechTour();
    console.log(tours);
  }, []);

if (loading) {
  return <div className="container">
  <h1>Loading...</h1>

</div>
}

  if (tours.length === 0) {
    return <div className="container">
      <h1>No Tours</h1>
      <div className="underline"></div>
      <button className="btn" onClick={()=> fechTour()}>refresh</button>
    </div>
  }
  return (
    
    <div className="container">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <main>
        {tours.map((tour) => {
          return <Tours key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </main>
    </div>
  );
}

export default App;
