import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/young-woman-wearing-fashionable-clothes_273609-22369.jpg?t=st=1733458598~exp=1733462198~hmac=e09420fa5bf2dd7c82071c6d093389f45ac9d96bbe7b31a1fd25cdb61304c6af&w=996")',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '82vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, submit the data
      console.log('Form submitted successfully', formData);
    }
  }

  return (
    <div style={backgroundStyle}>
      <div className='sign-up-container'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <br />
            <label>Name:</label><br />
            <input type="text" name="firstName" placeholder="FirstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}<br/>
            <input type="text" name="lastName" placeholder="LastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
            <br />
            <label>Gender</label><br />
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
            <br />
            <label>Phone number</label><br />
            <input type="number" name="phoneNumber" placeholder="Enter your number" value={formData.phoneNumber} onChange={handleChange} />
            {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
            <br />
            <label>Email</label><br />
            <input type='email' name="email" placeholder='Email' value={formData.email} onChange={handleChange} />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            <br />
            <label>Password</label><br />
            <input type='password' name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            <br />
            <label>Confirm Password</label><br />
            <input type='password' name="confirmPassword" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} />
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
            <br />
            <span>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setFormData({
                firstName: '',
                lastName: '',
                gender: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirmPassword: ''
              })}>Reset</button>
            </span>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
