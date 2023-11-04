import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HireForm from "./components/HireForm";

function PersonProfile({ people }) {
  const [person, setPerson] = useState(null);
  const loc = useLocation();

  useEffect(() => {
    const id = loc.pathname.split("/")[2];
    const per = people.find((p) => p.login.uuid == id);
    setPerson(per);
    // console.log(id, per);
  }, [people, location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
