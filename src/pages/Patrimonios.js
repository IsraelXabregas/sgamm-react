import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Spinner } from 'reactstrap';
import api from "../services/api";
import PatrimonioTable from "../components/patrimonios/PatrimonioTable";
import PatrimonioDetalhesModal from "../components/patrimonios/PatrimonioDetalhesModal";
import PatrimonioBaixaModal from "../components/patrimonios/PatrimonioBaixaModal";

export default class Patrimonios extends Component {
    state = {
        loading: true,
        patrimonios: [],
        detalhesPatrimonio: {},
        baixaPatrimonio: {},
        openModalDetalhes: false,
        openModalBaixa: false
    };

    async componentDidMount() {
        try {
            this.setState({ loading: true });
            const { data } = await api.get('patrimonios');
            this.setState({ patrimonios: data })
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({ loading: false })
        }
    }

    prepareDetalhes = (data) => {
        this.setState({ detalhesPatrimonio: data });
        this.toggleModalDetalhes();
    };

    toggleModalDetalhes = () => {
        this.setState({ openModalDetalhes: !this.state.openModalDetalhes });
    };

    prepareBaixa = (data) => {
        this.setState({ baixaPatrimonio: data, });
        this.toggleModalBaixa();
    };

    toggleModalBaixa = () => {
        this.setState({ openModalBaixa: !this.state.openModalBaixa });
    };

    removePatrimonio = async (id) => {
        try {
            window.confirm('Deseja remover o patrimônio?') && await api.delete(`patrimonios/${id}`)
                .then(() => this.setState({ patrimonios: [...this.state.patrimonios.filter(pat => pat.id !== id)] }))
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        const { patrimonios, detalhesPatrimonio, baixaPatrimonio, loading, openModalDetalhes, openModalBaixa } = this.state;
        const loader = <div className="text-center"><Spinner type="grow" color="primary"
            style={{ width: '5rem', height: '5rem' }} /></div>;
        return (
            <Container fluid>
                <Card>
                    <CardHeader className="text-center text-white bg-secondary">
                        Patrimônios
                    </CardHeader>
                    <CardBody>
                        {loading ? loader :
                            <PatrimonioTable patrimonios={patrimonios} prepareDetalhes={this.prepareDetalhes}
                                prepareBaixa={this.prepareBaixa} remove={this.removePatrimonio} />}
                    </CardBody>
                </Card>
                <PatrimonioDetalhesModal isOpen={openModalDetalhes} toggle={this.toggleModalDetalhes}
                    patrimonio={detalhesPatrimonio} />
                <PatrimonioBaixaModal isOpen={openModalBaixa} toggle={this.toggleModalBaixa}
                    patrimonio={baixaPatrimonio} />
            </Container>
        );
    }
}