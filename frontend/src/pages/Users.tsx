import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import TableToolbar from "../components/TableToolbar/TableToolbar";
import { useEffect } from "react";
import { fetchUsers } from "../services/fakeApi";
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
export default function Users() {
  // state 先宣告
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    role: "",
  });
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const data = await fetchUsers();
      setUsers(data as User[]);

      setLoading(false);
    };

    loadUsers();
  }, []);

  // function
  const confirmDelete = (id: number) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      accept: () => {
        setUsers(users.filter((user) => user.id !== id));
      },
    });
  };

  const saveUser = () => {
    if (editMode) {
      setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
    } else {
      const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;

      setUsers([...users, { ...newUser, id: nextId }]);
    }

    setNewUser({ id: 0, name: "", email: "", role: "" });
    setEditMode(false);
    setVisible(false);
  };
  const openEdit = (user: User) => {
    setNewUser(user);
    setEditMode(true);
    setVisible(true);
  };

  // header 最後宣告
  const tableHeader = (
    <TableToolbar
      title="User List"
      globalFilter={globalFilter}
      onSearchChange={setGlobalFilter}
      onAddClick={() => setVisible(true)}
    />
  );

  return (
    <div style={{ padding: "1.5rem" }}>
      <h2>User Management</h2>

      <DataTable
        value={users}
        loading={loading}
        paginator
        rows={5}
        globalFilter={globalFilter}
        header={tableHeader}
        responsiveLayout="scroll"
      >
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="email" header="Email" />
        <Column field="role" header="Role" />

        <Column
          header="Actions"
          body={(rowData: User) => (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Button
                icon="pi pi-pencil"
                severity="warning"
                size="small"
                onClick={() => openEdit(rowData)}
              />
              <Button
                icon="pi pi-trash"
                severity="danger"
                size="small"
                onClick={() => confirmDelete(rowData.id)}
              />
            </div>
          )}
        />
      </DataTable>

      <ConfirmDialog />
      <Dialog
        header={editMode ? "Edit User" : "Add User"}
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputText
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <InputText
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <InputText
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />

          <Button label="Save" icon="pi pi-check" onClick={saveUser} />
        </div>
      </Dialog>
    </div>
  );
}
