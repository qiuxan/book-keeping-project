import React from 'react';
import PropTypes from 'prop-types';
import * as utility from '../utility';

class MonthPicker extends React.Component {

    state = {
        isOpen: false
    }

    handleDropdown = event => {
        event.preventDefault();
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        const { year, month } = this.props;
        const { isOpen } = this.state;
        const monthRange = utility.setRange(12, 1);
        const yearRange = utility.setRange(9, -4).map(number => number + year);
        // console.log(yearRange);



        return (
            <div className="dropdown month-picker-component">

                <h4>Choose the Month</h4>
                <button

                    onClick={this.handleDropdown}
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    // data-bs-toggle="dropdown"
                    aria-expanded="false"
                >

                    {`Year ${year}  Month ${utility.padLeft(month)}`}
                </button>
                {isOpen &&
                    <div className="dropdown-month-menu" style={{ display: 'block' }}>

                        <div className="row">
                            <div className="col-2">
                                {yearRange.map(
                                    (yearNumber) => (<a href="#" className="dropdown-item">{yearNumber} </a>
                                    )
                                )}
                            </div>
                            <div className="col-2">
                                {monthRange.map(
                                    (monthNumber) => (<a href="#" className="dropdown-item">{utility.padLeft(monthNumber)} </a>
                                    )
                                )}                            </div>
                        </div>

                    </div>
                }



            </div >
        );
    }
}

export default MonthPicker;