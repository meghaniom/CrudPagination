import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser } from '../store/UserReducer';

const Home = () => {
    const users = useSelector((state) => state.users.users);
    //   console.log(users);
    const dispatch = useDispatch();

    const handelDelete = (id) => {
        dispatch(deleteuser({
            id: id
        }))
        console.log(id);

    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                {/* Heading or Title */}
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Create CRUD + Pagination</h2>

                {/* Create Button */}
                <Link
                    to="/insert"
                    className="inline-block px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md transition duration-300 mb-6"
                >
                    Create +
                </Link>

                {/* Table Container */}
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[1000px] table-auto border-collapse rounded-lg overflow-hidden shadow-md bg-white mx-auto">
                        <thead>
                            <tr className="bg-gray-800 text-white text-sm uppercase tracking-wide">
                                <th className="px-4 py-3 border">ID</th>
                                <th className="px-4 py-3 border">Name</th>
                                <th className="px-4 py-3 border">Email</th>
                                <th className="px-4 py-3 border">Age</th>
                                <th className="px-4 py-3 border">Address</th>
                                <th className="px-4 py-3 border">Phone</th>
                                <th className="px-4 py-3 border">Gender</th>
                                <th className="px-4 py-3 border">Status</th>
                                <th className="px-4 py-3 border">Hobbies</th>
                                <th className="px-4 py-3 border">Image</th>
                                <th className="px-4 py-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {users.map((user, index) => (
                                <tr
                                    key={index}
                                    className="even:bg-gray-100 hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-4 py-2 border text-sm">{user.id}</td>
                                    <td className="px-4 py-2 border text-sm">{user.name}</td>
                                    <td className="px-4 py-2 border text-sm">{user.email}</td>
                                    <td className="px-4 py-2 border text-sm">{user.age}</td>
                                    <td className="px-4 py-2 border text-sm">{user.address}</td>
                                    <td className="px-4 py-2 border text-sm">{user.phone}</td>
                                    <td className="px-4 py-2 border text-sm">{user.gender}</td>
                                    <td className="px-4 py-2 border text-sm">{user.status}</td>
                                    <td className="px-4 py-2 border text-sm">{user.hobbies}</td>
                                    <td className="px-4 py-2 border">
                                        <img
                                            src={user.Image}
                                            alt="user"
                                            className="w-10 h-10 rounded-full object-cover mx-auto"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <div className="flex justify-center gap-2">
                                            <Link
                                                to={`/update/${user.id}`}
                                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => handelDelete(user.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Home;
