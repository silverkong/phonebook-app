import React from "react";
import { Form, Button } from "react-bootstrap";

const Input = () => {
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
      <Button variant="primary" type="submit">
        저장
      </Button>
    </Form>
  );
};

export default Input;
