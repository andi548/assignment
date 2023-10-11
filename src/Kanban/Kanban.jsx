import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
const Kanban = ({ tickets,user, groupingOption, sortingOption }) => {
  if(groupingOption === null){
    groupingOption = "priority"
  }
  if(sortingOption === null){
    sortingOption = "priority"
  }

  const groupTickets = (option) => {
    
    const grouped = {};

    tickets.forEach(ticket => {
      const groupBy = ticket[option];

      if (!grouped[groupBy]) {
        grouped[groupBy] = [];
      }
      grouped[groupBy].push(ticket);
    });

    return Object.keys(grouped).map(group => ({
      groupName: group,
      tickets: grouped[group]
    }));
  }

  const sortGroupedData = (data, option) => {
    return data.map(group => ({
      groupName: group.groupName,
      tickets: group.tickets.slice().sort((a, b) => {
        if (option === 'title') {
          return a.title.localeCompare(b.title);
        } else {
          return a[option] - b[option];
        }
      })
    }));
  }

  function getPriorityString(priority) {
    switch (priority) {
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      case 0:
        return "No priority";
      default:
        return "Unknown";
    }
  }
  const groupedData = groupTickets(groupingOption );
  const sortedData = sortGroupedData(groupedData, sortingOption);

  return (
    <>
      <div className="container">
        <div className="inner-div">
          {" "}
          <section>
            {}
            <div>{groupingOption}</div>
            <div> {sortingOption}</div>
            <div className='kanban-grouping'>
            {sortedData.map((group) => (
              <div key={group.groupName}>
                <h2>{group.groupName}</h2>
                {group.tickets.map((ticket) => (
                  <div className='inner-div' key={ticket.id}>
                    <p>Title: {ticket.title}</p>
                    <p>Status: {ticket.status}</p>
                    <p>Priority: {getPriorityString(ticket.priority)}</p>
                  </div>
                ))}
              </div>
            ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Kanban