import { useState, useEffect } from "react";
import Form from "./Form";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
