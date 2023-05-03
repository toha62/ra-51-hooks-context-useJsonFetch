import useJsonFetch from "../hooks/useJsonFetch";
import Loading from './Loading';

export default function ShowError() {
  const [data, isLoading, error] = useJsonFetch(import.meta.env.VITE_URL, '/error');
  console.log(data, isLoading, error);
  return (
    <>
      {isLoading && <Loading />}
      <div className="card" style={{width: "18rem"}}>      
        <div className="card-body">
          <h5 className="card-title">Error loading</h5>
          <p className="card-text">Data: {JSON.stringify(data)}</p>
          {error && <p className="card-text">Error: {error.message}</p>}      
        </div>
      </div>
    </>    
  );
}
