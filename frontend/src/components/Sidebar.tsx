function Sidebar() {
  return (
    <aside
      style={{
        width: '220px',
        backgroundColor: '#111827',
        color: '#e5e7eb',
        padding: '1rem',
      }}
    >
      <p style={{ marginBottom: '1rem', fontWeight: 600 }}>Menu</p>
      <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </aside>
  )
}

export default Sidebar
