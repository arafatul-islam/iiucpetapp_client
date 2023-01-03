import React from "react";
import "./showData.css";

const ShowData = ({ show }) => {
  const dfimg =
    "https://images.unsplash.com/photo-1602081114407-99c109e945c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
  return (
    <div className="container">
      <div className="card__wrap--outer">
        <div classNameName="card__wrap--inner">
          <div className="card">
            <img src={show.image || dfimg} alt={show.imageLabel} />
            <div className="card__item">
              <h2>{show.name}</h2>
              <p>
                <small>Breed: {show.breed}</small>
              </p>
              <p>
                <small>color: {show.color}</small>
              </p>
              <p>
                <small>age: {show.age}</small>
              </p>
            </div>
            <div className="card__sub"></div>
            <div className="card__item flexible">
              <small>About this pet: {show.description}</small>
            </div>
            <div className="card__item"></div>
            <div className="card__footer">
              <small>
                <button>Adopt this animal</button>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
