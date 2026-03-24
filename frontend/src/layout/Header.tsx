type HeaderProps = {
  onToggle: () => void;
};

function Header({ onToggle }: HeaderProps) {
  return (
    <header className="header">
      {/* 漢堡 */}
      <button
        onClick={onToggle}
        className="menu-toggle"
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <i className="pi pi-user header-icon" aria-hidden="true"></i>

      <div className="header-title">React × PrimeReact Dashboard</div>
    </header>
  );
}

export default Header;
