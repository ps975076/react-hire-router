import { Link } from "react-router-dom";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <Link to={`/view/${person?.login?.uuid}`}>
        {person?.name?.first} {person?.name?.last}
      </Link>
      {person?.wage && <p>Wage: £{person?.wage}</p>}
      {/* <p>Wage: £100</p> */}
    </li>
  );
}

export default PeopleListItem;
