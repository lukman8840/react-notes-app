import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md'; // Import the MdSearch icon

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Search = ({ handleSearchNote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    handleSearchNote(debouncedSearchTerm);
  }, [debouncedSearchTerm, handleSearchNote]);

  return (
    <div className='search'>
      <MdSearch className='search-icon' size='1.3em' />
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        type='text'
        placeholder='Type to search'
      />
    </div>
  );
};

export default Search;
