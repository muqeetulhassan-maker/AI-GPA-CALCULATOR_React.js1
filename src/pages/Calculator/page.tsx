import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import boltIcon from '../../assets/icon-bolt.svg';

const gradeOptions = [
  { label: 'A+', value: 4.0 },
  { label: 'A', value: 4.0 },
  { label: 'A-', value: 3.7 },
  { label: 'B+', value: 3.3 },
  { label: 'B', value: 3.0 },
  { label: 'B-', value: 2.7 },
  { label: 'C+', value: 2.3 },
  { label: 'C', value: 2.0 },
  { label: 'C-', value: 1.7 },
  { label: 'D+', value: 1.3 },
  { label: 'D', value: 1.0 },
  { label: 'F', value: 0.0 }
];

type CourseRow = {
  id: string;
  name: string;
  credits: string;
  grade: string;
};

const Calculator = () => {
  const [rows, setRows] = useState<CourseRow[]>([
    { id: 'course-1', name: '', credits: '3', grade: 'A' }
  ]);

  const totalCredits = useMemo(
    () => rows.reduce((sum, row) => sum + Number(row.credits || 0), 0),
    [rows]
  );

  const totalQualityPoints = useMemo(
    () =>
      rows.reduce((sum, row) => {
        const gradeValue = gradeOptions.find((option) => option.label === row.grade)?.value || 0;
        return sum + gradeValue * Number(row.credits || 0);
      }, 0),
    [rows]
  );

  const semesterGpa = totalCredits > 0 ? parseFloat((totalQualityPoints / totalCredits).toFixed(2)) : 0;

  const handleRowChange = (id: string, field: keyof CourseRow, value: string) => {
    setRows((currentRows) =>
      currentRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleAddRow = () => {
    setRows((currentRows) => [
      ...currentRows,
      { id: `course-${Date.now()}`, name: '', credits: '3', grade: 'A' }
    ]);
  };

  const handleRemoveRow = (id: string) => {
    setRows((currentRows) => (currentRows.length === 1 ? currentRows : currentRows.filter((row) => row.id !== id)));
  };

  const classification = semesterGpa >= 3.7
    ? 'First Class'
    : semesterGpa >= 3.0
      ? 'Upper Second'
      : semesterGpa >= 2.0
        ? 'Lower Second'
        : semesterGpa > 0
          ? 'Pass'
          : 'No GPA yet';

  return (
    <div className="page">
      <div className="card card-flex-start">
        <div className="flex-center gap-12 mb-16">
          <img src={boltIcon} alt="Semester Calculator" width="32" height="32" />
          <div>
            <span className="badge">Calculator</span>
            <h1>Semester GPA Calculator</h1>
          </div>
        </div>

        <p>Enter your courses, credits, and grades to compute a semester GPA in real time.</p>

        <div className="table-container mt-24">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Credits</th>
                <th>Grade</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type="text"
                      value={row.name}
                      placeholder={`Course ${index + 1}`}
                      onChange={(e) => handleRowChange(row.id, 'name', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={row.credits}
                      onChange={(e) => handleRowChange(row.id, 'credits', e.target.value)}
                    />
                  </td>
                  <td>
                    <select value={row.grade} onChange={(e) => handleRowChange(row.id, 'grade', e.target.value)}>
                      {gradeOptions.map((option) => (
                        <option key={option.label} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button type="button" className="button-small-border" onClick={() => handleRemoveRow(row.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex-center-wrap justify-space-between gap-16 mt-24">
          <div>
            <button type="button" className="lg-button" onClick={handleAddRow}>
              + Add row
            </button>
          </div>
          <div className="card card-centered-small">
            <div className="stat-label">Total Credits</div>
            <div className="stat-value">{totalCredits}</div>
          </div>
          <div className="card card-centered-small">
            <div className="stat-label">Semester GPA</div>
            <div className="stat-value">{semesterGpa.toFixed(2)}</div>
          </div>
          <div className="card card-centered-small">
            <div className="stat-label">Classification</div>
            <div className="stat-value">{classification}</div>
          </div>
        </div>

        <div className="mt-24 flex-center gap-12">
          <Link to="/dashboard" className="button-small-border">
            Back to Dashboard
          </Link>
          <button type="button" className="lg-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Recalculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
