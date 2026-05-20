import { useMemo, useState } from 'react';
import folderIcon from '../../assets/icon-folder.svg';

type HistoryItem = {
  id: string;
  date: string;
  semester: string;
  gpa: string;
  credits: string;
};

const loadInitialHistory = (): HistoryItem[] => {
  const saved = localStorage.getItem('gpa_history');
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved) as Partial<HistoryItem>[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item, index) => ({
      id: item.id || `history-${index}`,
      date: item.date || new Date().toLocaleDateString(),
      semester: item.semester || 'Unknown semester',
      gpa: item.gpa || '0.00',
      credits: item.credits || '0'
    }));
  } catch {
    console.warn('Invalid gpa_history data found in localStorage');
    return [];
  }
};

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>(loadInitialHistory);

  const removeItem = (id: string) => {
    setHistory((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem('gpa_history', JSON.stringify(updated));
      return updated;
    });
  };

  const totalRecords = useMemo(() => history.length, [history]);

  return (
    <div className="page">
      <div className="section-hero pt-32-pb-16">
        <span className="badge">History & Records</span>
        <h1>Your saved GPA calculations</h1>
        <p>Review past semester results and manage your GPA history.</p>
      </div>

      <div className="card card-flex-start mb-24" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex-center gap-12">
          <img src={folderIcon} alt="History Icon" width="32" height="32" />
          <div>
            <h2>Saved history</h2>
            <p className="text-muted">Loaded from browser storage using the key <code>gpa_history</code>.</p>
          </div>
        </div>
        <div className="stat-value">{totalRecords} records</div>
      </div>

      <div className="table-container">
        <table style={{ minWidth: '500px', width: '100%' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Semester</th>
              <th>GPA</th>
              <th>Credits</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '24px' }}>
                  No saved GPA history found. Complete a calculation and save it to localStorage.
                </td>
              </tr>
            ) : (
              history.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.semester}</td>
                  <td>{item.gpa}</td>
                  <td>{item.credits}</td>
                  <td>
                    <button type="button" className="button-small-border" onClick={() => removeItem(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
