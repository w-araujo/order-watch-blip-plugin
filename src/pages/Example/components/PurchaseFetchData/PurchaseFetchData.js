import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import useFetch from '../../../../hooks/useFetch';

import Header from '../Header';

import './styles.css';

const PurchaseFetchData = ({ onClick }) => {
    const { t } = useTranslation();

    const { data: notDeliveredData } = useFetch(`/api/Purchase/not-delivered`);
    const { data: deliveredData } = useFetch(`/api/Purchase/delivered`);
    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header
                title={t('menu.goBack')}
                canRefresh
                onClick={onClick}
            />
            <h1>Pedidos não Entregues:</h1>
            <ul className="ul-not-delivered">
                {notDeliveredData ? ( notDeliveredData.map(order => (
                    <li className="li-not-delivered" style={{ borderBottom: order.Status === "Entregue" ? '15px solid green': '15px solid red'}}>
                        <h2>{order.User.Name}</h2>
                        <h3>Produto: {order.Product.Name}</h3>
                        <h3>Preço: {order.Product.Price}</h3>
                        <h3>Está Pago: {order.IsPaid ? "Pago" : "Não pago"}</h3>
                        <h3>Status: {order.Status}</h3>
                        <h3>Data: {new Date(order.CreatedAt).toLocaleDateString()}</h3>
                    </li>
                ))) : (
                    <li>Loading...</li>
                )}
            </ul>

            <h1 style={{marginTop: 50}}>Pedidos Entregues:</h1>

            <ul className='ul-delivered'>
                {deliveredData ? ( deliveredData.map(order => (
                    <li className='li-delivered' style={{ borderBottom: order.Status === "Entregue" ? '15px solid green': '15px solid red' }}>
                        <h2>{order.User.Name}</h2>
                        <h3>Produto: {order.Product.Name}</h3>
                        <h3>Preço: {order.Product.Price}</h3>
                        <h3>Está Pago: {order.IsPaid ? "Pago" : "Não pago"}</h3>
                        <h3>Status: {order.Status}</h3>
                    </li>
                ))) : (
                    <li>Loading...</li>
                )}
            </ul>
        </div>
    );
};

PurchaseFetchData.propTypes = {
    onClick: PropTypes.func
};

export default PurchaseFetchData;
