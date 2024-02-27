import React from 'react';

function Person({ people }) {
  console.log(people);
  return (
    <div className='people'>
      {people.map((person) => {
        const { id, image, age, name } = person;
        return (
          <section className='person' key={id}>
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Person;
