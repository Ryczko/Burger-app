import React, { useState, useEffect } from 'react';
import axios from 'axios-orders'
import Order from 'components/Order/Order'
import PacmanLoader from "react-spinners/PacmanLoader";
import withErrorHandler from 'hoc/withErrorHandler'

function Orders(props) {

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        axios.get('orders.json')
            .then(res => {
                const ordersTemp = [];
                for (const key in res.data) {
                    ordersTemp.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setOrders(ordersTemp);

                setLoading(false);
            })
            .catch(er => { console.log(er) })



    })
    return (
        <div>
            {loading ? <PacmanLoader /> :
                orders.map(el => <Order key={el.id} price={el.price} ingredients={el.ingredients} />)
            }

        </div>
    );
}

export default withErrorHandler(Orders, axios);