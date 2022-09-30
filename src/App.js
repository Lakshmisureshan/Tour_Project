import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';
import './style.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
