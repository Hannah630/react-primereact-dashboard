export const fetchUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Hannah", email: "hannah@email.com", role: "Admin" },
                { id: 2, name: "Alex", email: "alex@email.com", role: "Editor" },
                { id: 3, name: "Chris", email: "chris@email.com", role: "Viewer" },
            ]);
        }, 1000);
    });
};