import styles from './Status.module.css';
import { useState, useEffect } from 'react';

const Status = () => {

    const [response, setResponse] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(`/nse/get_market_status`, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setResponse(data.status)
            })
    }, []);

    if(response === 'open') {
        return (
            <div className={styles.statusOpen}>
                Market Status: {response}
            </div>
        )
    }
    else {
        return (
            <div className={styles.statusClosed}>
                Market Status: {response}
            </div>
        )
    }

}

export default Status;