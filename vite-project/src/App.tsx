import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let colors = ["Red", "Violet", "Blue", "Green", "Yellow"];

  const handleSelectItem = (items: string) => {
    console.log(items);
  };

  const [alertVisible, setVisibility] = useState(false);

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

      {alertVisible && (
        <Alert onClose={() => setVisibility(false)}>My Alert</Alert>
      )}

      <Button color="dark" onClick={() => setVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
