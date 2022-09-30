import React, { useState } from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2> Ours Tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
