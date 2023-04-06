import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import HireABus from "./components/HireABus";
import Settings from "./components/Settings";
import CreateATrip from "./components/CreateATrip";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/hireABus" element={<HireABus />} />
             <Route path="/settings" element={<Settings />} />
           <Route path="/search" element={<SearchPage />} />
           <Route path="/create-a-trip" element={<CreateATrip />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


