import { createSlice } from "@reduxjs/toolkit";
import userData from "../Data"; // Make sure this exports an object like { users: [...] }

// Define a properly structured initial state
const initialState = {
    users: userData || [] // fallback in case userData.users is undefined
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.users.push(action.payload);
        },
        deleteuser: (state, action) => {
            console.log("Deleting user with id:", action.payload.id);
             state.users = state.users.filter(user => user.id !== action.payload.id);
        },
        updateUsers: (state, action) => {
            const {id, name, email, age, address, phone, gender,countries, status, hobbies, Image} =  action.payload;
            const user  = state.users.find((user) => user.id === id);
            if (user) {
                user.name = name;
                user.email = email;
                user.age = age;
                user.address = address;
                user.phone = phone;
                user.countries = countries;
                user.gender = gender;
                user.status = status;
                user.hobbies = hobbies;
                user.Image = Image;
            }
            else {
                console.error(`User with id ${id} not found.`);
            }
        }
        


    },
});



// ✅ Correct default export
 export const {updateUsers} = userSlice.actions;
export const { adduser } = userSlice.actions;
export const {deleteuser} = userSlice.actions;
export default userSlice.reducer;
