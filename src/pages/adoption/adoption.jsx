import useFetch from "../../components/hooks/useFetch";
const Adoption = () => {
  const { data, error, loading } = useFetch(`/adoption//getalladoptions`);

  console.log(data, loading, error);

  return <div>adoption</div>;
};

export default Adoption;
