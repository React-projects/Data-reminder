import { person } from "./api/data";
import DatesCounts from "./components/DatesCounts";
import DatesActions from "./components/DatesActions";
import DatesList from "./components/DatesList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [PersonData, setPersonData] = useState(person);
  useEffect(() => {
    setPersonData([]);
  }, []);

  const deletedDate = () => {
    setPersonData([]);
  };
  const viewData = () => {
    setPersonData(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCounts person={PersonData} />
        <DatesList person={PersonData} />
        <DatesActions deletedDate={deletedDate} viewData={viewData} />
      </Container>
    </div>
  );
}

export default App;
