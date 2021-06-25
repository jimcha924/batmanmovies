import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Modal, Button } from "react-bootstrap";



const Batman = ({data}) => {
  return <>
    {data.map(movieObj =>{
        return <>

        <div style={{flexDirection: "row"}}>
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={movieObj.Poster} className="img-thumbnail"/>
            <Card.Body>
              <Card.Title>{movieObj.Title}</Card.Title>
              <Card.Text>
                {movieObj.Year}
              </Card.Text>
              <Modal>
              <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Modal body text goes here.</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal>
            </Card.Body>
          </Card>
        </div>
          </>;
})}
</>;
    };



export default Batman;
