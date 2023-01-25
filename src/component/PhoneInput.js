import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

const Input = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dispatch = useDispatch();
  const savePhoneBook = (event) => {
    event.preventDefault();
    dispatch({
      type: "SAVE",
      payload: { name: name, phone: phoneNumber },
    });
  };

  return (
    <Form onSubmit={savePhoneBook}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름 입력"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="tel"
          placeholder="전화번호 입력"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  );
};

export default Input;
