'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';



const logInPAge = () => {

    const { register,
        handleSubmit , formState: {errors}} = useForm ()
         console.log(errors);
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] mt-6 flex items-center justify-center'>
            <div className='w-[400] bg-white p-6 rounded-md shadow-md'>
                <h2 className='font-bold '>Login Your Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="email"
                        {...register("email", { required: "please fill up the email" })}
                        />
                        {
                        errors.email && (<p className='text-red-500'>{errors.email.message} </p>
                     )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="password"  
                        {...register("password", { required: 'please fill up the password' })} />
                        { errors.password && <p className='text-red-600 pt-1'>{errors.password.message}</p> }
                    </fieldset>
                    <button className='btn bg-black text-white w-full mt-6'>Login</button>
                </form>
                <h2 className='pt-5 font-medium'>don,t have a account ? <Link className='text-blue-500' href={'/register'}>register</Link></h2>
            </div>
        </div>
    );
};

export default logInPAge;