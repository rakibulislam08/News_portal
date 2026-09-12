'use client'
import React from 'react';
import { useForm } from 'react-hook-form';



const registerPage = () => {

    const { register,
        handleSubmit, formState: { errors } } = useForm ()
    // console.log(errors);
    const handleRegister = (data) => {
        const {name, photo, email, password} = data;
    }

    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] mt-6 flex items-center justify-center'>
            <div className='w-[400] bg-white p-6 rounded-md shadow-md'>
                <h2 className='font-bold '>Register Your Account</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input" placeholder="Type your Name"
                            {...register("name", { required: "please fill up the name" })}
                        />
                        {
                            errors.name && (<p className='text-red-500'>{errors.name.message} </p>
                            )}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Photo url"
                            {...register("photo", { required: "please fill up the photo URL" })}
                        />
                        {
                            errors.photo && (<p className='text-red-500'>{errors.photo.message} </p>
                            )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Type your email"
                            {...register("email", { required: "please fill up the email" })}
                        />
                        {
                            errors.email && (<p className='text-red-500'>{errors.email.message} </p>
                            )}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Type your password"
                            {...register("password", { required: 'please fill up the password' })} />
                        {errors.password && <p className='text-red-600 pt-1'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-black text-white w-full mt-6'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default registerPage;