import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header';
const Kanban = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setData(data.users);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {data.map((a) => (
          <>
            <div className="inner-div">
              {" "}
              <section>
                <div>{a.name}</div>
              </section>
              <Card />
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Kanban