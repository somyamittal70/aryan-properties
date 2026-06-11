import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, CalendarCheck, MapPin, Phone, User, Mail, Home } from 'lucide-react';

const COLORS = {
  bg: '#1A1F2A',
  dark: '#1A1F2A',
  gold: '#5d8f44',
  text: '#FFFFFF',
  textLight: 'rgba(255,255,255,0.7)',
  border: 'rgba(255,255,255,0.1)',
};

const SERVICES_MENU = [
  { heading: 'Rent', items: ['Villas', 'Farmhouses'] },
  { heading: 'Buy', items: ['Villas', 'Farmhouses'] },
  { heading: 'Commercial', items: ['Villas', 'Farmhouses'] },
  { heading: 'Collaboration', items: ['Villas', 'Farmhouses'] },
];

const PROPERTIES_MENU = [
  { heading: 'Properties', items: ['Farmhouses', 'Villas'] },
  {
    heading: 'Farmhouses Features', items: [
      'Expansive Land Holdings',
      'Nature & Privacy',
      'Weekend Retreats',
      'Investment Growth',
    ],
  },
  {
    heading: 'Villas that Include Features', items: [
      'Luxury Architecture',
      'Premium Amenities',
      'Secure Communities',
      'Modern Lifestyle',
    ],
  },
];

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Properties', to: '/properties' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

/* ─── Schedule Visit Modal ─── */
const ScheduleModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', propertyType: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(30,37,50,0.55)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
          overflowY: 'auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            background: '#F0F5EE',
            borderRadius: 24,
            width: '100%', maxWidth: 560,
            boxShadow: '0 40px 80px rgba(30,37,50,0.22)',
            overflow: 'hidden',
            position: 'relative',
            margin: 'auto',
          }}
        >
          {/* Header */}
          <div style={{
            background: COLORS.dark,
            padding: '28px 28px 24px',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 0, right: 0, width: 180, height: 180,
              background: `radial-gradient(circle at top right, ${COLORS.gold}22, transparent 70%)`,
              pointerEvents: 'none',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${COLORS.gold}22`,
                border: `1px solid ${COLORS.gold}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <CalendarCheck size={16} color={COLORS.gold} />
              </div>
              <span style={{
                fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif', fontWeight: 600, color: COLORS.gold,
              }}>Walora Groups</span>
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: 500,
              color: '#fff', margin: 0, lineHeight: 1.15,
            }}>Schedule Your Visit</h2>
            <p style={{
              color: 'rgba(255,255,255,0.5)', fontSize: 13,
              fontFamily: 'Jost, sans-serif', marginTop: 8, marginBottom: 0,
            }}>Our team will confirm your appointment within 2 hours.</p>
            <button onClick={onClose} style={{
              position: 'absolute', top: 16, right: 16,
              background: 'rgba(255,255,255,0.08)', border: 'none',
              borderRadius: 8, width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.6)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
              <X size={15} />
            </button>
          </div>

          {/* Form / Success */}
          <div style={{ padding: '24px 28px 28px' }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', padding: '20px 0' }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `${COLORS.gold}18`,
                  border: `2px solid ${COLORS.gold}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <CalendarCheck size={24} color={COLORS.gold} />
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26, color: '#1A202C', marginBottom: 8,
                }}>Visit Scheduled!</h3>
                <p style={{ color: '#718096', fontSize: 14, fontFamily: 'Jost, sans-serif', lineHeight: 1.6 }}>
                  Thank you, <strong style={{ color: '#1A202C' }}>{form.name}</strong>. We'll reach out to {form.email} to confirm your visit.
                </p>
                <button onClick={onClose} style={{
                  marginTop: 24, padding: '11px 28px',
                  background: COLORS.gold, color: '#fff', border: 'none',
                  borderRadius: 10, cursor: 'pointer',
                  fontFamily: 'Jost, sans-serif', fontSize: 11,
                  letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
                }}>Done</button>
              </motion.div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="modal-grid-2">
                  <Field icon={<User size={13} />} label="Full Name" name="name" type="text" placeholder="Arjun Sharma" value={form.name} onChange={handleChange} />
                  <Field icon={<Mail size={13} />} label="Email" name="email" type="email" placeholder="arjun@email.com" value={form.email} onChange={handleChange} />
                </div>
                <div className="modal-grid-2">
                  <Field icon={<Phone size={13} />} label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                  <SelectField icon={<Home size={13} />} label="Property Type" name="propertyType" value={form.propertyType} onChange={handleChange}
                    options={['Farmhouse', 'Villa', 'Commercial']} />
                </div>
                <Field icon={<CalendarCheck size={13} />} label="Preferred Visit Date" name="date" type="date" value={form.date} onChange={handleChange} />
                <div>
                  <label style={labelStyle}>Message (Optional)</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Any specific requirements or questions..."
                    rows={3}
                    style={{
                      ...inputStyle,
                      resize: 'vertical', minHeight: 72, lineHeight: 1.5,
                      paddingTop: 10, paddingBottom: 10,
                    }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  style={{
                    width: '100%', padding: '14px',
                    background: COLORS.gold, color: '#fff', border: 'none',
                    borderRadius: 12, cursor: 'pointer',
                    fontFamily: 'Jost, sans-serif', fontSize: 11,
                    letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600,
                    boxShadow: '0 8px 24px rgba(93,143,68,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                >
                  <CalendarCheck size={14} />
                  Confirm Visit Request
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const labelStyle = {
  display: 'block', marginBottom: 5,
  fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase',
  fontFamily: 'Jost, sans-serif', fontWeight: 600, color: '#718096',
};

const inputStyle = {
  width: '100%', padding: '10px 12px 10px 34px',
  background: '#fff', border: `1px solid #C8D9C2`,
  borderRadius: 10, fontSize: 13, fontFamily: 'Jost, sans-serif',
  color: '#2D3748', outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const Field = ({ icon, label, name, type, placeholder, value, onChange }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    <div style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)',
        color: COLORS.gold, display: 'flex', pointerEvents: 'none',
      }}>{icon}</span>
      <input
        name={name} type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = COLORS.gold}
        onBlur={e => e.target.style.borderColor = '#C8D9C2'}
      />
    </div>
  </div>
);

const SelectField = ({ icon, label, name, value, onChange, options }) => (
  <div>
    <label style={labelStyle}>{label}</label>
    <div style={{ position: 'relative' }}>
      <span style={{
        position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)',
        color: COLORS.gold, display: 'flex', pointerEvents: 'none',
      }}>{icon}</span>
      <select name={name} value={value} onChange={onChange}
        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
        onFocus={e => e.target.style.borderColor = COLORS.gold}
        onBlur={e => e.target.style.borderColor = '#C8D9C2'}
      >
        <option value="">Select type…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  </div>
);

/* ─── Main Navbar ─── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const menuTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = showSchedule ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showSchedule]);

  const handleEnter = (key) => { clearTimeout(menuTimeout.current); setActiveMenu(key); };
  const handleLeave = () => { menuTimeout.current = setTimeout(() => setActiveMenu(null), 180); };

  return (
    <>
    
    </>
  );
};

export default Navbar;