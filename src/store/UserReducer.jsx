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
            const {id, name, email, age, address, phone, gender, status, hobbies, Image} =  action.payload;
            const userNumber = state.find((users) => users.id === id);
            if (userNumber) {
                userNumber.name = name;
                userNumber.email = email;
                userNumber.age = age;
                userNumber.address = address;
                userNumber.phone = phone;
                userNumber.gender = gender;
                userNumber.status = status;
                userNumber.hobbies = hobbies;
                userNumber.Image = Image;
            }
            else {
                console.error(`User with id ${id} not found.`);
            }
        }
        

        // You can define reducers here later
        // Example:
        // addUser: (state, action) => {
        //     state.users.push(action.payload);
        // },
    },
});

// If you define actions, export them like this:
// export const { addUser } = userSlice.actions;

// ✅ Correct default export
 export const {updateUsers} = userSlice.actions;
export const { adduser } = userSlice.actions;
export const {deleteuser} = userSlice.actions;
export default userSlice.reducer;
