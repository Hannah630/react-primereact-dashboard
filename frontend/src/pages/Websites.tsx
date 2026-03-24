import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import TableToolbar from "../components/TableToolbar/TableToolbar";
import { fetchUsers } from "../services/fakeApi";
import styles from "./Websites.module.css";

interface Website {
  id: number;
  name: string;
  url: string;
  type: string;
  status: string;
}

export default function Websites() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [newWebsite, setNewWebsite] = useState<Website>({
    id: 0,
    name: "",
    url: "",
    type: "",
    status: "",
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      // 先用假資料
      const data = await fetchUsers();

      // mock 成網站資料
      const mapped = (data as any[]).map((item, index) => ({
        id: item.id || index + 1,
        name: item.name || "Demo Site",
        url: "https://example.com",
        type: "Demo",
        status: "Online",
      }));

      setWebsites(mapped);
      setLoading(false);
    };

    loadData();
  }, []);

  // 刪除
  const confirmDelete = (id: number) => {
    confirmDialog({
      message: "Are you sure you want to delete this website?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",
      accept: () => {
        setWebsites(websites.filter((w) => w.id !== id));
      },
    });
  };

  // 儲存
  const saveWebsite = () => {
    if (!newWebsite.name || !newWebsite.url) return;

    if (editMode) {
      setWebsites(
        websites.map((w) => (w.id === newWebsite.id ? newWebsite : w)),
      );
    } else {
      const nextId = websites.length
        ? Math.max(...websites.map((w) => w.id)) + 1
        : 1;

      setWebsites([...websites, { ...newWebsite, id: nextId }]);
    }

    setNewWebsite({
      id: 0,
      name: "",
      url: "",
      type: "",
      status: "",
    });

    setEditMode(false);
    setVisible(false);
  };

  //  編輯
  const openEdit = (website: Website) => {
    setNewWebsite(website);
    setEditMode(true);
    setVisible(true);
  };

  // Header
  const tableHeader = (
    <TableToolbar
      title="Website Management"
      globalFilter={globalFilter}
      onSearchChange={setGlobalFilter}
      onAddClick={() => setVisible(true)}
    />
  );

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Website Management</h2>

      <div className={styles.tableWrapper}>
        <DataTable
          value={websites}
          loading={loading}
          paginator
          rows={5}
          globalFilter={globalFilter}
          header={tableHeader}
          responsiveLayout="scroll"
          emptyMessage="No websites found"
        >
          <Column field="name" header="Name" sortable />
          <Column field="url" header="URL" />
          <Column field="type" header="Type" />
          <Column field="status" header="Status" />

          <Column
            header="Actions"
            body={(rowData: Website) => (
              <div className={styles.actionButtons}>
                {/* 👁 查看網站 */}
                <Button
                  icon="pi pi-external-link"
                  severity="info"
                  size="small"
                  onClick={() => window.open(rowData.url, "_blank")}
                />

                {/* ✏ 編輯 */}
                <Button
                  icon="pi pi-pencil"
                  severity="warning"
                  size="small"
                  onClick={() => openEdit(rowData)}
                />

                {/* 🗑 刪除 */}
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
      </div>
      <ConfirmDialog />

      {/*Dialog */}
      <Dialog
        header={editMode ? "Edit Website" : "Add Website"}
        visible={visible}
        style={{ width: "30vw", maxWidth: "560px" }}
        breakpoints={{ "960px": "60vw", "768px": "90vw" }}
        onHide={() => setVisible(false)}
      >
        <div className={styles.dialogForm}>
          <InputText
            placeholder="Website Name"
            value={newWebsite.name}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, name: e.target.value })
            }
          />

          <InputText
            placeholder="Website URL"
            value={newWebsite.url}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, url: e.target.value })
            }
          />

          <InputText
            placeholder="Type (E-commerce / Portfolio...)"
            value={newWebsite.type}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, type: e.target.value })
            }
          />

          <InputText
            placeholder="Status (Online / Dev)"
            value={newWebsite.status}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, status: e.target.value })
            }
          />

          <Button label="Save" icon="pi pi-check" onClick={saveWebsite} />
        </div>
      </Dialog>
    </div>
  );
}
