import { useState } from "react";

/** Bootstrap Components*/  
import Row from "react-bootstrap/Row";

/*
 * Renders the Search form
 *
 * props:
 * -updateList: fn to be called in parent
 *
 * state:
 * - searchTerm: string
 *
 * App -> Routes -> SearchForm
 */

function SearchForm({ updateList }) {
  const [ searchTerm, setSearchTerm ] = useState("");

  /** Handle input changes and show them on input */  
  function handleChange(evt) {
    const { value  } = evt.target;
    setSearchTerm(value);
  }

  /** Handle submitting search term */  
  function handleSubmit(evt) {
    evt.preventDefault();
    updateList(searchTerm);
    setSearchTerm("");
    
  }

  const notDone = (searchTerm.trim().length > 1) ? false : true;
  return (
    <form className="SearchForm mx-auto container-fluid" onSubmit={handleSubmit} >
      <Row>
        <input 
          name="search" 
          id="search"
          value={searchTerm}
          onChange={handleChange} 
          placeholder="Enter search term..." 
          className="col-10 py-2"
        />
        <button disabled={notDone} className="col-2">Submit</button>

      </Row>
    </form>
  );
}

export default SearchForm;

