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

        return function cleanup() {
            console.log('dasda');
        };
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
                            <TableEncontros encontros={encontros} />
                        </>
                    }
                </CardBody>
            </Card>
        </Container>
    );
}