import {  Col,  Row } from "react-bootstrap";

function DatesActions({viewData,deletedDate}) {
  return (
    <div>
       <Row className="justify-content-center ">
          <Col sm="8" className="d-flex justify-content-between ">
            <button  onClick={deletedDate} className="btn-style p-2">مسح الكل</button>
            <button onClick={viewData} className="btn-style p-2">عرص البيانات </button>
          </Col>
        </Row>
    </div>
  )
}

export default DatesActions
