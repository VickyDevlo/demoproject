import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = ({ Users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {Users.map((items, index) => (
          <li key={index}>
            {items.name} - ( {items.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
