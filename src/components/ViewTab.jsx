import React from 'react';
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../utility';

const ViewTab = ({ selectedTab, onTabChange }) => {

    const generateLinkClass = (selectedTab, view) => {

        return selectedTab === view ? "nav-link active" : "nav-link";

    }

    return (<ul className="nav nav-tabs my-4 nav-fill">
        <li className="nav-item"  >
            <a href="#" className={generateLinkClass(selectedTab, LIST_VIEW)} onClick={(event) => { event.preventDefault(); onTabChange(LIST_VIEW) }}>
                <Ionicon
                    className="rounded-circle me-2"
                    icon="ios-paper"
                    fontSize="20px"
                    color={"#007bff"} />

                List Mode</a>
        </li>
        <li className="nav-item">
            <a href="#" className={generateLinkClass(selectedTab, CHART_VIEW)}
                onClick={
                    (event) => {
                        event.preventDefault();

                        onTabChange(CHART_VIEW);

                    }}>

                <Ionicon
                    className="rounded-circle me-2"
                    icon="ios-pie"
                    fontSize="20px"
                    color={"#007bff"} />
                Chart Mode</a>
        </li>

    </ul>);
}

ViewTab.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

export default ViewTab;