import React from 'react';
import { Table, Button, Col, Row, Badge } from 'reactstrap';

export default function TrableEncontros(props) {
    const { encontros } = props;

    function formatSituacao(data) {
        if (data === 'CONFIRMADO') {
            return <Badge color="success">{data}</Badge>;
        } else if (data === 'REALIZADO') {
            return <Badge color="dark">{data}</Badge>;
        } else if (data === 'PENDENTE') {
            return <Badge color="warning">{data}</Badge>;
        } else {
            return <Badge color="danger">{data}</Badge>;
        }
    }

    function formatDate(data) {
        let date = new Date(data);
        return date.toLocaleDateString();
    }

    function formatHour(hora) {
        return hora.substr(0, 5) + 'h';
    }

    return (
        <Row className="mt-3">
            <Col>
                <Table striped bordered hover responsive className="text-center">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descrição Resumida</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Confirmados</th>
                            <th>Situação</th>
                            <th style={{ width: '150px' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {encontros.map((enc) =>
                            <tr key={enc.id}>
                                <td>{enc.titulo}</td>
                                <td>{enc.descricao.substr(0, 40)}...</td>
                                <td>{formatDate(enc.data)}</td>
                                <td>{formatHour(enc.hora)}</td>
                                <td>5</td>
                                <td>{formatSituacao(enc.situacao)}</td>
                                <td>
                                    <Button color="info" size="sm" title="Detalhes">D</Button>
                                    <Button color="primary" size="sm" className="ml-1" title="Participantes">P</Button>
                                    <Button color="secondary" size="sm" className="ml-1" title="Detalhes">E</Button>
                                    <Button color="danger" size="sm" className="ml-1" title="Remover">R</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}