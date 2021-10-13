import React from 'react';
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types';



const PriceList = (props) => {
    const { items, onModify, onDelete } = props;
    // console.log(props)
    return (
        <div className="row">
            <ul className="list-group list-group-flush">

                {items.map(item =>
                    <li className="list-group-item d-flex jestify-content-between align-items-center"
                        key={item.id}
                    >
                        <span className="col-1 badge bg-primary">

                            <Ionicon
                                className="rounded-circle"
                                icon={item.category.iconName}
                                style={{ backgroundColor: "#007bff", padding: "5px" }}
                                fontSize="30px"
                                color={"#fff"} />


                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 fw-bold">{item.price}</span>
                        <span className="col-2">{item.date}</span>
                        <a href="/#" className="col-1" onClick={() => onModify(item)}>

                            <Ionicon
                                className="rounded-circle"
                                icon="ios-create-outline"
                                style={{ backgroundColor: "#28a745", padding: "5px" }}
                                fontSize="30px"
                                color={"#fff"} />

                        </a>
                        <a href="/#" className="col-1" onClick={() => onDelete(item)}>

                            <Ionicon
                                className="rounded-circle"
                                icon="ios-close"
                                style={{ backgroundColor: "#dc3545", padding: "5px" }}
                                fontSize="30px"
                                color={"#fff"} />

                        </a>
                    </li>
                )}

            </ul>
        </div >


    );
}
PriceList.propTypes = {

    items: PropTypes.array.isRequired,
    onModify: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired

}

PriceList.defaultProps = {
    onModify: () => { console.log('defalut onModify') }
}
export default PriceList;