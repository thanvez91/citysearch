import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DropdownList />
    </div>
  );
}

const DropdownList = () => {
  let cityList = [
    "delhi",
    "chennai",
    "bengaluru",
    "mumbai",
    "denver",
    "bangkok"
  ];
  const [list, setList] = useState(cityList);
  const [searchKeyword, setKeyword] = useState("");
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={(event) => setKeyword(event.target.value)}
      />

      {searchKeyword ? (
        <ul className="dropdown-Wrapper">
          {list
            .filter((a, b) => {
              return a.includes(searchKeyword);
            })
            .map((city) => {
              return <li className="dropdown-list">{city}</li>;
            })}
        </ul>
      ) : (
        <div className="search-city">Please Search The City</div>
      )}
    </div>
  );
};
