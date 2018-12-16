import React from 'react';
import '../BusinessList/BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="BusinessList">
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                </div>
            </React.Fragment>
        );
    }

};

export default BusinessList;