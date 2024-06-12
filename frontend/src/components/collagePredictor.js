import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Collagepredictor = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/graph_data_roundwise', {
                    params: {
                        round: 6,
                        iit: 'Indian Institute  of Technology Bombay',
                        programname: 'Aerospace Engineering'
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Collagepredictor;
