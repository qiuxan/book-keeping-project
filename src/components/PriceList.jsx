import React from 'react';

const PriceList = (props) => {
    const { items, onModify, onDelete } = props;
    console.log(props)
    return (
        <div className="row">
            <ul className="list-group list-group-flush">

                {items.map(item =>
                    <li className="list-group-item d-flex jestify-content-between align-items-center"
                        key={item.id}
                    >
                        <span className="col-1 badge bg-primary">
                            {item.category.name}
                        </span>
                        <span className="col-5">{item.title}</span>
                        <span className="col-2 fw-bold">{item.price}</span>
                        <span className="col-2">{item.date}</span>
                        <button className="col-1 btn btn-primary" onClick={() => onModify(item)}>Edit</button>
                        <button className="col-1 btn btn-danger" onClick={() => onDelete(item)}> Delete</button>
                    </li>
                )}

            </ul>
        </div >


    );
}

export default PriceList;