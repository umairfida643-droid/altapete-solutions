import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MessageSquare, X, Send, Bot, User, ArrowRight,
  RefreshCw, CheckCircle2, Phone, Mail, MapPin,
  ExternalLink, Sparkles, ShieldCheck, Building2,
  Scale, FileText, ChevronRight, Zap
} from 'lucide-react';

const KNOWLEDGE_BASE = [
  {
    keywords: ['zatca', 'fatoora', 'e-invoicing', 'einvoice', 'phase 2', 'csid', 'clearance', 'b2b', 'b2c', 'xml ubl'],
    title: 'ZATCA Phase 2 E-Invoicing (FATOORA)',
    response: `⚡ **ZATCA Phase 2 E-Invoicing Integration**

Altapete Solutions provides certified ZATCA Phase 2 middleware with a **100% Clearance SLA**.

**Key Capabilities:**
• Production CSID cryptographic onboarding
• XML UBL 2.1 invoice generation with cryptographic stamps & QR codes
• Real-time B2B clearance API & 24h B2C reporting
• Pre-built connectors for Odoo, SAP, Oracle, and custom POS billing systems.`,
    links: [
      { text: 'Explore ZATCA Integration', href: '/zatca-integration' },
      { text: 'Book ZATCA Health Check', href: '/contact-us' }
    ],
    quickOptions: ['Book Consultation', 'Office Locations', 'Other Services']
  },
  {
    keywords: ['odoo', 'erp', 'sap', 'oracle', 'enterprise', 'odoo to odoo', 'sync', 'database sync'],
    title: 'Enterprise ERP & Odoo Solutions',
    response: `🏢 **Enterprise ERP & Odoo Data Integration**

We specialize in Odoo V14–V17 implementations, SAP migrations, and multi-company consolidation across Saudi Arabia and the GCC.

**Core Services:**
• **Odoo-to-Odoo Data Integration**: Sub-second real-time bi-directional database synchronization with zero data loss.
• **Enterprise Solutions**: Full ERP lifecycle implementation, custom workflow automation, and multi-company ledger consolidation.
• **Managed IT Services**: 24/7 DBA support, cloud infrastructure, and DevOps.`,
    links: [
      { text: 'Odoo-to-Odoo Integration', href: '/odoo-to-odoo-data-integration' },
      { text: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { text: 'Managed IT Services', href: '/technology-management' }
    ],
    quickOptions: ['Book Consultation', 'ZATCA Phase 2', 'Company Profile']
  },
  {
    keywords: ['tax', 'zakat', 'vat', 'wht', 'withholding', 'transfer pricing', 'cit', 'corporate tax', 'socpa', 'ifrs', 'accounting', 'audit', 'bookkeeping'],
    title: 'Taxation, Zakat & Accounting Advisory',
    response: `📑 **Taxation, Zakat & Accounting Advisory (Saudi Arabia)**

Our SOCPA and ICAP accredited specialists ensure 100% compliance with ZATCA regulations:

**Key Services:**
• **Zakat Advisory**: Net Zakat base computation and annual declarations on ERAD portal.
• **Corporate Income Tax (CIT)**: 20% tax computations for foreign/mixed entities.
• **15% VAT Reconciliations**: Monthly/quarterly returns and input tax audits.
• **Accounting & Financial Advisory**: IFRS financial statements, audit trail dossiers, and management accounts.`,
    links: [
      { text: 'Taxation & Zakat Advisory', href: '/taxation-zakat-advisory' },
      { text: 'Accounting & Financial Advisory', href: '/accounting-financial-advisory' },
      { text: 'Outsourcing & Payroll BPO', href: '/outsourcing-business-services' }
    ],
    quickOptions: ['Book Consultation', 'Office Locations', 'Download Profile']
  },
  {
    keywords: ['salla', 'shopify', 'ecommerce', 'e-commerce', 'store', 'online store'],
    title: 'E-Commerce ERP Integrations (Salla & Shopify)',
    response: `🛍️ **E-Commerce & Omnichannel ERP Integrations**

We connect your online stores directly with your central ERP for automated, zero-touch operations:

• **Salla Integration**: Real-time webhook listeners for orders, multi-branch stock levels, and automated ZATCA-compliant invoices.
• **Shopify Integration**: Multi-store product catalogs, order fulfillment, returns, and automated journal entries.`,
    links: [
      { text: 'Salla Integration', href: '/salla-integration' },
      { text: 'Shopify Integration', href: '/shopify-integration' }
    ],
    quickOptions: ['Book Consultation', 'Odoo Solutions', 'Other Services']
  },
  {
    keywords: ['corporate', 'misa', 'license', 'registration', 'cr', 'restructuring', 'formation', 'invest', 'investing'],
    title: 'Corporate Advisory & MISA Licensing',
    response: `⚖️ **Corporate Advisory & Foreign Investment (MISA)**

We provide end-to-end advisory for businesses entering or expanding in the Saudi market:

• MISA Foreign Investment Licenses & renewals
• Commercial Registration (CR) & Articles of Association
• Corporate Governance Charters & Board Bylaws
• Mergers, Acquisitions & Corporate Restructuring`,
    links: [
      { text: 'Corporate Advisory Services', href: '/corporate-advisory' }
    ],
    quickOptions: ['Book Consultation', 'Tax & Zakat', 'Office Locations']
  },
  {
    keywords: ['muqeem', 'iqama', 'visa', 'hr', 'payroll', 'jisr', 'mada', 'jedia', 'geidea', 'fintech', 'pos'],
    title: 'HR Muqeem & Fintech Integrations',
    response: `👥 **HR Muqeem, Fintech & Payroll Integrations**

• **HR Muqeem Integration**: Direct connection with the Saudi Muqeem portal for Iqama issuance/renewals, exit-re-entry visas, and labor records.
• **Mada - Geidea - Jisr Integration**: Automated POS payment terminal reconciliation and seamless payroll synchronization with Jisr.`,
    links: [
      { text: 'HR Muqeem Integration', href: '/hr-muqeem' },
      { text: 'Mada - Geidea - Jisr Integration', href: '/mada-jedia-hr-jisr-integration' }
    ],
    quickOptions: ['Book Consultation', 'Enterprise ERP', 'Other Services']
  },
  {
    keywords: ['hotel', 'hospital', 'school', 'rental', 'shipping', 'construction', 'pms', 'emr', 'industry', 'products'],
    title: 'Vertical Industry ERP Solutions',
    response: `🏭 **Vertical Industry ERP Solutions**

We offer specialized turnkey ERP software designed for specific industries:

• **Rental Solutions**: Fleet & heavy machinery lifecycle management.
• **Shipping Solutions**: Freight forwarding, dispatch, and logistics billing.
• **Hotel Management**: PMS, booking engine, housekeeping, and guest folios.
• **Hospital Management**: EMR, clinic scheduling, pharmacy, and bed management.
• **School Management**: Student SIS, fee billing, and grading systems.`,
    links: [
      { text: 'Explore All Industry Solutions', href: '/products' }
    ],
    quickOptions: ['Book Consultation', 'Company Profile', 'Contact Us']
  },
  {
    keywords: ['contact', 'location', 'address', 'office', 'phone', 'whatsapp', 'email', 'riyadh', 'khobar', 'jeddah', 'uae', 'lahore', 'call', 'where', 'support'],
    title: 'Office Locations & Contact Details',
    response: `📍 **Altapete Solutions Offices & Contact Details**

🏢 **Saudi Arabia (Riyadh HQ, Al Khobar, Jeddah)**:
• **WhatsApp**: [+966 55 107 6961](https://wa.me/966551076961)
• **Direct Call**: +966-533-820454
• **Direct Call**: +966-558-569116
• **Direct Call**: +966-551-013823

🏢 **United Arab Emirates**:
• **WhatsApp**: [+966 55 107 6961](https://wa.me/966551076961)
• **Direct Call**: +966-533-820454
• **Direct Call**: +966-558-569116
• **Direct Call**: +966-551-013823

🏢 **Pakistan (Lahore)**:
• **Direct Call**: +92 370 3536327

📧 **Email**: info@altapetesolutions.com`,
    links: [
      { text: 'Visit Contact Page', href: '/contact-us' },
      { text: 'Open WhatsApp Chat', href: 'https://wa.me/966551076961' }
    ],
    quickOptions: ['Book Consultation', 'Download Profile', 'Our Services']
  },
  {
    keywords: ['profile', 'company profile', 'pdf', 'download', 'brochure', 'about', 'overview', 'presentation'],
    title: 'Company Profiles & PDF Downloads',
    response: `📥 **Altapete Solutions Company Profiles (2026)**

You can view our complete company profiles and download the latest PDF brochures:

1. **Altapete Odoo Custom Profile (2026)** — Detailed overview of custom software, integrations & advisory.
2. **Altapete Main Profile (2026)** — Corporate credentials, client portfolio, and 13-year legacy.`,
    links: [
      { text: 'View Company Profile Page', href: '/company-profile' },
      { text: 'Download Odoo Custom Profile (PDF)', href: '/assets/pdf/Altapete%20Custom%20Business%20Solutions%20Profile.pdf' },
      { text: 'Download Main Profile (PDF)', href: '/assets/pdf/Altapete%20Main%20Profile%202026.pdf' }
    ],
    quickOptions: ['Book Consultation', 'Office Locations', 'All Services']
  },
  {
    keywords: ['team', 'leadership', 'ahad', 'maaz', 'shahzad', 'kamal', 'hasnat', 'waqar', 'ceo', 'director', 'cto', 'coo', 'founder'],
    title: 'Altapete Leadership Team',
    response: `👥 **Altapete Leadership Team**

• **Ahad Maaz** — Head of Business Solutions (Odoo Certified V16-V17, DevOps, Cloud & Oracle eAM Expert)
• **Shahzad Qamar** — Director Middle East (Associate SOCPA, FCA ICAP, FPFA)
• **Muhammad Kamal** — CTO (ERP, Accounting Advisory & ZATCA Integration Expert)
• **Hasnat Shahid Bukhari** — COO (Business Analyst, Odoo Functional Consultant)
• **Waqar Afridi** — Senior DBA & IT Security Administrator`,
    links: [
      { text: 'Read About Our Team', href: '/what-we-do' }
    ],
    quickOptions: ['Book Consultation', 'Office Locations', 'Company Profile']
  },
  {
    keywords: ['price', 'cost', 'quotation', 'quote', 'proposal', 'fees', 'charges', 'rates'],
    title: 'Custom Enterprise Quotations',
    response: `💼 **Custom Enterprise Quotations & Proposals**

Because every business has distinct scope, data volumes, and integration requirements, we provide customized milestone-based proposals with transparent ROI and guaranteed SLAs.

Would you like to book a free discovery call or submit your requirements?`,
    links: [
      { text: 'Request a Proposal', href: '/contact-us' }
    ],
    quickOptions: ['Book Consultation', 'Open WhatsApp', 'Our Services']
  }
];

export default function ChatbotWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [menuLevel, setMenuLevel] = useState('main'); // 'main' | 'erp' | 'zatca' | 'formation' | 'it' | 'integrations'

  // Booking Flow State
  const [bookingState, setBookingState] = useState({
    active: false,
    step: 0, // 0: name, 1: contact, 2: service, 3: message
    name: '',
    contact: '',
    service: '',
    message: ''
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Welcome to **Altapete Solutions**! How can we help you today?',
      timestamp: 'Just now'
    },
    {
      id: 2,
      sender: 'bot',
      text: 'Select a service category below:',
      options: [
        '1️⃣ ERP Services',
        '2️⃣ ZATCA Services',
        '3️⃣ Company Formation',
        '4️⃣ IT Services',
        '5️⃣ Integrations',
        '6️⃣ Tax & Zakat Advisory',
        '7️⃣ Office Locations & Contacts',
        '8️⃣ Company Profile (PDF)',
        '9️⃣ Book Free Consultation'
      ],
      timestamp: 'Just now'
    }
  ]);

  const chatBodyRef = useRef(null);

  // Auto-scroll to bottom of chat body directly without scrolling the page window
  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen, isTyping]);

  // Proactive Auto-Greeting (User requirement: "jab koi banda visit kry tu chatbot khud ba khud kuch sawal pochne lag jaye")
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowTeaser(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  // Bot response simulator
  const sendBotReply = (text, options = [], links = [], isBookingCompletion = false) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text,
          options,
          links,
          timestamp: 'Just now',
          isBookingCompletion
        }
      ]);
    }, 600);
  };

  // Start Guided Lead Capture / Booking Flow
  const startBookingFlow = () => {
    setBookingState({
      active: true,
      step: 0,
      name: '',
      contact: '',
      service: '',
      message: ''
    });

    sendBotReply(
      "📅 **Book a Free Strategy Consultation**\n\nI will quickly take your details so our senior solution architects can reach out to you.\n\nFirst, what is your **Full Name**?",
      []
    );
  };

  // Process Lead Capture Steps
  const handleBookingStep = (userText) => {
    if (bookingState.step === 0) {
      setBookingState(prev => ({ ...prev, name: userText, step: 1 }));
      sendBotReply(
        `Thank you, **${userText}**! What is your **Email Address** or **WhatsApp Number**?`,
        []
      );
    } else if (bookingState.step === 1) {
      setBookingState(prev => ({ ...prev, contact: userText, step: 2 }));
      sendBotReply(
        `Got it! Which service or solution are you primarily interested in?`,
        [
          'ZATCA Phase 2 E-Invoicing',
          'Odoo / ERP Implementation',
          'Taxation & Zakat Advisory',
          'Custom App Development',
          'Other Business Solutions'
        ]
      );
    } else if (bookingState.step === 2) {
      setBookingState(prev => ({ ...prev, service: userText, step: 3 }));
      sendBotReply(
        `Almost done! Briefly describe your requirements or inquiry (or type "none"):`,
        ['Ready for consultation', 'Looking for quotation', 'Urgent implementation']
      );
    } else if (bookingState.step === 3) {
      const finalBooking = {
        ...bookingState,
        message: userText
      };

      // Save locally and send email to info@altapetesolutions.com
      try {
        const saved = JSON.parse(localStorage.getItem('altapete_inquiries') || '[]');
        saved.push({ ...finalBooking, date: new Date().toISOString() });
        localStorage.setItem('altapete_inquiries', JSON.stringify(saved));
      } catch (e) {
        // ignore
      }

      // Asynchronously trigger server-side email to info@altapetesolutions.com
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'chatbot',
          name: finalBooking.name,
          email: (finalBooking.contact && finalBooking.contact.includes('@')) ? finalBooking.contact : '',
          phone: (finalBooking.contact && !finalBooking.contact.includes('@')) ? finalBooking.contact : finalBooking.contact,
          service: finalBooking.service,
          subject: `Chatbot Strategy Consultation: ${finalBooking.service}`,
          message: userText
        })
      }).catch(err => console.error('Chatbot email send error:', err));

      // Direct client-side dispatch to info@altapetesolutions.com via FormSubmit.co
      fetch('https://formsubmit.co/ajax/info@altapetesolutions.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: finalBooking.name,
          contact_details: finalBooking.contact,
          service_requested: finalBooking.service,
          scope_notes: userText,
          source_channel: 'Chatbot Interactive Booking',
          _subject: `⚡ [Chatbot Booking] ${finalBooking.name} (${finalBooking.service})`,
          _template: 'table',
          _captcha: 'false'
        })
      }).catch(() => {});

      setBookingState({ active: false, step: 0, name: '', contact: '', service: '', message: '' });

      const waMsg = encodeURIComponent(
        `Hello Altapete Solutions!\nMy name is ${finalBooking.name}.\nContact: ${finalBooking.contact}\nService: ${finalBooking.service}\nRequirements: ${userText}`
      );

      sendBotReply(
        `🎉 **Thank You, ${finalBooking.name}!**\n\nYour consultation inquiry has been recorded. Our senior consultants will reach out to you within 24 hours.\n\nYou can also send these details directly to our team on WhatsApp with one click:`,
        ['Ask Another Question', 'Office Locations', 'Download Profile'],
        [
          {
            text: '📱 Open Direct WhatsApp Chat',
            href: `https://wa.me/966551076961?text=${waMsg}`
          }
        ],
        true
      );
    }
  };

  // Match knowledge base
  const resolveQuery = (query) => {
    const q = query.toLowerCase().trim();

    if (q === 'book' || q.includes('book') || q.includes('consultation') || q.includes('hire') || q.includes('appointment')) {
      startBookingFlow();
      return;
    }

    // Check knowledge base
    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some(k => q.includes(k))) {
        sendBotReply(item.response, item.quickOptions, item.links);
        return;
      }
    }

    // Check greetings
    if (['hi', 'hello', 'salam', 'assalam', 'hey', 'morning', 'evening', 'help'].some(g => q.includes(g))) {
      sendBotReply(
        "👋 Hello! Great to have you at **Altapete Solutions**.\n\nHow can I assist you today? Feel free to ask about our ERP services, ZATCA e-invoicing, tax advisory, or book a consultation.",
        ['⚡ ZATCA Phase 2 E-Invoicing', '🏢 ERP & Odoo Solutions', '📑 Tax & Zakat Advisory', '📍 Office Locations', '📅 Book Free Consultation']
      );
      return;
    }

    // Fallback response with helpful options
    sendBotReply(
      `I can help you with comprehensive information on:\n\n• ⚡ **ZATCA Phase 2 E-Invoicing**\n• 🏢 **Odoo ERP & SAP Implementations**\n• 📑 **Taxation, Zakat & Accounting Advisory**\n• 🛍️ **Salla & Shopify Integrations**\n• 📍 **Office Locations & Contact Numbers**\n• 📥 **Company Profile PDF Downloads**\n\nChoose an option below or type your question:`,
      ['⚡ ZATCA Phase 2', '🏢 ERP Solutions', '📑 Tax & Zakat', '📍 Office Locations', '📅 Book Free Consultation'],
      [
        { text: 'Direct WhatsApp Support', href: 'https://wa.me/966551076961' }
      ]
    );
  };

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text: userText,
        timestamp: 'Just now'
      }
    ]);

    // If currently in booking flow, handle step
    if (bookingState.active) {
      handleBookingStep(userText);
    } else {
      resolveQuery(userText);
    }
  };

  const handleOptionClick = (option) => {
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: option, timestamp: 'Just now' }]);

    if (bookingState.active) { handleBookingStep(option); return; }

    // Main menu items
    if (option.includes('ERP Services')) {
      setMenuLevel('erp');
      sendBotReply('Select your ERP platform:', [
        'Oracle Fusion', 'NetSuite', 'Odoo', 'SAP', 'Microsoft D365', '⬅ Back to Main Menu'
      ]);
      return;
    }
    if (option.includes('ZATCA Services')) {
      setMenuLevel('zatca');
      sendBotReply('Select ZATCA service:', [
        'E-Invoicing Phase 1 & Phase 2', 'VAT Filing Support', '⬅ Back to Main Menu'
      ]);
      return;
    }
    if (option.includes('Company Formation')) {
      setMenuLevel('formation');
      sendBotReply('Select company type:', [
        'Services Company', 'Trading Company', '⬅ Back to Main Menu'
      ]);
      return;
    }
    if (option.includes('IT Services')) {
      setMenuLevel('it');
      sendBotReply('Select IT service:', [
        'Software Development', 'Web Development', 'Mobile App Development',
        'Cloud Services', 'IT Consulting', 'Cybersecurity',
        'IT Infrastructure & Networking', 'Technical Support & Maintenance',
        'Data & Analytics', 'AI & Automation', 'Customized IT Solutions',
        '⬅ Back to Main Menu'
      ]);
      return;
    }
    if (option.includes('Integrations')) {
      setMenuLevel('integrations');
      sendBotReply('Select integration:', [
        'Shopify', 'Salla', 'Muqeem', 'Odoo to Odoo', 'Jisr', 'Mada', 'Geidea',
        '⬅ Back to Main Menu'
      ]);
      return;
    }
    if (option.includes('Tax & Zakat Advisory')) {
      setIsOpen(false); router.push('/taxation-zakat-advisory'); return;
    }
    if (option.includes('Office Locations')) {
      setIsOpen(false); router.push('/contact-us'); return;
    }
    if (option.includes('Company Profile')) {
      setIsOpen(false); router.push('/company-profile'); return;
    }
    if (option.includes('Book Free Consultation') || option.includes('Book Consultation')) {
      startBookingFlow(); return;
    }

    // Back to main
    if (option.includes('Back to Main Menu')) {
      setMenuLevel('main');
      sendBotReply('Select a service category:', [
        '1️⃣ ERP Services', '2️⃣ ZATCA Services', '3️⃣ Company Formation',
        '4️⃣ IT Services', '5️⃣ Integrations', '6️⃣ Tax & Zakat Advisory',
        '7️⃣ Office Locations & Contacts', '8️⃣ Company Profile (PDF)', '9️⃣ Book Free Consultation'
      ]);
      return;
    }

    // ERP sub-items
    const erpRoutes = {
      'Oracle Fusion': '/oracle-fusion',
      'NetSuite': '/netsuite',
      'Odoo': '/odoo-erp',
      'SAP': '/sap-implementation',
      'Microsoft D365': '/microsoft-d365'
    };
    if (erpRoutes[option]) { setIsOpen(false); router.push(erpRoutes[option]); return; }

    // ZATCA sub-items
    if (option.includes('E-Invoicing Phase')) { setIsOpen(false); router.push('/zatca-integration'); return; }
    if (option.includes('VAT Filing')) { setIsOpen(false); router.push('/vat-filing-support'); return; }

    // Company Formation sub-items
    if (option.includes('Services Company')) { setIsOpen(false); router.push('/services-company'); return; }
    if (option.includes('Trading Company')) { setIsOpen(false); router.push('/trading-company'); return; }

    // IT Services sub-items
    const itRoutes = {
      'Software Development': '/software-development',
      'Web Development': '/web-development',
      'Mobile App Development': '/mobile-app-development',
      'Cloud Services': '/cloud-services',
      'IT Consulting': '/it-consulting',
      'Cybersecurity': '/cybersecurity',
      'IT Infrastructure & Networking': '/it-infrastructure',
      'Technical Support & Maintenance': '/technical-support',
      'Data & Analytics': '/data-analytics',
      'AI & Automation': '/ai-automation',
      'Customized IT Solutions': '/customized-it-solutions'
    };
    if (itRoutes[option]) { setIsOpen(false); router.push(itRoutes[option]); return; }

    // Integration sub-items
    const integrationRoutes = {
      'Shopify': '/shopify-integration',
      'Salla': '/salla-integration',
      'Muqeem': '/hr-muqeem',
      'Odoo to Odoo': '/odoo-to-odoo-data-integration',
      'Jisr': '/mada-jedia-hr-jisr-integration',
      'Mada': '/mada-jedia-hr-jisr-integration',
      'Gedia': '/mada-jedia-hr-jisr-integration',
      'Geidea': '/mada-jedia-hr-jisr-integration',
      'Mada - Geidea - Jisr Integration': '/mada-jedia-hr-jisr-integration'
    };
    if (integrationRoutes[option]) { setIsOpen(false); router.push(integrationRoutes[option]); return; }

    // Fallback: use old resolveQuery
    resolveQuery(option);
  };

  const handleResetChat = () => {
    setBookingState({ active: false, step: 0, name: '', contact: '', service: '', message: '' });
    setMenuLevel('main');
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: '👋 Welcome to **Altapete Solutions**! How can we help you today?',
        timestamp: 'Just now'
      },
      {
        id: 2,
        sender: 'bot',
        text: 'Select a service category below:',
        options: [
          '1️⃣ ERP Services',
          '2️⃣ ZATCA Services',
          '3️⃣ Company Formation',
          '4️⃣ IT Services',
          '5️⃣ Integrations',
          '6️⃣ Tax & Zakat Advisory',
          '7️⃣ Office Locations & Contacts',
          '8️⃣ Company Profile (PDF)',
          '9️⃣ Book Free Consultation'
        ],
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* ── 1. Proactive Floating Teaser Bubble (User Requirement) ── */}
      {showTeaser && !isOpen && (
        <div className="chatbot-teaser-bubble" onClick={handleOpenChat}>
          <button
            type="button"
            className="teaser-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            aria-label="Close message"
          >
            <X size={13} />
          </button>
          <div className="teaser-avatar">
            <Bot size={18} />
          </div>
          <div className="teaser-content">
            <span className="teaser-title">Altapete Assistant</span>
            <p className="teaser-text">
              👋 Need help with ERP, ZATCA Phase 2, or Saudi Tax Advisory? Ask me anything!
            </p>
          </div>
        </div>
      )}

      {/* ── 2. Floating Circular Trigger Button (Bottom Right) ── */}
      <button
        type="button"
        onClick={() => {
          if (isOpen) {
            handleCloseChat();
          } else {
            handleOpenChat();
          }
        }}
        className={`chatbot-trigger-btn ${isOpen ? 'is-active' : ''}`}
        aria-label="Toggle Altapete Virtual Assistant"
        title="Altapete Virtual Assistant"
      >
        <div className="bot-pulse-ring" />
        <div className="bot-btn-inner">
          {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </div>
        {!isOpen && <span className="bot-online-badge" />}
      </button>

      {/* ── 3. Chatbot Window Modal ── */}
      {isOpen && (
        <div 
          className="chatbot-window"
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="chatbot-header">
            <div className="chat-header-info">
              <div className="chat-bot-avatar">
                <Bot size={20} />
                <span className="avatar-online-dot" />
              </div>
              <div>
                <h4 className="chat-bot-name">Altapete Assistant</h4>
                <span className="chat-bot-status">Instant Enterprise & Advisory Support</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button
                type="button"
                className="header-icon-btn"
                onClick={handleResetChat}
                title="Reset conversation"
              >
                <RefreshCw size={15} />
              </button>
              <button
                type="button"
                className="header-icon-btn"
                onClick={handleCloseChat}
                title="Close chat"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div 
            ref={chatBodyRef}
            className="chatbot-body"
            onWheel={(e) => e.stopPropagation()}
          >
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div key={msg.id} className={`chat-message-row ${isBot ? 'bot-row' : 'user-row'}`}>
                  {isBot && (
                    <div className="chat-msg-avatar">
                      <Bot size={15} />
                    </div>
                  )}

                  <div className={`chat-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
                    <div className="bubble-text">
                      {msg.text.split('\n').map((line, lIdx) => {
                        // Render bold tags markdown
                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                          <div key={lIdx} className="bubble-line">
                            {parts.map((p, pIdx) => {
                              if (p.startsWith('**') && p.endsWith('**')) {
                                return <strong key={pIdx}>{p.slice(2, -2)}</strong>;
                              }
                              return p;
                            })}
                          </div>
                        );
                      })}
                    </div>

                    {/* Links if available */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="bubble-links-list">
                        {msg.links.map((link, kIdx) => {
                          const isExt = link.href.startsWith('http') || link.href.endsWith('.pdf');
                          return isExt ? (
                            <a
                              key={kIdx}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chat-action-link"
                            >
                              <span>{link.text}</span>
                              <ExternalLink size={13} />
                            </a>
                          ) : (
                            <Link key={kIdx} href={link.href} className="chat-action-link" onClick={() => setIsOpen(false)}>
                              <span>{link.text}</span>
                              <ArrowRight size={13} />
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Clickable Quick Options */}
                    {msg.options && msg.options.length > 0 && (
                      <div className="bubble-options-wrap">
                        {msg.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            type="button"
                            className="chat-option-chip"
                            onClick={() => handleOptionClick(opt)}
                          >
                            <span>{opt}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="msg-timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chat-message-row bot-row">
                <div className="chat-msg-avatar">
                  <Bot size={15} />
                </div>
                <div className="chat-bubble bot-bubble typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Help Chips (When idle) */}
          <div className="chatbot-quick-bar">
            <button
              type="button"
              className="quick-bar-pill"
              onClick={() => handleOptionClick('ZATCA Phase 2')}
            >
              ⚡ ZATCA
            </button>
            <button
              type="button"
              className="quick-bar-pill"
              onClick={() => handleOptionClick('Odoo ERP')}
            >
              🏢 Odoo
            </button>
            <button
              type="button"
              className="quick-bar-pill"
              onClick={() => handleOptionClick('Tax & Zakat')}
            >
              📑 Tax
            </button>
            <button
              type="button"
              className="quick-bar-pill"
              onClick={() => handleOptionClick('Office Locations')}
            >
              📍 Offices
            </button>
            <button
              type="button"
              className="quick-bar-pill booking-pill"
              onClick={() => startBookingFlow()}
            >
              📅 Book Consultation
            </button>
          </div>

          {/* Input Footer */}
          <form className="chatbot-footer" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chat-input-field"
              placeholder={bookingState.active ? "Type your response..." : "Ask about ERP, ZATCA, Tax, Offices..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={!inputText.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* ── Scoped Styles for Chatbot ── */}
      <style jsx global>{`
        /* Teaser Bubble */
        .chatbot-teaser-bubble {
          position: fixed;
          bottom: 90px;
          right: 24px;
          width: 300px;
          max-width: calc(100vw - 48px);
          padding: 14px 16px;
          border-radius: 18px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(13, 24, 48, 0.95);
          border: 1px solid rgba(0, 174, 239, 0.4);
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          z-index: 99998;
          animation: teaserSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.25s ease;
        }

        .chatbot-teaser-bubble:hover {
          transform: translateY(-3px);
        }

        @keyframes teaserSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .teaser-close-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .teaser-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #00AEEF, #2c73d9);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 174, 239, 0.35);
        }

        .teaser-content {
          flex: 1;
          min-width: 0;
          padding-right: 12px;
        }

        .teaser-title {
          display: block;
          font-size: 12.5px;
          font-weight: 800;
          color: #00E5FF;
          margin-bottom: 3px;
        }

        .teaser-text {
          font-size: 12px;
          line-height: 1.45;
          color: #e2e8f0;
          margin: 0;
        }

        /* Floating Circular Trigger Button */
        .chatbot-trigger-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px !important;
          height: 56px !important;
          min-width: 56px !important;
          min-height: 56px !important;
          max-width: 56px !important;
          max-height: 56px !important;
          aspect-ratio: 1 / 1 !important;
          border-radius: 50% !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          background: transparent !important;
          cursor: pointer;
          z-index: 99999;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          outline: none !important;
          box-sizing: border-box !important;
          overflow: visible !important;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .chatbot-trigger-btn:hover {
          transform: translateY(-3px) scale(1.06) !important;
        }

        .bot-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50% !important;
          border: 2px solid rgba(0, 174, 239, 0.6) !important;
          animation: botPulse 2.4s infinite cubic-bezier(0.25, 0, 0, 1);
          pointer-events: none;
          box-sizing: border-box !important;
        }

        @keyframes botPulse {
          0% { transform: scale(0.96); opacity: 0.8; }
          70% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(1.24); opacity: 0; }
        }

        .bot-btn-inner {
          position: relative;
          z-index: 2;
          width: 56px !important;
          height: 56px !important;
          min-width: 56px !important;
          min-height: 56px !important;
          max-width: 56px !important;
          max-height: 56px !important;
          aspect-ratio: 1 / 1 !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 8px 25px rgba(0, 174, 239, 0.45) !important;
          border: 2px solid rgba(255, 255, 255, 0.35) !important;
          box-sizing: border-box !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .bot-btn-inner svg {
          display: block !important;
          margin: auto !important;
        }

        .bot-online-badge {
          position: absolute;
          top: 1px;
          right: 1px;
          width: 14px;
          height: 14px;
          border-radius: 50% !important;
          background: #10b981;
          border: 2.5px solid #060c18;
          box-sizing: border-box !important;
          z-index: 3;
        }

        /* Chat Window */
        .chatbot-window {
          position: fixed;
          bottom: 90px;
          right: 24px;
          width: 390px;
          max-width: calc(100vw - 32px);
          height: 560px;
          max-height: calc(100vh - 120px);
          border-radius: 22px;
          background: rgba(10, 20, 40, 0.95);
          border: 1px solid rgba(0, 174, 239, 0.35);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
          z-index: 99999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          overscroll-behavior: contain;
          animation: chatWindowPop 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes chatWindowPop {
          from { opacity: 0; transform: translateY(30px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Header */
        .chatbot-header {
          padding: 16px 18px;
          background: rgba(13, 24, 48, 0.9);
          border-bottom: 1px solid rgba(0, 174, 239, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .chat-bot-avatar {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #00AEEF, #2c73d9);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-online-dot {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          border: 1.5px solid #060c18;
        }

        .chat-bot-name {
          font-size: 14.5px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .chat-bot-status {
          font-size: 10.5px;
          color: #00E5FF;
          font-weight: 600;
        }

        .chat-header-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .header-icon-btn {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .header-icon-btn:hover {
          background: rgba(0, 174, 239, 0.15);
          color: #ffffff;
          border-color: rgba(0, 174, 239, 0.4);
        }

        /* Body */
        .chatbot-body {
          flex: 1 1 0%;
          min-height: 0;
          max-height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          touch-action: pan-y;
          padding: 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .chatbot-body::-webkit-scrollbar {
          width: 5px;
        }
        .chatbot-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .chatbot-body::-webkit-scrollbar-thumb {
          background: rgba(0, 174, 239, 0.35);
          border-radius: 10px;
        }
        .chatbot-body::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 174, 239, 0.65);
        }

        .chat-message-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          width: 100%;
        }

        .chat-message-row.user-row {
          justify-content: flex-end;
        }

        .chat-msg-avatar {
          width: 26px;
          height: 26px;
          border-radius: 8px;
          background: rgba(0, 174, 239, 0.2);
          color: #00AEEF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .chat-bubble {
          max-width: 84%;
          padding: 12px 15px;
          border-radius: 16px;
          font-size: 13px;
          line-height: 1.5;
          position: relative;
        }

        .bot-bubble {
          background: rgba(15, 30, 60, 0.85);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #e2e8f0;
          border-bottom-left-radius: 4px;
        }

        .user-bubble {
          background: linear-gradient(135deg, #00AEEF 0%, #2c73d9 100%);
          color: #ffffff;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 14px rgba(0, 174, 239, 0.3);
        }

        .bubble-text {
          word-break: break-word;
        }

        .bubble-line {
          margin-bottom: 4px;
        }
        .bubble-line:last-child {
          margin-bottom: 0;
        }

        .bubble-links-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .chat-action-link {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 10px;
          border-radius: 8px;
          background: rgba(0, 174, 239, 0.12);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00E5FF;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .chat-action-link:hover {
          background: rgba(0, 174, 239, 0.25);
          color: #ffffff;
        }

        .bubble-options-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }

        .chat-option-chip {
          padding: 5px 10px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00E5FF;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chat-option-chip:hover {
          background: #00AEEF;
          color: #ffffff;
          border-color: #00AEEF;
          transform: translateY(-1px);
        }

        .msg-timestamp {
          display: block;
          font-size: 9.5px;
          color: #64748b;
          margin-top: 6px;
          text-align: right;
        }

        .user-bubble .msg-timestamp {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Typing Dots */
        .typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
        }

        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00AEEF;
          animation: typingPulse 1.4s infinite ease-in-out;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typingPulse {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }

        /* Quick Bar */
        .chatbot-quick-bar {
          padding: 8px 12px;
          background: rgba(13, 24, 48, 0.75);
          border-top: 1px solid rgba(0, 174, 239, 0.15);
          display: flex;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .chatbot-quick-bar::-webkit-scrollbar { display: none; }

        .quick-bar-pill {
          padding: 4px 10px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-bar-pill:hover {
          background: rgba(0, 174, 239, 0.15);
          border-color: rgba(0, 174, 239, 0.35);
          color: #00E5FF;
        }

        .quick-bar-pill.booking-pill {
          background: rgba(0, 174, 239, 0.15);
          border-color: rgba(0, 174, 239, 0.4);
          color: #00E5FF;
        }

        /* Footer Input */
        .chatbot-footer {
          padding: 10px 14px;
          background: rgba(13, 24, 48, 0.95);
          border-top: 1px solid rgba(0, 174, 239, 0.2);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .chat-input-field {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 10px 14px;
          color: #ffffff;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .chat-input-field:focus {
          border-color: #00AEEF;
        }

        .chat-send-btn {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #00AEEF, #2c73d9);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .chat-send-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .chat-send-btn:not(:disabled):hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 174, 239, 0.4);
        }

        /* ── LIGHT THEME STYLES ── */
        [data-theme="light"] .chatbot-teaser-bubble,
        html[data-theme="light"] .chatbot-teaser-bubble {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 12px 35px rgba(0, 70, 150, 0.12);
        }
        [data-theme="light"] .teaser-title,
        html[data-theme="light"] .teaser-title {
          color: #0284c7;
        }
        [data-theme="light"] .teaser-text,
        html[data-theme="light"] .teaser-text {
          color: #334155;
        }

        [data-theme="light"] .chatbot-window,
        html[data-theme="light"] .chatbot-window {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 20px 60px rgba(0, 70, 150, 0.15);
        }

        [data-theme="light"] .chatbot-header,
        html[data-theme="light"] .chatbot-header {
          background: #f8fafc;
          border-bottom-color: #e2e8f0;
        }

        [data-theme="light"] .chat-bot-name,
        html[data-theme="light"] .chat-bot-name {
          color: #0f172a;
        }
        [data-theme="light"] .chat-bot-status,
        html[data-theme="light"] .chat-bot-status {
          color: #0284c7;
        }

        [data-theme="light"] .bot-bubble,
        html[data-theme="light"] .bot-bubble {
          background: #f1f5f9;
          border-color: #e2e8f0;
          color: #1e293b;
        }

        [data-theme="light"] .chatbot-body::-webkit-scrollbar-thumb,
        html[data-theme="light"] .chatbot-body::-webkit-scrollbar-thumb {
          background: rgba(44, 115, 217, 0.35);
        }
        [data-theme="light"] .chatbot-body::-webkit-scrollbar-thumb:hover,
        html[data-theme="light"] .chatbot-body::-webkit-scrollbar-thumb:hover {
          background: rgba(44, 115, 217, 0.65);
        }

        [data-theme="light"] .chat-action-link,
        html[data-theme="light"] .chat-action-link {
          background: #e0f2fe;
          border-color: #bae6fd;
          color: #0284c7;
        }

        [data-theme="light"] .chat-option-chip,
        html[data-theme="light"] .chat-option-chip {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0284c7;
        }
        [data-theme="light"] .chat-option-chip:hover,
        html[data-theme="light"] .chat-option-chip:hover {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
        }

        [data-theme="light"] .chatbot-quick-bar,
        html[data-theme="light"] .chatbot-quick-bar {
          background: #f8fafc;
          border-top-color: #e2e8f0;
        }

        [data-theme="light"] .quick-bar-pill,
        html[data-theme="light"] .quick-bar-pill {
          background: #ffffff;
          border-color: #cbd5e1;
          color: #475569;
        }

        [data-theme="light"] .quick-bar-pill:hover,
        html[data-theme="light"] .quick-bar-pill:hover {
          background: #e0f2fe;
          border-color: #38bdf8;
          color: #0284c7;
        }

        [data-theme="light"] .chatbot-footer,
        html[data-theme="light"] .chatbot-footer {
          background: #ffffff;
          border-top-color: #e2e8f0;
        }

        [data-theme="light"] .chat-input-field,
        html[data-theme="light"] .chat-input-field {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }
        [data-theme="light"] .chat-input-field:focus,
        html[data-theme="light"] .chat-input-field:focus {
          border-color: #0284c7;
        }

        /* Responsive Mobile */
        @media (max-width: 575px) {
          .chatbot-window {
            bottom: 84px;
            right: 14px;
            left: 14px;
            width: auto;
            height: calc(100vh - 110px);
          }
          .chatbot-trigger-btn {
            bottom: 18px;
            right: 18px;
            width: 50px !important;
            height: 50px !important;
            min-width: 50px !important;
            min-height: 50px !important;
            max-width: 50px !important;
            max-height: 50px !important;
            border-radius: 50% !important;
            aspect-ratio: 1 / 1 !important;
            padding: 0 !important;
          }
          .bot-btn-inner {
            width: 50px !important;
            height: 50px !important;
            min-width: 50px !important;
            min-height: 50px !important;
            max-width: 50px !important;
            max-height: 50px !important;
            border-radius: 50% !important;
            aspect-ratio: 1 / 1 !important;
            padding: 0 !important;
          }
          .chatbot-teaser-bubble {
            bottom: 78px;
            right: 14px;
            left: 14px;
            width: auto;
          }
        }
      `}</style>
    </>
  );
}
