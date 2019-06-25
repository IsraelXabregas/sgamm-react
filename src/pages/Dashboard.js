import React, { useState, useEffect } from 'react';

export default function Dashboard() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('Dashboard');
    }, []);

    return (
        <>
            <h2>{title}</h2>
        </>
    );
}