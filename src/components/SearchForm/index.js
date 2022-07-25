// Need to rework form to display

import { useState } from "react";
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import "./SearchForm.css"

const SearchForm = () => {
    const [location, setLocation] = useState("");
    const [date, setDate] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;

        setLocation(value)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(date, location)
    }

    return (
        <>
            <form autoComplete="off" className="white-text">
                <div className="input-field white-text">
                    <DatePicker 
                    selected={date}
                    onChange={(date:Date) => setDate(date)}
                    placeholderText="Select a date"
                    />
                    {/* <label>Date</label> */}
                    <span
                        className="helper-text"
                        dataerror="Select a date"
                        datasuccess=""
                    ></span>
                </div>

                <div className="input-field">
                    <input
                        className="autocomplete validate white-text"
                        value={location}
                        name="location"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Select a location"
                    />
                    {/* <label>Location</label> */}
                    <span
                        className="helper-text"
                        dataerror="Enter a location"
                        datasuccess=""
                    ></span>
                </div>

                <button
                    type="button"
                    id="submit-btn"
                    className="xwaves-effect waves-light btn-small"
                    onClick={handleFormSubmit}
                >
                    <i id="search-icon" className="medium material-icons">
                        search
                    </i>
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchForm;
