import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import UserData from './UserData';

const Users = () => {
 const initialUsers= useLoaderData() 
 const [users, setUsers] = useState(initialUsers)  
    return (
        <div>
            <h2>{initialUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <h2>No.</h2>
          </label>
        </th>
        <th>Name</th>
        <th>Address</th>
        <th>lastSignInTime</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><UserData key={user._id}
        user={user}
        setUsers={setUsers}
        users={users}
        index={index}></UserData>)
      }
      
      
     
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Users;