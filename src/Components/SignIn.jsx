import React, {  useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { logInUser } = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        // sign in with firebase
        logInUser(email, password)
            .then(result => {
                console.log("user sign in successfully", result.user)

                // update to users last signin time to db

                const userInfo={
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                     }
                     fetch('https://clients-management-server.vercel.app/users',{
                        method:"PATCH",
                        headers:{
                            "content-type": "application/json"
                        },
                        body:JSON.stringify(userInfo)
                     })
                     .then(res=>res.json())
                     .then(data=> {
                        console.log(data)
                     })
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });



            })
            .catch(error => {
                alert(error.message)
            })


    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto my-8 shrink-0 shadow-2xl">
            <h2 className='text-3xl font-bold text-center mt-8'>Sign In</h2>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign In</button>
                </form>
                <p className='font-semibold'>New to our page ? pleace <Link to='/signup' className='font-semibold text-red-400'>SignUp</Link></p>
            </div>
        </div>
    );
};

export default SignIn;