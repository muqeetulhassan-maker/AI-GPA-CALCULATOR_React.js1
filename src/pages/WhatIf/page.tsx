import { useMemo, useState } from 'react';
import targetIcon from '../../assets/icon-target.svg';

const WhatIf = () => {
  const [currentCgpa, setCurrentCgpa] = useState('3.00');
  const [totalCredits, setTotalCredits] = useState('60');
  const [targetCgpa, setTargetCgpa] = useState('3.50');
  const [remainingCredits, setRemainingCredits] = useState('15');

  const requiredGpa = useMemo(() => {
    const current = parseFloat(currentCgpa) || 0;
    const earned = parseFloat(totalCredits) || 0;
    const target = parseFloat(targetCgpa) || 0;
    const remaining = parseFloat(remainingCredits) || 0;

    if (remaining <= 0) return null;
    const needed = ((target * (earned + remaining)) - (current * earned)) / remaining;
    if (Number.isNaN(needed) || !Number.isFinite(needed)) return null;
    return Number(needed.toFixed(2));
  }, [currentCgpa, totalCredits, targetCgpa, remainingCredits]);

  const statusMessage = useMemo(() => {
    if (requiredGpa === null) return 'Enter valid numbers above to calculate your target GPA.';
    if (requiredGpa > 4.0) return 'Your target is very ambitious — you would need above a 4.0 GPA.';
    if (requiredGpa < 0) return 'You have already exceeded the target GPA with your current record.';
    return `You need a ${requiredGpa} GPA in your remaining credits.`;
  }, [requiredGpa]);

  return (
    <div className="page">
      <div className="section-hero pt-32-pb-16">
        <span className="badge">What-If Simulator</span>
        <h1>Plan your target GPA</h1>
        <p>Find the GPA you need in remaining credits to reach your goal.</p>
      </div>

      <div className="card card-flex-start" style={{ gap: '24px' }}>
        <div className="flex-center gap-12 mb-16">
          <img src={targetIcon} alt="Target Icon" width="32" height="32" />
          <div>
            <h2 className="mb-4">What GPA do I need?</h2>
            <p className="text-muted">Use the form below to estimate the performance required in your next semester.</p>
          </div>
        </div>

        <div className="grid-2 gap-20" style={{ width: '100%' }}>
          <div className="input-field">
            <label htmlFor="currentCgpa">Current CGPA</label>
            <input
              id="currentCgpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              value={currentCgpa}
              onChange={(e) => setCurrentCgpa(e.target.value)}
              placeholder="e.g. 3.25"
            />
          </div>

          <div className="input-field">
            <label htmlFor="totalCredits">Total Credits Earned</label>
            <input
              id="totalCredits"
              type="number"
              step="1"
              min="0"
              value={totalCredits}
              onChange={(e) => setTotalCredits(e.target.value)}
              placeholder="e.g. 60"
            />
          </div>

          <div className="input-field">
            <label htmlFor="targetCgpa">Target CGPA Goal</label>
            <input
              id="targetCgpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              value={targetCgpa}
              onChange={(e) => setTargetCgpa(e.target.value)}
              placeholder="e.g. 3.75"
            />
          </div>

          <div className="input-field">
            <label htmlFor="remainingCredits">Remaining Credits</label>
            <input
              id="remainingCredits"
              type="number"
              step="1"
              min="0"
              value={remainingCredits}
              onChange={(e) => setRemainingCredits(e.target.value)}
              placeholder="e.g. 15"
            />
          </div>
        </div>

        <div className="card card-centered-large mt-24" style={{ width: '100%' }}>
          <div className="stat-label">Result</div>
          <div className="stat-value" style={{ fontSize: '2rem' }}>{statusMessage}</div>
          {requiredGpa !== null && requiredGpa >= 0 && requiredGpa <= 4.0 && (
            <p className="mt-12">If you earn a GPA of <strong>{requiredGpa}</strong> in your remaining credits, you will reach your target CGPA.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatIf;
