import React, { useEffect, useState } from 'react';
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

    const { name, email, phone, age, countries, address, gender, status, hobbies, Image } = euser;

    const [ename, setName] = useState(name);
    const [eemail, setEmail] = useState(email);
    const [ephone, setPhone] = useState(phone);
    const [eage, setAge] = useState(age);
    const [eaddress, setAddress] = useState(address);

    const [egender, setGender] = useState(gender);
    const [estatus, setStatus] = useState(status);
    const [ehobbies, setHobbies] = useState(hobbies || []);
    const [eImage, setImage] = useState(Image);
    const [ecountries, setCountries] = useState( countries|| []);
    const [loading, setLoading] = useState(true);;

    const [error, setError] = useState(null);

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
    const validatePhone = (value) => {
              
        const cleaned = value.replace(/\D/g, '');

        if (cleaned.length > 10) return;

        setPhone(cleaned);

        if (cleaned.length !== 10) {
            setError("Phone number must be exactly 10 digits.");
        } else {
            setError("");
        }
    };

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://restcountries.com/v3.1/all');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                const formattedCountries = data.map(country => ({
                    name: country.name.common,
                    code: country.cca2,
                    dialingCode: country.idd?.root
                        ? `${country.idd.root}${(country.idd.suffixes || [])[0] || ''}`.replace(/\s+/g, '')
                        : '',
                })).sort((a, b) => a.name.localeCompare(b.name));

                setCountries(formattedCountries);
                setError(null);
            } catch (err) {
                console.error("Error fetching countries:", err);
                setError(err.message);
                // Fallback data in case API fails
                setCountries([
                    { name: 'United States', code: 'US', dialingCode: '1' },
                    { name: 'United Kingdom', code: 'GB', dialingCode: '44' },
                    // Add more fallback countries as needed
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);
    if (loading) {
        return <div>Loading countries...</div>;
    }

    if (error) {
        console.log("Using fallback country data due to error:", error);
    }


    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUsers({
            id,
            name: ename,
            email: eemail,
            phone: ephone,
            age: eage,
            address: eaddress,
            countries: ecountries,
            gender: egender,
            status: estatus,
            hobbies: ehobbies,
            Image: eImage
        }));
        navigate('/');
        console.log("Updated user");
    };
    const handelAge = (value) => {
        setAge(value);
        const numericAge = parseInt(value, 10);
        if (numericAge > 18 && numericAge < 65) {
            setStatus("Active");
        } else if (numericAge >= 65) {
            setStatus("Retired");
        } else {
            setStatus("Inactive");
        }
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
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="border p-2 rounded w-full"
                            value={ephone}
                            onChange={(e) => validatePhone(e.target.value)}
                            required
                        />
                        {
                            error && (
                                <p className="text-red-500 text-xs mt-1">{error}</p>
                            )
                        }
                    </div>

                    <input
                        type="number"
                        placeholder="Age"
                        className="border p-2 rounded w-full"
                        onChange={(e) => handelAge(e.target.value)}
                        value={eage}
                        required
                    />
                    <select className="w-full p-2 border rounded">
                        <option value="">-- Select Country --</option>
                        {ecountries?.map((country, index) => (
                            <option key={`${country.code}-${index}`} value={country.code}>
                                {country.name} {country.dialingCode ? `${country.dialingCode}` : ''}
                            </option>
                        ))}
                    </select>
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
