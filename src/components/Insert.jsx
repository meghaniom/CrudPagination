import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser } from '../store/UserReducer';

const Insert = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [Image, setImage] = useState(null);

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    if (checked) setHobbies([...hobbies, value]);
    else setHobbies(hobbies.filter(hobby => hobby !== value));
  };

  const handleImageUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser({
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
      email,
      phone,
      age,
      address,
      gender,
      status,
      hobbies,
      Image,
    }));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New User</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded w-full"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-2 rounded w-full"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="border p-2 rounded w-full"
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-2 rounded w-full"
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          {/* Gender */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female</label>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              className="border p-2 rounded"
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Hobbies */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Hobbies</label>
          <div className="flex flex-wrap gap-4 mt-1">
            {["Reading", "Traveling", "Gaming", "Coding", "Drawing"].map(hobby => (
              <label key={hobby}>
                <input type="checkbox" value={hobby} onChange={handleHobbyChange} className="mr-1" />
                {hobby}
              </label>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded w-full" />
          {Image && (
            <img src={Image} alt="Preview" className="w-20 h-20 rounded-full mt-2 object-cover" />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Insert;
