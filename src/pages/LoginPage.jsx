import React, { useState } from 'react';

const LoginPage = () => {
  // Controlled state for form input fields
  const [credentials, setCredentials] = useState({
    phoneNumber: '',
    password: ''
  });

  // State for error handling and validation feedback
  const [errors, setErrors] = useState({
    phoneNumber: '',
    password: ''
  });

  // Handle input changes dynamically and clear errors as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone numbers, restrict input to numeric digits and a leading '+' only
    if (name === 'phoneNumber') {
      const sanitizedValue = value.replace(/[^0-9+]/g, '');
      setCredentials(prev => ({ ...prev, [name]: sanitizedValue }));
    } else {
      setCredentials(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Perform client-side validation specifically optimized for Sri Lankan / general mobile formats
  const validateForm = () => {
    let isValid = true;
    const newErrors = { phoneNumber: '', password: '' };

    // Simple regex check for valid mobile number formats (e.g., 0771234567 or +94771234567)
    const phoneRegex = /^(?:\+94|0)?7[0-9]{8}$/;

    if (!credentials.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
      isValid = false;
    } else if (!phoneRegex.test(credentials.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid mobile number (e.g., 077XXXXXXX).';
      isValid = false;
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Sending credentials to Spring Boot REST API:', credentials);
      // Future Integration: 
      // axios.post('http://localhost:8080/api/v1/auth/login', credentials)...
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="row w-100 justify-content-center m-0">
        {/* Responsive Grid: 
          - col-12: Full width on mobile.
          - col-md-6: Perfectly proportioned width for tablets (iPad, Galaxy Tab, etc.).
          - col-lg-4: Elegant, centered card structure on desktop.
        */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 rounded-3">
            
            {/* Header displaying Ceylinco branding colors compiled via SASS */}
            <div className="card-header bg-primary text-white text-center py-4 rounded-top-3 border-0">
              <h3 className="mb-1 fw-bold tracking-wide">CEYLINCO INSURANCE</h3>
              <p className="small mb-0 opacity-75">Portal-1: Marketing Executive Portal</p>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit} noValidate>
                
                {/* Phone Number Input */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label fw-semibold text-dark">
                    Registered Mobile Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted">📞</span>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                      placeholder="e.g. 0771234567"
                      value={credentials.phoneNumber}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback d-block">{errors.phoneNumber}</div>
                    )}
                  </div>
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold text-dark">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-muted">🔒</span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                    />
                    {errors.password && (
                      <div className="invalid-feedback d-block">{errors.password}</div>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <button 
                  type="submit" 
                  className="btn btn-primary w-100 py-2.5 fw-bold text-uppercase shadow-sm"
                >
                  Log In
                </button>

              </form>
            </div>

            {/* Footer containing authorization details */}
            <div className="card-footer bg-white border-0 text-center pb-4 pt-0">
              <span className="text-muted small">
                Authorized Executive & Supervisor Access Only.
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;