import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import {
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Terminal,
  Layers,
  ArrowLeft,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Clock,
  ExternalLink
} from 'lucide-react';

// --- TECHNOLOGY STACK DATA ---
const TECH_LAYERS = [
  {
    id: 'frontend',
    name: 'Frontend',
    subtitle: 'USER INTERFACE LAYER',
    tagline: 'Modern frontend technologies for exceptional user experiences',
    description: 'We build responsive, ultra-fast, and intuitive web interfaces utilizing modern component-based frameworks, state-of-the-art build tooling, and rigorous accessibility standards.',
    technologies: [
      {
        id: 'react',
        name: 'React',
        rating: 10,
        expertiseLevel: 'Enterprise Master',
        tag: 'UI Framework',
        projectsCount: '45+ Delivered',
        reliability: '99.9% Production Uptime',
        sla: '< 1.2s FCP / Sub-second Load',
        accentColor: '#00D8FF',
        description: 'React powers our dynamic, interactive user interfaces with reusable component trees, concurrent rendering, and robust state management ecosystems.',
        capabilities: [
          'Modular component-driven architecture and custom hooks',
          'Virtual DOM reconciliation optimized for high throughput data',
          'State management with Redux Toolkit, Zustand, and React Query',
          'Cross-platform reusability and React Server Components (RSC)'
        ],
        useCases: 'Real-time financial dashboards, interactive customer portals, enterprise SaaS workspaces, and high-frequency trading interfaces.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/>
          </svg>
        )
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Full-Stack React Framework',
        projectsCount: '35+ Deployed',
        reliability: 'Global Edge Availability',
        sla: 'Sub-50ms TTFB / 95+ Core Web Vitals',
        accentColor: '#00AEEF',
        description: 'Next.js delivers enterprise-grade performance through hybrid static site generation, server-side rendering, and automated edge routing.',
        capabilities: [
          'Hybrid SSR & Static Site Generation (SSG) with ISR',
          'Edge middleware for real-time authentication and geolocation',
          'Automated image, script, and web font optimization pipelines',
          'Built-in API route handlers and micro-backend execution'
        ],
        useCases: 'High-traffic corporate portals, e-commerce storefronts, public-facing applications requiring exceptional SEO, and multi-tenant platforms.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,3 22,21 2,21"/>
          </svg>
        )
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Typed JavaScript',
        projectsCount: '50+ Deployed',
        reliability: '40% Bug Reduction at Build Time',
        sla: 'Zero Runtime Type Errors',
        accentColor: '#3178C6',
        description: 'TypeScript guarantees rigorous compile-time type safety, self-documenting codebases, and seamless team collaboration across enterprise codebases.',
        capabilities: [
          'Strict static typing preventing common production bugs',
          'Predictable large-scale enterprise refactoring workflows',
          'Automated IDE intellisense, code completion, and contract generation',
          'Strict null checks and interface schema definitions'
        ],
        useCases: 'Mission-critical enterprise software, complex data-binding platforms, compliance modules, and multi-developer monorepos.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <path d="M7 8h6M10 8v8M14 11.5c.8-.5 1.7-.5 2.5 0 .8.5.8 1.5 0 2-1 1-2.5 1-2.5 2.5h3"/>
          </svg>
        )
      },
      {
        id: 'tailwind',
        name: 'Tailwind',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Design System & CSS',
        projectsCount: '40+ Deployed',
        reliability: '< 15KB CSS Production Footprint',
        sla: '100% Fluid Responsive Breakpoints',
        accentColor: '#38BDF8',
        description: 'Tailwind CSS facilitates rapid, scalable UI construction with consistent design tokens, dark/light theme switching, and zero unused CSS bundle bloat.',
        capabilities: [
          'Design token synchronization with unified color & typography scales',
          'Automatic tree-shaking producing ultra-lightweight stylesheets',
          'Seamless dark mode, light mode, and high-contrast accessibility support',
          'Mobile-first responsive grids and fluid layouts'
        ],
        useCases: 'Enterprise design systems, cross-device corporate applications, and sleek SaaS product interfaces.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.8 1 2.6 1.8 1.3 1.4 2.9 3 6.6 3 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.8-1-2.6-1.8-1.3-1.4-2.9-3-6.6-3zM5.5 13.5c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.8 1 2.6 1.8 1.3 1.4 2.9 3 6.6 3 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.8-1-2.6-1.8-1.3-1.4-2.9-3-6.6-3z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    subtitle: 'SERVICE INTERFACE LAYER',
    tagline: 'High-throughput, secure API gateways and service communication backbones',
    description: 'Our API gateway and service mesh architectures guarantee secure traffic routing, rate limiting, token authentication, and unified endpoints across diverse backend microservices.',
    technologies: [
      {
        id: 'graphql',
        name: 'GraphQL',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Query Language & Schema',
        projectsCount: '25+ Deployed',
        reliability: 'Zero Over-fetching',
        sla: '60% Bandwidth Savings',
        accentColor: '#E535AB',
        description: 'GraphQL provides a powerful declarative query paradigm, enabling clients to fetch precisely the data they need with strong schema contracts.',
        capabilities: [
          'Single endpoint data fetching across multiple microservices',
          'Real-time data streaming via GraphQL Subscriptions & WebSockets',
          'Apollo Federation for federated microservice schemas',
          'Strict type contracts between frontend and backend teams'
        ],
        useCases: 'Mobile-to-cloud data synchronization, complex aggregated dashboards, and multi-source analytics platforms.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="20" x2="12" y2="10"/>
            <line x1="18" y1="20" x2="18" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="16"/>
            <circle cx="12" cy="8" r="2"/>
            <circle cx="18" cy="3" r="2"/>
            <circle cx="6" cy="15" r="2"/>
          </svg>
        )
      },
      {
        id: 'rest-api',
        name: 'REST API',
        rating: 10,
        expertiseLevel: 'Enterprise Master',
        tag: 'Standard HTTP Architecture',
        projectsCount: '70+ Deployed',
        reliability: 'Sub-50ms Response Latency',
        sla: '99.99% Endpoint Availability',
        accentColor: '#00C6FF',
        description: 'Idempotent, highly structured RESTful services conforming to OpenAPI specifications with comprehensive HTTP caching, pagination, and auth standards.',
        capabilities: [
          'OpenAPI / Swagger 3.0 interactive documentation contracts',
          'Stateless OAuth 2.0, JWT, and mTLS security mechanisms',
          'Granular rate limiting, quota enforcement, and circuit breakers',
          'HTTP/2 multiplexing and ETag-based smart caching'
        ],
        useCases: 'B2B integration hubs, government interfaces (ZATCA e-invoicing, Muqeem), payment gateways, and external partner APIs.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        )
      },
      {
        id: 'kong',
        name: 'Kong',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Cloud-Native API Gateway',
        projectsCount: '20+ Deployed',
        reliability: 'Sub-millisecond Latency',
        sla: '100k+ Requests/Second Throttling',
        accentColor: '#115599',
        description: 'Kong Gateway orchestrates high-speed API traffic routing, authentication plugins, access control lists, and automated observability at cloud scale.',
        capabilities: [
          'Ultra-fast Lua/Nginx engine routing millions of daily calls',
          'Automated rate-limiting, IP whitelisting, and DDoS protection',
          'OIDC / OAuth token validation at edge without backend overhead',
          'Distributed Prometheus and Datadog telemetry integration'
        ],
        useCases: 'Enterprise API hub governance, multi-tenant SaaS routing, and microservice traffic management.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0"/>
          </svg>
        )
      },
      {
        id: 'nginx',
        name: 'Nginx',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Reverse Proxy & Load Balancer',
        projectsCount: '60+ Deployed',
        reliability: '99.999% Service Uptime',
        sla: '10Gbps+ Network Concurrency',
        accentColor: '#009639',
        description: 'Battle-tested reverse proxying and load balancing delivering SSL/TLS termination, HTTP/3 support, and lightning-fast static asset distribution.',
        capabilities: [
          'High-concurrency event-driven connection handling',
          'SSL/TLS offloading and hardware-accelerated encryption',
          'Dynamic upstream load balancing (Round Robin, Least Connected, IP Hash)',
          'Automated Gzip / Brotli compression and cache headers'
        ],
        useCases: 'Edge web server, backend service proxying, SSL gateway, and high-concurrency file caching.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        )
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    subtitle: 'APPLICATION LOGIC LAYER',
    tagline: 'Resilient application backends designed for enterprise reliability and scale',
    description: 'Robust server logic, distributed event handling, and transaction-safe processing engines engineered to handle complex business rules without compromise.',
    technologies: [
      {
        id: 'nodejs',
        name: 'Node.js',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Event-Driven Runtime',
        projectsCount: '50+ Deployed',
        reliability: 'Sub-30ms Event Loop Speed',
        sla: '30,000+ Concurrent Socket Conns',
        accentColor: '#68A063',
        description: 'Node.js powers our high-concurrency microservices, real-time collaboration engines, and asynchronous event streaming pipelines.',
        capabilities: [
          'Non-blocking asynchronous I/O optimized for network throughput',
          'NestJS enterprise framework with dependency injection and clean architecture',
          'Native worker threads for CPU-intensive background tasks',
          'WebSocket bidirectional communication for live data push'
        ],
        useCases: 'Real-time notifications, event-driven streaming gateways, collaborative tools, and high-volume API backends.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8"/>
          </svg>
        )
      },
      {
        id: 'python',
        name: 'Python',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'AI, Analytics & APIs',
        projectsCount: '40+ Deployed',
        reliability: 'FastAPI High Concurrency',
        sla: 'Automated OpenAPI Spec Validation',
        accentColor: '#3776AB',
        description: 'Python is our primary language for automated data analytics pipelines, machine learning model integration, and lightning-fast FastAPI microservices.',
        capabilities: [
          'FastAPI asynchronous REST endpoints with Pydantic type validation',
          'Data processing with Pandas, NumPy, and scientific libraries',
          'LLM orchestration, prompt engineering, and LangChain integration',
          'Celery distributed asynchronous background worker queues'
        ],
        useCases: 'Predictive analytics, automated reporting, AI chat integrations, document parsing, and financial modeling engines.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
          </svg>
        )
      },
      {
        id: 'java',
        name: 'Java',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Enterprise JVM Architecture',
        projectsCount: '30+ Deployed',
        reliability: '100% Strict ACID Guarantees',
        sla: 'Fault-Tolerant High-Throughput Execution',
        accentColor: '#F89820',
        description: 'Java and Spring Boot provide enterprise-grade reliability, rock-solid transactional safety, and high-throughput concurrency for mission-critical core systems.',
        capabilities: [
          'Spring Boot and Spring Cloud microservice frameworks',
          'Robust multi-threaded execution and JVM memory tuning',
          'Enterprise JPA / Hibernate data abstraction and caching',
          'Strict enterprise security compliance and banking-grade encryption'
        ],
        useCases: 'Core banking systems, ERP and supply chain processing, large transactional ledgers, and institutional software.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
            <line x1="6" y1="1" x2="6" y2="4"/>
            <line x1="10" y1="1" x2="10" y2="4"/>
            <line x1="14" y1="1" x2="14" y2="4"/>
          </svg>
        )
      },
      {
        id: 'go',
        name: 'Go',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Systems & Microservices',
        projectsCount: '20+ Deployed',
        reliability: '< 20MB Memory Footprint',
        sla: 'Microsecond Execution Latency',
        accentColor: '#00ADD8',
        description: 'Go delivers compiled native binary performance, lightweight goroutine concurrency, and low memory consumption for high-speed network services.',
        capabilities: [
          'Goroutine concurrency managing thousands of workers per core',
          'Single compiled static binary with zero external dependencies',
          'High-throughput gRPC and Protocol Buffers serialization',
          'Low garbage collection pauses (< 1ms)'
        ],
        useCases: 'Distributed worker queues, telemetry and logging agents, IoT brokers, and high-frequency real-time pipelines.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="12" r="4"/>
            <circle cx="17" cy="12" r="3"/>
            <circle cx="10" cy="11" r="1" fill="currentColor"/>
            <circle cx="17" cy="11" r="1" fill="currentColor"/>
          </svg>
        )
      }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    subtitle: 'DATA STORAGE LAYER',
    tagline: 'High-availability, transactional, and distributed data storage infrastructure',
    description: 'From relational ACID-compliant engines to ultra-low-latency in-memory key stores, we design resilient database architectures with zero data loss.',
    technologies: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Advanced Relational Database',
        projectsCount: '55+ Deployed',
        reliability: '100% ACID Compliance',
        sla: 'Sub-10ms Indexed Queries',
        accentColor: '#336791',
        description: 'PostgreSQL is our flagship relational database, offering advanced SQL features, JSONB document capabilities, and rock-solid reliability.',
        capabilities: [
          'B-Tree, GIN, and GiST indexing for lightning queries',
          'Hybrid relational and JSONB unstructured document storage',
          'Read-replicas, connection pooling with PgBouncer, and streaming replication',
          'Row-level security (RLS) for multi-tenant isolation'
        ],
        useCases: 'Transactional financial databases, ERP data cores, customer profiles, and complex multi-table relational reports.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        )
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Document NoSQL Database',
        projectsCount: '30+ Deployed',
        reliability: 'Petabyte-Scale Horizontal Growth',
        sla: 'Dynamic Schema Scalability',
        accentColor: '#47A248',
        description: 'MongoDB empowers polymorphic data structures, flexible catalogs, and distributed horizontal sharding for high-volume unstructured data.',
        capabilities: [
          'Schema-flexible BSON document data model',
          'Multi-stage aggregation pipelines for real-time analytics',
          'Change Streams for real-time reactive trigger notifications',
          'Distributed sharded cluster setup for massive scale'
        ],
        useCases: 'Dynamic product catalogs, audit trails, activity logging, content management, and rapid prototyping.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 6 6 11 6 15a6 6 0 0 0 12 0c0-4-2-9-6-13z"/>
            <path d="M12 2v20"/>
          </svg>
        )
      },
      {
        id: 'redis',
        name: 'Redis',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'In-Memory Cache & Broker',
        projectsCount: '50+ Deployed',
        reliability: '< 1ms Retrieval Latency',
        sla: '1,000,000+ Ops/Second',
        accentColor: '#DC382D',
        description: 'Redis provides sub-millisecond in-memory data structures, distributed locking, pub/sub messaging, and high-speed session management.',
        capabilities: [
          'In-memory key-value caching reducing primary database load by 80%',
          'Distributed lock management with Redlock algorithm',
          'High-throughput Pub/Sub messaging and streaming primitives',
          'Transient session store and sliding-window rate limit counters'
        ],
        useCases: 'API rate limiting, user session storage, real-time leaderboards, query result caching, and message queues.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="7" fill="#EF4444" stroke="#EF4444"/>
          </svg>
        )
      },
      {
        id: 'mysql',
        name: 'MySQL',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Enterprise Relational Engine',
        projectsCount: '45+ Deployed',
        reliability: '99.95% High Availability',
        sla: 'InnoDB Transactional Engine',
        accentColor: '#00758F',
        description: 'MySQL delivers battle-tested performance, widespread ecosystem compatibility, and dependable master-replica clusters.',
        capabilities: [
          'InnoDB storage engine with ACID transactional guarantees',
          'Master-slave read/write splitting for read-heavy workloads',
          'Galera Cluster for synchronous multi-master replication',
          'Extensive ORM and legacy enterprise tool support'
        ],
        useCases: 'E-commerce transactional backends, legacy CMS architectures, structured business inventories, and reporting databases.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        )
      }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    subtitle: 'CLOUD & DEVOPS LAYER',
    tagline: 'Automated, elastic cloud infrastructure and container orchestration',
    description: 'We orchestrate auto-scaling cloud environments using modern Infrastructure as Code, Kubernetes clusters, and automated CI/CD deployment pipelines.',
    technologies: [
      {
        id: 'aws',
        name: 'AWS',
        rating: 10,
        expertiseLevel: 'Enterprise Master',
        tag: 'Cloud Computing Platform',
        projectsCount: '60+ Deployed',
        reliability: '99.99% Global Uptime SLA',
        sla: 'Saudi KSA me-central-1 Data Residency',
        accentColor: '#FF9900',
        description: 'Amazon Web Services powers our cloud deployments with secure VPC architectures, containerization, elastic compute, and managed databases.',
        capabilities: [
          'Multi-AZ VPC architecture with private subnets and NAT gateways',
          'ECS and EKS managed container orchestration',
          'RDS PostgreSQL / Aurora multi-region automated failover',
          'CloudFront CDN edge caching with AWS WAF security rules'
        ],
        useCases: 'Enterprise cloud hosting, KSA data compliance, multi-region disaster recovery, and auto-scaling production workloads.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          </svg>
        )
      },
      {
        id: 'docker',
        name: 'Docker',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Containerization Engine',
        projectsCount: '70+ Deployed',
        reliability: '100% Environment Parity',
        sla: '< 50MB Minimal Alpine Footprints',
        accentColor: '#2496ED',
        description: 'Docker standardizes application environments across development, testing, and production, eliminating the "works on my machine" dilemma.',
        capabilities: [
          'Multi-stage container builds minimizing production image size',
          'Isolated runtime environments preventing dependency conflicts',
          'Docker Compose for full local multi-service orchestration',
          'Security scanning for known container vulnerabilities'
        ],
        useCases: 'Microservice packaging, rapid onboarding of developers, reproducible testing pipelines, and cloud migration.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        )
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Container Orchestration',
        projectsCount: '30+ Deployed',
        reliability: 'Automated Self-Healing Pods',
        sla: 'Zero-Downtime Rolling Deployments',
        accentColor: '#326CE5',
        description: 'Kubernetes orchestrates automated scaling, self-healing rollouts, service discovery, and declarative configuration across clusters.',
        capabilities: [
          'Horizontal Pod Autoscaling (HPA) adapting dynamically to load surges',
          'Automated canary and blue-green zero-downtime rollouts',
          'Self-healing container restarts and automated health probes',
          'Ingress routing, secret management, and volume claims'
        ],
        useCases: 'High-traffic SaaS applications, multi-service enterprise architectures, and resilient fault-tolerant systems.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a10 10 0 0 0 0 20M2 12a10 10 0 0 0 20 0"/>
            <circle cx="12" cy="12" r="4"/>
          </svg>
        )
      },
      {
        id: 'terraform',
        name: 'Terraform',
        rating: 9,
        expertiseLevel: 'Advanced Production',
        tag: 'Infrastructure as Code (IaC)',
        projectsCount: '35+ Deployed',
        reliability: 'Deterministic Cloud Blueprints',
        sla: '100% Auditable Cloud State',
        accentColor: '#7B42BC',
        description: 'Terraform provisions repeatable, version-controlled cloud infrastructure with remote state management and multi-cloud compatibility.',
        capabilities: [
          'Declarative HCL syntax describing all cloud resources',
          'Remote state locking with AWS S3 and DynamoDB',
          'Modular reusable infrastructure components for staging and prod',
          'Automated CI/CD infrastructure validation and drift detection'
        ],
        useCases: 'Automated environment replication, compliance and audit-ready cloud configurations, and multi-region failover setups.',
        renderIcon: () => (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3,3 10,7 10,17 3,13"/>
            <polygon points="11,7 18,3 18,13 11,17"/>
            <polygon points="11,18 18,14 18,21 11,25" transform="translate(0, -3)"/>
          </svg>
        )
      }
    ]
  }
];

// --- 5-PHASE METHODOLOGY DATA ---
const PHASES = [
  {
    id: 1,
    title: 'Requirements Analysis',
    subtitle: 'Understanding Your Vision',
    duration: '2-3 weeks',
    progress: 20,
    description: 'Comprehensive analysis of business requirements, stakeholder interviews, and technical feasibility assessment to establish a solid project foundation.',
    activities: [
      'Stakeholder workshops & executive interviews',
      'Comprehensive market & competitive research',
      'Technical architecture planning & feasibility study',
      'Risk assessment & regulatory compliance scoping'
    ],
    deliverables: [
      'Business Requirements Document (BRD)',
      'Technical Specification & Architecture Blueprint',
      'Project Timeline & Milestone Roadmap',
      'Resource & Governance Allocation Plan'
    ]
  },
  {
    id: 2,
    title: 'System Design',
    subtitle: 'Engineering the Blueprint',
    duration: '2-4 weeks',
    progress: 40,
    description: 'Detailed system modeling, database schema normalization, API contract definition, and interactive UI/UX prototypes designed for seamless user adoption.',
    activities: [
      'Interactive UI/UX wireframing and design systems',
      'Relational and NoSQL database schema normalization',
      'Microservices and REST/GraphQL API contract definition',
      'Cybersecurity, authorization, and data encryption design'
    ],
    deliverables: [
      'High-Fidelity Figma UI/UX Prototypes',
      'Database Schema & Entity Relationship Diagrams (ERD)',
      'OpenAPI Specification & Contract Documentation',
      'Cloud Infrastructure & Disaster Recovery Blueprint'
    ]
  },
  {
    id: 3,
    title: 'Development',
    subtitle: 'Agile Implementation & Sprints',
    duration: '6-12 weeks',
    progress: 60,
    description: 'Iterative, sprint-driven software engineering with bi-weekly demonstrations, continuous automated testing, and active client review feedback loops.',
    activities: [
      'Modular frontend and responsive component construction',
      'High-performance backend logic and service implementation',
      'Third-party and government system integrations (e.g. ZATCA, payment)',
      'Automated CI/CD pipeline orchestration and daily standups'
    ],
    deliverables: [
      'Bi-weekly Working Module Sprint Releases',
      'Automated CI/CD Testing & Deployment Pipelines',
      'Comprehensive Codebase Repository with 85%+ Test Coverage',
      'Secure Staging Environment for Continuous Testing'
    ]
  },
  {
    id: 4,
    title: 'Testing & QA',
    subtitle: 'Verification & Optimization',
    duration: '3-4 weeks',
    progress: 80,
    description: 'Rigorous end-to-end quality assurance, vulnerability scanning, automated load testing, and formal client User Acceptance Testing (UAT).',
    activities: [
      'Automated unit, integration, and cross-browser regression tests',
      'Load, stress, and peak-traffic performance benchmarking',
      'Penetration testing and vulnerability mitigation audits',
      'Guided client User Acceptance Testing (UAT) & sign-off workshops'
    ],
    deliverables: [
      'Comprehensive QA Test Matrix & Execution Logs',
      'Cybersecurity Penetration Audit Sign-off',
      'Performance, Latency & Load Benchmark Reports',
      'Formal UAT Sign-off & Production Readiness Certificate'
    ]
  },
  {
    id: 5,
    title: 'Deployment',
    subtitle: 'Go-Live & Continuous Support',
    duration: 'Ongoing',
    progress: 100,
    description: 'Zero-downtime blue-green production deployment, 24/7 telemetry monitoring, staff training, and dedicated continuous SLA maintenance.',
    activities: [
      'Zero-downtime blue-green / canary cloud deployment',
      'Real-time APM telemetry, logging, and error alert setup',
      'End-user and system administrator training sessions',
      '24/7 SLA incident management and continuous optimization'
    ],
    deliverables: [
      'Production Live Application Launch',
      'System Administration & API Operational Manuals',
      '24/7 Monitoring Dashboard & SLA Handover',
      'Dedicated Post-Launch Warranty & Support Agreement'
    ]
  }
];

export default function CustomAppDevelopmentView() {
  const { theme } = useTheme();
  const isDark = theme !== 'light';

  // --- INTERACTIVE STATE ---
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [selectedTech, setSelectedTech] = useState(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [codeTab, setCodeTab] = useState('CustomApp.js');

  const currentLayer = TECH_LAYERS[selectedLayerIndex];
  const currentPhase = PHASES[activePhaseIndex];

  // Handler when clicking a layer
  const handleLayerClick = (index) => {
    setSelectedLayerIndex(index);
    setSelectedTech(null); // Show layer overview
  };

  // Handler when clicking a specific technology
  const handleTechClick = (tech, layerIdx) => {
    if (typeof layerIdx === 'number') {
      setSelectedLayerIndex(layerIdx);
    }
    setSelectedTech(tech);
  };

  return (
    <div className={`custom-app-view ${isDark ? 'dark-theme' : 'light-theme'}`}>
      
      {/* 1. HERO SECTION */}
      <section className="cad-hero-section">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left Hero Text */}
            <div className="col-lg-6">
              <div className="cad-hero-badge">
                <span className="badge-pulse-dot"></span>
                <span>Custom Software Solutions</span>
              </div>
              
              <h1 className="cad-hero-title">
                Custom Application <br />
                <span className="cad-gradient-text">Development</span>
              </h1>
              
              <p className="cad-hero-desc">
                Transform your ideas into powerful, scalable applications. Our expert team crafts 
                <strong className="text-highlight"> custom software solutions </strong> 
                tailored to your unique business requirements using cutting-edge technologies and agile development methodologies.
              </p>
              
              {/* Floating Quick Tech Pills */}
              <div className="cad-quick-tech-pills">
                {['React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'Docker', 'Next.js', 'GraphQL'].map((pill, i) => (
                  <span key={i} className="cad-quick-pill">
                    <span className="pill-dot"></span>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Hero Code Terminal Box */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="cad-code-window">
                {/* Window Top Bar */}
                <div className="cad-window-header">
                  <div className="cad-window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="cad-window-tabs">
                    {['CustomApp.js', 'AppService.ts', 'database.ts'].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        className={`cad-tab-btn ${codeTab === tab ? 'active' : ''}`}
                        onClick={() => setCodeTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="cad-window-badge">
                    <span className="status-indicator"></span>
                    Compiled 100%
                  </div>
                </div>

                {/* Window Code Content */}
                <div className="cad-code-body">
                  <pre className="cad-code-pre">
                    <code>
                      <span className="code-line"><span className="c-num">1</span> <span className="c-keyword">import</span> {'{'} EnterpriseCloud, ServiceMesh {'}'} <span className="c-keyword">from</span> <span className="c-string">&apos;@altapete/core&apos;</span>;</span>
                      <span className="code-line"><span className="c-num">2</span> </span>
                      <span className="code-line"><span className="c-num">3</span> <span className="c-keyword">export async function</span> <span className="c-func">bootstrapService</span>(config: <span className="c-type">AppConfig</span>) {'{'}</span>
                      <span className="code-line"><span className="c-num">4</span>   <span className="c-keyword">const</span> cluster = <span className="c-keyword">await</span> EnterpriseCloud.<span className="c-func">connect</span>({'{'}</span>
                      <span className="code-line"><span className="c-num">5</span>     region: <span className="c-string">&apos;me-central-1&apos;</span>, <span className="c-comment">// Riyadh KSA Gateway</span></span>
                      <span className="code-line"><span className="c-num">6</span>     highAvailability: <span className="c-bool">true</span>,</span>
                      <span className="code-line"><span className="c-num">7</span>     telemetry: {'{'} level: <span className="c-string">&apos;INFO&apos;</span>, sampleRate: <span className="c-num-val">1.0</span> {'}'}</span>
                      <span className="code-line"><span className="c-num">8</span>   {'}'});</span>
                      <span className="code-line"><span className="c-num">9</span>   <span className="c-keyword">return</span> ServiceMesh.<span className="c-func">orchestrate</span>(cluster);</span>
                      <span className="code-line"><span className="c-num">10</span> {'}'}</span>
                    </code>
                  </pre>

                  {/* Terminal Bottom Output */}
                  <div className="cad-terminal-footer">
                    <div className="terminal-prompt">
                      <Terminal size={14} className="terminal-icon" />
                      <span>npm run build</span>
                    </div>
                    <div className="terminal-status">
                      <CheckCircle2 size={14} color="#10B981" />
                      <span>Application built successfully! Ready for production deployment.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMPLETE TECHNOLOGY STACK ARCHITECTURE */}
      <section className="cad-stack-section" id="technology-stack">
        <div className="container">
          
          {/* Section Header */}
          <div className="cad-section-header text-center">
            <span className="cad-eyebrow">TECHNOLOGY ARCHITECTURE</span>
            <h2 className="cad-section-title">
              Complete Technology <span className="cad-gradient-text">Stack</span>
            </h2>
            <p className="cad-section-desc">
              Explore our comprehensive technology stack with modern frameworks, cloud infrastructure, and proven development tools. Click any layer or technology to view detailed metrics and expertise.
            </p>
          </div>

          {/* Interactive Stack Grid: Left Layers Stack, Right Details Panel */}
          <div className="row g-4 align-items-start mt-2">
            
            {/* Left Column: 5 Interactive Architecture Layers */}
            <div className="col-lg-7">
              <div className="cad-layers-container">
                {TECH_LAYERS.map((layer, idx) => {
                  const isLayerContainingActive = selectedLayerIndex === idx;

                  return (
                    <div key={layer.id} className="cad-layer-node-wrapper">
                      {idx > 0 && <div className="cad-layer-line-dot"></div>}
                      
                      <div 
                        className={`cad-layer-card ${isLayerContainingActive ? 'active-layer' : ''}`}
                        onClick={() => handleLayerClick(idx)}
                      >
                        <div className="cad-layer-indicator"></div>

                        <div className="cad-layer-meta">
                          <h3 className="cad-layer-title">{layer.name}</h3>
                          <span className="cad-layer-sub">{layer.subtitle}</span>
                        </div>

                        <div className="cad-layer-tech-row">
                          {layer.technologies.map((tech) => {
                            const isTechSelected = selectedTech?.id === tech.id;

                            return (
                              <button
                                key={tech.id}
                                type="button"
                                className={`cad-tech-chip ${isTechSelected ? 'active-tech-chip' : ''}`}
                                title={`Click to view ${tech.name} detailed metrics`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTechClick(tech, idx);
                                }}
                              >
                                <span className="cad-chip-score">{tech.rating}</span>
                                <span className="cad-chip-icon">{tech.renderIcon()}</span>
                                <span className="cad-chip-name">{tech.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Deep-Dive Details Panel */}
            <div className="col-lg-5">
              <div className="cad-detail-panel">
                
                {/* CASE A: Specific Technology is Clicked / Selected */}
                {selectedTech ? (
                  <div className="cad-tech-detail-view animate-fade-in">
                    
                    {/* Back to Layer Overview Breadcrumb */}
                    <button 
                      type="button" 
                      className="cad-back-btn"
                      onClick={() => setSelectedTech(null)}
                    >
                      <ArrowLeft size={16} />
                      <span>Back to {currentLayer.name} Overview</span>
                    </button>

                    {/* Tech Detail Header */}
                    <div className="cad-tech-header">
                      <div className="cad-tech-header-icon" style={{ color: selectedTech.accentColor || '#00C6FF' }}>
                        {selectedTech.renderIcon()}
                      </div>
                      <div className="cad-tech-header-text">
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <h3 className="cad-tech-title">{selectedTech.name}</h3>
                          <span className="cad-expertise-badge">
                            {selectedTech.rating}/10 • {selectedTech.expertiseLevel}
                          </span>
                        </div>
                        <span className="cad-tech-tagline">{currentLayer.name} Layer • {selectedTech.tag}</span>
                      </div>
                    </div>

                    {/* Proficiency Rating Meter */}
                    <div className="cad-meter-box">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="meter-label">Proficiency & Production Mastery</span>
                        <span className="meter-value">{selectedTech.rating * 10}%</span>
                      </div>
                      <div className="meter-track">
                        <div 
                          className="meter-fill"
                          style={{ width: `${selectedTech.rating * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="cad-stats-grid">
                      <div className="cad-stat-item">
                        <span className="stat-label">Enterprise Deliveries</span>
                        <strong className="stat-val">{selectedTech.projectsCount}</strong>
                      </div>
                      <div className="cad-stat-item">
                        <span className="stat-label">Production SLA</span>
                        <strong className="stat-val">{selectedTech.reliability}</strong>
                      </div>
                      <div className="cad-stat-item full-width">
                        <span className="stat-label">Performance Metric</span>
                        <strong className="stat-val text-cyan">{selectedTech.sla}</strong>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="cad-tech-bio">
                      <p>{selectedTech.description}</p>
                    </div>

                    {/* Key Capabilities */}
                    <div className="cad-capabilities-section">
                      <h4 className="cad-cap-title">
                        <Sparkles size={16} className="text-cyan" />
                        Key Enterprise Capabilities
                      </h4>
                      <ul className="cad-cap-list">
                        {selectedTech.capabilities.map((cap, i) => (
                          <li key={i}>
                            <CheckCircle2 size={16} className="check-icon" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Production Use Cases */}
                    <div className="cad-use-cases-box">
                      <h5 className="use-case-title">Production Scenarios:</h5>
                      <p className="use-case-text">{selectedTech.useCases}</p>
                    </div>

                    {/* Quick Technology Switcher in Current Layer */}
                    <div className="cad-other-tech-row">
                      <span className="other-label">Explore other {currentLayer.name} tools:</span>
                      <div className="d-flex gap-2 flex-wrap mt-2">
                        {currentLayer.technologies.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            className={`cad-mini-pill ${t.id === selectedTech.id ? 'active' : ''}`}
                            onClick={() => handleTechClick(t, selectedLayerIndex)}
                          >
                            {t.name}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                ) : (
                  
                  /* CASE B: Layer Overview (Default or when Layer is Selected) */
                  <div className="cad-layer-detail-view animate-fade-in">
                    <div className="cad-layer-view-header">
                      <h3 className="cad-detail-layer-title">{currentLayer.name}</h3>
                      <span className="cad-detail-layer-sub">{currentLayer.subtitle}</span>
                      <p className="cad-detail-layer-desc">{currentLayer.tagline}</p>
                    </div>

                    <div className="cad-detail-overview-body">
                      <p className="cad-layer-long-desc">{currentLayer.description}</p>

                      <div className="cad-techs-heading-row">
                        <h4 className="cad-techs-heading">Technologies in this Layer</h4>
                        <span className="cad-techs-count">{currentLayer.technologies.length} Technologies</span>
                      </div>

                      {/* 2x2 Interactive Technology Grid */}
                      <div className="cad-panel-tech-grid">
                        {currentLayer.technologies.map((tech) => (
                          <div
                            key={tech.id}
                            className="cad-panel-tech-card"
                            onClick={() => handleTechClick(tech, selectedLayerIndex)}
                          >
                            <div className="cad-panel-tech-top">
                              <span className="panel-tech-icon" style={{ color: tech.accentColor || '#00C6FF' }}>
                                {tech.renderIcon()}
                              </span>
                              <strong className="panel-tech-name">{tech.name}</strong>
                            </div>
                            
                            {/* Horizontal Progress Bar */}
                            <div className="panel-tech-bar-box">
                              <div className="panel-tech-bar-track">
                                <div 
                                  className="panel-tech-bar-fill"
                                  style={{ width: `${tech.rating * 10}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="panel-tech-footer">
                              <span className="tech-level-text">{tech.expertiseLevel}</span>
                              <ChevronRight size={14} className="panel-arrow" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Helpful interactive hint */}
                      <div className="cad-helper-hint">
                        <Zap size={16} className="hint-icon" />
                        <span>Click on any technology card or pill to inspect detailed metrics, SLA benchmarks, and production capabilities.</span>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STRUCTURED DEVELOPMENT PROCESS (5 PHASES) */}
      <section className="cad-methodology-section" id="methodology">
        <div className="container">
          
          {/* Section Header */}
          <div className="cad-section-header text-center">
            <span className="cad-eyebrow">DEVELOPMENT METHODOLOGY</span>
            <h2 className="cad-section-title">
              Structured Development <span className="cad-gradient-text">Process</span>
            </h2>
            <p className="cad-section-desc">
              Our proven 5-phase methodology ensures systematic delivery of high-quality custom applications that meet business objectives and technical requirements.
            </p>
          </div>

          {/* 5-Phase Selector Tabs */}
          <div className="cad-phases-tabs-container">
            <div className="cad-phases-tabs">
              {PHASES.map((p, idx) => {
                const isActive = activePhaseIndex === idx;

                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`cad-phase-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActivePhaseIndex(idx)}
                    aria-selected={isActive}
                  >
                    <span className="tab-phase-badge">Phase {p.id}</span>
                    <span className="tab-phase-name">{p.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Timeline Progress Track & Dots (Pixel-perfect centered under each tab) */}
            <div className="cad-timeline-wrapper">
              <div className="cad-timeline-track">
                <div 
                  className="cad-timeline-fill"
                  style={{ width: `${activePhaseIndex * 25}%` }}
                ></div>
              </div>
              <div className="cad-timeline-dots-row">
                {PHASES.map((p, idx) => {
                  const isDotActive = idx <= activePhaseIndex;
                  const isCurrent = idx === activePhaseIndex;

                  return (
                    <div 
                      key={p.id} 
                      className="cad-timeline-dot-col"
                      onClick={() => setActivePhaseIndex(idx)}
                      title={`Go to Phase ${p.id}: ${p.title}`}
                    >
                      <div className={`cad-timeline-dot ${isDotActive ? 'dot-active' : ''} ${isCurrent ? 'dot-current' : ''}`}>
                        {isCurrent && <span className="dot-pulse"></span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Phase Content Cards */}
          <div className="row g-4 mt-2">
            
            {/* Left Card: Phase Scope & Key Activities */}
            <div className="col-lg-7">
              <div className="cad-phase-main-card">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <span className="cad-phase-badge-pill">
                    PHASE {currentPhase.id} • {currentPhase.duration.toUpperCase()}
                  </span>
                  <div className="cad-phase-number-box">
                    {currentPhase.id}
                  </div>
                </div>

                <h3 className="cad-phase-title">{currentPhase.title}</h3>
                <h5 className="cad-phase-sub">{currentPhase.subtitle}</h5>
                
                <p className="cad-phase-desc">{currentPhase.description}</p>

                {/* Key Activities */}
                <div className="cad-phase-activities">
                  <h4 className="activities-title">Key Activities</h4>
                  <div className="row g-3">
                    {currentPhase.activities.map((act, i) => (
                      <div key={i} className="col-md-6">
                        <div className="activity-item">
                          <span className="activity-dot"></span>
                          <span className="activity-text">{act}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase Navigation Buttons */}
                <div className="cad-phase-nav-actions">
                  <button
                    type="button"
                    className="cad-nav-btn prev-btn"
                    disabled={activePhaseIndex === 0}
                    onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="cad-nav-btn next-btn"
                    onClick={() => {
                      if (activePhaseIndex < PHASES.length - 1) {
                        setActivePhaseIndex((prev) => prev + 1);
                      } else {
                        setActivePhaseIndex(0); // loop back
                      }
                    }}
                  >
                    <span>{activePhaseIndex === PHASES.length - 1 ? 'Review Phase 1' : 'Next Phase'}</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            </div>

            {/* Right Card: Phase Deliverables & Timeline Progress */}
            <div className="col-lg-5">
              <div className="cad-deliverables-card">
                <h4 className="deliverables-title">Phase Deliverables</h4>
                
                <ul className="deliverables-list">
                  {currentPhase.deliverables.map((del, i) => (
                    <li key={i} className="deliverable-item">
                      <span className="del-bullet"></span>
                      <span className="del-text">{del}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Timeline & Percentage Box */}
                <div className="cad-timeline-summary-box">
                  <div>
                    <span className="timeline-title">Timeline: {currentPhase.duration}</span>
                    <span className="timeline-sub">Phase {currentPhase.id} of 5</span>
                  </div>
                  <div className="cad-timeline-percent">
                    {currentPhase.progress}%
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="cad-cta-section">
        <div className="container">
          <div className="cad-cta-glass-box text-center">
            <h2 className="cad-cta-title">Ready to Build Your Custom Software?</h2>
            <p className="cad-cta-desc">
              Let&apos;s collaborate to build scalable, resilient, and enterprise-grade applications tailored to your business goals.
            </p>
            <div className="cad-cta-btn-wrapper">
              <Link href="/contact-us" className="cad-primary-cta-btn">
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPED STYLES & DUAL THEME CONTRAST RULES */}
      <style jsx>{`
        /* ==================== BASE CONTAINER & TYPOGRAPHY ==================== */
        .custom-app-view {
          position: relative;
          width: 100%;
          min-height: 100vh;
          font-family: inherit;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        :global([data-theme="dark"]) .custom-app-view,
        .dark-theme {
          background-color: #060c18 !important;
          color: #f1f5f9 !important;
        }

        :global([data-theme="light"]) .custom-app-view,
        :global(:root:not([data-theme="dark"])) .custom-app-view,
        .light-theme {
          background-color: #f8fafc !important;
          color: #0f172a !important;
        }

        /* Gradient Headings */
        .cad-gradient-text {
          background: linear-gradient(135deg, #00AEEF 0%, #00E5FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        :global([data-theme="light"]) .cad-gradient-text,
        .light-theme .cad-gradient-text {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-cyan {
          color: #00C6FF !important;
        }

        :global([data-theme="light"]) .text-cyan,
        .light-theme .text-cyan {
          color: #0284c7 !important;
        }

        .text-highlight {
          color: #00C6FF;
          font-weight: 700;
        }

        :global([data-theme="light"]) .text-highlight,
        .light-theme .text-highlight {
          color: #0284c7;
        }

        /* Section Headers */
        .cad-section-header {
          max-width: 800px;
          margin: 0 auto 40px auto;
        }

        .cad-eyebrow {
          display: inline-block;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00C6FF;
          margin-bottom: 12px;
        }

        :global([data-theme="light"]) .cad-eyebrow,
        .light-theme .cad-eyebrow {
          color: #0284c7;
        }

        .cad-section-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        :global([data-theme="dark"]) .cad-section-title,
        .dark-theme .cad-section-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-section-title,
        :global(:root:not([data-theme="dark"])) .cad-section-title,
        .light-theme .cad-section-title {
          color: #0f172a !important;
        }

        .cad-section-desc {
          font-size: 16.5px;
          line-height: 1.65;
          margin: 0;
        }

        :global([data-theme="dark"]) .cad-section-desc,
        .dark-theme .cad-section-desc {
          color: #94a3b8 !important;
        }

        :global([data-theme="light"]) .cad-section-desc,
        :global(:root:not([data-theme="dark"])) .cad-section-desc,
        .light-theme .cad-section-desc {
          color: #475569 !important;
        }

        /* ==================== 1. HERO SECTION ==================== */
        .cad-hero-section {
          padding: 80px 0 60px 0;
          position: relative;
          overflow: hidden;
        }

        .cad-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        :global([data-theme="dark"]) .cad-hero-badge,
        .dark-theme .cad-hero-badge {
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00C6FF;
        }

        :global([data-theme="light"]) .cad-hero-badge,
        .light-theme .cad-hero-badge {
          background: #e0f2fe;
          border: 1px solid #bae6fd;
          color: #0284c7;
        }

        .badge-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #00C6FF;
          box-shadow: 0 0 10px #00C6FF;
        }

        .cad-hero-title {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        :global([data-theme="dark"]) .cad-hero-title,
        .dark-theme .cad-hero-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-hero-title,
        :global(:root:not([data-theme="dark"])) .cad-hero-title,
        .light-theme .cad-hero-title {
          color: #0f172a !important;
        }

        .cad-hero-desc {
          font-size: 17px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        :global([data-theme="dark"]) .cad-hero-desc,
        .dark-theme .cad-hero-desc {
          color: #cbd5e1 !important;
        }

        :global([data-theme="light"]) .cad-hero-desc,
        :global(:root:not([data-theme="dark"])) .cad-hero-desc,
        .light-theme .cad-hero-desc {
          color: #334155 !important;
        }

        .cad-quick-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cad-quick-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          transition: transform 0.2s ease;
        }

        :global([data-theme="dark"]) .cad-quick-pill,
        .dark-theme .cad-quick-pill {
          background: rgba(0, 174, 239, 0.08);
          border: 1px solid rgba(0, 174, 239, 0.25);
          color: #38bdf8;
        }

        :global([data-theme="light"]) .cad-quick-pill,
        :global(:root:not([data-theme="dark"])) .cad-quick-pill,
        .light-theme .cad-quick-pill {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .cad-quick-pill:hover {
          transform: translateY(-2px);
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #00C6FF;
        }

        :global([data-theme="light"]) .pill-dot,
        .light-theme .pill-dot {
          background-color: #0284c7;
        }

        /* Terminal Window */
        .cad-code-window {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(0, 198, 255, 0.25);
          backdrop-filter: blur(12px);
          background: rgba(13, 20, 36, 0.95);
        }

        .cad-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: rgba(0, 0, 0, 0.35);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cad-window-dots {
          display: flex;
          gap: 6px;
        }

        .cad-window-dots .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .cad-window-tabs {
          display: flex;
          gap: 6px;
        }

        .cad-tab-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 12.5px;
          font-family: monospace;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cad-tab-btn.active {
          background: rgba(255, 255, 255, 0.1);
          color: #38bdf8;
          font-weight: 600;
        }

        .cad-window-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #10b981;
          font-weight: 600;
          font-family: monospace;
        }

        .status-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10b981;
          box-shadow: 0 0 8px #10b981;
        }

        .cad-code-body {
          padding: 20px;
        }

        .cad-code-pre {
          margin: 0;
          padding: 0;
          font-family: 'Fira Code', monospace, Consolas, sans-serif;
          font-size: 13px;
          line-height: 1.8;
          overflow-x: auto;
        }

        .code-line {
          display: block;
          white-space: pre;
        }

        .c-num {
          display: inline-block;
          width: 25px;
          color: #475569;
          user-select: none;
        }

        .c-keyword { color: #f472b6; font-weight: 600; }
        .c-string { color: #a5f3fc; }
        .c-func { color: #60a5fa; }
        .c-type { color: #facc15; }
        .c-bool { color: #fb923c; }
        .c-num-val { color: #c084fc; }
        .c-comment { color: #64748b; font-style: italic; }

        .cad-terminal-footer {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px dashed rgba(255, 255, 255, 0.12);
          font-family: monospace;
          font-size: 12.5px;
        }

        .terminal-prompt {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #38bdf8;
          margin-bottom: 6px;
        }

        .terminal-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #10b981;
        }

        /* ==================== 2. TECHNOLOGY STACK ARCHITECTURE ==================== */
        .cad-stack-section {
          padding: 80px 0;
          position: relative;
        }

        .cad-layers-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
        }

        .cad-layer-node-wrapper {
          position: relative;
        }

        .cad-layer-line-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00C6FF;
          margin: 0 auto;
          box-shadow: 0 0 8px #00C6FF;
          position: relative;
          top: -5px;
        }

        .cad-layer-card {
          position: relative;
          border-radius: 16px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        :global([data-theme="dark"]) .cad-layer-card,
        .dark-theme .cad-layer-card {
          background: rgba(13, 22, 42, 0.7);
          border: 1px solid rgba(0, 198, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        :global([data-theme="light"]) .cad-layer-card,
        :global(:root:not([data-theme="dark"])) .cad-layer-card,
        .light-theme .cad-layer-card {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 8px 24px rgba(148, 163, 184, 0.12);
        }

        .cad-layer-card:hover {
          transform: translateY(-2px);
        }

        :global([data-theme="dark"]) .cad-layer-card:hover,
        .dark-theme .cad-layer-card:hover {
          border-color: rgba(0, 198, 255, 0.5);
        }

        :global([data-theme="light"]) .cad-layer-card:hover,
        .light-theme .cad-layer-card:hover {
          border-color: #0284c7;
        }

        /* Active Layer Card */
        .cad-layer-card.active-layer {
          transform: scale(1.01);
        }

        :global([data-theme="dark"]) .cad-layer-card.active-layer,
        .dark-theme .cad-layer-card.active-layer {
          border: 2px solid #00C6FF !important;
          box-shadow: 0 0 30px rgba(0, 198, 255, 0.35), inset 0 0 15px rgba(0, 198, 255, 0.1);
          background: rgba(13, 27, 54, 0.9);
        }

        :global([data-theme="light"]) .cad-layer-card.active-layer,
        .light-theme .cad-layer-card.active-layer {
          border: 2px solid #0284c7 !important;
          box-shadow: 0 12px 32px rgba(2, 132, 199, 0.2);
          background: #ffffff;
        }

        .cad-layer-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          background: transparent;
          transition: background 0.3s ease;
        }

        .cad-layer-card.active-layer .cad-layer-indicator {
          background: linear-gradient(180deg, #00C6FF 0%, #0077CC 100%);
        }

        :global([data-theme="light"]) .cad-layer-card.active-layer .cad-layer-indicator,
        .light-theme .cad-layer-card.active-layer .cad-layer-indicator {
          background: linear-gradient(180deg, #0284c7 0%, #0369a1 100%);
        }

        .cad-layer-meta {
          flex-shrink: 0;
          min-width: 140px;
        }

        .cad-layer-title {
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 4px 0;
        }

        :global([data-theme="dark"]) .cad-layer-title,
        .dark-theme .cad-layer-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-layer-title,
        :global(:root:not([data-theme="dark"])) .cad-layer-title,
        .light-theme .cad-layer-title {
          color: #0f172a !important;
        }

        .cad-layer-sub {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00C6FF;
        }

        :global([data-theme="light"]) .cad-layer-sub,
        .light-theme .cad-layer-sub {
          color: #0284c7;
        }

        .cad-layer-tech-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        /* Tech Chip Pill inside the Layer Card */
        .cad-tech-chip {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 12px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 4px;
        }

        :global([data-theme="dark"]) .cad-tech-chip,
        .dark-theme .cad-tech-chip {
          background: rgba(18, 30, 58, 0.6);
          border-color: rgba(0, 198, 255, 0.2);
          color: #e2e8f0;
        }

        :global([data-theme="light"]) .cad-tech-chip,
        :global(:root:not([data-theme="dark"])) .cad-tech-chip,
        .light-theme .cad-tech-chip {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
        }

        .cad-tech-chip:hover {
          transform: translateY(-3px);
        }

        :global([data-theme="dark"]) .cad-tech-chip:hover,
        .dark-theme .cad-tech-chip:hover {
          border-color: #00C6FF;
          box-shadow: 0 6px 16px rgba(0, 198, 255, 0.25);
          color: #38bdf8;
        }

        :global([data-theme="light"]) .cad-tech-chip:hover,
        .light-theme .cad-tech-chip:hover {
          border-color: #0284c7;
          box-shadow: 0 6px 16px rgba(2, 132, 199, 0.2);
          color: #0284c7;
        }

        .cad-tech-chip.active-tech-chip {
          transform: scale(1.06);
        }

        :global([data-theme="dark"]) .cad-tech-chip.active-tech-chip,
        .dark-theme .cad-tech-chip.active-tech-chip {
          border-color: #00C6FF !important;
          background: rgba(0, 198, 255, 0.2);
          box-shadow: 0 0 18px rgba(0, 198, 255, 0.45);
          color: #00C6FF !important;
        }

        :global([data-theme="light"]) .cad-tech-chip.active-tech-chip,
        .light-theme .cad-tech-chip.active-tech-chip {
          border-color: #0284c7 !important;
          background: #e0f2fe;
          box-shadow: 0 0 16px rgba(2, 132, 199, 0.3);
          color: #0284c7 !important;
        }

        .cad-chip-score {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        :global([data-theme="dark"]) .cad-chip-score,
        .dark-theme .cad-chip-score {
          background: #00C6FF;
          color: #060c18;
        }

        :global([data-theme="light"]) .cad-chip-score,
        .light-theme .cad-chip-score {
          background: #0284c7;
          color: #ffffff;
        }

        .cad-chip-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 3px;
        }

        .cad-chip-name {
          font-size: 10.5px;
          font-weight: 700;
          text-align: center;
          line-height: 1.1;
        }

        /* ==================== RIGHT DETAILS PANEL ==================== */
        .cad-detail-panel {
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
          position: sticky;
          top: 100px;
        }

        :global([data-theme="dark"]) .cad-detail-panel,
        .dark-theme .cad-detail-panel {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 198, 255, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
        }

        :global([data-theme="light"]) .cad-detail-panel,
        :global(:root:not([data-theme="dark"])) .cad-detail-panel,
        .light-theme .cad-detail-panel {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 15px 45px rgba(148, 163, 184, 0.15);
        }

        /* Back Button */
        .cad-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          margin-bottom: 20px;
          transition: all 0.2s ease;
        }

        :global([data-theme="dark"]) .cad-back-btn,
        .dark-theme .cad-back-btn {
          color: #00C6FF !important;
        }

        :global([data-theme="light"]) .cad-back-btn,
        .light-theme .cad-back-btn {
          color: #0284c7 !important;
        }

        .cad-back-btn:hover {
          transform: translateX(-3px);
        }

        /* Tech Detail View */
        .cad-tech-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .cad-tech-header-icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        :global([data-theme="dark"]) .cad-tech-header-icon,
        .dark-theme .cad-tech-header-icon {
          background: rgba(0, 198, 255, 0.12);
          border: 1px solid rgba(0, 198, 255, 0.3);
        }

        :global([data-theme="light"]) .cad-tech-header-icon,
        .light-theme .cad-tech-header-icon {
          background: #e0f2fe;
          border: 1.5px solid #bae6fd;
        }

        .cad-tech-title {
          font-size: 24px;
          font-weight: 800;
          margin: 0;
        }

        :global([data-theme="dark"]) .cad-tech-title,
        .dark-theme .cad-tech-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-tech-title,
        :global(:root:not([data-theme="dark"])) .cad-tech-title,
        .light-theme .cad-tech-title {
          color: #0f172a !important;
        }

        .cad-expertise-badge {
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        :global([data-theme="dark"]) .cad-expertise-badge,
        .dark-theme .cad-expertise-badge {
          background: rgba(0, 198, 255, 0.15);
          color: #00C6FF;
          border: 1px solid rgba(0, 198, 255, 0.3);
        }

        :global([data-theme="light"]) .cad-expertise-badge,
        .light-theme .cad-expertise-badge {
          background: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
        }

        .cad-tech-tagline {
          font-size: 12.5px;
          font-weight: 600;
        }

        :global([data-theme="dark"]) .cad-tech-tagline,
        .dark-theme .cad-tech-tagline {
          color: #94a3b8;
        }

        :global([data-theme="light"]) .cad-tech-tagline,
        .light-theme .cad-tech-tagline {
          color: #64748b;
        }

        /* Meter Box */
        .cad-meter-box {
          margin-bottom: 20px;
        }

        .meter-label {
          font-size: 12.5px;
          font-weight: 700;
        }

        :global([data-theme="dark"]) .meter-label,
        .dark-theme .meter-label {
          color: #cbd5e1;
        }

        :global([data-theme="light"]) .meter-label,
        .light-theme .meter-label {
          color: #334155;
        }

        .meter-value {
          font-size: 13px;
          font-weight: 800;
          color: #00C6FF;
        }

        :global([data-theme="light"]) .meter-value,
        .light-theme .meter-value {
          color: #0284c7;
        }

        .meter-track {
          width: 100%;
          height: 7px;
          border-radius: 10px;
          overflow: hidden;
        }

        :global([data-theme="dark"]) .meter-track,
        .dark-theme .meter-track {
          background: rgba(255, 255, 255, 0.1);
        }

        :global([data-theme="light"]) .meter-track,
        .light-theme .meter-track {
          background: #e2e8f0;
        }

        .meter-fill {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #00AEEF 0%, #00E5FF 100%);
          box-shadow: 0 0 10px rgba(0, 198, 255, 0.5);
          transition: width 0.6s ease;
        }

        /* Stats Grid */
        .cad-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cad-stat-item {
          padding: 12px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cad-stat-item.full-width {
          grid-column: span 2;
        }

        :global([data-theme="dark"]) .cad-stat-item,
        .dark-theme .cad-stat-item {
          background: rgba(18, 30, 58, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        :global([data-theme="light"]) .cad-stat-item,
        .light-theme .cad-stat-item {
          background: #f1f5f9;
          border: 1.5px solid #e2e8f0;
        }

        .stat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          font-weight: 700;
        }

        .stat-val {
          font-size: 13.5px;
          font-weight: 800;
        }

        :global([data-theme="dark"]) .stat-val,
        .dark-theme .stat-val {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .stat-val,
        .light-theme .stat-val {
          color: #0f172a !important;
        }

        .cad-tech-bio p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        :global([data-theme="dark"]) .cad-tech-bio p,
        .dark-theme .cad-tech-bio p {
          color: #94a3b8 !important;
        }

        :global([data-theme="light"]) .cad-tech-bio p,
        .light-theme .cad-tech-bio p {
          color: #334155 !important;
        }

        /* Capabilities List */
        .cad-capabilities-section {
          margin-bottom: 20px;
        }

        .cad-cap-title {
          font-size: 13.5px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }

        :global([data-theme="dark"]) .cad-cap-title,
        .dark-theme .cad-cap-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-cap-title,
        .light-theme .cad-cap-title {
          color: #0f172a !important;
        }

        .cad-cap-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cad-cap-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13px;
          line-height: 1.5;
        }

        :global([data-theme="dark"]) .cad-cap-list li,
        .dark-theme .cad-cap-list li {
          color: #cbd5e1 !important;
        }

        :global([data-theme="light"]) .cad-cap-list li,
        .light-theme .cad-cap-list li {
          color: #1e293b !important;
          font-weight: 500;
        }

        .check-icon {
          color: #00C6FF;
          flex-shrink: 0;
          margin-top: 2px;
        }

        :global([data-theme="light"]) .check-icon,
        .light-theme .check-icon {
          color: #0284c7;
        }

        /* Use Cases Box */
        .cad-use-cases-box {
          padding: 14px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        :global([data-theme="dark"]) .cad-use-cases-box,
        .dark-theme .cad-use-cases-box {
          background: rgba(0, 198, 255, 0.05);
          border: 1px dashed rgba(0, 198, 255, 0.25);
        }

        :global([data-theme="light"]) .cad-use-cases-box,
        .light-theme .cad-use-cases-box {
          background: #f0f9ff;
          border: 1.5px dashed #7dd3fc;
        }

        .use-case-title {
          font-size: 12.5px;
          font-weight: 800;
          margin-bottom: 6px;
          color: #00C6FF;
        }

        :global([data-theme="light"]) .use-case-title,
        .light-theme .use-case-title {
          color: #0284c7;
        }

        .use-case-text {
          font-size: 12.5px;
          line-height: 1.55;
          margin: 0;
        }

        :global([data-theme="dark"]) .use-case-text,
        .dark-theme .use-case-text {
          color: #94a3b8 !important;
        }

        :global([data-theme="light"]) .use-case-text,
        .light-theme .use-case-text {
          color: #1e293b !important;
        }

        /* Quick Switcher Mini Pills */
        .cad-other-tech-row {
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        :global([data-theme="light"]) .cad-other-tech-row,
        .light-theme .cad-other-tech-row {
          border-top: 1px solid #e2e8f0;
        }

        .other-label {
          font-size: 11.5px;
          font-weight: 700;
          color: #64748b;
        }

        .cad-mini-pill {
          padding: 5px 12px;
          border-radius: 14px;
          font-size: 12px;
          font-weight: 700;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        :global([data-theme="dark"]) .cad-mini-pill,
        .dark-theme .cad-mini-pill {
          color: #cbd5e1;
          border-color: rgba(255, 255, 255, 0.2);
        }

        :global([data-theme="light"]) .cad-mini-pill,
        .light-theme .cad-mini-pill {
          border: 1.5px solid #cbd5e1;
          color: #1e293b;
        }

        .cad-mini-pill:hover,
        .cad-mini-pill.active {
          border-color: #00C6FF !important;
          background: rgba(0, 198, 255, 0.15);
          color: #00C6FF !important;
        }

        :global([data-theme="light"]) .cad-mini-pill:hover,
        :global([data-theme="light"]) .cad-mini-pill.active,
        .light-theme .cad-mini-pill:hover,
        .light-theme .cad-mini-pill.active {
          border-color: #0284c7 !important;
          background: #e0f2fe;
          color: #0284c7 !important;
        }

        /* Layer Overview Mode */
        .cad-detail-layer-title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        :global([data-theme="dark"]) .cad-detail-layer-title,
        .dark-theme .cad-detail-layer-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-detail-layer-title,
        :global(:root:not([data-theme="dark"])) .cad-detail-layer-title,
        .light-theme .cad-detail-layer-title {
          color: #0f172a !important;
        }

        .cad-detail-layer-sub {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #00C6FF;
          margin-bottom: 12px;
        }

        :global([data-theme="light"]) .cad-detail-layer-sub,
        .light-theme .cad-detail-layer-sub {
          color: #0284c7;
        }

        .cad-detail-layer-desc {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.55;
          margin-bottom: 14px;
        }

        :global([data-theme="dark"]) .cad-detail-layer-desc,
        .dark-theme .cad-detail-layer-desc {
          color: #cbd5e1 !important;
        }

        :global([data-theme="light"]) .cad-detail-layer-desc,
        .light-theme .cad-detail-layer-desc {
          color: #334155 !important;
        }

        .cad-layer-long-desc {
          font-size: 13.5px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        :global([data-theme="dark"]) .cad-layer-long-desc,
        .dark-theme .cad-layer-long-desc {
          color: #94a3b8 !important;
        }

        :global([data-theme="light"]) .cad-layer-long-desc,
        .light-theme .cad-layer-long-desc {
          color: #475569 !important;
        }

        .cad-techs-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .cad-techs-heading {
          font-size: 15px;
          font-weight: 800;
          margin: 0;
        }

        :global([data-theme="dark"]) .cad-techs-heading,
        .dark-theme .cad-techs-heading {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-techs-heading,
        .light-theme .cad-techs-heading {
          color: #0f172a !important;
        }

        .cad-techs-count {
          font-size: 11px;
          font-weight: 700;
          color: #00C6FF;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        :global([data-theme="light"]) .cad-techs-count,
        .light-theme .cad-techs-count {
          color: #0284c7;
        }

        /* 2x2 Tech Grid */
        .cad-panel-tech-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 24px;
        }

        .cad-panel-tech-card {
          border-radius: 12px;
          padding: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        :global([data-theme="dark"]) .cad-panel-tech-card,
        .dark-theme .cad-panel-tech-card {
          background: rgba(18, 30, 58, 0.6);
          border: 1px solid rgba(0, 198, 255, 0.2);
        }

        :global([data-theme="light"]) .cad-panel-tech-card,
        :global(:root:not([data-theme="dark"])) .cad-panel-tech-card,
        .light-theme .cad-panel-tech-card {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
        }

        .cad-panel-tech-card:hover {
          transform: translateY(-2px);
        }

        :global([data-theme="dark"]) .cad-panel-tech-card:hover,
        .dark-theme .cad-panel-tech-card:hover {
          border-color: #00C6FF;
          box-shadow: 0 8px 20px rgba(0, 198, 255, 0.2);
        }

        :global([data-theme="light"]) .cad-panel-tech-card:hover,
        .light-theme .cad-panel-tech-card:hover {
          border-color: #0284c7;
          box-shadow: 0 8px 20px rgba(2, 132, 199, 0.15);
        }

        .cad-panel-tech-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .panel-tech-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .panel-tech-name {
          font-size: 14px;
          font-weight: 700;
        }

        :global([data-theme="dark"]) .panel-tech-name,
        .dark-theme .panel-tech-name {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .panel-tech-name,
        .light-theme .panel-tech-name {
          color: #0f172a !important;
        }

        .panel-tech-bar-box {
          margin-bottom: 8px;
        }

        .panel-tech-bar-track {
          width: 100%;
          height: 4px;
          border-radius: 6px;
        }

        :global([data-theme="dark"]) .panel-tech-bar-track,
        .dark-theme .panel-tech-bar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        :global([data-theme="light"]) .panel-tech-bar-track,
        .light-theme .panel-tech-bar-track {
          background: #e2e8f0;
        }

        .panel-tech-bar-fill {
          height: 100%;
          border-radius: 6px;
          background: linear-gradient(90deg, #00AEEF 0%, #00E5FF 100%);
        }

        .panel-tech-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tech-level-text {
          font-size: 10.5px;
          font-weight: 600;
        }

        :global([data-theme="dark"]) .tech-level-text,
        .dark-theme .tech-level-text {
          color: #64748b;
        }

        :global([data-theme="light"]) .tech-level-text,
        .light-theme .tech-level-text {
          color: #475569;
        }

        .panel-arrow {
          color: #00C6FF;
          opacity: 0.7;
          transition: transform 0.2s ease;
        }

        :global([data-theme="light"]) .panel-arrow,
        .light-theme .panel-arrow {
          color: #0284c7;
        }

        .cad-panel-tech-card:hover .panel-arrow {
          transform: translateX(3px);
          opacity: 1;
        }

        .cad-helper-hint {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 12.5px;
          line-height: 1.5;
        }

        :global([data-theme="dark"]) .cad-helper-hint,
        .dark-theme .cad-helper-hint {
          background: rgba(0, 198, 255, 0.08);
          border: 1px solid rgba(0, 198, 255, 0.2);
          color: #94a3b8;
        }

        :global([data-theme="light"]) .cad-helper-hint,
        .light-theme .cad-helper-hint {
          background: #f0f9ff;
          border: 1.5px solid #bae6fd;
          color: #1e293b;
        }

        .hint-icon {
          color: #00C6FF;
          flex-shrink: 0;
          margin-top: 1px;
        }

        :global([data-theme="light"]) .hint-icon,
        .light-theme .hint-icon {
          color: #0284c7;
        }

        /* ==================== 3. STRUCTURED DEVELOPMENT PROCESS ==================== */
        .cad-methodology-section {
          padding: 80px 0;
          position: relative;
        }

        .cad-phases-tabs-container {
          margin-bottom: 35px;
        }

        /* 5-Column Tabs Grid */
        .cad-phases-tabs {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }

        .cad-phase-tab-btn {
          border-radius: 14px;
          padding: 16px 12px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 5px;
          transition: all 0.25s ease;
          border: 1.5px solid transparent;
        }

        /* Inactive Tab Styles - Dark Mode */
        :global([data-theme="dark"]) .cad-phase-tab-btn,
        .dark-theme .cad-phase-tab-btn {
          background: rgba(13, 22, 42, 0.7);
          border-color: rgba(255, 255, 255, 0.09);
        }

        :global([data-theme="dark"]) .cad-phase-tab-btn .tab-phase-badge,
        .dark-theme .cad-phase-tab-btn .tab-phase-badge {
          color: #00C6FF;
        }

        :global([data-theme="dark"]) .cad-phase-tab-btn .tab-phase-name,
        .dark-theme .cad-phase-tab-btn .tab-phase-name {
          color: #f1f5f9;
        }

        :global([data-theme="dark"]) .cad-phase-tab-btn:hover,
        .dark-theme .cad-phase-tab-btn:hover {
          border-color: #00C6FF;
          background: rgba(13, 35, 70, 0.9);
          transform: translateY(-2px);
        }

        /* Inactive Tab Styles - Light Mode */
        :global([data-theme="light"]) .cad-phase-tab-btn,
        :global(:root:not([data-theme="dark"])) .cad-phase-tab-btn,
        .light-theme .cad-phase-tab-btn {
          background: #ffffff;
          border-color: #cbd5e1;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        :global([data-theme="light"]) .cad-phase-tab-btn .tab-phase-badge,
        :global(:root:not([data-theme="dark"])) .cad-phase-tab-btn .tab-phase-badge,
        .light-theme .cad-phase-tab-btn .tab-phase-badge {
          color: #0284c7;
        }

        :global([data-theme="light"]) .cad-phase-tab-btn .tab-phase-name,
        :global(:root:not([data-theme="dark"])) .cad-phase-tab-btn .tab-phase-name,
        .light-theme .cad-phase-tab-btn .tab-phase-name {
          color: #0f172a;
        }

        :global([data-theme="light"]) .cad-phase-tab-btn:hover,
        .light-theme .cad-phase-tab-btn:hover {
          border-color: #0284c7;
          background: #f0f9ff;
          transform: translateY(-2px);
        }

        /* ACTIVE TAB STYLES - DARK MODE */
        :global([data-theme="dark"]) .cad-phase-tab-btn.active,
        .dark-theme .cad-phase-tab-btn.active {
          background: #00AEEF !important;
          border-color: #00C6FF !important;
          box-shadow: 0 8px 25px rgba(0, 174, 239, 0.45);
          transform: scale(1.02);
        }

        :global([data-theme="dark"]) .cad-phase-tab-btn.active .tab-phase-badge,
        .dark-theme .cad-phase-tab-btn.active .tab-phase-badge {
          color: #000000 !important;
          opacity: 0.9;
          font-weight: 800;
        }

        :global([data-theme="dark"]) .cad-phase-tab-btn.active .tab-phase-name,
        .dark-theme .cad-phase-tab-btn.active .tab-phase-name {
          color: #000000 !important;
          font-weight: 800;
        }

        /* ACTIVE TAB STYLES - LIGHT MODE */
        :global([data-theme="light"]) .cad-phase-tab-btn.active,
        :global(:root:not([data-theme="dark"])) .cad-phase-tab-btn.active,
        .light-theme .cad-phase-tab-btn.active {
          background: #0284c7 !important;
          border-color: #0369a1 !important;
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.35);
          transform: scale(1.02);
        }

        :global([data-theme="light"]) .cad-phase-tab-btn.active .tab-phase-badge,
        :global(:root:not([data-theme="dark"])) .cad-phase-tab-btn.active .tab-phase-badge,
        .light-theme .cad-phase-tab-btn.active .tab-phase-badge {
          color: #ffffff !important;
          opacity: 0.95;
          font-weight: 800;
        }

        :global([data-theme="light"]) .cad-phase-tab-btn.active .tab-phase-name,
        :global(:root:not([data-theme="dark"])) .cad-phase-tab-btn.active .tab-phase-name,
        .light-theme .cad-phase-tab-btn.active .tab-phase-name {
          color: #ffffff !important;
          font-weight: 800;
        }

        .tab-phase-badge {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.75px;
        }

        .tab-phase-name {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.25;
        }

        /* Timeline Progress Track & Dots (Pixel-perfect center aligned under each tab) */
        .cad-timeline-wrapper {
          position: relative;
          width: 100%;
          padding: 10px 0;
        }

        .cad-timeline-track {
          position: absolute;
          top: 50%;
          left: 10%;
          right: 10%;
          height: 3px;
          transform: translateY(-50%);
          z-index: 1;
        }

        :global([data-theme="dark"]) .cad-timeline-track,
        .dark-theme .cad-timeline-track {
          background: rgba(255, 255, 255, 0.12);
        }

        :global([data-theme="light"]) .cad-timeline-track,
        :global(:root:not([data-theme="dark"])) .cad-timeline-track,
        .light-theme .cad-timeline-track {
          background: #cbd5e1;
        }

        .cad-timeline-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: linear-gradient(90deg, #00AEEF 0%, #00E5FF 100%);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 10px #00C6FF;
        }

        :global([data-theme="light"]) .cad-timeline-fill,
        .light-theme .cad-timeline-fill {
          background: linear-gradient(90deg, #0284c7 0%, #00AEEF 100%);
          box-shadow: 0 0 10px rgba(2, 132, 199, 0.5);
        }

        .cad-timeline-dots-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .cad-timeline-dot-col {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .cad-timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
        }

        :global([data-theme="dark"]) .cad-timeline-dot,
        .dark-theme .cad-timeline-dot {
          background: #1e293b;
          border: 2px solid #475569;
        }

        :global([data-theme="light"]) .cad-timeline-dot,
        :global(:root:not([data-theme="dark"])) .cad-timeline-dot,
        .light-theme .cad-timeline-dot {
          background: #e2e8f0;
          border: 2px solid #94a3b8;
        }

        :global([data-theme="dark"]) .cad-timeline-dot.dot-active,
        .dark-theme .cad-timeline-dot.dot-active {
          background: #00C6FF;
          border-color: #ffffff;
          box-shadow: 0 0 14px #00C6FF;
          transform: scale(1.15);
        }

        :global([data-theme="light"]) .cad-timeline-dot.dot-active,
        :global(:root:not([data-theme="dark"])) .cad-timeline-dot.dot-active,
        .light-theme .cad-timeline-dot.dot-active {
          background: #0284c7;
          border-color: #ffffff;
          box-shadow: 0 0 14px rgba(2, 132, 199, 0.6);
          transform: scale(1.15);
        }

        .dot-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #00C6FF;
          animation: dotPulseAnim 2s infinite;
        }

        :global([data-theme="light"]) .dot-pulse,
        .light-theme .dot-pulse {
          border-color: #0284c7;
        }

        @keyframes dotPulseAnim {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* Left Card: Phase Scope */
        .cad-phase-main-card {
          border-radius: 20px;
          padding: 36px;
          height: 100%;
        }

        :global([data-theme="dark"]) .cad-phase-main-card,
        .dark-theme .cad-phase-main-card {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 198, 255, 0.25);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        :global([data-theme="light"]) .cad-phase-main-card,
        :global(:root:not([data-theme="dark"])) .cad-phase-main-card,
        .light-theme .cad-phase-main-card {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
        }

        .cad-phase-badge-pill {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00C6FF;
        }

        :global([data-theme="light"]) .cad-phase-badge-pill,
        .light-theme .cad-phase-badge-pill {
          color: #0284c7;
        }

        .cad-phase-number-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          font-weight: 800;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global([data-theme="dark"]) .cad-phase-number-box,
        .dark-theme .cad-phase-number-box {
          background: #00C6FF;
          color: #060c18;
          box-shadow: 0 0 15px rgba(0, 198, 255, 0.5);
        }

        :global([data-theme="light"]) .cad-phase-number-box,
        :global(:root:not([data-theme="dark"])) .cad-phase-number-box,
        .light-theme .cad-phase-number-box {
          background: #0284c7;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
        }

        .cad-phase-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        :global([data-theme="dark"]) .cad-phase-title,
        .dark-theme .cad-phase-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-phase-title,
        :global(:root:not([data-theme="dark"])) .cad-phase-title,
        .light-theme .cad-phase-title {
          color: #0f172a !important;
        }

        .cad-phase-sub {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        :global([data-theme="dark"]) .cad-phase-sub,
        .dark-theme .cad-phase-sub {
          color: #94a3b8 !important;
        }

        :global([data-theme="light"]) .cad-phase-sub,
        .light-theme .cad-phase-sub {
          color: #475569 !important;
        }

        .cad-phase-desc {
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 28px;
        }

        :global([data-theme="dark"]) .cad-phase-desc,
        .dark-theme .cad-phase-desc {
          color: #cbd5e1 !important;
        }

        :global([data-theme="light"]) .cad-phase-desc,
        :global(:root:not([data-theme="dark"])) .cad-phase-desc,
        .light-theme .cad-phase-desc {
          color: #334155 !important;
        }

        .activities-title {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        :global([data-theme="dark"]) .activities-title,
        .dark-theme .activities-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .activities-title,
        :global(:root:not([data-theme="dark"])) .activities-title,
        .light-theme .activities-title {
          color: #0f172a !important;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .activity-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00C6FF;
          flex-shrink: 0;
          margin-top: 6px;
        }

        :global([data-theme="light"]) .activity-dot,
        .light-theme .activity-dot {
          background: #0284c7;
        }

        .activity-text {
          font-weight: 500;
          line-height: 1.45;
        }

        :global([data-theme="dark"]) .activity-text,
        .dark-theme .activity-text {
          color: #cbd5e1 !important;
        }

        :global([data-theme="light"]) .activity-text,
        :global(:root:not([data-theme="dark"])) .activity-text,
        .light-theme .activity-text {
          color: #1e293b !important;
          font-weight: 600;
        }

        /* Nav Action Buttons */
        .cad-phase-nav-actions {
          display: flex;
          gap: 14px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        :global([data-theme="light"]) .cad-phase-nav-actions,
        .light-theme .cad-phase-nav-actions {
          border-top: 1px solid #e2e8f0;
        }

        .cad-nav-btn {
          border-radius: 10px;
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }

        .prev-btn {
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.18);
        }

        :global([data-theme="dark"]) .prev-btn,
        .dark-theme .prev-btn {
          color: #cbd5e1;
        }

        :global([data-theme="light"]) .prev-btn,
        :global(:root:not([data-theme="dark"])) .prev-btn,
        .light-theme .prev-btn {
          background: #f1f5f9;
          border: 1.5px solid #cbd5e1;
          color: #1e293b;
        }

        .prev-btn:hover:not(:disabled) {
          border-color: #00C6FF;
          color: #ffffff;
        }

        :global([data-theme="light"]) .prev-btn:hover:not(:disabled),
        .light-theme .prev-btn:hover:not(:disabled) {
          border-color: #0284c7;
          color: #0284c7;
          background: #e0f2fe;
        }

        .prev-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .next-btn {
          border: none;
        }

        :global([data-theme="dark"]) .next-btn,
        .dark-theme .next-btn {
          background: #00AEEF;
          color: #000000;
          box-shadow: 0 4px 15px rgba(0, 174, 239, 0.35);
        }

        :global([data-theme="light"]) .next-btn,
        :global(:root:not([data-theme="dark"])) .next-btn,
        .light-theme .next-btn {
          background: #0284c7;
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(2, 132, 199, 0.3);
        }

        .next-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 174, 239, 0.5);
        }

        :global([data-theme="light"]) .next-btn:hover,
        .light-theme .next-btn:hover {
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
        }

        /* Right Card: Deliverables */
        .cad-deliverables-card {
          border-radius: 20px;
          padding: 36px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        :global([data-theme="dark"]) .cad-deliverables-card,
        .dark-theme .cad-deliverables-card {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 198, 255, 0.25);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        :global([data-theme="light"]) .cad-deliverables-card,
        :global(:root:not([data-theme="dark"])) .cad-deliverables-card,
        .light-theme .cad-deliverables-card {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
        }

        .deliverables-title {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 24px;
        }

        :global([data-theme="dark"]) .deliverables-title,
        .dark-theme .deliverables-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .deliverables-title,
        :global(:root:not([data-theme="dark"])) .deliverables-title,
        .light-theme .deliverables-title {
          color: #0f172a !important;
        }

        .deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }

        .deliverable-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          font-size: 15px;
          font-weight: 600;
        }

        :global([data-theme="dark"]) .deliverable-item,
        .dark-theme .deliverable-item {
          color: #e2e8f0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        :global([data-theme="light"]) .deliverable-item,
        :global(:root:not([data-theme="dark"])) .deliverable-item,
        .light-theme .deliverable-item {
          color: #0f172a !important;
          border-bottom: 1px solid #e2e8f0;
        }

        .deliverable-item:last-child {
          border-bottom: none;
        }

        .del-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00C6FF;
          flex-shrink: 0;
          box-shadow: 0 0 8px #00C6FF;
        }

        :global([data-theme="light"]) .del-bullet,
        .light-theme .del-bullet {
          background: #0284c7;
          box-shadow: 0 0 8px rgba(2, 132, 199, 0.4);
        }

        /* Timeline Summary Box */
        .cad-timeline-summary-box {
          border-radius: 14px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        :global([data-theme="dark"]) .cad-timeline-summary-box,
        .dark-theme .cad-timeline-summary-box {
          background: rgba(0, 198, 255, 0.08);
          border: 1px solid rgba(0, 198, 255, 0.25);
        }

        :global([data-theme="light"]) .cad-timeline-summary-box,
        :global(:root:not([data-theme="dark"])) .cad-timeline-summary-box,
        .light-theme .cad-timeline-summary-box {
          background: #f0f9ff;
          border: 1.5px solid #bae6fd;
        }

        .timeline-title {
          display: block;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 3px;
        }

        :global([data-theme="dark"]) .timeline-title,
        .dark-theme .timeline-title {
          color: #00C6FF;
        }

        :global([data-theme="light"]) .timeline-title,
        .light-theme .timeline-title {
          color: #0284c7;
        }

        .timeline-sub {
          display: block;
          font-size: 12px;
          font-weight: 500;
        }

        :global([data-theme="dark"]) .timeline-sub,
        .dark-theme .timeline-sub {
          color: #94a3b8;
        }

        :global([data-theme="light"]) .timeline-sub,
        .light-theme .timeline-sub {
          color: #64748b;
        }

        .cad-timeline-percent {
          font-size: 32px;
          font-weight: 800;
        }

        :global([data-theme="dark"]) .cad-timeline-percent,
        .dark-theme .cad-timeline-percent {
          color: #00C6FF;
        }

        :global([data-theme="light"]) .cad-timeline-percent,
        .light-theme .cad-timeline-percent {
          color: #0284c7;
        }

        /* ==================== 4. CALL TO ACTION SECTION ==================== */
        .cad-cta-section {
          padding: 70px 0 90px 0;
          position: relative;
        }

        .cad-cta-glass-box {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 24px;
          padding: 50px 30px;
        }

        :global([data-theme="dark"]) .cad-cta-glass-box,
        .dark-theme .cad-cta-glass-box {
          background: rgba(13, 24, 48, 0.85);
          border: 1px solid rgba(0, 198, 255, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
        }

        :global([data-theme="light"]) .cad-cta-glass-box,
        :global(:root:not([data-theme="dark"])) .cad-cta-glass-box,
        .light-theme .cad-cta-glass-box {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          box-shadow: 0 15px 45px rgba(148, 163, 184, 0.15);
        }

        .cad-cta-title {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        :global([data-theme="dark"]) .cad-cta-title,
        .dark-theme .cad-cta-title {
          color: #ffffff !important;
        }

        :global([data-theme="light"]) .cad-cta-title,
        :global(:root:not([data-theme="dark"])) .cad-cta-title,
        .light-theme .cad-cta-title {
          color: #0f172a !important;
        }

        .cad-cta-desc {
          font-size: 16.5px;
          max-width: 620px;
          margin: 0 auto 32px auto;
          line-height: 1.65;
        }

        :global([data-theme="dark"]) .cad-cta-desc,
        .dark-theme .cad-cta-desc {
          color: #94a3b8 !important;
        }

        :global([data-theme="light"]) .cad-cta-desc,
        :global(:root:not([data-theme="dark"])) .cad-cta-desc,
        .light-theme .cad-cta-desc {
          color: #475569 !important;
        }

        .cad-cta-btn-wrapper {
          display: flex;
          justify-content: center;
        }

        .cad-primary-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 50px;
          padding: 16px 44px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          color: #ffffff !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        :global([data-theme="dark"]) .cad-primary-cta-btn,
        .dark-theme .cad-primary-cta-btn {
          background: linear-gradient(135deg, #00AEEF 0%, #0088C7 100%) !important;
          box-shadow: 0 12px 32px rgba(0, 174, 239, 0.4);
        }

        :global([data-theme="dark"]) .cad-primary-cta-btn:hover,
        .dark-theme .cad-primary-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 42px rgba(0, 174, 239, 0.6);
        }

        :global([data-theme="light"]) .cad-primary-cta-btn,
        :global(:root:not([data-theme="dark"])) .cad-primary-cta-btn,
        .light-theme .cad-primary-cta-btn {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;
          box-shadow: 0 12px 28px rgba(2, 132, 199, 0.35);
        }

        :global([data-theme="light"]) .cad-primary-cta-btn:hover,
        .light-theme .cad-primary-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(2, 132, 199, 0.5);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* ==================== RESPONSIVE QUERIES ==================== */
        @media (max-width: 991px) {
          .cad-hero-title {
            font-size: 36px;
          }
          .cad-section-title {
            font-size: 32px;
          }
          .cad-phases-tabs {
            grid-template-columns: repeat(3, 1fr);
          }
          .cad-timeline-wrapper {
            display: none;
          }
          .cad-detail-panel {
            position: static;
            margin-top: 24px;
          }
        }

        @media (max-width: 576px) {
          .cad-hero-title {
            font-size: 28px;
          }
          .cad-section-title {
            font-size: 26px;
          }
          .cad-phases-tabs {
            grid-template-columns: 1fr;
          }
          .cad-panel-tech-grid {
            grid-template-columns: 1fr;
          }
          .cad-stats-grid {
            grid-template-columns: 1fr;
          }
          .cad-stat-item.full-width {
            grid-column: span 1;
          }
          .cad-layer-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .cad-layer-tech-row {
            justify-content: flex-start;
            width: 100%;
          }
          .cad-cta-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
