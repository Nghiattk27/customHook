import { createContext, useEffect } from 'react';
import './App.css';
import CustomUseEffect from './CustomUseEffect';
import useFetch from './useFetch';
import useFormat from './useFormat';
import ContextA from './CustomUsecontext/ContextA';

function App() {

  // const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1")

  // if (loading) return <h1> Loading...</h1>;

  // if (error) console.log(error);

  const arr = [15, 16, 17]

  const { a } = useFormat(...arr, 20);

  const theme = createContext();

  console.log(theme);

  return (
    <theme.Provider value={theme} >
      <div className="App">
        {/* <h1>{data?.userId} : {data?.title}</h1> */}
        <h1>{a}</h1>
        <CustomUseEffect />
        <ContextA />
      </div>
    </theme.Provider>
  );
}

export default App;
