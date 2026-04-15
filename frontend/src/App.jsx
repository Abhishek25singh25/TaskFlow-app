import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';

const API = '/api/tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API);
      setTasks(data);
    } finally { setLoading(false); }
  };

  const addTask = async (form) => {
    const { data } = await axios.post(API, form);
    setTasks([data, ...tasks]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  const updateTask = async (id, updates) => {
    const { data } = await axios.put(`${API}/${id}`, updates);
    setTasks(tasks.map(t => t._id === id ? data : t));
  };

  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);
  const counts = {
    all: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    'in-progress': tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6fb' }}>
      <Navbar />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: '2rem' }}>
          {[['all','All','#6366f1'],['todo','To Do','#3730a3'],['in-progress','In Progress','#92400e'],['done','Done','#065f46']].map(([k,label,color]) => (
            <div key={k} onClick={() => setFilter(k)} style={{
              background: '#fff', borderRadius: 10, border: filter === k ? `2px solid ${color}` : '1px solid #e2e8f0',
              padding: '0.75rem 1rem', cursor: 'pointer', textAlign: 'center'
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color }}>{counts[k]}</div>
              <div style={{ fontSize: 12, color: '#718096', marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        <TaskForm onAdd={addTask} />

        {loading ? (
          <p style={{ textAlign: 'center', color: '#718096', marginTop: '3rem' }}>Loading tasks...</p>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#a0aec0', marginTop: '3rem' }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>📋</div>
            <p>No tasks here yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map(task => (
              <TaskCard key={task._id} task={task} onDelete={deleteTask} onUpdate={updateTask} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
