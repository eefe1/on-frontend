import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

export const Filter = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen); // Toggle the state value
    };

    // Format date function
    const formatDate = aDate => {
        let m = moment(aDate)
        let year = m.year();
        let month = m.month() + 1;
        let day = m.date();
        return `${year}-${month}-${day}`;
    };

    return (
        <div>
            <div className={`form-sorts dropdown ${isFilterOpen ? 'table-filter-show' : ''}`}>

                <Link
                    to="#"
                    className="dropdown-toggle"
                    id="table-filter"
                    onClick={handleFilterClick}

                >
                    <i className="fa-solid fa-filter me-2" />
                    Filtrele
                </Link>
                <div className="filter-dropdown-menu">
                    <div className="filter-set-view">
                        <div className="accordion" id="accordionExample">
                            <div className="filter-set-content">

                              
                            </div>
                            <div className="filter-set-content">
                                <div className="filter-set-content-head">
                                    <Link
                                        to="#"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Randevu Tipi
                                        <i className="fa-solid fa-chevron-right" />
                                    </Link>
                                </div>
                                <div
                                    className="filter-set-contents accordion-collapse collapse show"
                                    id="collapseOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <ul>
                                        <li>
                                            <div className="filter-checks">
                                                <label className="checkboxs">
                                                    <input type="checkbox" defaultChecked="" />
                                                    <span className="checkmarks" />
                                                    <span className="check-title">Tüm Randevu Tipleri</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="filter-checks">
                                                <label className="checkboxs">
                                                    <input type="checkbox" />
                                                    <span className="checkmarks" />
                                                    <span className="check-title">
                                                        Video Randevu
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="filter-checks">
                                                <label className="checkboxs">
                                                    <input type="checkbox" />
                                                    <span className="checkmarks" />
                                                    <span className="check-title">
                                                        Sesli Randevu
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="filter-checks">
                                                <label className="checkboxs">
                                                    <input type="checkbox" />
                                                    <span className="checkmarks" />
                                                    <span className="check-title">
                                                        Doğrudan Ziyaret
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            </div>
                        <div className="filter-reset-btns">
                            <Link to="#" className="btn btn-light">
                                Reset
                            </Link>
                            <Link to="#" className="btn btn-primary">
                                Filter Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const initialSettings = {
    endDate: moment("2020-08-11T12:30:00.000Z"),
    ranges: {
        "Last 30 Days": [
            moment("2020-07-12T04:57:17.076Z"),
            moment("2020-08-10T04:57:17.076Z"),
        ],
        "Last 7 Days": [
            moment("2020-08-04T04:57:17.076Z"),
            moment("2020-08-10T04:57:17.076Z"),
        ],
        "Last Month": [
            moment("2020-06-30T18:30:00.000Z"),
            moment("2020-07-31T18:29:59.999Z"),
        ],
        "This Month": [
            moment("2020-07-31T18:30:00.000Z"),
            moment("2020-08-31T18:29:59.999Z"),
        ],
        Today: [
            moment("2020-08-10T04:57:17.076Z"),
            moment("2020-08-10T04:57:17.076Z"),
        ],
        Yesterday: [
            moment("2020-08-09T04:57:17.076Z"),
            moment("2020-08-09T04:57:17.076Z"),
        ],
    },
    startDate: moment("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
    timePicker: false,
};
