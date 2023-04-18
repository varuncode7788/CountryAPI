import React from "react";
import { Link} from "react-router-dom";
import classes from './Country.module.css'


function CountryList({ countries, search }) {
  const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(search.toLowerCase())
  );
  const sortedCountries = filteredCountries.sort((a, b) =>
    a.name.common > b.name.common ? 1 : -1
  );
  return (
    <div className={classes.main} >
      {sortedCountries.map((country) => (
        <div key={country.cca3}>
          <h3>Region: {country.region}</h3>
          <h3>CountryName: {country.name.common}</h3>
          <h3>
            cca3: <Link to={`/${country.cca3}`}>{country.cca3}</Link>
          </h3>
          {country.borders && country.borders.length > 0 && (
            <div>
              <h4>Borders:
              <ul>
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>
                      {border}
                    </Link>
                  </li>
                ))}
              </ul></h4>
            </div>
          )}
          <img src={country.flags.svg} alt={country.name.common} />
        </div>
      ))}
    </div>
  );
}
export default CountryList