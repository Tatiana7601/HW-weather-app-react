import './App.css'
import Info from "./components/Info.jsx";
import Data from "./components/Data.jsx";

function App() {
  return(
      <div className={'wrapper'}>
          <div className={'main'}>
              <div className={'container'}>
                  <div className={'row'}>
                      <div className={'col-4 info'}>
                          <Info/>
                      </div>
                      <div className={'col-7 form'}>
                          <Data/>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default App
