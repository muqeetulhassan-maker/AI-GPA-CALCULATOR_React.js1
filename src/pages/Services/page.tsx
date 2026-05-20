
import { Link } from 'react-router-dom';
import gpaIcon from '../../assets/icon-gpa-chart.svg';
import trendingIcon from '../../assets/icon-trending.svg';
import targetIcon from '../../assets/icon-target.svg';
import folderIcon from '../../assets/icon-folder.svg';

const Services = () => {
  return (
    <div className="page">
      <div className="section-hero pt-32-pb-16">
        <span className="badge">Services</span>
        <h1>Our <span className="color-brand-primary">Tools & Services</span></h1>
        <p>Everything you need to track, plan, and improve your academic performance.</p>
      </div>

      {/* FEATURES TABLE */}
      <h2 className="mb-16">Feature Comparison</h2>
      <div className="table-container">
        <table style={{ minWidth: '500px', maxWidth: '860px' }}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Registered</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Semester GPA Calculator</td><td>✅</td><td>✅</td><td>Calculate GPA for individual semesters</td></tr>
            <tr><td>Cumulative GPA Tracker</td><td>✅</td><td>✅</td><td>Aggregate GPA across all semesters</td></tr>
            <tr><td>What-If Simulator</td><td>✅</td><td>✅</td><td>Simulate grades and plan targets</td></tr>
            <tr><td>Grade Reference Table</td><td>✅</td><td>✅</td><td>Full A+ to F grade point chart</td></tr>
            <tr><td>Save Calculations</td><td>❌</td><td>✅</td><td>Save all results to personal history</td></tr>
            <tr><td>History View</td><td>❌</td><td>✅</td><td>Review all past semester calculations</td></tr>
            <tr><td>CSV Export</td><td>❌</td><td>✅</td><td>Export your history as a spreadsheet</td></tr>
            <tr><td>Personal Dashboard</td><td>❌</td><td>✅</td><td>Cumulative overview and quick stats</td></tr>
            <tr><td>Detailed Course View</td><td>❌</td><td>✅</td><td>Per-course breakdown in history</td></tr>
          </tbody>
        </table>
      </div>

      {/* SERVICE CARDS */}
      <h2 className="mt-40 mb-8">Core Tools</h2>
      <div className="card-container justify-flex-start mt-12" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <div className="card card-flex-start">
          <h3>
            <img src={gpaIcon} alt="Chart Icon" width="24" height="24" style={{ display: 'inline', marginRight: '8px' }} />
            Semester GPA Calculator
          </h3>
          <p>The most precise semester GPA tool. Add any number of courses with custom credit hours. Supports A+ through F grades on the 4.0 scale.</p>
          <Link to="/calculator">Use Tool →</Link>
        </div>
        <div className="card card-flex-start">
          <h3>
            <img src={trendingIcon} alt="Trending Icon" width="24" height="24" style={{ display: 'inline', marginRight: '8px' }} />
            Cumulative GPA Tracker
          </h3>
          <p>Enter GPA and credits for each semester you've completed and instantly see your cumulative academic standing across your program.</p>
          <Link to="/cumulative">Use Tool →</Link>
        </div>
        <div className="card card-flex-start">
          <h3>
            <img src={targetIcon} alt="Target Icon" width="24" height="24" style={{ display: 'inline', marginRight: '8px' }} />
            What-If Simulator
          </h3>
          <p>Find out exactly what GPA you need in remaining credits to hit your target, or simulate any grade scenario for the next semester.</p>
          <Link to="/whatif">Use Tool →</Link>
        </div>
        <div className="card card-flex-start">
          <h3>
            <img src={folderIcon} alt="Folder Icon" width="24" height="24" style={{ display: 'inline', marginRight: '8px' }} />
            History & Records
          </h3>
          <p>Every saved calculation is stored in your browser. Review individual course breakdowns and export your full academic record as CSV.</p>
          <Link to="/history">View History →</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;