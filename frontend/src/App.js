import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './components/WelcomePage';
import WelcomePage from './components/WelcomePage';
import OccupationPage from './components/OccupationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<WelcomePage />}>
          <Route index element={<WelcomePage />} />
          <Route path="Occupation" element={<OccupationPage />} />
        </Route> */}
        <Route path="/" element={<WelcomePage />}></Route>
          <Route index element={<WelcomePage />} />
          <Route path="Occupation" element={<OccupationPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
