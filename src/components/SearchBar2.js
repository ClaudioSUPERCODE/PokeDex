import { useState } from 'react';
import '../css/SearchBar.css'

const SearchBar = ({ pokemon, onSearchChange }) => {
    // console.log(pokemon);
    const [filteredList, setFilteredList] = useState(pokemon);

    const filterBySearch = (event) => {
        // Input value
        const Input = event.target.value;

        // Create Copy Array of pokemon
        let updatedList = [...pokemon];

        // Include all elements which includes the search Inputs
        updatedList = updatedList.filter((item) => {
            return item.name.toString().toLowerCase().indexOf(Input.toLowerCase()) !== -1;
        });
        // console.log(updatedList);

        // Trigger render with updated values
        setFilteredList(updatedList);
        onSearchChange(updatedList)

    };

    return (
        <section>
            <input className='search2' onChange={filterBySearch} placeholder='SEARCH POKEMON'/>
        </section>
    )
}

export default SearchBar;