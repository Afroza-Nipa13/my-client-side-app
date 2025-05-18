import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext);
    const navigate = useNavigate()


    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFomData } = Object.fromEntries(formData.entries())
        console.log(email, password, restFomData)

        // creat user in firebase

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const userInfo = {
                    email,
                    password,
                    ...restFomData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                // save user in db
                fetch("https://clients-management-server.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                }).then(res => res.json())
                    .then(data => {
                        console.log('user added', data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
     navigate('/')
            })
            .catch(error => {
                console.log(error)
            })




    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto my-8 shrink-0 shadow-2xl">
            <h2 className='text-3xl font-bold text-center mt-8'>Sign Up</h2>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Your name" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="phone number" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="photoURL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p className='font-semibold'>Already have an account ? pleace <Link to='/signin' className='font-semibold text-blue-700'>Sign in</Link></p>
            </div>
        </div>
    );
};

export default SignUp;