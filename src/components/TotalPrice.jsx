import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({ income, cost }) => {
    return (<div className="row">
        <div className="col">Income: <span>{income}</span></div>
        <div className="col">Cost: <span>{cost}</span></div>
    </div>);
}
TotalPrice.propTypes = {
    income: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired
}
export default TotalPrice;