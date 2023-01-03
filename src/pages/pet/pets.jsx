import useFetch from "../../components/hooks/useFetch";
import ShowData from "../../components/showData/ShowData";

const Pets = () => {
  const { data } = useFetch("/pet/allpets");

  return (
    <>
      {data.map((show) => (
        <ShowData show={show} />
      ))}
    </>
  );
};

export default Pets;
