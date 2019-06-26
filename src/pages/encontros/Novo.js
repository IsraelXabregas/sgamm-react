import React, { useState } from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";
import { Container, Card, CardHeader, CardBody, Form, FormGroup, Input, Button, Col, Row, Label, Spinner } from 'reactstrap';

export default function Novo(props) {
    const { history } = props;

    const [loading, setLoading] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [organizador, setOrganizador] = useState('');
    const [descricao, setDescricao] = useState('');
    const [telefoneOrganizador, setTelefoneOrganizador] = useState('');
    const [local, setLocal] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [situacao, setSituacao] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const dados = {
            titulo: titulo,
            data: data,
            hora: hora,
            organizador: organizador,
            descricao: descricao,
            telefone_organizador: telefoneOrganizador,
            local: local,
            endereco: endereco,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            pais: pais,
            situacao: situacao
        }

        try {
            setLoading(true);
            await api.post(`encontros/`, dados);
            alert('Criado com sucesso');
            history.push("/encontros");
        } catch (exception) {
            console.log(exception.message);
        } finally {
            setLoading(false);
        }

    }

    const loader = <div className="text-center mt-3"><Spinner type="grow" color="primary" style={{ width: '4rem', height: '4rem' }} /></div>;

    return (
        <Container>
            <Card>
                <CardHeader className="text-center text-white bg-secondary">Cadastrar Novo Encontro</CardHeader>
                <CardBody>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Form onSubmit={handleSubmit}>
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="titulo">Título*:</Label>
                                            <Input name="titulo" id="titulo" maxLength={30} value={titulo} onChange={(e) => setTitulo(e.target.value)} autoFocus required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="data">Data:</Label>
                                            <Input type="date" name="data" id="data" maxLength={30} value={data} onChange={(e) => setData(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label for="hora">Hora:</Label>
                                            <Input type="time" name="hora" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="organizador">Organizador:</Label>
                                            <Input name="organizador" id="organizador" maxLength={40} value={organizador} onChange={(e) => setOrganizador(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Label for="descricao">Descrição*:</Label>
                                            <Input type="textarea" name="descricao" id="descricao" maxLength={500} rows={5} value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label for="telefone_organizador">Telefone Organizador:</Label>
                                            <Input id="telefone_organizador" maxLength={15} value={telefoneOrganizador} onChange={(e) => setTelefoneOrganizador(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="local">Local*:</Label>
                                            <Input id="local" maxLength={40} value={local} onChange={(e) => setLocal(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="endereco">Endereço*:</Label>
                                            <Input id="endereco" maxLength={50} value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label for="bairro">Bairro*:</Label>
                                            <Input id="bairro" maxLength={30} value={bairro} onChange={(e) => setBairro(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="cidade">Cidade*:</Label>
                                            <Input id="cidade" maxLength={32} value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="estado">Estado*:</Label>
                                            <Input id="estado" maxLength={20} value={estado} onChange={(e) => setEstado(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label for="pais">País*:</Label>
                                            <Input id="pais" maxLength={20} value={pais} onChange={(e) => setPais(e.target.value)} required />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="situacao">Situação*:</Label>
                                            <Input type="select" id="situacao" value={situacao} onChange={(e) => setSituacao(e.target.value)} required>
                                                <option value="">Selecione</option>
                                                <option value="PENDENTE">Pendente</option>
                                                <option value="CONFIRMADO">Confirmado</option>
                                                <option value="REALIZADO">Realizado</option>
                                                <option value="CANCELADO">Cancelado</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Label className="small text-danger">* Obrigatórios</Label>
                                <Row>
                                    <Col>
                                        <Link to="/encontros">
                                            <Button type="button">VOLTAR</Button>
                                        </Link>
                                        <Button type="submit" color="info" className="ml-2">SALVAR</Button>
                                        {loading && loader}
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
}