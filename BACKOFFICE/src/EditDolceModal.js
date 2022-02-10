import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditDolceModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("https://localhost:44307/api/Dolci/" + event.target.id.value, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:event.target.id.value,
                nome:event.target.nome.value,
                prezzo:event.target.prezzo.value,
                quantita:event.target.quantita.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert("Aggiornamento completato con successo");
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Dolce
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Label>Id dolce</Form.Label>
                                        <Form.Control type="text" name="id" required disabled defaultValue={this.props.dlcid}/>
                                    </Form.Group>

                                    <Form.Group controlId="Nome">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text" name="nome" required defaultValue={this.props.dlcnome} placeholder="Nome del dolce"/>
                                    </Form.Group>

                                    <Form.Group controlId="Prezzo">
                                        <Form.Label>Prezzo</Form.Label>
                                        <Form.Control type="text" name="prezzo" required defaultValue={this.props.dlcprezzo} placeholder="Prezzo del dolce"/>
                                    </Form.Group>

                                    <Form.Group controlId="Quantita">
                                        <Form.Label>Quantità</Form.Label>
                                        <Form.Control type="text" name="quantita" required defaultValue={this.props.dlcquantita} placeholder="Quantità pezzi disponibili"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Edit Dolce
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}