import React, { useState, useEffect } from 'react';

export default function Filiados() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('Filiados');
    }, []);

    return (
        <>
            <h2>{title}</h2>
        </>
    );
}