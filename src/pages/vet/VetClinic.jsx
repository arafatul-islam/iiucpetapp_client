import React from "react";
import useFetch from "../../components/hooks/useFetch";
import "../../components/showData/showData.css";
const VetClinic = () => {
  const { data } = useFetch(`/vets/getvets`);
  return (
    <>
      <div>
        {data.map((vet) => (
          <div className="container">
            <div className="card__wrap--outer">
              <div classNameName="card__wrap--inner">
                <div className="card">
                  <div className="card__item">
                    <h2>Doctor{vet.vetname}</h2>
                    <p>
                      <small>Address: {vet.address}</small>
                    </p>
                    <p>
                      <small>Phone: {vet.phone}</small>
                    </p>
                    <p>
                      <small>
                        Location: <a href={vet.glocation}>{vet?.glocation}</a>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VetClinic;
