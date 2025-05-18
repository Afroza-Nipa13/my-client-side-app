import React from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';


const UserData = ({ user,users, index, setUsers }) => {
    
    const { _id, name, address, email, phone, photo, lastSignInTime } = user;

    const handleDelete = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // remove from firebase
               
                        // delete from db

                        fetch(`https://clients-management-server.vercel.app/users/${id}`, {
                            method: "DELETE",

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('data after delete', data)
                                if (data.deletedCount) {

                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                    });

                                } })
                    
                    // reset ui
                    const remainingUsers= users.filter(user => user._id !== id)
                    setUsers(remainingUsers)

            }
        });

    }
    return (
        <tr>
            <th>
                <label>
                    <h2>{index + 1}</h2>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={photo}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{address}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm">{phone}</span>
            </td>
            <td>{lastSignInTime}</td>
            <th className='space-x-4'>
                <button className="btn btn-xs bg-teal-500 text-white">V</button>
                <button className="btn btn-xs bg-red-400 text-white">E</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-xs bg-amber-500 text-white">X</button>
            </th>
        </tr>
    );
};

export default UserData;