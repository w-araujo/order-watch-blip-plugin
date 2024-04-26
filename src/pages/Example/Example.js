import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import BlipData from './components/BlipData';
import Purchase from './components/PurchaseFetchData';

const Example = () => {
    const history = useHistory();
    const { state } = useLocation();
    const [example, setExample] = useState(null);

    useEffect(() => {
        if (!!state) {
            const { type } = state;
            if (!!type) {
                setExample(type);
            }
        }
    }, [state]);

    const handleNavigation = useCallback(() => {
        history.push('/');
    }, [history]);

    // eslint-disable-next-line no-nested-ternary
    return example === 'purchase' ? (
        <Purchase onClick={() => handleNavigation()} />
    ) : ( <BlipData onClick={() => handleNavigation()} /> );
};

export default Example;
