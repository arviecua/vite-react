import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

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

      <Alert>
        Hello <span>World</span>
      </Alert>

      <Button color="dark" onClick={() => console.log("clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
