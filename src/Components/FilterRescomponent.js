import { restaurants as restaurantData } from "/src/app.js";

const FilterRescomponent = ({ setListOfRestaurants }) => {
  const handledoubleClick = () => {
    setListOfRestaurants(restaurantData);
  };
  const handleClick10Min = () => {
    setListOfRestaurants(
      restaurantData.filter(
        (restaurant) => restaurant.info.sla.deliveryTime <= 10
      )
    );
  };

  const handleSortByCost = () => {
    const arr = [restaurantData.sort((a, b) => a-b)];
  };



  const handleClickOffers = () => {
    setListOfRestaurants(
      restaurantData.filter(
        (restaurant) => restaurant.info.aggregatedDiscountInfoV3?.header // added optional chaining
      )
    );
  };

  const handleClickRatings = () => {
    setListOfRestaurants(
      restaurantData.filter((restaurant) => restaurant.info.avgRating >= 4.6)
    );
  };

  const handleClick300 = () => {
    setListOfRestaurants(
      restaurantData.filter((restaurant) => {
        // Convert cost to a numeric value for proper comparison
        const cost = parseInt(restaurant.info.costForTwo.replace(/[^\d]/g, ""));
        return cost >= 300 && cost <= 600;
      })
    );
  };

  const handleClickLessThan300 = () => {
    setListOfRestaurants(
      restaurantData.filter((restaurant) => {
        const cost = parseInt(restaurant.info.costForTwo.replace(/[^\d]/g, ""));
        return cost < 300;
      })
    );
  };

  const handleClickPureVeg = () => {
    setListOfRestaurants(
      restaurantData.filter((restaurant) => restaurant.info.veg === true)
    );
  };

  return (
    <div className="search">
      <div data-testid="filter_widget" className="searchContainer">
        {/* Filter Button */}
        <div className="btn" onDoubleClick={handledoubleClick}> 
          <div className="text-element">Filter</div>
        </div>

        {/* Dropdown Chip */}
        <div className="btn" data-testid="dropdown-chip" onClick={handleSortByCost}>
          <div className="text-element">Cost: Low to High</div>
        </div>

        {/* Filter Options */}
        <div className="btn" onClick={handleClickRatings}>
          <div className="text-element">Ratings 4.6+</div>
        </div>

        <div className="btn" onClick={handleClick10Min}>
          <div className="text-element">Food in 10 mins</div>
        </div>

        <div className="btn" onClick={handleClickOffers}>
          <div className="text-element">Offers</div>
        </div>

        <div className="btn" onClick={handleClick300}>
          <div className="text-element">Rs. 300 - Rs. 600</div>
        </div>

        <div className="btn" onClick={handleClickLessThan300}>
          <div className="text-element">Less than Rs. 300</div>
        </div>

        <div className="btn" onClick={handleClickPureVeg}>
          <div className="text-element">Pure Veg</div>
        </div>
      </div>
    </div>
  );
};

export default FilterRescomponent;
