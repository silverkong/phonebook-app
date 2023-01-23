import React from "react";
import { Form, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const savePhoneBook = (event) => {
    event.preventDefault();
    dispatch({ type: "SAVE", payload: { name: "ff", phone: "0101111" } });
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름 입력" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="tel" placeholder="전화번호 입력" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={savePhoneBook}>
        저장
      </Button>
    </Form>
  );
};

export default Input;
