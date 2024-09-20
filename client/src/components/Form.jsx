import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Input from './Input';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const apiSubmit = process.env.REACT_APP_API_URL_SUBMIT;

  const onSubmit = async (data) => {
    console.log('Form Data:', data);

    try {
      const response = await axios.post(apiSubmit, data)

      if (response.status === 200) {
        navigate('/Thankyou')
        console.log('submitted');

      }
    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <Input
                id="first_name"
                name="first_name"
                type="text"
                {...register('first_name', { required: true })}
              />
              {errors.first_name && <span className="text-red-500 text-sm">First name is required</span>}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <Input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="given-name"
                {...register('last_name', { required: true })}
              />
              {errors.last_lame && <span className="text-red-500 text-sm">Last name is required</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <Input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                {...register('email',
                  {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address',
                    },
                  })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <Input
                id="phone_number"
                name="phone_number"
                type="tel"
                autoComplete="tel"
                {...register('phone_number', { required: true })}
              />
              {errors.phone_number && <span className="text-red-500 text-sm">Phone is required</span>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                {...register('message', { required: true })}

                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
              {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form;
