import { Card } from "primereact/card";
import styles from "./StatCard.module.css";

interface StatCardProps {
  title: string;
  value: number;
  icon: string;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.content}>
        <div>
          <p className={styles.label}>{title}</p>
          <h2 className={styles.value}>{value}</h2>
        </div>
        <i className={`pi ${icon} ${styles.icon}`} />
      </div>
    </Card>
  );
}
