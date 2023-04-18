import { useContext } from "react";
import { data } from "./App";
import { Link, useParams } from "react-router-dom";
function About() {
  const param = useParams();
  const countries = useContext(data);

  return (
    <div>
      {countries
        .filter((t) => t.cca3 === param.id)
        .map((e, index) => {
          return (
            <div>
              <h3>Region : {e.region}</h3>
              <h3> cca3: {e.cca3}</h3>
              {e.borders && e.borders.length > 0 && (
                <div>
                  <h4>borders:</h4>
                  <ul>
                    {e.borders.map((eborder) => (
                      <li key={eborder}>
                        <Link to={`/${eborder}`}>{eborder}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h3>CountryName:{e.name.common}</h3>
              <img src={e.flags.svg} alt="wait"></img>
            </div>
          );
        })}
      <Link to="/">E x i t</Link>
    </div>
  );
}
export default About;
