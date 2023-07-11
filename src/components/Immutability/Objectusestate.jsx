import React, { useState } from "react";

const initState = {
  firstname: "Nathi",
  lastname: "Ajay",
};

export default function Objectusestate() {
  const [person, setPerson] = useState(initState);

  const ModifyPerson = () => {
    // person.firstname = "Afridi";
    // person.lastname = "Developer";
    // setPerson(person);

    const newPerson = { ...person };
    newPerson.firstname = "Tom";
    newPerson.lastname = "Jerry";
    setPerson(newPerson);
  };
  const ResetPerson = () => {
    setPerson(initState);
  };
  return (
    <div>
      <p>My full name is {person.firstname + " " + person.lastname}</p>
      <button onClick={ModifyPerson}>ChangePerson</button>
      <button onClick={ResetPerson}>Reset</button>
    </div>
  );
}
