export default function Navbar() {
  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #e2e8f0',
      padding: '0 2rem',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: '#6366f1', display: 'flex', alignItems: 'center',
          justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16
        }}>T</div>
        <span style={{ fontWeight: 600, fontSize: 18, color: '#1a202c' }}>TaskFlow</span>
      </div>
      <span style={{ fontSize: 13, color: '#718096' }}>Task Manager</span>
    </nav>
  );
}
