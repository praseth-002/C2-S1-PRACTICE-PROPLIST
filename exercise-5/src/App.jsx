import Card from "./components/Card.jsx"
import { Toys } from "./data.js";

function App() {
  return <>
        <header>
          <h1>ToyPicker</h1>
          <p>What would you like to play?</p>
        </header>
        <main>
          <div className="container">
              {/* For each place from AVAILABLE_PLACES, create a Place component */}
              {Toys.map((items) => (
                <Card {...items} key={items.id}/>
              ))}
          </div>
        </main>
      </>;
}



export default App;
