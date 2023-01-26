import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PhoneSearch = () => {
  const navigate = useNavigate();

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="연락처 검색"
        onKeyDown={(event) => search(event)}
      />
      <Button id="basic-addon2" variant="primary">
        검색
      </Button>
    </InputGroup>
  );
};

export default PhoneSearch;
