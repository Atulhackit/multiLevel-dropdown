import "./styles.css";

export default function App() {
  const countries = [
    { name: "india", value: "IN", cities: ["Delhi", "munbai", "Noida"] },
    {
      name: "Pakistan",
      value: "pak",
      cities: ["Karachi", "Lahor", "islamanbad"]
    },
    { name: "China", value: "chi", cities: ["wohang", "bezing", "chingchang"] }
  ];
  return (
    <div className="App">
      <h1>MultiLayer DropDown</h1>
      <select value="select cities">
        {countries.map((country) => {
          return <option>{country}</option>;
        })}
      </select>
    </div>
  );
}
