import StatCard from "../components/StatCard";
import styles from "./Dashboard.module.css";
export default function Dashboard() {
  return (
    <div className={styles.grid}>
      <StatCard title="Total Projects" value={4} icon="pi-briefcase" />
      <StatCard title="UI Components" value={12} icon="pi-box" />
      <StatCard title="Completed Modules" value={3} icon="pi-check-circle" />
      <StatCard title="In Progress" value={1} icon="pi-hourglass" />
    </div>
  );
}
