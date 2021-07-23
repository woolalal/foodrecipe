import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header';
import FoodGrid from './components/food/FoodGrid';

const API_KEY = '4f9c2f8d8d14873a46bc7b46b7d06e44';
const APP_ID = '52f674bf';
const URL = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}";

function App() {
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("chicken");

  useEffect(() => {
    getData();
  }, [name])

  async function getData(){
    const res = await fetch(`https://api.edamam.com/search?q=${name}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await res.json();
    setItem(data.hits);
    setLoading(false);
  }

  function onChange(evt){
    setSearch(evt.target.value);
    console.log(evt.target.value);
  }

  function getName(evt)
  {
    evt.preventDefault();
    setName(search);
    setSearch("");
  }

  return (
    <div className="container">
      <Header />
      <form onSubmit={getName} className="form-container">
      <input 
      type="text" 
      onChange={onChange}
      value={search}
      placeholder="Enter Food Name Here"
      className="search-input"
      required
      />
      <button type="submit" className="search-btn">Search</button>
      </form>
      <FoodGrid isLoading = {isLoading} item = {item}/>
    </div>
  );
}

export default App;
