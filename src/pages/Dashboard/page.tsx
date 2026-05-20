import { useState } from 'react';
import { Link } from 'react-router-dom';
import gpaIcon from '../../assets/icon-gpa-chart.svg';
import trendingIcon from '../../assets/icon-trending.svg';

const Dashboard = () => {
  // States to hold your academic data
  const [userName] = useState('Student');
  const [cgpa] = useState('—');
  const [totalCredits] = useState(0);
  const [semesterCount] = useState(0);

  return (
    <div className="page">
      {/* HEADER */}
      <div className="flex-center-wrap justify-flex-start gap-16 mb-32">
        <div>
          <span className="badge">My Dashboard</span>
          <h1 id="dash-welcome">Welcome back, {userName}!</h1>
          <p id="dash-sub">Here's your academic overview.</p>
        </div>
        <div className="flex-start gap-12">
          <Link to="/calculator" className="sm-button">
            + New Calculation
          </Link>
          <button className="button-small-border">Logout</button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="card-container" style={{ margin: '0 0 32px', justifyContent: 'flex-start', display: 'flex', gap: '16px' }}>
        <div className="card card-centered-large">
          <div className="stat-value" id="stat-cgpa">{cgpa}</div>
          <div className="stat-label">Cumulative GPA</div>
        </div>
        <div className="card card-centered-large">
          <div className="stat-value" id="stat-semesters">{semesterCount}</div>
          <div className="stat-label">Semesters</div>
        </div>
        <div className="card card-centered-large">
          <div className="stat-value" id="stat-credits">{totalCredits}</div>
          <div className="stat-label">Total Credits</div>
        </div>
      </div>

      {/* RECENT HISTORY TABLE */}
      <h2>Recent Calculations</h2>

      <div className="table-container" id="history-table-wrap">
        <table style={{ minWidth: '500px', maxWidth: '100%' }}>
          <thead>
            <tr>
              <th>Semester</th>
              <th>Courses</th>
              <th>Credits</th>
              <th>GPA</th>
              <th>Classification</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="history-tbody">
            {/* Table rows will be mapped here in the next step */}
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: '20px' }}>
                No calculations yet. <Link to="/calculator">Start your first one →</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* QUICK LINKS */}
      <h2 className="mt-40">Quick Actions</h2>
      <div className="card-container justify-flex-start mt-12" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <div className="card card-flex-start">
          <h3>
            <img src={gpaIcon} alt="Chart" width="24" height="24" style={{ display: 'inline', marginRight: '8px' }} />
            Semester GPA
          </h3>
          <p>Calculate GPA for a single semester.</p>
          <Link to="/calculator">Open →</Link>
        </div>
        <div className="card card-flex-start">
          <h3>
            <img src={trendingIcon} alt="Trending" width="24" height="24" style={{ display: 'inline', marginRight: '8px' }} />
            Cumulative
          </h3>
          <p>Track GPA across all semesters.</p>
          <Link to="/cumulative">Open →</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;