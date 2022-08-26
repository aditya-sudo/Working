import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../Redux/Actions/actioncreator";

function Userlist() {
  const state = useSelector((state) => state);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      await fetch(state.apiReducer.API_PATH)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setUserAction(data));
        });
    };
    fetchUsers();
  }, [dispatch, state.apiReducer.API_PATH]);

  //   useEffect(() => {
  //     setList((prevList) => prevList.filter((user) => user.name.includes(name)));
  //   }, [name]);

  const list = state.userReducer.user.filter((user) =>
    user.name.includes(name)
  );
  return (
    <div>
      <input
        placeholder="search"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {list.map((usr) => (
        <li key={usr.id}>{usr.name}</li>
      ))}
    </div>
  );
}

export default Userlist;
