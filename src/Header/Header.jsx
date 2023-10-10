import React from 'react'

const Header = () => {
  return (
    <section className="header-container">
      <div className="dropdown">
        <button className="dropbtn">
          <span className="material-symbols-outlined">tune</span>
          Display
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div className="dropdown-content">
          <div className='grouping'>
            <p>Grouping</p>
            <select className='select-button' name="cars" id="cars">
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div className='ordering'>
          <p> Ordering</p>
           
            <select className='select-button' name="cars" id="cars">
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header