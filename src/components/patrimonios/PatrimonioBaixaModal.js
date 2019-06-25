import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import api from "../../services/api";

export default class PatrimonioBaixaModal extends Component {
    state = {
        motivoBaixa: '',
        dataBaixa: '',
        obsBaixa: ''
    };

    handleSubmit = async () => {
        const id = this.props.patrimonio.id;
        try {
            await api.put(`patrimonios/${id}`, {
                motivo_baixa: this.state.motivoBaixa,
                obs_baixa: this.state.obsBaixa,
                data_baixa: this.state.dataBaixa,
                situacao: 'Baixado'
            });
        } catch (e) {
            console.log(e);
        } finally {
            this.props.toggle();
        }
    };

    render() {
        const {isOpen, toggle, className} = this.props;
        const {codigo} = this.props.patrimonio;
        const {motivoBaixa, dataBaixa, obsBaixa} = this.state;
        return (
            <>
                <Modal isOpen={isOpen} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Baixa Patrimônio {codigo}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="motivo">Motivo da Baixa</Label>
                                <Input type="select" name="motivo_baixa" id="motivo"
                                       value={motivoBaixa}
                                       onChange={e => this.setState({motivoBaixa: e.target.value})}>
                                    <option value="">Selecione</option>
                                    <option value="Venda">Venda</option>
                                    <option value="Doação">Doação</option>
                                    <option value="Inutilização">Inutilização</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="obs">Observação</Label>
                                <Input type="textarea" name="obs_baixa" id="obs"
                                       value={obsBaixa}
                                       onChange={e => this.setState({obsBaixa: e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="data">Data da Baixa</Label>
                                <Input type="date" name="data_baixa" id="data" placeholder="Selecione"
                                       value={dataBaixa}
                                       onChange={e => this.setState({dataBaixa: e.target.value})}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.handleSubmit()}>Salvar</Button>
                        <Button onClick={toggle}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}