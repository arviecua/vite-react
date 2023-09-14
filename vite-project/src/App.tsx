import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let colors = ["Red", "Violet", "Blue", "Green", "Yellow"];

  const handleSelectItem = (items: string) => {
    console.log(items);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* <ListGroup
        items={colors}
        heading="Colors"
        onSelectItem={handleSelectItem}
      /> */}

      <Alert />
    </div>
  );
}

export default App;
