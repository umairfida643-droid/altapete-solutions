import React, { useRef, useEffect, useState } from 'react';
import { 
  Layers, 
  Database, 
  ShieldCheck, 
  Building2, 
  Server, 
  Cloud, 
  Terminal, 
  Code2, 
  Globe, 
  Cpu, 
  Box, 
  Zap, 
  Calculator, 
  Monitor,
  MoveHorizontal,
  Workflow
} from 'lucide-react';

const ROW_1_TECH = [
  { 
    name: "Odoo", 
    tag: "ERP", 
    desc: "Enterprise Resource Planning", 
    logo: "/assets/imgs/tech/odoo.svg", 
    icon: Layers, 
    badgeColor: "#00C6FF" 
  },
  { 
    name: "Oracle", 
    tag: "Database", 
    desc: "Autonomous Database Solutions", 
    logo: "/assets/imgs/tech/oracle.svg", 
    icon: Database, 
    badgeColor: "#2c73d9" 
  },
  { 
    name: "ZATCA", 
    tag: "Compliance", 
    desc: "Phase 2 FATOORA E-Invoicing", 
    logo: "/assets/imgs/tech/zatca.svg", 
    icon: ShieldCheck, 
    badgeColor: "#00AEEF" 
  },
  { 
    name: "SAP", 
    tag: "Enterprise", 
    desc: "Global ERP & S/4HANA Systems", 
    logo: "/assets/imgs/tech/sap.svg", 
    icon: Building2, 
    badgeColor: "#0284c7" 
  },
  { 
    name: "PostgreSQL", 
    tag: "Database", 
    desc: "Relational Engine & Clusters", 
    logo: "/assets/imgs/tech/postgresql.svg", 
    icon: Server, 
    badgeColor: "#1e40af" 
  },
  { 
    name: "AWS Cloud", 
    tag: "Cloud Hosting", 
    desc: "High-Availability Infrastructure", 
    logo: "/assets/imgs/tech/aws.svg", 
    icon: Cloud, 
    badgeColor: "#0088C7" 
  },
  { 
    name: "Microsoft", 
    tag: "Ecosystem", 
    desc: "Azure & Enterprise Integration", 
    logo: "/assets/imgs/tech/microsoft.svg", 
    icon: Monitor, 
    badgeColor: "#00AEEF" 
  }
];

const ROW_2_TECH = [
  { 
    name: "Python", 
    tag: "Language", 
    desc: "Core Engineering & Automation", 
    logo: "/assets/imgs/tech/python.svg", 
    icon: Terminal, 
    badgeColor: "#2c73d9" 
  },
  { 
    name: "Django", 
    tag: "Framework", 
    desc: "Scalable Enterprise Backends", 
    logo: "/assets/imgs/tech/django.svg", 
    icon: Code2, 
    badgeColor: "#00AEEF" 
  },
  { 
    name: "React & Next.js", 
    tag: "Frontend", 
    desc: "Modern High-Speed Web Platforms", 
    logo: "/assets/imgs/tech/react.svg", 
    icon: Globe, 
    badgeColor: "#00C6FF" 
  },
  { 
    name: "Node.js", 
    tag: "Microservices", 
    desc: "Fast Event-Driven Architecture", 
    logo: "/assets/imgs/tech/nodejs.svg", 
    icon: Cpu, 
    badgeColor: "#0284c7" 
  },
  { 
    name: "Docker & K8s", 
    tag: "DevOps", 
    desc: "Containerized Cloud Deployment", 
    logo: "/assets/imgs/tech/docker.svg", 
    icon: Box, 
    badgeColor: "#1e40af" 
  },
  { 
    name: "REST & GraphQL", 
    tag: "API Sync", 
    desc: "Secure Real-time Conduits", 
    logo: "/assets/imgs/tech/graphql.svg", 
    icon: Zap, 
    badgeColor: "#0088C7" 
  },
  { 
    name: "Financial AI", 
    tag: "IFRS Advisory", 
    desc: "Automated Ledger Analytics", 
    logo: "/assets/imgs/tech/financial-ai.svg", 
    icon: Calculator, 
    badgeColor: "#00AEEF" 
  }
];

function TechCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="tech-stack-card glass-card">
      <div className="tech-card-top-box">
        {item.logo ? (
          <img 
            src={item.logo} 
            alt={item.name} 
            draggable={false} 
            className="tech-card-img" 
          />
        ) : (
          <div className="tech-card-icon-fallback">
            <Icon size={28} />
          </div>
        )}
      </div>

      <div className="tech-card-body">
        <span 
          className="tech-card-tag" 
          style={{ 
            borderColor: `${item.badgeColor}40`, 
            color: item.badgeColor,
            background: `${item.badgeColor}12`
          }}
        >
          <Icon size={12} strokeWidth={2} />
          {item.tag}
        </span>
        <h4 className="tech-card-title">{item.name}</h4>
        <p className="tech-card-desc">{item.desc}</p>
      </div>
    </div>
  );
}

function DraggableMarqueeRow({ items, direction = 'rtl', speed = 0.85 }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const isHoveredRef = useRef(false);
  const reqIdRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Duplicate items 4 times to ensure seamless infinite looping
  const displayItems = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let singleSetWidth = track.scrollWidth / 4;

    const handleResize = () => {
      if (track) singleSetWidth = track.scrollWidth / 4;
    };
    window.addEventListener('resize', handleResize);

    // Initial offset for left-to-right to start mid-way
    if (direction === 'ltr') {
      offsetRef.current = -singleSetWidth;
    }

    const animate = () => {
      if (!isDraggingRef.current) {
        // Slow down slightly on hover for easy reading
        const currentSpeed = isHoveredRef.current ? speed * 0.2 : speed;
        if (direction === 'rtl') {
          offsetRef.current -= currentSpeed;
          if (Math.abs(offsetRef.current) >= singleSetWidth) {
            offsetRef.current += singleSetWidth;
          }
        } else {
          offsetRef.current += currentSpeed;
          if (offsetRef.current >= 0) {
            offsetRef.current -= singleSetWidth;
          }
        }
        if (track) {
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }
      reqIdRef.current = requestAnimationFrame(animate);
    };

    reqIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, speed]);

  // Mouse handlers for desktop dragging
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    offsetRef.current += delta;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  // Touch handlers for mobile / tablet swiping
  const handleTouchStart = (e) => {
    isDraggingRef.current = true;
    setIsGrabbing(true);
    startXRef.current = e.touches[0].clientX;
    lastXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.touches[0].clientX - lastXRef.current;
    lastXRef.current = e.touches[0].clientX;
    offsetRef.current += delta;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    setIsGrabbing(false);
  };

  return (
    <div
      ref={containerRef}
      className="draggable-marquee-viewport"
      style={{
        overflow: 'hidden',
        cursor: isGrabbing ? 'grabbing' : 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'pan-y',
        padding: '6px 0'
      }}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        handleMouseUp();
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className="draggable-marquee-track"
        style={{
          display: 'flex',
          gap: '18px',
          width: 'max-content',
          willChange: 'transform'
        }}
      >
        {displayItems.map((item, idx) => (
          <TechCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackDraggableMarquee() {
  return (
    <div className="tech-fullwidth-marquee-wrapper position-relative">
      {/* Top subtle interaction hint */}
      <div className="container text-center mb-25">
        <div className="tech-drag-hint-pill d-inline-flex align-items-center gap-2">
          <span className="tech-hud-dot" />
          <span>Drag left or right to explore • Continuous 2-Way Loop</span>
          <span className="tech-count-badge ms-2">14+ Platforms</span>
        </div>
      </div>

      {/* Edge Gradient Fades for Smooth Horizon Disappear/Appear */}
      <div className="tech-fullwidth-edge-left" />
      <div className="tech-fullwidth-edge-right" />

      {/* Line 1: Right to Left */}
      <div className="tech-row-wrapper mb-3">
        <DraggableMarqueeRow items={ROW_1_TECH} direction="rtl" speed={0.85} />
      </div>

      {/* Line 2: Left to Right */}
      <div className="tech-row-wrapper">
        <DraggableMarqueeRow items={ROW_2_TECH} direction="ltr" speed={0.85} />
      </div>
    </div>
  );
}
