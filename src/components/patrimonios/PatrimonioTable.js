import React, {Component} from 'react';
import {Button, Table} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons'

export default class PatrimonioTable extends Component {
    render() {
        const {patrimonios} = this.props;
        return (
            <>
                {patrimonios.length > 0 ?
                    <Table
                        size="sm"
                        responsive
                        bordered
                        striped
                        className="text-center"
                    >
                        <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Data Aquisição</th>
                            <th>Local</th>
                            <th>Origem</th>
                            <th>Dono/Valor</th>
                            <th>Situação</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        {patrimonios.map(pat => (
                            <tr key={pat.id}>
                                <td>{pat.codigo}</td>
                                <td>{pat.descricao}</td>
                                <td>{pat.data_aquisicao}</td>
                                <td>{pat.local}</td>
                                <td>{pat.origem}</td>
                                <td>{pat.ddv}</td>
                                <td>{pat.situacao}</td>
                                <td>
                                    <Button size="sm" onClick={() => this.props.prepareDetalhes(pat)}><FontAwesomeIcon
                                        icon={faEye}/></Button>
                                    <Button color="info" size="sm" className="ml-1"><FontAwesomeIcon
                                        icon={faEdit}/></Button>
                                    <Button color="warning" size="sm" className="ml-1"
                                            onClick={() => this.props.prepareBaixa(pat)}><FontAwesomeIcon
                                        icon={faArrowDown}/></Button>
                                    <Button color="danger" size="sm" className="ml-1" onClick={() => this.props.remove(pat.id)}><FontAwesomeIcon
                                        icon={faTrash}/></Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    : <div className="text-center">Nenhum dado encontrado.</div>
                }

            </>
        );
    }
}
