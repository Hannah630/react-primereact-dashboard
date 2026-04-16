import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

import TableToolbar from "../components/TableToolbar/TableToolbar";
import { Website } from "../types/website";
import {
  getWebsites,
  createWebsite,
  updateWebsite,
  deleteWebsite,
} from "../services/websiteService";

import styles from "./Websites.module.css";
import { InputTextarea } from "primereact/inputtextarea";

export default function Websites() {
  //  資料 state
  const [websites, setWebsites] = useState<Website[]>([]);

  //  UI state
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [visible, setVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);

  //  表單 state
  const [newWebsite, setNewWebsite] = useState<Website>({
    id: 0,
    name: "",
    url: "",
    type: "",
    status: "",
  });

  //  初始載入（模擬 API）
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getWebsites();
      setWebsites(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  //  刪除（含 confirm）
  const confirmDelete = (id: number) => {
    confirmDialog({
      message: "Are you sure you want to delete this website?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-danger",

      accept: async () => {
        const updated = await deleteWebsite(id);
        setWebsites(updated);
      },
    });
  };

  //  新增 / 編輯
  const saveWebsite = async () => {
    if (!newWebsite.name || !newWebsite.url) return;

    let updated: Website[];

    if (editMode) {
      updated = await updateWebsite(newWebsite);
    } else {
      updated = await createWebsite(newWebsite);
    }

    setWebsites(updated);

    // 重置表單
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

  //  開啟編輯
  const openEdit = (website: Website) => {
    setNewWebsite(website);
    setEditMode(true);
    setVisible(true);
  };

  //  URL 顯示
  const urlBody = (rowData: Website) => (
    <a href={rowData.url} target="_blank" rel="noopener noreferrer">
      {rowData.url}
    </a>
  );

  //  Toolbar
  const tableHeader = (
    <TableToolbar
      title="Website Management"
      globalFilter={globalFilter}
      onSearchChange={setGlobalFilter}
      onAddClick={() => {
        setEditMode(false);
        setVisible(true);
      }}
    />
  );

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>作品集管理</h2>

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
          <Column header="URL" body={urlBody} />
          <Column field="type" header="Type" />
          <Column field="status" header="Status" />

          {/* Actions */}
          <Column
            header="Actions"
            body={(rowData: Website) => (
              <div className={styles.actionButtons}>
                <Button
                  icon="pi pi-external-link"
                  severity="info"
                  size="small"
                  onClick={() => window.open(rowData.url, "_blank")}
                />

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
      </div>

      <ConfirmDialog />

      {/* Dialog */}
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
            placeholder="Type"
            value={newWebsite.type}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, type: e.target.value })
            }
          />

          <InputText
            placeholder="Status"
            value={newWebsite.status}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, status: e.target.value })
            }
          />
          <InputTextarea
            placeholder="Description"
            value={newWebsite.description || ""}
            onChange={(e) =>
              setNewWebsite({ ...newWebsite, description: e.target.value })
            }
            rows={5}
          />

          <Button
            label="Save"
            icon="pi pi-check"
            severity="success"
            onClick={saveWebsite}
            disabled={!newWebsite.name || !newWebsite.url}
          />
        </div>
      </Dialog>
    </div>
  );
}
