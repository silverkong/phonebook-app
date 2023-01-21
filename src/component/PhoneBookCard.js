import React from "react";
import icUser from "../img/img_user.svg";

const PhoneBook = () => {
  return (
    <div className="box-phonebook">
      <img src={icUser} alt="" />
      <div className="box-phonebook-contents">
        <h4>이름</h4>
        <span>전화번호</span>
      </div>
    </div>
  );
};

export default PhoneBook;
