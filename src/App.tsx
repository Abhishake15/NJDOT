export default function App() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Blue Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <img src="/nj-seal.jpg" alt="State of New Jersey Seal" className="nj-seal" />
              <span>OFFICIAL SITE OF THE STATE OF NEW JERSEY</span>
            </div>
            <div className="top-bar-right">
              <span>Governor Phil Murphy • Lt. Governor Tahesha Way</span>
            </div>
          </div>
        </div>
      </div>

      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container">
          <nav aria-label="Utility navigation" className="utility-nav">
            <span className="disabled-link">NJ.gov</span>
            <span className="separator">|</span>
            <span className="disabled-link">Services</span>
            <span className="separator">|</span>
            <span className="disabled-link">Agencies</span>
            <span className="separator">|</span>
            <span className="disabled-link">FAQs</span>
            <span className="separator">|</span>
            <span className="disabled-link">Translate</span>
            <span className="separator">|</span>
            <span className="disabled-link">Search 🔍</span>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <img src="/njdot-logo.png" alt="New Jersey Department of Transportation Logo" className="njdot-logo" />
            <h1 className="site-title">Department of Transportation</h1>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="main-nav" aria-label="Main navigation">
        <div className="container">
          <ul className="nav-list">
            <li>
              <span className="disabled-link">NJDOT 🏠</span>
            </li>
            <li>
              <span className="disabled-link">About NJDOT ▼</span>
            </li>
            <li>
              <span className="disabled-link">NJCommuter ▼</span>
            </li>
            <li>
              <span className="disabled-link">Community Programs ▼</span>
            </li>
            <li>
              <span className="disabled-link">In the Works ▼</span>
            </li>
            <li>
              <span className="disabled-link">Engineering ▼</span>
            </li>
            <li>
              <span className="disabled-link">Capital Program ▼</span>
            </li>
            <li>
              <span className="disabled-link">Multimodal/Freight ▼</span>
            </li>
            <li>
              <span className="disabled-link">Doing Business ▼</span>
            </li>
            <li>
              <span className="disabled-link">References ▼</span>
            </li>
            <li>
              <span className="disabled-link">Careers Home ▼</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="main-content">
        <div className="container">
          {/* Important Notice */}
          <section className="notice-section" aria-labelledby="notice-heading">
            <div className="notice-header">
              <h2 id="notice-heading">⚠️ Important Notice</h2>
            </div>
            <div className="notice-content">
              <h3>Toll Violation Amnesty Program</h3>
              <p>
                The New Jersey Turnpike Authority is offering a limited-time amnesty program for outstanding toll
                violations. Eligible motorists can resolve violations with reduced penalties through December 31, 2024.
              </p>
              <p>
                <strong>Program Details:</strong> Violations eligible for amnesty include those issued between January
                1, 2019 and December 31, 2023. Administrative fees will be waived for qualifying violations.
              </p>
              <span className="disabled-link notice-link">Learn More About Amnesty Program →</span>
            </div>
          </section>

          {/* Quick Access Section */}
          <section className="quick-access" aria-labelledby="quick-access-heading">
            <h2 id="quick-access-heading">Quick Access</h2>
            <div className="quick-access-grid">
              <div className="quick-access-card">
                <div className="card-icon" aria-hidden="true">
                  🚗
                </div>
                <h3>Traffic & Travel</h3>
                <p>Real-time traffic conditions, road closures, and travel advisories</p>
                <span className="disabled-link card-link">View Traffic Info →</span>
              </div>
              <div className="quick-access-card">
                <div className="card-icon" aria-hidden="true">
                  🚧
                </div>
                <h3>Construction Projects</h3>
                <p>Current and upcoming construction projects across New Jersey</p>
                <span className="disabled-link card-link">View Projects →</span>
              </div>
              <div className="quick-access-card">
                <div className="card-icon" aria-hidden="true">
                  📋
                </div>
                <h3>Permits & Applications</h3>
                <p>Apply for permits, licenses, and access application forms</p>
                <span className="disabled-link card-link">Get Permits →</span>
              </div>
              <div className="quick-access-card">
                <div className="card-icon" aria-hidden="true">
                  📞
                </div>
                <h3>Contact Us</h3>
                <p>Get in touch with NJDOT offices and customer service</p>
                <span className="disabled-link card-link">Contact Info →</span>
              </div>
            </div>
          </section>

          {/* Transportation News Section */}
          <section className="transportation-news" aria-labelledby="news-heading">
            <h2 id="news-heading">Transportation News</h2>

            <div className="news-releases-header">
              <span className="news-releases-title">📰 News Releases</span>
            </div>

            <ul className="news-list">
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">10</span>
                  <span className="date-day">02</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    Route 133 to be closed and detoured during the day beginning Monday, October 6
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">10</span>
                  <span className="date-day">02</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    I-280 westbound right lane and Exit 13 to be closed Friday and Saturday as bridge project advances
                    in Newark
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">10</span>
                  <span className="date-day">02</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    Route 4 lane closures tomorrow night in both directions as bridge project nears completion in
                    Englewood
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">10</span>
                  <span className="date-day">02</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    Route 23 and Newark-Pompton Turnpike/Windbeam Road Intersection temporary lane closures Friday night
                    in Riverdale
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">10</span>
                  <span className="date-day">02</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    I-78 westbound two lanes closed this weekend as bridge replacement project advances in Somerset
                    County
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">10</span>
                  <span className="date-day">02</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    I-80 eastbound Express lanes closed this weekend for priority repairs to Bridge over Green Street in
                    Hackensack
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">09</span>
                  <span className="date-day">30</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    Route 40 and CR 540/Hawks Bridge Road partial ramp closures this week in Carneys Point, Salem County
                  </span>
                </div>
              </li>
              <li className="news-item">
                <div className="news-date">
                  <span className="date-month">09</span>
                  <span className="date-day">30</span>
                </div>
                <div className="news-content">
                  <span className="disabled-link news-link">
                    I-295 southbound lane closures tomorrow as bridge project advances in Lawrence
                  </span>
                </div>
              </li>
            </ul>

            <div className="view-more">
              <span className="disabled-link view-more-link">VIEW MORE ›</span>
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section" aria-labelledby="services-heading">
            <h2 id="services-heading">Services & Resources</h2>

            <div className="services-grid">
              <div className="service-category">
                <h3>For Residents</h3>
                <ul>
                  <li>
                    <span className="disabled-link">Report a Pothole</span>
                  </li>
                  <li>
                    <span className="disabled-link">Road Conditions</span>
                  </li>
                  <li>
                    <span className="disabled-link">Public Transportation</span>
                  </li>
                  <li>
                    <span className="disabled-link">Bicycle & Pedestrian Programs</span>
                  </li>
                  <li>
                    <span className="disabled-link">Community Outreach</span>
                  </li>
                </ul>
              </div>

              <div className="service-category">
                <h3>For Businesses</h3>
                <ul>
                  <li>
                    <span className="disabled-link">Contractor Resources</span>
                  </li>
                  <li>
                    <span className="disabled-link">Bid Opportunities</span>
                  </li>
                  <li>
                    <span className="disabled-link">Vendor Registration</span>
                  </li>
                  <li>
                    <span className="disabled-link">Utility Coordination</span>
                  </li>
                  <li>
                    <span className="disabled-link">Right of Way Information</span>
                  </li>
                </ul>
              </div>

              <div className="service-category">
                <h3>Planning & Environment</h3>
                <ul>
                  <li>
                    <span className="disabled-link">Environmental Studies</span>
                  </li>
                  <li>
                    <span className="disabled-link">Transportation Planning</span>
                  </li>
                  <li>
                    <span className="disabled-link">Public Hearings</span>
                  </li>
                  <li>
                    <span className="disabled-link">Project Development</span>
                  </li>
                  <li>
                    <span className="disabled-link">Sustainability Initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Contact Information</h3>
              <address>
                <p>New Jersey Department of Transportation</p>
                <p>1035 Parkway Avenue</p>
                <p>Trenton, NJ 08625</p>
                <p>
                  Phone: <span className="disabled-link">(609) 530-2000</span>
                </p>
              </address>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <span className="disabled-link">Accessibility Statement</span>
                </li>
                <li>
                  <span className="disabled-link">Privacy Policy</span>
                </li>
                <li>
                  <span className="disabled-link">Terms of Use</span>
                </li>
                <li>
                  <span className="disabled-link">Site Map</span>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Connect With Us</h3>
              <ul>
                <li>
                  <span className="disabled-link">Facebook</span>
                </li>
                <li>
                  <span className="disabled-link">Twitter</span>
                </li>
                <li>
                  <span className="disabled-link">YouTube</span>
                </li>
                <li>
                  <span className="disabled-link">Email Updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 New Jersey Department of Transportation. All rights reserved.</p>
            <p>
              <span className="disabled-link">Accessibility</span> |
              <span className="disabled-link">Privacy Notice</span> |
              <span className="disabled-link">Legal Statement</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
