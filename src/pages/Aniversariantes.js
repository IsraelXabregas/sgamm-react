import React, { useState, useEffect } from 'react';

export default function Aniversariantes() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('Aniversariantes');
    }, []);

    return (
        <>
            <h2>{title}</h2>
        </>
    );
}