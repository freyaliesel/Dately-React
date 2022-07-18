
// Need to rework form to display

const SearchForm = () => {
    return (
        <form autoComplete="off" className="white-text">
        <div className="input-field">
            {/* <input
                className="datepicker validate white-text"
                id="datepicker"
                type="text"
                required=""
                aria-required="true"
            />
            <label> Date </label>
            <span
                className="helper-text"
                data-error="Select a date"
            ></span>
        </div>
        <div className="input-field">
            <input
                id="location"
                className="autocomplete validate white-text"
                required=""
                aria-required="true"
                type="text"
            >
                <label>Neighborhood</label>
                <span
                    className="helper-text"
                    data-error="Enter a location"
                    data-success=""
                ></span>
            </input> */}
        </div>
        <button
            id="submit-btn"
            className="xwaves-effect waves-light btn-small"
        >
            <i
                id="search-icon"
                className="medium material-icons"
            >
                search
            </i>
            Search
        </button>
    </form>
    )
}

export default SearchForm