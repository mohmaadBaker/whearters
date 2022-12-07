import { useState } from 'react';
import './App.scss'
import { GlobalContext } from './Comp/context'
import Search from './Search';
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";

function App() {
  const [getData, setGetData] = useState(1);
  function update() {
    setGetData(0);
  }
  return (
    <GlobalContext.Provider
      value={{ update }}
    >

      <div className="app min-hv-100">
        {/* <img src={storm} alt="storm icon" /> */}
        <Search />

        <main className="app__main">

        </main>

      </div>
    </GlobalContext.Provider>
  );
}
export default App;