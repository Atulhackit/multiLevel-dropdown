import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [country, setCountry] = useState("");
  const [selectedCities, setCities] = useState([]);
  const countries = [
    { id: 0, name: "india", value: "IN", cities: ["Delhi", "munbai", "Noida"] },
    {
      id: 1,
      name: "Pakistan",
      value: "pak",
      cities: ["Karachi", "Lahor", "islamanbad"]
    },
    {
      id: 2,
      name: "China",
      value: "chi",
      cities: ["wohang", "bezing", "chingchang"]
    }
  ];
  console.log(countries[country]);

  useEffect(() => {
    countries.filter((item) => {
      if (item.name === country) {
        setCities(item.cities);
      }
    });
  }, [country]);
  console.log(selectedCities);
  return (
    <div className="App">
      <h1>MultiLayer DropDown</h1>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries.map((country) => {
          return (
            <option key={country?.id} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
      <select>
        {selectedCities.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </select>
    </div>
  );
}
