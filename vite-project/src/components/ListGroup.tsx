import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// import { MouseEvent } from "react";

// event handler
// const handleClick = (event: MouseEvent) => console.log(event);

// const message = items.length === 0 ? <p>No Item Found</p> : null;

// Message Function
// const getMessage = () => {
//   return items.length === 0 ? <p>No Item Found</p> : null;
// };

// if (items.length === 0)
//   return (
//     <>
//       <h1>List</h1>
//       <p>No item found</p>
//     </>
//   );
