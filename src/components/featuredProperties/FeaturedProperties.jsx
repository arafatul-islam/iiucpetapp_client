import "./featuredProperties.css";
import useFetch from "../hooks/useFetch";
import defaultFPimg from "../../assets/hamster.jpg";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/fostercenter/find?limit=4");
  const dfimg =
    "https://images.unsplash.com/photo-1602081114407-99c109e945c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {" "}
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0] || dfimg}
                alt={item.name}
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
