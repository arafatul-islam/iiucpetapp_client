import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./reserve.css";
import axios from "axios";
const Reserve = ({ setOpen, fcID }) => {
  const [checkedCages, setChekedCages] = useState([]);
  const { data, loading, err } = useFetch(`/fostercenter/cage/${fcID}`);
  const { dates } = useContext(SearchContext);

  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  };
  const allDates = getDateInRange(dates[0].startDate, dates[0].endDate);

  const handleCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;

    setChekedCages(
      checked
        ? [...checkedCages, value]
        : checkedCages.filter((item) => item !== value)
    );
  };

  const isAvailable = (cageNumber) => {
    const isFound = cageNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleReserve = async (e) => {
    try {
      await Promise.all(
        checkedCages.map((cageID) => {
          const res = axios.put(`/cages/availability/${cageID}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
    } catch (error) {}
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />

        <span> Select Pet Cage:</span>
        {data.map((item) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.description}</div>
              <div className="rMax">{item.maxPet}</div>
              <div className="rPrice">{item.price}</div>

              <div className="rSelectCages">
                {item.cageNumbers.map((cageNumber) => {
                  return (
                    <div className="rCage">
                      <label> {cageNumber.number} </label>
                      <input
                        type="checkbox"
                        value={cageNumber._id}
                        onChange={handleCheck}
                        disabled={!isAvailable(cageNumber)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        <button className="rButton" onClick={handleReserve}>
          {" "}
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
