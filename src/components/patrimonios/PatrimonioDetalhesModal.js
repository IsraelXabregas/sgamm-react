import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";

const PatrimonioDetalhesModal = (props) => {
    return (
        <>
            <Modal isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
                <ModalHeader toggle={props.toggle}>Detalhes Patrimônio {props.patrimonio.codigo}</ModalHeader>
                <ModalBody>
                    <Table
                        size="sm"
                        responsive
                        bordered
                        striped
                    >
                        <tbody>
                        <tr>
                            <td>Código</td>
                            <td>{props.patrimonio.codigo}</td>
                        </tr>
                        <tr>
                            <td>Descrição</td>
                            <td>{props.patrimonio.descricao}</td>
                        </tr>
                        <tr>
                            <td>Data Aquisição</td>
                            <td>{props.patrimonio.data_aquisicao}</td>
                        </tr>
                        <tr>
                            <td>Local</td>
                            <td>{props.patrimonio.local}</td>
                        </tr>
                        <tr>
                            <td>Origem</td>
                            <td>{props.patrimonio.origem}</td>
                        </tr>
                        <tr>
                            <td>Dono/Valor</td>
                            <td>{props.patrimonio.ddv}</td>
                        </tr>
                        <tr>
                            <td>Situação</td>
                            <td>{props.patrimonio.situacao}</td>
                        </tr>
                        <tr>
                            <td>Motivo Baixa</td>
                            <td>{props.patrimonio.motivo_baixa}</td>
                        </tr>
                        <tr>
                            <td>Obs Baixa</td>
                            <td>{props.patrimonio.obs_baixa}</td>
                        </tr>
                        <tr>
                            <td>Data Baixa</td>
                            <td>{props.patrimonio.data_baixa}</td>
                        </tr>
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default PatrimonioDetalhesModal;
