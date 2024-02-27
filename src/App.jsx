import { useState } from 'react';
import data from './data';
import Person from './Person';

const App = () => {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([]);
  };

  return (
    <div className='container'>
      <h3>{people.length} Birthdays today</h3>
      <Person people={people} />
      <button className='btn btn-block' type='button' onClick={handleClick}>
        Clear All Items
      </button>
    </div>
  );
};
export default App;
