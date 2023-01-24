import React from "react";
import icUser from "../img/img_user.svg";

import { useSelector } from "react-redux";

const PhoneBook = () => {
  const name = useSelector((state) => state.name);
  const phone = useSelector((state) => state.phone);
  return (
    <div className="box-phonebook">
      <img src={icUser} alt="" />
      <div className="box-phonebook-contents">
        <h4>{name}</h4>
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default PhoneBook;
