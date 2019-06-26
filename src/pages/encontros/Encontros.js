import React, { useState, useEffect } from 'react';
import api from "../../services/api";
import { Card, CardBody, CardHeader, Container, Spinner } from 'reactstrap';
import FormPesquisa from '../../components/encontros/FormPesquisa';
import TableEncontros from '../../components/encontros/TableEncontros';

export default function Encontros() {
    const [encontros, setEncontros] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getEncontros();
    }, []);

    async function getEncontros(params) {
        try {
            setLoading(true);
            const { data } = await api.get('encontros');
            setEncontros(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(idEncontro, tituloEncontro) {
        window.confirm(`Deseja remover o encontro "${tituloEncontro}"?`) && await api.delete(`encontros/${idEncontro}`)
            .then((response) => {
                const { success, message, deletedId } = response.data;
                setEncontros([...encontros.filter(encontros => encontros.id !== deletedId)]);

                success && alert(message);
            })
            .catch(function (exception) {
                const { message, error } = exception.response.data;
                console.log(exception.message);
                console.log(error);
                alert(message);
            });
    }

    const loader = <div className="text-center"><Spinner type="grow" color="primary"
        style={{ width: '5rem', height: '5rem' }} /></div>;

    return (
        <Container fluid>
            <Card>
                <CardHeader className="text-center text-white bg-secondary">Encontros</CardHeader>
                <CardBody>
                    {loading ? loader :
                        <>
                            <FormPesquisa />
                            <TableEncontros encontros={encontros} handleDelete={handleDelete} />
                        </>
                    }
                </CardBody>
            </Card>
        </Container>
    );
}