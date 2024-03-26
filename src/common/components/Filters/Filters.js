import "./styles.css";

import { FILTERS } from "../../constants";

export const Filters = ({ appliedFilter, onFilterClick }) => {
    return <div className="filter-container">
        <div><div>FilterBy: </div>
            <ul className="filter-list">
                {Object.keys(FILTERS).map(filter => {
                    return <li 
                    key={filter} 
                    className={`filter-item ${appliedFilter === FILTERS[filter] ? 'selected-filter' : ''}`} 
                    onClick={() => onFilterClick(FILTERS[filter])}>
                        {FILTERS[filter]}
                    </li>
                })}
            </ul>
        </div>
    </div>
}