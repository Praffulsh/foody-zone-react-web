import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState([]);
  const [filtereddata, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // ************* Search Function *****************
  const searchFood = (event) => {
    const searchValue = event.target.value;

    if (!searchValue.length) {
      setFilteredData([]);
      console.log("000000", filtereddata);
    }

    const searchData = data?.filter((currentValue) => {
      return currentValue.name.toLowerCase().includes(searchValue);
    });
    setFilteredData(searchData);
  };

  // ************* Filter Function *****************
  const filterFood = (type) => {
    if (type == "All") {
      setFilteredData(data);
      return;
    }
    const filterData = data?.filter((currentValue) => {
      return currentValue.type.toLowerCase().includes(type.toLowerCase());
    });

    setFilteredData(filterData);
  };

  // ************* Fetch Data Function *****************
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(data);
      setFilteredData(data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading ....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Header searchFood={searchFood} filterFood={filterFood} />
      <div className="foodContainer">
        <div className="container">
          {filtereddata.map((value, index) => {
            return (
              <div key={index} className="foodCard">
                <div className="foodImage">
                  <img src={BASE_URL + value.image} alt={value.name} />
                </div>
                <div className="foodDescription">
                  <div>
                    <h3>{value.name}</h3>
                    <p>{value.text}</p>
                  </div>
                  <Button text={`$${value.price.toFixed(2)}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
