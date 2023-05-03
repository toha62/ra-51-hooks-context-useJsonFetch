import useJsonFetch from "../hooks/useJsonFetch";
import Loading from './Loading';

export default function ShowData() {
  const [data, isLoading, error] = useJsonFetch(import.meta.env.VITE_URL, '/data');
  
  return (
    <>
      {isLoading && <Loading />}
      <div className="card" style={{width: "18rem"}}>      
        <div className="card-body">
          <h5 className="card-title">Success fetch</h5>
          <p className="card-text">Data: {JSON.stringify(data)}</p>        
          {error && <p className="card-text">Error: {error.message}</p>}
        </div>
      </div>
    </>    
  );
}
