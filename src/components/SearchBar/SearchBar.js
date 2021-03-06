import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
};

class 

SearchBar extends React.Component {
    renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <React.Fragment>
                    <li key={sortByOptionValue}>
                        {sortByOption}
                    </li>
                </React.Fragment>
            );
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href='www.#.com'>Let's Go</a>
                </div>
                </div>
            </React.Fragment>
        );
    }
};

export default SearchBar;