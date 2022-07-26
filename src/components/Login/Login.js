import React from 'react';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LeftSide from './LeftSide';
import whiteLogo from '../../assets/logo-white.png'

const Login = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();


    // if (loading) {
    //     return <button class="btn btn-square loading flex mx-auto"></button>
    // }
    // let signInError;
    // if (error) {
    //     signInError = <p className='text-red-500 text-center'>{error?.message}</p>
    // }

    const onSubmit = (data) => {
        console.log(data)
        reset()
    };

    return (
        <div className='flex h-screen'>
            <div className='w-5/12 hidden lg:block'><LeftSide /></div>
            <div className='lg:w-7/12 '>
                <div className='lg:mx-24 m-8 lg:my-6'>
                <img className='w-24 my-4 lg:hidden' src={whiteLogo} alt="" />
                    <h2 className='text-3xl text-left font-bold'>Welcome back!</h2>
                    <p className='text-xl text-gray-500 mt-3 text-left font-semibold'>Sign in to continue</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full">
                            <label class="label">
                                <span class="label-text text-xl mt-3">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                class="input text-xl input-lg input-bordered w-full"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text text-xl text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text text-xl text-red-500">{errors.email.message}</span>}
                            </label>
                            <label class="label">
                                <span class="label-text text-xl mt-3">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                class="input text-xl input-lg input-bordered w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Provide a six character or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text text-xl text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text text-xl text-red-500">{errors.password.message}</span>}
                            </label>
                            {/* {signInError} */}
                            <p className='text-xl'>Forgot your password? <span className='text-blue-600'>Reset</span></p>
                            <input className='btn btn-primary input-lg w-full my-8 text-white' type="submit" value="Sign In" />
                            <p className='text-xl'>Don't have an account? <Link to="/signup" className='text-secondary'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;