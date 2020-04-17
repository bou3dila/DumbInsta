import React from "react";

import UsersList from "../components/UsersList";

const USERS = [
  {
    id: "u1",
    name: "MaxScwaz",
    image: "https://static3.bigstockphoto.com/1/3/3/large1500/331752298.jpg",
    places: 3,
  },
];

const User = () => {
  return <UsersList items={USERS} />;
};

export default User;
