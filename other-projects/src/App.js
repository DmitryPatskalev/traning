// import AppProject_1 from "./Project_1/AppProject_1";
// import AppProject_2 from "./Project_2/AppProject_2";
// import AppProject_3 from "./Project_3/AppProject3";
// import AppProject_4 from "./Project_4/AppProject_4";
// import AppStore from "./Project_5/AppStore";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./Project_6/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>

      {/* <AppProject_1 /> */}
      {/* <AppProject_2 /> */}
      {/* <AppProject_3 /> */}
      {/* <AppProject_4 /> */}
      {/* <AppStore /> */}
    </div>
  );
}

export default App;
