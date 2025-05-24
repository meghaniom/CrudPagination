import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUsers } from '../store/UserReducer';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users.users);
    const euser = users.find((f) => f.id == id);

    if (!euser) {
        return <div>User not found</div>;
    }

    const { name, email, phone, age, address, gender, status, hobbies, Image } = euser;

    const [ename, setName] = useState(name);
    const [eemail, setEmail] = useState(email);
    const [ephone, setPhone] = useState(phone);
    const [eage, setAge] = useState(age);
    const [eaddress, setAddress] = useState(address);
    const [egender, setGender] = useState(gender);
    const [estatus, setStatus] = useState(status);
    const [ehobbies, setHobbies] = useState(hobbies || []);
    const [eImage, setImage] = useState(Image);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleHobbyChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setHobbies([...ehobbies, value]);
        } else {
            setHobbies(ehobbies.filter(hobby => hobby !== value));
        }
    };

    const handleImageUpload = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setImage(file);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUsers({
            id,
            name: ename,
            email: eemail,
            phone: ephone,
            age: eage,
            address: eaddress,
            gender: egender,
            status: estatus,
            hobbies: ehobbies,
            Image: eImage
        }));
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={handleUpdate} className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Update User</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="border p-2 rounded w-full"
                        onChange={(e) => setName(e.target.value)} value={ename} required />
                    <input type="email" placeholder="Email" className="border p-2 rounded w-full"
                        onChange={(e) => setEmail(e.target.value)} value={eemail} required />
                    <input type="tel" placeholder="Phone" className="border p-2 rounded w-full"
                        onChange={(e) => setPhone(e.target.value)} value={ephone} required />
                    <input type="number" placeholder="Age" className="border p-2 rounded w-full"
                        onChange={(e) => setAge(e.target.value)} value={eage} required />
                    <input type="text" placeholder="Address" className="border p-2 rounded w-full"
                        onChange={(e) => setAddress(e.target.value)} value={eaddress} required />

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Gender</label>
                        <div className="flex gap-4 mt-1">
                            <label>
                                <input type="radio" name="gender" value="Male"
                                    checked={egender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female"
                                    checked={egender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">Status</label>
                        <select className="border p-2 rounded" value={estatus} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="">Select</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Hobbies</label>
                    <div className="flex flex-wrap gap-4 mt-1">
                        {["Reading", "Traveling", "Gaming", "Coding", "Drawing"].map(hobby => (
                            <label key={hobby}>
                                <input type="checkbox" value={hobby}
                                    checked={ehobbies.includes(hobby)} onChange={handleHobbyChange} className="mr-1" />
                                {hobby}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded w-full" />
                    {eImage && (
                        <img src={eImage} alt="Preview" className="w-20 h-20 rounded-full mt-2 object-cover" />
                    )}
                </div>

                <button type="submit"
                    className="w-full py-2 text-white font-semibold rounded bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;
