import React, { useState } from 'react';

export default function TestPage() {
  // State for testing form validation logic interactively
  const [policyPitches, setPolicyPitches] = useState('');
  const [error, setError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleValidationTest = (e) => {
    e.preventDefault();
    setFormSubmitted(false);

    // Enforce design system validation rules: non-empty and non-negative numbers
    if (!policyPitches.trim()) {
      setError('Number of policies pitched is required.');
    } else if (parseInt(policyPitches, 10) < 0) {
      setError('Pitched count cannot be a negative value.');
    } else {
      setError('');
      setFormSubmitted(true);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-screen">
      
      {/* 1. Global Nav Bar Override Tester */}
      <nav className="navbar navbar-expand-lg navbar-portal py-3">
        <div className="container">
          <a className="navbar-brand text-black font-weight-bold" href="#home">
            <strong>CEYLINCO</strong> <span className="fw-light">Portal-1 MEP</span>
          </a>
          <div className="d-flex gap-3">
            <a className="nav-link" href="#dashboard">Dashboard</a>
            <a className="nav-link" href="#logs">Activity Logs</a>
            <a className="nav-link" href="#profile">Edit Profile</a>
          </div>
        </div>
      </nav>

      {/* 2. Contrast Guardrail for Gold/Yellow Promotional Background Bands */}
      <div className="ceylinco-promo-band py-3 text-center fw-bold">
        📢 Safe Contrast Banner: Gold Canvas (#FDD900) strictly enforces Pure Black text!
      </div>

      {/* Main Container utilizing standard grid breakpoints */}
      <main className="container my-5 flex-grow-1">
        
        {/* Row 1: Typography Foundations & Theme Buttons */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-lg-8">
            <div className="card p-4 border-1 border-neutral-100 rounded-3 shadow-none">
              <h2 className="text-black fw-bold mb-3">1. Typography & Theme Mapping</h2>
              <p className="lead text-muted">
                This paragraph renders in Dark Gray (#6F6F6F), handling your primary body descriptions seamlessly.
              </p>
              <p>
                Hyperlinks inherit the Deep Corporate Blue brand tone natively: <a href="#test">Clicking here tests the link transition.</a>
              </p>
              
              <h3 className="text-black fw-bold mt-4 mb-3">Interactive Theme Buttons</h3>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary">
                  Primary Button (Pure Black)
                </button>
                <button className="btn btn-secondary">
                  Secondary/Promo Action (Gold Yellow)
                </button>
                <button className="btn btn-info text-white">
                  Info Button (Deep Blue)
                </button>
                <button className="btn btn-outline-dark">
                  Outline Layout Component
                </button>
              </div>
            </div>
          </div>

          {/* Soft Translucent Policy & Claim Status Badges */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card p-4 border-1 border-neutral-100 rounded-3 h-100 shadow-none">
              <h2 className="text-black fw-bold mb-3">2. Status Fills</h2>
              <p className="small text-muted mb-4">Uses 10% translucent background color scaling to ensure accessible pill indicators.</p>
              
              <div className="d-flex flex-column gap-3 align-items-start">
                <div className="badge-status status-active">
                  <span className="me-2">✓</span> Approved / Active Policy
                </div>
                
                <div className="badge-status status-pending">
                  <span className="me-2">🕒</span> Pending Review (Warning Gold)
                </div>
                
                <div className="badge-status status-lapsed">
                  <span className="me-2">⚠️</span> Rejected / Lapsed Status
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Controlled Forms, Validations & Alternating Section Block */}
        <div className="row g-4 mb-5">
          
          {/* React State-driven Controlled Form Tester */}
          <div className="col-12 col-md-6">
            <div className="card p-4 border-1 border-neutral-100 rounded-3 shadow-none">
              <h2 className="text-black fw-bold mb-3">3. Form Control & Validation</h2>
              <form onSubmit={handleValidationTest} noValidate>
                <div className="mb-3">
                  <label htmlFor="policyInput" className="form-label small fw-semibold text-dark">
                    Number of Policies Pitched (Mobile Tapping Height Minimum: 44px)
                  </label>
                  <input
                    type="number"
                    id="policyInput"
                    style={{ minHeight: '44px' }}
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    placeholder="Enter today's interaction metrics..."
                    value={policyPitches}
                    onChange={(e) => setPolicyPitches(e.target.value)}
                  />
                  {error && (
                    <div className="invalid-feedback fw-semibold d-block mt-2">
                      ❌ {error}
                    </div>
                  )}
                  {formSubmitted && (
                    <div className="text-success small fw-semibold d-block mt-2">
                      ✓ Validation passed! State data is fully sanitized for Spring Boot API submission.
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ minHeight: '44px' }}>
                  Submit Log Entry
                </button>
              </form>
            </div>
          </div>

          {/* Alternating Component Background Block Element */}
          <div className="col-12 col-md-6">
            <div className="bg-section-alt p-4 rounded-3 h-100 d-flex flex-column justify-content-center">
              <h2 className="text-black fw-bold mb-2">4. Alternating Block Pane</h2>
              <p className="mb-0">
                This container leverages your custom <code>.bg-section-alt</code> utility class, applying a subtle Light Gray layout tint (`#F1F1F1`) to cleanly split horizontal grid features on long forms.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* 3. Enterprise Dark Footer System */}
      <footer className="footer-portal py-5 mt-auto">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <h5 className="fw-bold mb-3">Ceylinco General Insurance</h5>
              <p className="small mb-0 text-muted">
                Marketing Executive Portal terminal environment. Authorized system access protocols strictly audited.
              </p>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <h5 className="fw-bold mb-3">Quick Utilities</h5>
              <div className="d-flex justify-content-md-end gap-3 small">
                <a href="#privacy">Privacy Guardrails</a>
                <a href="#support">Help Desk Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}