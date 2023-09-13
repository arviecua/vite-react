import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let colors = ["Red", "Violet", "Blue", "Green", "Yellow"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <ListGroup items={colors} heading="Colors" />
    </div>
  );
}

export default App;
