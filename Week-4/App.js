// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Alluru", email: "alluru@gmail.com" },
                        { id: 2, name: "Akshaya", email: "akshaya@gmail.com" },
                        { id: 3, name: "Sita", email: "sita@gmail.com" },
                        { id: 4, name: "Radha", email: "radha@gmail.com"},
                        { id:5, name: "Keshav", email: "keshav@gmail.com"},
                        { id:6, name: "Sruthi", email: "sruthi@gmail.com"},
                        { id:7, name: "Karthik", email: "karthik@gmail.com"},
                        { id:8, name: "Vani", email: "vani@gmail.com"},
                        { id:9, name:"Ashok", email:"ashok@gmail.com"},
                        { id:10, name:"Sneha", email:"sneha@gmail.com"}
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
