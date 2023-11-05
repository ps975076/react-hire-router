import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";

// 3. Link the routes
import { Route, Routes, useNavigate } from "react-router-dom";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);
  const [people, setPeople] = useState([]);
  const goTo = useNavigate();

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

  const handleHire = (person) => {
    const hiredPs = [...hiredPeople];
    const existingPerson = hiredPs.find(
      (p) => p.login.uuid === person.login.uuid
    );
    if (existingPerson) {
      alert(existingPerson.name.first + " is already hired");
    } else {
      // push to hiredpeople
      setHiredPeople([...hiredPeople, person]);
    }
    // route to home page
    goTo("/");
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
          // index
          path="/"
          element={<Dashboard hiredPeople={hiredPeople} people={people} />}
        />
        <Route
          path="/view/:id"
          element={<PersonProfile handleHire={handleHire} people={people} />}
        />
      </Routes>
    </>
  );
}
