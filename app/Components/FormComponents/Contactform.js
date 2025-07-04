import React, { useState } from 'react';
import axios from 'axios';

const Contactform = () => {
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourPhone, setYourPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setYourName(value);
    } else if (name === 'email') {
      setYourEmail(value);
    } else if (name === 'mobile') {
      setYourPhone(value);
    }
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!yourName.trim()) {
      newErrors.yourName = 'Name is required.';
    }
    if (!yourEmail.trim()) {
      newErrors.yourEmail = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(yourEmail)) {
      newErrors.yourEmail = 'Invalid email address.';
    }
    if (!yourPhone.trim()) {
      newErrors.yourPhone = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(yourPhone)) {
      newErrors.yourPhone = 'Mobile number must be 10 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form to API
  const createPost = async () => {
    setErrors({});
    setSuccessMessage('');
    setIsLoading(true); 

    const formData = new FormData();
    formData.append('yourName', yourName);
    formData.append('yourEmail', yourEmail);
    formData.append('yourPhone', yourPhone);

    try {
      const response = await axios.post(
        'https://vdsatheesan.com/wp-json/contact-form-7/v1/contact-forms/9588/feedback',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('API Response:', response.data);
      setSuccessMessage('Form submitted successfully!');
      setYourName('');
      setYourEmail('');
      setYourPhone('');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setErrors({ message: 'Failed to submit the form. Please try again later.' });
    } finally {
      setIsLoading(false); // Set loading to false after request is complete
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      createPost();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="px-7 bg-[#072D46] w-full merriweather-regular">
        <div className="mb-5">
          <h3 className="text-center lg:text-[30px] text-[28px] p-5 text-white merriweather-regular font-semibold">
            Be My Friend
          </h3>
        </div>

        {errors.message && <p className="text-red-500 text-center">{errors.message}</p>}
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <div className="mb-5 py-3">
          <input
            type="text"
            id="name"
            name="name"
            value={yourName}
            onChange={handleChange}
            className="bg-[#033B5F] py-3 text-[15px] lg:text-[20px]  px-3  rounded-lg block w-full border border-[#033B5F] text-white focus:outline-none"
            placeholder="Name"
            required
          />
          {errors.yourName && <p className="text-red-500">{errors.yourName}</p>}
        </div>
        <div className="mb-5 py-3">
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={yourPhone}
            onChange={handleChange}
            className="bg-[#033B5F] py-3 text-[15px] lg:text-[20px]  px-3  rounded-lg block w-full border border-[#033B5F] text-white focus:outline-none"
            placeholder="Mobile Number"
            required
          />
          {errors.yourPhone && <p className="text-red-500">{errors.yourPhone}</p>}
        </div>
        <div className="mb-5 py-3">
          <input
            type="email"
            id="email"
            name="email"
            value={yourEmail}
            onChange={handleChange}
            className="bg-[#033B5F] py-3 text-[15px] lg:text-[20px]  px-3  rounded-lg block w-full border border-[#033B5F] text-white focus:outline-none"
            placeholder="Email ID"
            required
          />
          {errors.yourEmail && <p className="text-red-500">{errors.yourEmail}</p>}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white border font-medium rounded-md text-[15px] lg:text-[20px] px-5 py-2.5 mb-5 w-32"
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
