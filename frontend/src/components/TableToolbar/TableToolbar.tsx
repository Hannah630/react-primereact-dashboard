import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface Props {
  title: string;
  globalFilter: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}

export default function TableToolbar({
  title,
  globalFilter,
  onSearchChange,
  onAddClick,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>{title}</span>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <InputText
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <Button label="Add" icon="pi pi-plus" onClick={onAddClick} />
      </div>
    </div>
  );
}
