import React, {useContext, useEffect, useState} from 'react';
import axios from "axios"; 
import { getCurrentPosition } from "../utils/helperFunction"; 
import Card  from '../components/Card';
import "../style/Card.css";

const Search = (props) => {
 const [searchResults, setSearchResults] = useState(); 

  useEffect(()=>{
    const fetchCoordinates = async (e) => {
      const { coords } = await getCurrentPosition();
      const { latitude, longitude } = coords;
      handleSearch(latitude, longitude); 
    };
    fetchCoordinates();
  },[])

  async function handleSearch(latitude, longitude){
    console.log(latitude, longitude); 
    console.log("sending search to api"); 
    const response = await axios.post(`/api/restaurant/yelp`,{
      lat: latitude,
      lng: longitude
    });
    const {data} = response; 
    setSearchResults(data);
}

const renderRestaurants = () => {
  const { businesses } = searchResults;
  const splitArray = props.chunk(businesses, 3);
  console.log(splitArray)
  return splitArray.map((row, key) => {
    return (
      <div className="row rest-row" key={key}>
        {row.map((restaurant, i) => {
          return (
            <div className="col-xs-12 col-lg-3" key={i}>
              <Card key={i} restaurant={restaurant} type="restaurant"/>
            </div>
          );
        })}
      </div>
    );
  });
};

return ( 
  <div className="container">
    <div className="display-results">
    <h3 className="heading">Ramen restaurants near you</h3>
    { searchResults ? renderRestaurants() : "Hey! We are looking for ramen restaurants in your area!" }
    </div>
  </div>
 );
}
 
export default Search;