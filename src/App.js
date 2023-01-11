import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAdduser = (uName, uAge) => {
    setUserList((prevList) => {
      return [...prevList, { name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <AddUser onAdduser={onAdduser} />
      {userList.length > 0 && <UserList Users={userList} />}
      
    </div>
  );
}

export default App;
