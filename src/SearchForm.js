import { useState } from "react";

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
    // TODO: Can add the validation here!
    updateList(searchTerm);
    setSearchTerm("");
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit} >
      <input 
        name="search" 
        id="search"
        value={searchTerm}
        onChange={handleChange} 
        placeholder="Enter search term..." 
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;

