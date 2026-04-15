import { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', description: '', priority: 'medium' });
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.title.trim()) return;
    setLoading(true);
    await onAdd(form);
    setForm({ title: '', description: '', priority: 'medium' });
    setLoading(false);
  };

  return (
    <div style={{
      background: '#fff', borderRadius: 12, border: '1px solid #e2e8f0',
      padding: '1.5rem', marginBottom: '2rem',
      boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
    }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#1a202c' }}>Add New Task</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input name="title" placeholder="Task title *" value={form.title} onChange={handle} />
        <textarea name="description" placeholder="Description (optional)" value={form.description}
          onChange={handle} rows={2} style={{ resize: 'vertical' }} />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <select name="priority" value={form.priority} onChange={handle} style={{ maxWidth: 150 }}>
            <option value="low">Low priority</option>
            <option value="medium">Medium priority</option>
            <option value="high">High priority</option>
          </select>
          <button onClick={submit} disabled={loading} style={{
            background: '#6366f1', color: '#fff', padding: '9px 20px',
            borderRadius: 8, fontWeight: 500, opacity: loading ? 0.7 : 1
          }}>
            {loading ? 'Adding...' : '+ Add Task'}
          </button>
        </div>
      </div>
    </div>
  );
}
