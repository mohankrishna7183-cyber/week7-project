import { useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const opportunities = [
  { title: 'Frontend Developer Intern', company: 'DG Technologies', location: 'Remote · India', type: 'Internship', salary: '₹10,000 / month', skills: ['React', 'JavaScript', 'CSS'], category: 'Engineering', color: 'mint', initials: 'DG', featured: true },
  { title: 'Python Developer Intern', company: 'Northstar Labs', location: 'Bengaluru · Hybrid', type: 'Internship', salary: '₹15,000 / month', skills: ['Python', 'Django', 'SQL'], category: 'Engineering', color: 'lilac', initials: 'NL', featured: true },
  { title: 'Product Design Intern', company: 'Goodkind Studio', location: 'Mumbai · On-site', type: 'Internship', salary: '₹12,000 / month', skills: ['Figma', 'Prototyping', 'UX'], category: 'Design', color: 'peach', initials: 'GK', featured: true },
  { title: 'Backend Developer Intern', company: 'Cloudframe', location: 'Remote · India', type: 'Internship', salary: '₹18,000 / month', skills: ['Node.js', 'APIs', 'MongoDB'], category: 'Engineering', color: 'blue', initials: 'CF' },
  { title: 'Data Analyst Intern', company: 'Fieldnote', location: 'Pune · Hybrid', type: 'Internship', salary: '₹14,000 / month', skills: ['SQL', 'Excel', 'Python'], category: 'Data', color: 'yellow', initials: 'FN' },
  { title: 'Java Developer Intern', company: 'Brightpath Systems', location: 'Hyderabad · On-site', type: 'Internship', salary: '₹16,000 / month', skills: ['Java', 'Spring', 'Git'], category: 'Engineering', color: 'pink', initials: 'BP' },
  { title: 'Web Development Intern', company: 'Common Ground', location: 'Remote · India', type: 'Internship', salary: '₹10,000 / month', skills: ['HTML', 'CSS', 'JavaScript'], category: 'Engineering', color: 'mint', initials: 'CG' },
  { title: 'Junior UI Designer', company: 'Paperplane', location: 'Delhi · Hybrid', type: 'Full-time', salary: '₹4.2 LPA', skills: ['Figma', 'UI design', 'Systems'], category: 'Design', color: 'peach', initials: 'PP' },
];

function Brand({ light = false }) {
  return <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label="DG Interns Hub home"><span className="brand-mark">d<span>g</span></span><span className="brand-name">DG Interns<br />Hub</span></Link>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="site-header"><div className="header-inner"><Brand /><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span></span><span></span></button><nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation"><NavLink end to="/" onClick={() => setMenuOpen(false)}>Home</NavLink><NavLink to="/jobs" onClick={() => setMenuOpen(false)}>Opportunities</NavLink><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink><Link className="nav-cta" to={location.pathname === '/jobs' ? '/contact' : '/jobs'} onClick={() => setMenuOpen(false)}>{location.pathname === '/jobs' ? 'Get in touch' : 'Find a role'} <span aria-hidden="true">↗</span></Link></nav></div></header>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-top"><Brand light /><p>Good work starts somewhere.<br />Let’s make it here.</p><Link className="footer-link" to="/jobs">Browse opportunities <span aria-hidden="true">↗</span></Link></div><div className="footer-bottom"><span>© 2026 DG Interns Hub</span><span>Made for the next generation of doers.</span><a href="mailto:hello@dginternshub.com">hello@dginternshub.com</a></div></footer>;
}

function JobCard({ job, index = 0 }) {
  return <article className={`job-card job-card-${job.color}`} style={{ '--card-index': index }}><div className="job-card-top"><span className={`company-mark mark-${job.color}`}>{job.initials}</span><span className="job-type">{job.type}</span></div><div className="job-card-copy"><p className="company-name">{job.company}</p><h3>{job.title}</h3><p className="job-location">{job.location}</p></div><div className="skill-list">{job.skills.map(skill => <span key={skill}>{skill}</span>)}</div><div className="job-card-bottom"><span>{job.salary}</span><Link to={`/contact?role=${encodeURIComponent(job.title)}`} aria-label={`Apply for ${job.title}`} className="apply-link">Apply <span aria-hidden="true">↗</span></Link></div></article>;
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>{action}</div>;
}

function Home() {
  const featured = opportunities.filter(job => job.featured);
  return <><main><section className="hero"><div className="hero-main"><div className="hero-copy"><p className="eyebrow"><span className="live-dot"></span> YOUR NEXT CHAPTER STARTS HERE</p><h1>Start somewhere<br /><span>good.</span></h1><p className="hero-description">Real opportunities for the people ready to make the most of them. Find your first role, build your skills, and get moving.</p><div className="hero-actions"><Link to="/jobs" className="button button-dark">Explore opportunities <span aria-hidden="true">↗</span></Link><span className="hero-note">No experience? No problem.</span></div><div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>R</span><span>A</span><span>M</span><span>+</span></div><p><strong>1,200+</strong> early careers in motion</p></div></div><div className="hero-photo"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="A team collaborating around a table" /><div className="photo-note"><span className="note-spark" aria-hidden="true">✳</span><span>Work that<br />moves you.</span></div><div className="photo-index">01 / 03 &nbsp; FIND YOUR PEOPLE</div></div><div className="hero-sticker" aria-hidden="true"><span>GO</span><span>GET</span><span>IT</span></div></div><div className="hero-ticker"><div><span>FIND YOUR FIRST ROLE</span><b>✳</b><span>BUILD YOUR NEXT SKILL</span><b>✳</b><span>MAKE GOOD THINGS HAPPEN</span><b>✳</b><span>FIND YOUR FIRST ROLE</span><b>✳</b><span>BUILD YOUR NEXT SKILL</span><b>✳</b></div></div></section>
      <section className="featured-section page-container"><SectionHeading eyebrow="A good place to begin" title={<>A few roles worth<br />a closer look<span className="accent-dot">.</span></>} copy="Thoughtful teams. Real experience. A first step that feels like yours." action={<Link className="text-link" to="/jobs">All opportunities <span aria-hidden="true">↗</span></Link>} /><div className="featured-grid">{featured.map((job, index) => <JobCard key={job.title} job={job} index={index} />)}</div></section>
      <section className="why-section"><div className="why-inner page-container"><div className="why-heading"><p className="eyebrow">A fair start changes everything</p><h2>More than a first<br />line on your CV<span className="accent-dot">.</span></h2><p>Starting out is a big deal. We make the next step a little less daunting and a lot more doable.</p><Link className="button button-outline" to="/contact">Meet DG Interns Hub <span aria-hidden="true">↗</span></Link></div><div className="why-points"><article><span className="point-number">01</span><div><h3>Good work, within reach</h3><p>Opportunities from teams who are excited to help early talent grow.</p></div><span className="point-symbol" aria-hidden="true">↗</span></article><article><span className="point-number">02</span><div><h3>Less searching, more doing</h3><p>Useful details up front, so you can find a role that fits and get to it.</p></div><span className="point-symbol" aria-hidden="true">↗</span></article><article><span className="point-number">03</span><div><h3>Room to become</h3><p>Build confidence, learn by doing, and make your first move count.</p></div><span className="point-symbol" aria-hidden="true">↗</span></article></div></div></section>
      <section className="last-call page-container"><div><p className="eyebrow">YOUR NEXT MOVE IS OUT THERE</p><h2>Let’s find it<span className="accent-dot">.</span></h2></div><Link className="button button-dark" to="/jobs">See all opportunities <span aria-hidden="true">↗</span></Link></section></main><Footer /></>;
}

function Jobs() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All roles');
  const categories = ['All roles', 'Engineering', 'Design', 'Data'];
  const filteredJobs = opportunities.filter(job => {
    const matchesCategory = category === 'All roles' || job.category === category;
    const searchText = `${job.title} ${job.company} ${job.location} ${job.skills.join(' ')}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  });
  return <><main className="jobs-page page-container"><div className="page-intro"><p className="eyebrow"><span className="live-dot"></span> THE OPPORTUNITY BOARD</p><h1>Find your<br /><span>starting point.</span></h1><p>Good teams are looking for fresh perspectives. Your next move could be right here.</p></div><div className="jobs-toolbar"><div className="filter-tabs" role="group" aria-label="Filter by role category">{categories.map(item => <button key={item} className={category === item ? 'filter-active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><span aria-hidden="true">⌕</span><input type="search" placeholder="Role, skill, or company" value={query} onChange={event => setQuery(event.target.value)} aria-label="Search roles, skills, or companies" /></label></div><div className="result-count"><span>{filteredJobs.length} open {filteredJobs.length === 1 ? 'opportunity' : 'opportunities'}</span><span>Updated for your next step <span aria-hidden="true">↘</span></span></div>{filteredJobs.length ? <div className="jobs-grid">{filteredJobs.map((job, index) => <JobCard key={job.title} job={job} index={index} />)}</div> : <div className="empty-state"><span aria-hidden="true">⌕</span><h2>No matches just yet.</h2><p>Try a different keyword or browse all roles.</p><button className="text-link" onClick={() => { setQuery(''); setCategory('All roles'); }}>Clear filters <span aria-hidden="true">↗</span></button></div>}<section className="jobs-note"><span className="note-spark" aria-hidden="true">✳</span><div><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>We’re happy to help you find your fit.</h2></div><Link className="button button-dark" to="/contact">Talk to us <span aria-hidden="true">↗</span></Link></section></main><Footer /></>;
}

function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const role = searchParams.get('role');
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  function handleChange(event) {
    setForm(current => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  }
  return <><main className="contact-page page-container"><div className="contact-intro"><p className="eyebrow"><span className="live-dot"></span> GOOD THINGS START WITH A HELLO</p><h1>Let’s talk<br /><span>about it.</span></h1><p>Have a question about a role, your application, or what comes next? We’re listening.</p><div className="contact-details"><a href="mailto:hello@dginternshub.com"><span className="detail-label">EMAIL US</span>hello@dginternshub.com <span aria-hidden="true">↗</span></a><div><span className="detail-label">WE’RE HERE FOR</span>Students, freshers &amp; curious minds</div></div></div><div className="contact-form-wrap">{submitted ? <div className="form-success" role="status"><span className="success-mark">✓</span><p className="eyebrow">MESSAGE READY</p><h2>Thanks, {form.name.split(' ')[0]}.</h2><p>Your message is ready. Open your email app to send it to the DG Interns Hub team.</p><a className="text-link" href={`mailto:hello@dginternshub.com?subject=${encodeURIComponent(role ? `Application: ${role}` : 'Hello DG Interns Hub')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`}>Open your email app <span aria-hidden="true">↗</span></a><button className="form-reset" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}>Write another message</button></div> : <form className="contact-form" onSubmit={handleSubmit}><p className="eyebrow">DROP US A NOTE</p><h2>{role ? `Applying for ${role}` : 'What’s on your mind?'}</h2>{role && <p className="form-context">We’ve added this role to your message context.</p>}<label htmlFor="name">Your name<input id="name" name="name" autoComplete="name" placeholder="e.g. Aanya Sharma" value={form.name} onChange={handleChange} required /></label><label htmlFor="email">Email address<input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required /></label><label htmlFor="message">Your message<textarea id="message" name="message" rows="4" placeholder={role ? `Tell us a little about your interest in the ${role} role...` : 'Tell us what you’re looking for...'} value={form.message} onChange={handleChange} required /></label><button className="button button-dark form-submit" type="submit">Send your message <span aria-hidden="true">↗</span></button><p className="form-footnote">Your details stay with our team. Nothing goes to a mystery inbox.</p></form>}</div></main><Footer /></>;
}

function NotFound() {
  const navigate = useNavigate();
  return <main className="not-found page-container"><p className="eyebrow">404 · OFF THE MAP</p><h1>This page took<br />a different turn<span className="accent-dot">.</span></h1><button className="button button-dark" onClick={() => navigate('/')}>Back to the start <span aria-hidden="true">↗</span></button></main>;
}

export default function App() {
  return <><Header /><Routes><Route path="/" element={<Home />} /><Route path="/jobs" element={<Jobs />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></>;
}