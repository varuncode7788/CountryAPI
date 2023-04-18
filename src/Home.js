import React, {useContext } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import { data , sea , fun } from "./App";
function Home(){
    const countries =  useContext(data);
    const search = useContext(sea)
    const handleSearch = useContext(fun)
  
    return(
        <>
        
        <SearchBar search={search} onSearch={handleSearch} />
        <CountryList countries={countries} search={search} />
        
        </>
    )
}
export default Home;