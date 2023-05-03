import ShowData from './components/ShowData';
import ShowError from './components/ShowError';
import ShowLoading from './components/ShowLoading';

export default function App() {
  
  return (
    <div id="app">      
      <ShowData /> 
      <ShowLoading />
      <ShowError />    
    </div>
  );
}