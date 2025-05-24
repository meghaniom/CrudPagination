

const userData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 25,
        address: '123 Main St',
        phone: '123-456-7890',
        gender: 'Male',
        status: 'Active',
        hobbies: ['Reading', 'Gaming', 'Swimming'],
       Image : "https://imgs.search.brave.com/wjyql4EZ1ncsc7eQSzz17den-aEuE0wHk5oeC-o973Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbS02a3VE/WnRFanpnTFM1RkZC/WnR3aHRNRHVqaVl3/SmJSMkZiRklVRHZN/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dS9jR2w0WVdK/aGVTNWpiMjB2L2NH/aHZkRzh2TWpBeU15/OHcvTWk4eE9DOHhN/Uzh3TUM5cC9ZMjl1/TFRjM09UYzNNRFJm/L05qUXdMbkJ1Wnc.jpeg"
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        age: 30,
        address: '456 Elm St',
        phone: '987-654-3210',
        gender: 'Female',
        status: 'Inactive',
        hobbies : ['Dancing', 'Cooking', 'Hiking'],
        Image : "https://imgs.search.brave.com/7TW6B1E39u8mCBfCk2Z5Rl-ZjhkYVTdqxp8UDS-w_Nw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTi10Ylg3/QndNQ1JQdmhFelNq/cnd2dVFNYVR5Ynpo/X3Y1UEtXUzU0U3Zx/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dS9jR2w0WVdK/aGVTNWpiMjB2L2NH/aHZkRzh2TWpBeE55/OHgvTVM4eE1DOHdO/UzgwTmk5MS9jMlZ5/TFRJNU16VTFNakpm/L05qUXdMbkJ1Wnc.jpeg"
        // Image: 
    },
    {
        id: 3,
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        age: 35,
        address: '789 Oak St',
        phone: '555-555-5555',
        gender: 'Male',
        status: 'Active',
        hobbies: ['Painting', 'Photography', 'Running'],
        Image : "https://imgs.search.brave.com/zJr-LDQTruHThQdmP3XXrvTK7M5qtkVNBSLNKNPwdyI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vb2xVMWZy/Q0lfcktPRDMtTkJX/RFBjcVRwZG44WURN/TlliMndWUTJUbXFs/TS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/TXk1bS9kR05rYmk1/dVpYUXZhbkJuL0x6/QXpMelEyTHpnekx6/azIvTHpNMk1GOUdY/ek0wTmpnei9PVFk0/TTE4MmJrRlFlbUpv/L2NGTnJTWEJpT0hC/dFFYZDEvWm10RE4y/TTFaVVEzZDFsMy9j/eTVxY0dj.jpeg"
        // Image:  },
    },
    {
        id: 4,
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        age: 28,
        address: '101 Pine St',
        phone: '111-222-3333',
        gender: 'Female',
        status: 'Active',
        hobbies: ['Singing', 'Travelling', 'Swimming'],
        Image : "https://imgs.search.brave.com/xFvKivErvDd4T_a4WBQxeNGE_QWl7wbVQzHOV_u5_ck/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veW5tbWU3/Ujk5b1FwVURwWmg1/cEk4NzFkOEt5UkRQ/NkxHenVBQW4zd1RR/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9jRzVuWVd4/c0xtTnZiUzkzL2ND/MWpiMjUwWlc1MEwz/VncvYkc5aFpITXZO/UzlWYzJWeS9MVkJ5/YjJacGJHVXRVRTVI/L0xuQnVadw.jpeg"
        // Image:  },

    },
    {
        id: 5,
        name: 'Michael Davis',
        email: 'michael.davis@example.com',
        age: 32,
        address: '222 Maple St',
        phone: '444-555-6666',
        gender: 'Male',
        status: 'Inactive',
        hobbies: ['Reading', 'Cooking', 'Photography'],
        Image : "https://imgs.search.brave.com/v3GWdKHx5DGf6jvSuIHEGzpdf-mJrqroEkxoXKvQZJs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vYk9sekFi/blA1RUZvVDZjYXli/WDFiM2xxV0VPTGtG/R1RHZ1d3MUhlYjlZ/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L1pu/SmxaUzEyWldOMGIz/SXYvYVhOdmJHRjBa/V1F0ZVc5MS9ibWN0/YUdGdVpITnZiV1V0/L2JXRnVMV1JwWm1a/bGNtVnUvZEMxd2Iz/TmxjeTEzYUdsMC9a/UzFpWVdOclozSnZk/VzVrL0xXbHNiSFZ6/ZEhKaGRHbHYvYmw4/Mk16STBPVGd0T0RV/NS9MbXB3Wno5elpX/MTBQV0ZwL2MxOW9l/V0p5YVdRbWR6MDMv/TkRB.jpeg"
     // Image:  
    },
];
 export default userData;