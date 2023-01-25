import React from "react";
import icUser from "../img/img_user.svg";

const PhoneBook = ({ item }) => {
  return (
    <div className="box-phonebook">
      <img src={icUser} alt="" />
      <div className="box-phonebook-contents">
        <h4>{item.name}</h4>
        <span>{item.phone}</span>
      </div>
    </div>
  );
};

export default PhoneBook;
