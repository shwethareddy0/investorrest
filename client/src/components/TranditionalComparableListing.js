import { useEffect, useState } from "react";
import axios from "axios";

const config = {
  headers: {
    "x-api-key": "ec5fbc97-8313-4c5d-ac09-3e59940a364b",
  },
};
const TraditionalComparableListing = (props) => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.mashvisor.com/v1.1/client/neighborhood/${props.propertyId}/traditional/listing?format=json&items=9&order=desc&page=1&pid=325215&sort_by=address&state=ny`;

  const [comparableListings, setComparableListings] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(url, config);
      setComparableListings(response.data.content.results);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Traditional Comparable Listings</h1>
      <ul>
        {comparableListings.map((comparableListing) => {
          return (
            <li key={comparableListing.id}>
              <h2>Title: {comparableListing.title}</h2>
              <p>sqft: {comparableListing.sqft}</p>
              <p>Price: {comparableListing.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TraditionalComparableListing;
