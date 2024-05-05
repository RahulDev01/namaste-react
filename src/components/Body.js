import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfResturants, setListOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
