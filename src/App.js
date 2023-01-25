import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import PhoneInput from "./component/PhoneInput";
import PhoneBookList from "./component/PhoneBookList";

// 리덕스를 활용하여 해당 프로젝트 생성
// 1. 이름과 핸드폰 번호를 적을 입력 풋이 있음
// 2. create 버튼을 누르면 오른쪽에 카드 형태로 저장되어 보이게 됨
// 3. 오른쪽 상단에는 검색 영역이 있음
// 4. 연락처의 총 갯수가 오른쪽 검색 영역 하단에 노출됨
// 5. 연락처를 검색할 수 있음

function App() {
  return (
    <Container>
      <Row>
        <h1 className="txt-title">Phone Book (Redux Ver.)</h1>
      </Row>
      <Row>
        <Col className="col-left">
          <PhoneInput />
        </Col>
        <Col>
          <PhoneBookList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
