import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import trendingIcon from '../../assets/icon-trending.svg';

type SemesterRow = {
  id: string;
  label: string;
  credits: string;
  gpa: string;
};

const Cumulative = () => {
  const [semesters, setSemesters] = useState<SemesterRow[]>([
    { id: 'sem-1', label: 'Semester 1', credits: '15', gpa: '3.50' }
  ]);

  const totalCredits = useMemo(
    () => semesters.reduce((sum, semester) => sum + Number(semester.credits || 0), 0),
    [semesters]
  );

  const totalQualityPoints = useMemo(
    () =>
      semesters.reduce((sum, semester) => {
        const gpaValue = Number(semester.gpa || 0);
        return sum + gpaValue * Number(semester.credits || 0);
      }, 0),
    [semesters]
  );

  const cumulativeGpa = totalCredits > 0 ? parseFloat((totalQualityPoints / totalCredits).toFixed(2)) : 0;

  const handleSemesterChange = (id: string, field: keyof SemesterRow, value: string) => {
    setSemesters((current) =>
      current.map((semester) => (semester.id === id ? { ...semester, [field]: value } : semester))
    );
  };

  const handleAddSemester = () => {
    setSemesters((current) => [
      ...current,
      { id: `sem-${Date.now()}`, label: `Semester ${current.length + 1}`, credits: '12', gpa: '0.00' }
    ]);
  };

  const handleRemoveSemester = (id: string) => {
    setSemesters((current) => (current.length === 1 ? current : current.filter((semester) => semester.id !== id)));
  };

  return (
    <div className="page">
      <div className="card card-flex-start">
        <div className="flex-center gap-12 mb-16">
          <img src={trendingIcon} alt="Cumulative GPA" width="32" height="32" />
          <div>
            <span className="badge">Cumulative</span>
            <h1>Aggregate GPA Tracker</h1>
          </div>
        </div>

        <p>Track your GPA over multiple semesters to see your cumulative academic performance.</p>

        <div className="table-container mt-24">
          <table>
            <thead>
              <tr>
                <th>Semester</th>
                <th>Credits</th>
                <th>GPA</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {semesters.map((semester) => (
                <tr key={semester.id}>
                  <td>
                    <input
                      type="text"
                      value={semester.label}
                      onChange={(e) => handleSemesterChange(semester.id, 'label', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={semester.credits}
                      onChange={(e) => handleSemesterChange(semester.id, 'credits', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="4"
                      step="0.01"
                      value={semester.gpa}
                      onChange={(e) => handleSemesterChange(semester.id, 'gpa', e.target.value)}
                    />
                  </td>
                  <td>
                    <button type="button" className="button-small-border" onClick={() => handleRemoveSemester(semester.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex-center-wrap justify-space-between gap-16 mt-24">
          <button type="button" className="lg-button" onClick={handleAddSemester}>
            + Add semester
          </button>
          <div className="card card-centered-small">
            <div className="stat-label">Total Credits</div>
            <div className="stat-value">{totalCredits}</div>
          </div>
          <div className="card card-centered-small">
            <div className="stat-label">Cumulative GPA</div>
            <div className="stat-value">{cumulativeGpa.toFixed(2)}</div>
          </div>
        </div>

        <div className="mt-24 flex-center gap-12">
          <Link to="/dashboard" className="button-small-border">
            Back to Dashboard
          </Link>
          <button type="button" className="lg-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cumulative;
