import { useState } from "react";
import axios from "axios";

export default function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = "75df4771c32af58b732d3f749b83215d";

    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${term
      .trim()
      .toLowerCase()}&appid=${apiKey}`;

    const {
      data: {
        main: { temp }
      }
    } = await axios.get(endpoint);

    // console.log(Math.round(data.main.temp - 273));
    const temperature = Math.round(temp - 273);

    props.handleTemp(temperature);
  };

  return (
    <form onSubmit={handleSubmit} class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={term}
        onChange={handleChange}
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
