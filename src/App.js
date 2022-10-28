import "./App.css";
import Nav from "./components/Nav";
import TravelInfo from "./components/Travelnfo";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        {data.map((item) => {
          const { id, country, title, period, desc, image } = item;
          return (
            <div key={id}>
              <TravelInfo
                country={country}
                title={title}
                period={period}
                desc={desc}
                photo={image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
