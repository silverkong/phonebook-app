import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

const PhoneSearch = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="연락처 검색"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button id="basic-addon2" variant="primary">
        검색
      </Button>
    </InputGroup>
  );
};

export default PhoneSearch;
