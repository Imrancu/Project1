import React from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import LeftSide from './LeftSide';
import whiteLogo from '../../assets/logo-white.png'

const SignUp = () => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();


  // if (loading) {
  //   return <button class="btn btn-square loading flex mx-auto"></button>
  // }

  const onSubmit = (data) => {
    const allData = {
      userName: data.username,
      name: data.name,
      email: data.email,
      country: data.country,
      password: data.password,
      referral: data.referral
    }
    console.log(data)
    fetch('https://api.onkoala.com/api/signup', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": "application/ json"
    },
      body: JSON.stringify(allData)
      
    })
    .then(res => res.json())
  .then(result => {
    console.log(result);
  })
    // reset()
  };

return (
  <div className='flex h-screen'>
    <div className='w-5/12 hidden lg:block'><LeftSide /></div>
    <div className='lg:overflow-x-hidden lg:w-7/12'>
      <div className='lg:mx-24 m-8 lg:my-6'>
        <img className='w-24 my-4 lg:hidden' src={whiteLogo} alt="" />
        <h2 className='text-3xl text-left font-bold'>Create an account</h2>
        <p className='text-xl text-gray-500 mt-3 text-left font-semibold'>Let's get started! Fill the form below to sign up</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text text-xl mt-3">Pick a username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              class="input text-xl input-lg input-bordered w-full"
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is Required"
                }
              })}
            />
            <label className='label text-red-500'>
              {errors.name?.type === 'required' && "Username is required"}
            </label>
            <label class="label">
              <span class="label-text text-xl">Name</span>
            </label>
            <input
              type="text"
              placeholder="John Smith"
              class="input text-xl input-lg input-bordered w-full px-3 py-2"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required"
                }
              })}
            />
            <label class="label text-red-500">
              {errors.name?.type === 'required' && "Name is required"}
            </label>
            <label class="label">
              <span class="label-text text-xl mt-3">Email</span>
            </label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              class="input text-xl input-lg input-bordered w-full "
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
            <label className="label">
              <span class="label-text text-xl">Country</span>
            </label>
            <select
              class="select font-normal input-lg text-gray-400 text-xl select-bordered w-full"
              {...register("country")}
            >
              <option className='text-xl' disabled selected>Select a Country</option>
              <option value="Bangladesh" className='text-xl'>India</option>
              <option value="India" className='text-xl'>Bangladesh</option>
            </select>
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
            <label class="label">
              <span class="label-text text-xl">Referral Code (Optional)</span>
            </label>
            <input type="text"
              placeholder="Enter Referral Code"
              class="input text-xl input-lg input-bordered w-full"
              {...register("referral")}
            />
            <input className='btn btn-primary input-lg w-full my-8 text-white' type="submit" value="Sign Up" />
            <p className='text-xl'>Already have an account? <Link to="/login" className='text-secondary'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default SignUp;