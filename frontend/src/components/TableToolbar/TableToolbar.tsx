import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./TableToolbar.module.css";

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
    <div className={styles.toolbar}>
      <span className={styles.title}>{title}</span>

      <div className={styles.actions}>
        <InputText
          className={styles.search}
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <Button
          label="Add"
          icon="pi pi-plus"
          onClick={onAddClick}
          className={styles.addButton}
        />
      </div>
    </div>
  );
}
