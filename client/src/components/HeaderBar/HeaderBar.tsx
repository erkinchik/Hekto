import React, {FC} from 'react';
import {Link} from 'react-router-dom'

import './headerBar.scss'
import {BASKET_ROUTE, LOGIN_ROUTE} from '../../utils/paths'

const HeaderBar:FC = () => {
    const data = {
        email: "erkin.berdibaev@gmail.com",
        number: "+996777664690",
        currency: ["USD", "KGZ", "RUB"],
    };

    return (
        <div className="top-bar">
            <div className="info">
                <span className="email">{data.email}</span>
                <span className="phone">{data.number}</span>
            </div>
            <div className="buttons">
                <select className="buttons__currency">
                    {data.currency.map((c) => (
                        <option value={c} key={c}>
                            {c}
                        </option>
                    ))}
                </select>
                <Link className="buttons__login" to={LOGIN_ROUTE}>Login</Link>
                <Link className="buttons__basket" to={BASKET_ROUTE}></Link>
            </div>
        </div>
    );
};

export default HeaderBar;