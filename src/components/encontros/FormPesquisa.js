import React from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button, Col, Row } from 'reactstrap';

export default function FormPesquisa(props) {

    function handleClearForm(e) {
        e.preventDefault();
    }

    return (
        <Row>
            <Col lg={5} xs={9} sm={10}>
                <Form inline >
                    <FormGroup className="mr-1">
                        <Input placeholder="Pesquisar Título" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" className="mr-2">
                            <option value="">Pesquisar Ano</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" className="mr-2">
                            <option value="">Pesquisar Mês</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>
                    <Button type="button" color="secondary" className="mr-1" onClick={(e) => handleClearForm(e)}>Limpar</Button>
                    <Button type="submit" color="info">Pesquisar</Button>
                </Form>
            </Col>
            <Col lg={7} xs={3} sm={2} className="clearfix">
                <Link to="/encontros/novo">
                    <Button color="info" className="float-right">CRIAR NOVO</Button>
                </Link>
            </Col>
        </Row>
    );
}