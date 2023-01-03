import "./featured.css";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/fostercenter/countbycity?cities=chittagong,coxbazar,dhaka"
  );

  const photos = [
    "https://images.unsplash.com/photo-1612625376899-c4de74027429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpdHRhZ29uZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626239889138-a7e4f971059e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1624395148974-f929045c9093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80",
  ];
  const cities = ["Chittagong", "Cox Bazar", "Dhaka"];
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {photos.map((img, idx) => (
            <div className="featuredItem">
              <img src={img} alt="city" className="featuredImg" />
              <div className="featuredTitles">
                <h1 style={{ textTransform: "capitalize" }}>{cities[idx]}</h1>
                <h2>{data[idx]} properties</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;
