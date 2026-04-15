const STATUS_STYLES = {
  'todo': { bg: '#e0e7ff', color: '#3730a3', label: 'To Do' },
  'in-progress': { bg: '#fef3c7', color: '#92400e', label: 'In Progress' },
  'done': { bg: '#d1fae5', color: '#065f46', label: 'Done' },
};
const PRIORITY_STYLES = {
  low: { bg: '#f0fdf4', color: '#15803d' },
  medium: { bg: '#fffbeb', color: '#b45309' },
  high: { bg: '#fef2f2', color: '#dc2626' },
};

export default function TaskCard({ task, onDelete, onUpdate }) {
  const s = STATUS_STYLES[task.status];
  const p = PRIORITY_STYLES[task.priority];

  const cycleStatus = () => {
    const order = ['todo', 'in-progress', 'done'];
    const next = order[(order.indexOf(task.status) + 1) % order.length];
    onUpdate(task._id, { status: next });
  };

  return (
    <div style={{
      background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0',
      padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: 10,
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      borderLeft: task.priority === 'high' ? '3px solid #ef4444' :
                  task.priority === 'medium' ? '3px solid #f59e0b' : '3px solid #22c55e'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{
          fontSize: 15, fontWeight: 600, color: '#1a202c',
          textDecoration: task.status === 'done' ? 'line-through' : 'none',
          flex: 1
        }}>{task.title}</h3>
        <button onClick={() => onDelete(task._id)} style={{
          background: 'none', color: '#cbd5e0', fontSize: 18, padding: '0 4px',
          lineHeight: 1
        }} title="Delete">×</button>
      </div>
      {task.description && (
        <p style={{ fontSize: 13, color: '#718096', lineHeight: 1.5 }}>{task.description}</p>
      )}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <button onClick={cycleStatus} style={{
          background: s.bg, color: s.color, fontSize: 12, padding: '4px 10px',
          borderRadius: 20, fontWeight: 500
        }}>{s.label}</button>
        <span style={{
          background: p.bg, color: p.color, fontSize: 12, padding: '4px 10px',
          borderRadius: 20, fontWeight: 500
        }}>{task.priority}</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: '#a0aec0' }}>
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
