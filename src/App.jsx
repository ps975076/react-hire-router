import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";

// 3. Link the routes
import { Route, Routes } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);

  // 1. Start with fetching the API data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results, "results");
        setPeople(res.results);
      });
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
          </ul>
        </nav>
      </header>

      {/* <Dashboard hiredPeople={hiredPeople} /> */}
      <Routes>
        <Route
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route path="/view/:id" element={<PersonProfile people={people} />} />
      </Routes>
    </>
  );
}
