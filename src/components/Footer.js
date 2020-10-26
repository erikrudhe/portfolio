import React from "react"
import { Col, Container, Row } from "react-bootstrap"

const Footer = (props)=>{
    return(
        <footer className="mt-5"  >
            <Container fluid={true}>
                <Row className="border-top jusitfy-content-start p-3">
                    <Col className="p-0">
                        Erik Rudhe
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" >
                        This page was made by me :)
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer