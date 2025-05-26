import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser } from '../store/UserReducer';

const Home = () => {
    const ITEMS_PER_PAGE = 5;
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

   
    const [currentPage, setCurrentPage] = useState(1);
    const [genderFilter, setGenderFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

   
    const filteredUsers = users.filter(user => {
        
        const genderMatch = genderFilter === 'all' || 
                           user.gender.toLowerCase() === genderFilter;
        
        
        const statusMatch = statusFilter === 'all' || 
                           user.status.toLowerCase() === statusFilter;
        
        return genderMatch && statusMatch;
    });

    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);

    const paginateUsers = filteredUsers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const handelDelete = (id) => {
        dispatch(deleteuser({ id: id }));
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Create CRUD + Pagination</h2>

                <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-4 gap-4">
                    <Link
                        to="/insert"
                        className="inline-block px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md transition duration-300"
                    >
                        Create +
                    </Link>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center gap-2">
                            <label htmlFor="genderFilter" className="text-sm font-medium text-gray-700">
                                Gender:
                            </label>
                            <select
                                id="genderFilter"
                                value={genderFilter}
                                onChange={(e) => {
                                    setGenderFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="border rounded px-3 py-1 text-sm"
                            >
                                <option value="all">All</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <label htmlFor="statusFilter" className="text-sm font-medium text-gray-700">
                                Status:
                            </label>
                            <select
                                id="statusFilter"
                                value={statusFilter}
                                onChange={(e) => {
                                    setStatusFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="border rounded px-3 py-1 text-sm"
                            >
                                <option value="all">All</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

             
                {filteredUsers.length === 0 ? (
                    <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md text-center">
                        <p className="text-gray-600">No users found matching the selected filters.</p>
                    </div>
                ) : (
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
                                    <th className="px-4 py-3 border">Country</th>
                                    <th className="px-4 py-3 border">Gender</th>
                                    <th className="px-4 py-3 border">Status</th>
                                    <th className="px-4 py-3 border">Hobbies</th>
                                    <th className="px-4 py-3 border">Image</th>
                                    <th className="px-4 py-3 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {paginateUsers.map((user, index) => (
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
                                        <td className="px-4 py-2 border text-sm">{user.country}</td>
                                        <td className="px-4 py-2 border text-sm">{user.gender}</td>
                                        <td className="px-4 py-2 border text-sm">{user.status}</td>
                                        <td className="px-4 py-2 border text-sm">{user.hobbies.join(', ')}</td>
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
                )}

                {/* Pagination Controls */}
                {filteredUsers.length > 0 && (
                    <div className='flex justify-end mt-6 gap-2'>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className='px-3 py-1 bg-gray-200 rounded disabled:opacity-50'
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className='px-3 py-1 bg-gray-200 rounded disabled:opacity-50'
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;