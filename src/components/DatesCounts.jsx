import {  Col,  Row } from "react-bootstrap";


function DatesCounts({person}) {
  return (
    <div>
       <Row className="justify-content-center">
          <Col sm="8">لديك {person.length} مواعيد اليوم</Col>
        </Row>
    </div>
  )
}



export default DatesCounts

