import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React, { useState, useEffect, createContext } from "react";
import About from './About'
import Home from './Home'
import './App.css'
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/:id', element: <About /> },
])
const data = createContext()
const sea = createContext()
const fun = createContext()
function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className='main'>
      <data.Provider value={countries} >
        <sea.Provider value={search}>
          <fun.Provider value={handleSearch}>
        <RouterProvider router={router} />
        </fun.Provider>
        </sea.Provider>
      </data.Provider>
    </div>
  );
}
export default App
export {data , sea , fun}