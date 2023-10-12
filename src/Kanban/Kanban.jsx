import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
const Kanban = ({ tickets,users, groupingOption, sortingOption }) => {
  if(groupingOption === null){
    groupingOption = "status"
    console.log(tickets)
    console.log(users)
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

  // const sortGroupedData = (data, option) => {
    
  //   return data.map(group => ({
  //     groupName: group.groupName,
  //     tickets: group.tickets.slice().sort((a, b) => {
  //       if (option === 'title') {
  //         return a.title.localeCompare(b.title);
  //       } else {
  //         return a[option] - b[option];
  //       }
  //     })
  //   }));
  // }

  const sortGroupedData = (data, option) => {
    return data.map(group => {
      let groupName;
      if (groupingOption === 'userId') {
        groupName = getUserById(group.groupName).name;
        
      } else if (groupingOption === 'priority') {
        console.log(group)
        groupName = getPriorityString(group.tickets[0].priority);
        
      } else {
        groupName = group.groupName;
        console.log(group)
        console.log(option)
      }
  
      return {
        groupName: groupName,
        tickets: group.tickets.slice().sort((a, b) => {
          if (option === 'title') {
            return a.title.localeCompare(b.title);
          } else {
            return a[option] - b[option];
          }
        })
      };
    });
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

  const getUserById = (userId) => {
    return users.find(u => u.id === userId);
  }

  const groupedData = groupTickets(groupingOption );
  const sortedData = sortGroupedData(groupedData, sortingOption);

  return (
    <>
      <section>
        <div className="container">
          <div className="inner-div">
            <div className="kanban-grouping">
              {sortedData.map((group) => (
                <div key={group.groupName}>
                  <div className="group-heading">
                    <div>
                      <h4>{group.groupName} &nbsp; &nbsp;{group.tickets.length}</h4>
                      
                    </div>
                    <div>
                      <span class="material-symbols-outlined">add</span>
                      <span class="material-symbols-outlined">more_horiz</span>
                    </div>
                  </div>

                  {group.tickets.map((ticket) => (
                    <div className="inner-div" key={ticket.id}>
                      <Card
                        id={ticket.id}
                        title={ticket.title}
                        status={ticket.status}
                        tag={ticket.tag[0]}
                        user={getUserById(ticket.userId).name}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Kanban