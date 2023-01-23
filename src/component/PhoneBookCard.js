import React from "react";
import icUser from "../img/img_user.svg";

import { useSelector } from "react-redux";

const PhoneBook = () => {
  const name = useSelector((state) => state.name);
  return (
    <div className="box-phonebook">
      <img src={icUser} alt="" />
      <div className="box-phonebook-contents">
        <h4>{name}</h4>
        <span>전화번호</span>
      </div>
    </div>
  );
};

export default PhoneBook;
