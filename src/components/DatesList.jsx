import {  Col,  Row } from "react-bootstrap";

function DatesList({person}) {
  return (
    <div>
       <Row className="justify-content-center py-3">
          <Col sm="8">
            <div className="rectangle p-3 ">
              {person.length ? (
                person.map((item) => {
                  return (
                    <div className="d-flex border-bottom mx-2" key={item.id}>
                      <figure>
                        <img
                          className="img-avatar"
                          src="me.png"
                          alt="personImg"
                        />
                      </figure>
                      <div className="px-3">
                        <p className="d-inline fs-4">{item.name} </p>
                        <p className="fs-9"> {item.date} </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2 className="py-5 text-center"> لا يوجد بيانات </h2>
              )}
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default DatesList
