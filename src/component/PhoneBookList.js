import React from "react";
import PhoneSearch from "./PhoneSearch";
import PhoneBookCard from "./PhoneBookCard";
import { useSelector } from "react-redux";

const PhoneBookList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <PhoneSearch />
      <span>총 {contactList.length}명</span>
      {contactList.map((item) => (
        <PhoneBookCard item={item} />
      ))}
    </div>
  );
};

export default PhoneBookList;
