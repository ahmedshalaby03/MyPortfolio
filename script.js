(() => {
  'use strict';

  const skillData = [
    {
      category: 'Programming Languages',
      icon: 'fa-terminal',
      featured: true,
      skills: ['C#', 'C++', 'JavaScript ES6+', 'TypeScript', 'SQL / T-SQL, Java']
    },
    {
      category: 'Backend Development',
      icon: 'fa-server',
      featured: true,
      skills: ['ASP.NET Core', 'ASP.NET Core Web API', 'ASP.NET MVC', 'Entity Framework Core', 'LINQ', 'REST APIs', 'JWT', 'ASP.NET Identity']
    },
    {
      category: 'Frontend Development',
      icon: 'fa-code',
      skills: ['Angular', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI']
    },
    {
      category: 'Databases, BI & Cloud',
      icon: 'fa-database',
      skills: ['SQL Server', 'Database Fundamentals', 'Relational Modeling', 'Stored Procedures', 'Microsoft Azure', 'Power BI']
    },
    {
      category: 'Software Engineering & Concepts',
      icon: 'fa-sitemap',
      skills: ['Introduction to Software Engineering', 'Clean Architecture', 'Onion Architecture', 'SOLID', 'Design Patterns', 'Repository Pattern', 'SDLC', 'Agile', 'Data Structures', 'Operating Systems']
    },
    {
      category: 'Security & Infrastructure',
      icon: 'fa-shield-halved',
      skills: ['Networking', 'Cybersecurity', 'Ethical Hacking', 'Fortinet', 'Palo Alto']
    },
    {
      category: 'AI & Professional Skills',
      icon: 'fa-brain',
      skills: ['Generative AI', 'LLM', 'RAG', 'English', 'Teamwork', 'Communication', 'Presentation Skills', 'CRM & Business Development']
    }
  ];

  const experienceData = [
    {
      company: 'FlyRank AI',
      position: 'Backend AI Developer Intern',
      employmentType: '3-Month Internship',
      duration: 'June 2026 – Present',
      location: 'Chicago, IL, USA – Remote',
      responsibilities: [
        'Contributing to backend development by building and maintaining server-side features, RESTful APIs, and database integrations.',
        'Collaborating with the development team to implement scalable solutions, troubleshoot technical issues, and improve application performance.'
      ],
      logo: './assets/logos/f.png'
    },
    {
      company: 'Information Technology Institute (ITI)',
      position: 'Full-Stack .NET Trainee',
      employmentType: 'Professional Training',
      duration: 'Oct 2025 — Aug 2026',
      location: 'Menofia, Egypt',
      summary: 'Advanced application development across backend architecture, frontend delivery, databases, and production-oriented practices.',
      logo: './assets/logos/i.png'
    },
    {
      company: 'Faculty of Electronic Engineering, Menoufia University',
      position: 'B.Sc. Computer Science & Engineering',
      employmentType: 'Education',
      duration: 'Oct 2020 — Jun 2025',
      location: 'Menofia, Egypt',
      summary: 'Graduated with a Very Good grade. Built a healthcare graduation platform integrating ASP.NET Core, SQL Server, LLM, and RAG capabilities.',
      logo: './assets/logos/u.png'
    },
    {
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      position: 'Full-Stack .NET Trainee',
      employmentType: 'Professional Training',
      duration: 'Nov 2024 — May 2025',
      location: 'Menofia, Egypt',
      summary: 'Delivered full-stack applications using C#, ASP.NET MVC, Entity Framework, SQL Server, and modern frontend workflows.',
      logo: './assets/logos/d.png'
    },
    {
      company: 'Information Technology Institute (ITI)',
      position: '.NET Development & Cybersecurity',
      employmentType: 'Summer Training',
      duration: 'Aug — Oct 2024',
      location: 'Menofia, Egypt',
      summary: 'Completed focused internships in full-stack .NET development, cybersecurity fundamentals, networking, and ethical hacking.',
      logo: './assets/logos/i.png'
    }
  ];

  const projectData = [
    {
      id: 'smart-invest',
      title: 'Smart-Invest Platform',
      category: 'ITI Graduation Project -Government Investment Management Platform',
      icon: 'fa-chart-line',

      image: 'assets/projects/smart-invest.webp',
      imageAlt: 'SmartInvest Platform project preview',

      shortDescription:
        'A government-scale platform for managing investment projects across planning, procurement, execution, monitoring, and reporting workflows.',

      description: [
        'Designed and developed a government-scale platform that manages investment projects across planning, procurement, execution, monitoring, and reporting workflows.',
        'Built the platform using ASP.NET Core Web API and Angular with secure Role-Based Access Control and Power BI dashboards for project and financial monitoring.',
        'Developed an AI layer using Retrieval-Augmented Generation and a Multi-Agent Architecture for intelligent search, project insights, risk prediction, and decision support.'
      ],

      problem:
        'Government investment projects require coordinated planning, procurement, execution, monitoring, and reporting. Fragmented processes make it difficult to track progress, financial performance, risks, and decision-making data.',

      features: [
        'Investment project lifecycle management',
        'Planning, procurement, execution, and monitoring workflows',
        'Secure Role-Based Access Control',
        'Power BI dashboards for project and financial monitoring',
        'Retrieval-Augmented Generation for intelligent search',
        'Multi-Agent Architecture for project insights and decision support',
        'Risk prediction and intelligent reporting'
      ],

      technologies: [
        'ASP.NET Core Web API',
        'Angular',
        'SQL Server',
        'Power BI',
        'RAG',
        'Multi-Agent Systems'
      ],

      role:
        'Designed and developed the platform architecture, backend APIs, Angular workflows, role-based authorization, reporting integrations, and the AI-assisted project intelligence layer.',

      decisions:
        'Separated the core government investment workflows from the AI layer so transactional operations remain secure and deterministic, while RAG and specialized agents provide search, analysis, risk insights, and decision support.',

      githubUrl: 'https://github.com/ahmedshalaby03/SmartInvest-Platform',
      liveDemoUrl: ''
    },
    {
      id: 'smart-healthcare',
      title: 'Smart Healthcare Platform',
      category: 'Graduation Project',
      icon: 'fa-heart-pulse',
      image: 'assets/projects/smart-healthcare.webp',
      imageAlt: 'Smart Healthcare Platform project preview',
      shortDescription: 'A smart healthcare platform connecting patients, doctors, hospitals, and medical service providers.',
      description: [
        'Built a graduation project serving four user roles: patients, doctors, hospitals, and medical service providers.',
        'Implemented multiple healthcare modules, including appointment booking, digital insurance requests, and location-based hospital discovery.',
        'Developed a blood bank module and integrated an AI-powered medical assistant using an LLM to support medical guidance.'
      ],
      problem: 'Patients often navigate fragmented systems for appointments, hospitals, insurance, blood services, and medical guidance. The platform brings these workflows into one coordinated experience.',
      features: [
        'Four role-based user journeys for patients, doctors, hospitals, and medical service providers',
        'Online appointment booking',
        'Digital insurance request workflows',
        'Location-based hospital discovery',
        'Blood bank management',
        'LLM-powered assistant supporting medical guidance'
      ],
      technologies: ['ASP.NET Core Web API', 'C#', 'SQL Server', 'LLM'],
      role: 'Contributed to backend architecture, REST API workflows, database design, and the integration approach for the AI-powered assistant.',
      decisions: 'Kept transactional healthcare workflows separate from AI-assisted guidance so core operations remain predictable and maintainable.',
      githubUrl: 'https://github.com/ahmedshalaby03/CareConnect-Egypt-University-Graduation-Project',
      liveDemoUrl: ''
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Booking System',
      category: 'Full-Stack Web Application',
      icon: 'fa-hotel',
      image: 'assets/projects/hotel-booking.webp',
      imageAlt: 'Hotel Booking System project preview',
      shortDescription: 'A responsive hotel booking workflow covering discovery, rooms, reservations, authentication, and management.',
      description: ['A full-stack hotel booking application structured around a clean separation of responsibilities. Users can discover hotels and rooms, manage authentication, complete bookings, and track reservations through a responsive interface.'],
      problem: 'Hotel operations require a single reliable flow that connects room inventory, guest identity, reservations, and administrative updates without creating inconsistent availability data.',
      features: ['ASP.NET Identity authentication and authorization', 'Hotel and room listing with management workflows', 'Reservation creation and booking tracking', 'Responsive server-rendered user interface'],
      technologies: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'SQL Server', 'ASP.NET Identity'],
      role: 'Designed and implemented the application structure, database interactions, authentication flow, reservation workflow, and responsive UI.',
      decisions: 'Used a layered structure and Entity Framework Core to keep domain workflows separate from persistence and presentation concerns.',
      githubUrl: 'https://github.com/ahmedshalaby03/DevHotelBooking.MVC',
      liveDemoUrl: ''
    },
    {
      id: 'skinet-ecommerce',
      title: 'Skinet E-Commerce Platform',
      category: 'Full-Stack E-Commerce Platform',
      icon: 'fa-cart-shopping',

      image: 'assets/projects/skinet-ecommerce.webp',
      imageAlt: 'Skinet E-Commerce Platform project preview',

      shortDescription:
        'A full-stack e-commerce platform built with ASP.NET Core Web API and Angular, featuring scalable architecture, reusable design patterns, advanced product filtering, basket management, and secure order processing.',

      description: [
        'Designed and developed a complete full-stack e-commerce platform using ASP.NET Core Web API, Angular, Entity Framework Core, and SQL Server.',
        'Implemented the Specification Pattern with projection support to build reusable, efficient, and maintainable product queries with filtering, sorting, pagination, and related data selection.',
        'Applied architectural and design patterns to separate application responsibilities, improve maintainability, and support future feature expansion.',
        'Developed core e-commerce workflows, including product browsing, product details, categories, shopping baskets, authentication, order creation, and order tracking.'
      ],

      problem:
        'Modern e-commerce applications require flexible product querying, maintainable business logic, secure user workflows, and consistent communication between the backend API and frontend application without tightly coupling system components.',

      features: [
        'Product catalog and product details',
        'Filtering, sorting, searching, and pagination',
        'Specification Pattern with projection',
        'Shopping basket management',
        'User registration and authentication',
        'Order creation and order history',
        'Category and product management',
        'RESTful API integration with Angular',
        'Reusable architecture and design patterns',
        'Responsive user interface'
      ],

      technologies: [
        'ASP.NET Core Web API',
        'Angular',
        'C#',
        'Entity Framework Core',
        'SQL Server',
        'Specification Pattern',
        'Projection',
        'Design Patterns',
        'Application Architecture',
        'RESTful APIs'
      ],

      role:
        'Designed and implemented the project architecture, backend RESTful APIs, database access layer, reusable specifications and projections, Angular integration, authentication workflows, basket functionality, and order-processing features.',

      decisions:
        'Used the Specification Pattern to encapsulate reusable query rules and added projection to retrieve only the required data. Structured the application into clearly separated responsibilities to reduce coupling, improve testability, and keep the codebase maintainable as the platform grows.',

      githubUrl: 'https://github.com/ahmedshalaby03/skinet',
      liveDemoUrl: ''
    },
    {
      id: 'expense-tracker',
      title: 'Expense Tracker Web App',
      category: 'Full-Stack Product',
      icon: 'fa-wallet',
      image: 'assets/projects/expense-tracker.webp',
      imageAlt: 'Expense Tracker Web App project preview',
      shortDescription: 'An Angular and ASP.NET Core product for tracking income, expenses, categories, transactions, and financial summaries.',
      description: ['A full-stack financial tracking application built with Onion Architecture. It provides secure authentication, category and transaction management, dashboard summaries, recent activity, and visual financial insights.'],
      problem: 'Personal finance data becomes difficult to understand when transactions are scattered. The application creates a structured view of income, spending, categories, and trends.',
      features: ['JWT-based registration and login', 'Income, expense, and category management', 'Dashboard summaries and recent transactions', 'Category and monthly financial charts', 'Angular standalone frontend with responsive layout'],
      technologies: ['Angular', 'TypeScript', 'ASP.NET Core Web API', 'JWT', 'Entity Framework Core', 'SQL Server', 'Onion Architecture'],
      role: 'Designed and built the backend architecture, authentication, dashboard APIs, Angular services, state flow, and responsive frontend experience.',
      decisions: 'Used Onion Architecture to isolate domain and application logic, with JWT authentication and focused dashboard endpoints to keep frontend integration predictable.',
      githubUrl: 'https://github.com/ahmedshalaby03/ExpenseTracker-FullStack',
      liveDemoUrl: 'https://expense-track.runasp.net'
    },
    {
      id: 'online-examination',
      title: 'Online Examination System',
      category: 'Database Engineering',
      icon: 'fa-file-pen',
      image: 'assets/projects/online-examination.webp',
      imageAlt: 'Online Examination System project preview',
      shortDescription: 'A relational examination system using stored procedures, triggers, constraints, automated scoring, and result generation.',
      description: ['A SQL Server-centered examination platform that manages students, instructors, courses, exams, questions, attempts, and results through a carefully constrained relational model.'],
      problem: 'Examination data must remain consistent across question assignment, student attempts, answer evaluation, and final score generation.',
      features: ['Student, instructor, course, exam, and question management', 'Stored procedures for controlled workflows', 'Triggers and constraints for integrity', 'Automatic score calculation', 'Result generation'],
      technologies: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Triggers', 'Relational Modeling'],
      role: 'Designed the relational schema, constraints, procedures, triggers, and automated scoring workflow.',
      decisions: 'Placed critical consistency rules close to the data layer to prevent invalid examination states regardless of the consuming interface.',
      githubUrl: 'https://github.com/ahmedshalaby03/Examination_Online_System',
      liveDemoUrl: ''
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      category: 'Data-Driven Application',
      icon: 'fa-book-open-reader',
      image: 'assets/projects/library-management.webp',
      imageAlt: 'Library Management System project preview',
      shortDescription: 'A code-first library application for managing books, authors, categories, CRUD workflows, and advanced LINQ queries.',
      description: ['A library management application using Entity Framework Code First to model and manage books, authors, and categories with relational navigation and efficient querying.'],
      problem: 'Library records need consistent relationships and straightforward maintenance while supporting flexible searches across connected entities.',
      features: ['Book, author, and category CRUD', 'Code First relational schema', 'Entity relationships and navigation', 'Advanced LINQ-based retrieval'],
      technologies: ['C#', 'Entity Framework', 'LINQ', 'SQL Server'],
      role: 'Designed the entities, relationships, CRUD workflows, and LINQ queries.',
      decisions: 'Used Code First modeling to keep the schema aligned with application entities and to make relationship intent explicit in code.',
      githubUrl: 'https://github.com/ahmedshalaby03/Library-Management-System-EF',
      liveDemoUrl: ''
    },
    {
      id: 'mr-robot-ctf',
      title: 'Mr. Robot CTF Challenge',
      category: 'Security Lab',
      icon: 'fa-user-secret',
      image: 'assets/projects/mr-robot-ctf.webp',
      imageAlt: 'Mr. Robot CTF Challenge project preview',
      shortDescription: 'A documented security assessment covering enumeration, exploitation, privilege escalation, and full-system access.',
      description: ['A practical penetration-testing exercise focused on understanding an exposed system, identifying viable attack paths, validating vulnerabilities, and escalating privileges in a controlled lab environment.'],
      problem: 'Security weaknesses are rarely isolated. The challenge required connecting enumeration findings into a complete exploitation path while documenting evidence and methodology.',
      features: ['Service and application enumeration', 'Vulnerability identification and validation', 'Initial-access exploitation', 'Linux privilege escalation', 'Documented attack methodology'],
      technologies: ['Linux', 'Enumeration', 'Penetration Testing', 'Privilege Escalation', 'Ethical Hacking'],
      role: 'Performed the end-to-end assessment, exploitation, escalation, and documentation.',
      decisions: 'Prioritized evidence-driven testing and progressive validation instead of running unrelated automated checks.',
      githubUrl: '',
      liveDemoUrl: ''
    }
  ];

  const state = {
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    finePointer: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    lenis: null,
    swiper: null,
    activeProject: 0,
    lastFocusedElement: null,
    modalTimeline: null,
    menuTimeline: null,
    menuOpen: false,
    resumeAutoplayTimer: null,
    carouselLocked: false,
    modalTransitioning: false,
    laptopOpen: true,
    laptopAnimating: false,
    laptopTimeline: null
  };

  const elements = {
    root: document.documentElement,
    body: document.body,
    loader: document.getElementById('page-loader'),
    siteHeader: document.getElementById('site-header'),
    navPanel: document.getElementById('nav-panel'),
    navLinks: [...document.querySelectorAll('.nav-links a')],
    menuToggle: document.getElementById('menu-toggle'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.querySelector('#theme-toggle i'),
    skillGroups: document.getElementById('skill-groups'),
    experienceList: document.getElementById('experience-list'),
    projectsTrack: document.getElementById('projects-track'),
    projectsSwiper: document.getElementById('projects-swiper'),
    projectPrev: document.querySelector('.project-prev'),
    projectNext: document.querySelector('.project-next'),
    modal: document.getElementById('project-modal'),
    modalDialog: document.querySelector('.modal-dialog'),
    modalVisual: document.getElementById('modal-visual'),
    modalCategory: document.getElementById('modal-category'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalProblem: document.getElementById('modal-problem'),
    modalFeatures: document.getElementById('modal-features'),
    modalRole: document.getElementById('modal-role'),
    modalDecisions: document.getElementById('modal-decisions'),
    modalTechnologies: document.getElementById('modal-technologies'),
    modalLinks: document.getElementById('modal-links'),
    modalPrev: document.getElementById('modal-prev'),
    modalNext: document.getElementById('modal-next'),
    modalCounter: document.getElementById('modal-counter'),
    liveRegion: document.getElementById('live-region'),
    laptopScene: document.getElementById('laptop-scene'),
    laptop: document.getElementById('laptop'),
    laptopToggle: document.getElementById('laptop-toggle'),
    laptopDevice: document.getElementById('laptop-device'),
    laptopOpenState: document.getElementById('laptop-open-state'),
    laptopClosedState: document.getElementById('laptop-closed-state'),
    laptopToggleHint: document.querySelector('#laptop-toggle-hint span'),
    cursorDot: document.getElementById('cursor-dot'),
    cursorRing: document.getElementById('cursor-ring')
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function renderSkills() {
    if (!elements.skillGroups) return;

    elements.skillGroups.innerHTML = skillData.map(group => `
      <article class="skill-group reveal-card${group.featured ? ' skill-group-wide' : ''}">
        <div class="skill-group-header">
          <span>${escapeHtml(group.category)}</span>
          <i class="fas ${escapeHtml(group.icon)}" aria-hidden="true"></i>
        </div>
        <div class="skill-tags">
          ${group.skills.map(skill => `<span>${escapeHtml(skill)}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  function renderExperience() {
  if (!elements.experienceList) return;

  elements.experienceList.innerHTML = experienceData.map(item => {
    const location = item.location
      ? `
        <p class="timeline-location">
          <i class="fas fa-location-dot" aria-hidden="true"></i>
          ${escapeHtml(item.location)}
        </p>
      `
      : '';

    const details = item.responsibilities?.length
      ? `
        <ul class="timeline-responsibilities">
          ${item.responsibilities
            .map(responsibility => `<li>${escapeHtml(responsibility)}</li>`)
            .join('')}
        </ul>
      `
      : `<p class="timeline-summary">${escapeHtml(item.summary || '')}</p>`;

    const logo = item.logo
      ? `
        <img
          class="experience-logo"
          src="${escapeHtml(item.logo)}"
          alt="${escapeHtml(item.company)} logo"
          loading="lazy"
          onerror="this.style.display='none'"
        >
      `
      : `
        <div class="experience-logo experience-logo-fallback" aria-hidden="true">
          ${escapeHtml(item.company.charAt(0))}
        </div>
      `;

    return `
      <article class="timeline-item">
        <div class="timeline-date">${escapeHtml(item.duration)}</div>

        <div class="timeline-dot" aria-hidden="true"></div>

        <div class="timeline-content">
          <div class="timeline-company-header">
            ${logo}

            <div>
              <p class="timeline-type">${escapeHtml(item.employmentType)}</p>
              <h3>${escapeHtml(item.position)}</h3>
              <h4>${escapeHtml(item.company)}</h4>
            </div>
          </div>

          ${location}
          ${details}
        </div>
      </article>
    `;
  }).join('');
}

  function renderProjects() {
    if (!elements.projectsTrack) return;

    elements.projectsTrack.innerHTML = projectData.map((project, index) => {
      const techPreview = project.technologies.slice(0, 4)
        .map(tech => `<span>${escapeHtml(tech)}</span>`)
        .join('');

      return `
        <div class="swiper-slide project-slide">
          <article class="project-card" role="button" tabindex="0" data-project-index="${index}" aria-label="Open ${escapeHtml(project.title)} project details">
            <div class="project-visual">
              <img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy" decoding="async" data-project-image>
              <span class="project-number">${String(index + 1).padStart(2, '0')}</span>
              <span class="project-image-shade" aria-hidden="true"></span>
            </div>
            <div class="project-content">
              <p class="project-category">${escapeHtml(project.category)}</p>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.shortDescription)}</p>
              <div class="project-tech">${techPreview}</div>
              <div class="project-open"><span>View project</span><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></div>
            </div>
          </article>
        </div>
      `;
    }).join('');

    elements.projectsTrack.querySelectorAll('[data-project-image]').forEach(image => {
      image.addEventListener('error', () => {
        if (image.dataset.fallbackApplied === 'true') return;
        image.dataset.fallbackApplied = 'true';
        image.src = 'assets/projects/project-fallback.svg';
      });
    });
  }

  function updateThemeButton() {
    const isLight = elements.root.classList.contains('light-mode');
    if (!elements.themeToggle || !elements.themeIcon) return;

    elements.themeToggle.setAttribute('aria-pressed', String(isLight));
    elements.themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    elements.themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute('content', isLight ? '#edf1ec' : '#080b0c');
  }

  function initTheme() {
    updateThemeButton();
    if (!elements.themeToggle) return;

    elements.themeToggle.addEventListener('click', () => {
      elements.root.classList.toggle('light-mode');
      const isLight = elements.root.classList.contains('light-mode');
      try {
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      } catch (_) {}
      updateThemeButton();
    });
  }

  function initLoader() {
    if (!elements.loader) return Promise.resolve();

    const hasVisited = (() => {
      try {
        return sessionStorage.getItem('portfolio-loaded') === 'true';
      } catch (_) {
        return false;
      }
    })();

    if (hasVisited || state.reducedMotion || typeof gsap === 'undefined') {
      elements.loader.remove();
      return Promise.resolve();
    }

    return new Promise(resolve => {
      const finish = () => {
        gsap.timeline({
          onComplete: () => {
            elements.loader.remove();
            try {
              sessionStorage.setItem('portfolio-loaded', 'true');
            } catch (_) {}
            resolve();
          }
        })
          .to('.loader-line span', { scaleX: 1, duration: 0.65, ease: 'power2.inOut' })
          .to('.loader-mark', { y: -12, opacity: 0, duration: 0.35, ease: 'power2.in' }, '>-0.05')
          .to(elements.loader, { yPercent: -100, duration: 0.75, ease: 'power4.inOut' }, '<0.08');
      };

      if (document.readyState === 'complete') {
        finish();
      } else {
        window.addEventListener('load', finish, { once: true });
      }
    });
  }

  function initSmoothScroll() {
    if (state.reducedMotion || typeof Lenis === 'undefined' || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    state.lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.05,
      anchors: { offset: -72 }
    });

    state.lenis.on('scroll', ScrollTrigger.update);

    const lenisTicker = time => state.lenis?.raf(time * 1000);
    state.lenisTicker = lenisTicker;
    gsap.ticker.add(lenisTicker);
    gsap.ticker.lagSmoothing(0);
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (!state.menuOpen || !elements.navPanel || !elements.menuToggle) return;
    state.menuOpen = false;
    elements.menuToggle.setAttribute('aria-expanded', 'false');
    elements.menuToggle.setAttribute('aria-label', 'Open navigation menu');

    if (state.menuTimeline) state.menuTimeline.kill();

    if (typeof gsap !== 'undefined' && !state.reducedMotion) {
      state.menuTimeline = gsap.timeline({
        onComplete: () => {
          elements.navPanel.classList.remove('is-open');
          gsap.set(elements.navPanel, { clearProps: 'clipPath,visibility' });
          gsap.set('.nav-links li', { clearProps: 'transform,opacity' });
        }
      })
        .to('.nav-links li', { y: -16, opacity: 0, stagger: 0.035, duration: 0.22, ease: 'power2.in' })
        .to(elements.navPanel, { clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power3.inOut' }, '<0.04');
    } else {
      elements.navPanel.classList.remove('is-open');
    }

    elements.body.classList.remove('menu-open');
    state.lenis?.start();
    if (restoreFocus) elements.menuToggle.focus();
  }

  function openMenu() {
    if (state.menuOpen || !elements.navPanel || !elements.menuToggle) return;
    state.menuOpen = true;
    elements.navPanel.classList.add('is-open');
    elements.menuToggle.setAttribute('aria-expanded', 'true');
    elements.menuToggle.setAttribute('aria-label', 'Close navigation menu');
    elements.body.classList.add('menu-open');
    state.lenis?.stop();

    if (state.menuTimeline) state.menuTimeline.kill();

    if (typeof gsap !== 'undefined' && !state.reducedMotion) {
      gsap.set(elements.navPanel, { visibility: 'visible', clipPath: 'inset(0 0 100% 0)' });
      gsap.set('.nav-links li', { y: 28, opacity: 0 });
      state.menuTimeline = gsap.timeline()
        .to(elements.navPanel, { clipPath: 'inset(0 0 0% 0)', duration: 0.65, ease: 'power4.inOut' })
        .to('.nav-links li', { y: 0, opacity: 1, stagger: 0.075, duration: 0.55, ease: 'power3.out' }, '-=0.26');
    }

    const firstLink = elements.navLinks[0];
    window.setTimeout(() => firstLink?.focus(), state.reducedMotion ? 0 : 450);
  }

  function initNavigation() {
    if (elements.menuToggle) {
      elements.menuToggle.addEventListener('click', () => {
        state.menuOpen ? closeMenu() : openMenu();
      });
    }

    elements.navLinks.forEach(link => {
      link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        const target = targetId ? document.querySelector(targetId) : null;
        if (!target) return;

        if (state.lenis) {
          event.preventDefault();
          closeMenu({ restoreFocus: false });
          state.lenis.start();
          state.lenis.scrollTo(target, { offset: -72, duration: 1.05 });
        } else if (state.menuOpen) {
          closeMenu({ restoreFocus: false });
        }
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && state.menuOpen) {
        closeMenu();
        return;
      }

      if (event.key === 'Tab' && state.menuOpen) {
        const focusable = [...elements.navLinks, elements.themeToggle, elements.menuToggle].filter(Boolean);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820 && state.menuOpen) closeMenu({ restoreFocus: false });
    }, { passive: true });

    const updateHeader = () => {
      elements.siteHeader?.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  function initCursor() {
    if (!state.finePointer || !elements.cursorDot || !elements.cursorRing || state.reducedMotion || typeof gsap === 'undefined') return;

    elements.body.classList.add('cursor-ready');
    const dotX = gsap.quickTo(elements.cursorDot, 'x', { duration: 0.12, ease: 'power3' });
    const dotY = gsap.quickTo(elements.cursorDot, 'y', { duration: 0.12, ease: 'power3' });
    const ringX = gsap.quickTo(elements.cursorRing, 'x', { duration: 0.38, ease: 'power3' });
    const ringY = gsap.quickTo(elements.cursorRing, 'y', { duration: 0.38, ease: 'power3' });

    window.addEventListener('pointermove', event => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    }, { passive: true });

    document.querySelectorAll('a, button, [role="button"]').forEach(target => {
      target.addEventListener('pointerenter', () => {
        gsap.to(elements.cursorRing, { scale: 1.55, borderColor: 'var(--accent)', duration: 0.2 });
        gsap.to(elements.cursorDot, { scale: 0.6, duration: 0.2 });
      });
      target.addEventListener('pointerleave', () => {
        gsap.to(elements.cursorRing, { scale: 1, borderColor: 'var(--line-strong)', duration: 0.2 });
        gsap.to(elements.cursorDot, { scale: 1, duration: 0.2 });
      });
    });
  }

  function updateLaptopToggleAccessibility() {
    if (!elements.laptopToggle) return;

    const action = state.laptopOpen ? 'Close' : 'Open';
    elements.laptopToggle.setAttribute('aria-pressed', String(state.laptopOpen));
    elements.laptopToggle.setAttribute('aria-label', `${action} Lenovo LOQ laptop`);

    if (elements.laptopToggleHint) {
      elements.laptopToggleHint.textContent = `${action} laptop`;
    }
  }

  function applyLaptopStateWithoutAnimation(isOpen) {
    state.laptopOpen = isOpen;
    state.laptopAnimating = false;

    elements.laptop?.classList.toggle('is-closed', !isOpen);

    if (elements.laptopOpenState) {
      elements.laptopOpenState.style.opacity = isOpen ? '1' : '0';
      elements.laptopOpenState.style.visibility = isOpen ? 'visible' : 'hidden';
      elements.laptopOpenState.style.transform = isOpen
        ? 'none'
        : 'translateY(52px) rotateX(-78deg) scaleY(0.42)';
    }

    if (elements.laptopClosedState) {
      elements.laptopClosedState.style.opacity = isOpen ? '0' : '1';
      elements.laptopClosedState.style.visibility = isOpen ? 'hidden' : 'visible';
      elements.laptopClosedState.style.transform = isOpen
        ? 'translateY(18px) rotateX(-22deg) scale(0.94)'
        : 'none';
    }

    updateLaptopToggleAccessibility();
  }

  function toggleLaptop(forceOpen) {
    if (
      !elements.laptopToggle ||
      !elements.laptopOpenState ||
      !elements.laptopClosedState ||
      state.laptopAnimating
    ) return;

    const shouldOpen = typeof forceOpen === 'boolean'
      ? forceOpen
      : !state.laptopOpen;

    if (shouldOpen === state.laptopOpen) return;

    state.laptopAnimating = true;
    state.laptopOpen = shouldOpen;
    elements.laptop?.classList.toggle('is-closed', !shouldOpen);
    updateLaptopToggleAccessibility();

    if (state.laptopTimeline) state.laptopTimeline.kill();

    if (state.reducedMotion || typeof gsap === 'undefined') {
      applyLaptopStateWithoutAnimation(shouldOpen);
      return;
    }

    const openState = elements.laptopOpenState;
    const closedState = elements.laptopClosedState;

    state.laptopTimeline = gsap.timeline({
      defaults: { overwrite: 'auto' },
      onComplete: () => {
        state.laptopAnimating = false;
        gsap.set(shouldOpen ? closedState : openState, {
          visibility: 'hidden'
        });
      }
    });

    if (shouldOpen) {
      gsap.set(openState, {
        visibility: 'visible',
        autoAlpha: 0,
        y: 52,
        rotationX: -78,
        scaleY: 0.42,
        transformOrigin: '50% 82%'
      });

      gsap.set(closedState, {
        visibility: 'visible',
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        transformOrigin: '50% 76%'
      });

      state.laptopTimeline
        .to(closedState, {
          autoAlpha: 0,
          y: -24,
          rotationX: 58,
          scale: 0.92,
          duration: 0.48,
          ease: 'power3.in'
        })
        .to(openState, {
          autoAlpha: 1,
          y: 0,
          rotationX: 0,
          scaleY: 1,
          duration: 0.82,
          ease: 'back.out(1.15)'
        }, '-=0.18');
    } else {
      gsap.set(openState, {
        visibility: 'visible',
        autoAlpha: 1,
        y: 0,
        rotationX: 0,
        scaleY: 1,
        transformOrigin: '50% 82%'
      });

      gsap.set(closedState, {
        visibility: 'visible',
        autoAlpha: 0,
        y: 18,
        rotationX: -22,
        scale: 0.94,
        transformOrigin: '50% 76%'
      });

      state.laptopTimeline
        .to(openState, {
          autoAlpha: 0,
          y: 52,
          rotationX: -78,
          scaleY: 0.42,
          duration: 0.62,
          ease: 'power3.in'
        })
        .to(closedState, {
          autoAlpha: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.62,
          ease: 'power3.out'
        }, '-=0.16');
    }
  }

  function initLaptopToggle() {
    if (!elements.laptopToggle) return;

    applyLaptopStateWithoutAnimation(true);

    elements.laptopToggle.addEventListener('click', () => {
      toggleLaptop();
    });
  }

  function initHeroParallax() {
    if (!state.finePointer || state.reducedMotion || !elements.laptopScene || !elements.laptop || typeof gsap === 'undefined') return;

    const rotateX = gsap.quickTo(elements.laptop, 'rotationX', { duration: 0.75, ease: 'power3.out' });
    const rotateY = gsap.quickTo(elements.laptop, 'rotationY', { duration: 0.75, ease: 'power3.out' });
    const moveX = gsap.quickTo(elements.laptopScene, 'x', { duration: 0.75, ease: 'power3.out' });
    const moveY = gsap.quickTo(elements.laptopScene, 'y', { duration: 0.75, ease: 'power3.out' });

    elements.laptopScene.addEventListener('pointermove', event => {
      const rect = elements.laptopScene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      rotateX(4 - y * 8);
      rotateY(-8 + x * 12);
      moveX(x * 8);
      moveY(y * 8);
    });

    elements.laptopScene.addEventListener('pointerleave', () => {
      rotateX(4);
      rotateY(-8);
      moveX(0);
      moveY(0);
    });
  }

  function initAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    if (state.reducedMotion) {
      gsap.set('.hero-reveal, .title-line > span, .hero-visual, .reveal-card, .reveal-block, .timeline-item, .heading-mask h2', {
        clearProps: 'all'
      });
      return;
    }

    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTimeline
      .from('.hero .eyebrow', { y: 20, opacity: 0, duration: 0.55 })
      .from('.title-line > span', { yPercent: 110, duration: 0.9, stagger: 0.1 }, '-=0.25')
      .from('.hero-role, .hero-description', { y: 28, opacity: 0, duration: 0.65, stagger: 0.1 }, '-=0.45')
      .from('.hero-actions > *', { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.35')
      .from('.hero-meta', { y: 18, opacity: 0, duration: 0.5 }, '-=0.25')
      .from('.hero-visual', { x: 70, y: 30, scale: 0.9, rotation: 2, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=1.0')
      .from('.visual-orbit', { scale: 0.65, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.62')
      .from('.floating-label', { y: 18, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.4');

    gsap.to(elements.laptopScene, {
      yPercent: 9,
      rotation: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.1
      }
    });

    gsap.to('.orbit-one', {
      rotation: 35,
      scale: 1.06,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.4
      }
    });

    document.querySelectorAll('.heading-mask h2').forEach(heading => {
      gsap.from(heading, {
        yPercent: 105,
        duration: 0.95,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          once: true
        }
      });
    });

    // The contact panel has its own animation below. Excluding it here prevents
    // two `from()` tweens from capturing opacity: 0 as the panel's end state.
    gsap.utils.toArray('.reveal-block:not(.contact-panel)').forEach(block => {
      gsap.from(block, {
        y: 42,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 88%',
          once: true
        }
      });
    });

    const cardGroups = ['.about-principles', '.skill-groups'];
    cardGroups.forEach(selector => {
      const group = document.querySelector(selector);
      if (!group) return;
      gsap.from(group.querySelectorAll('.reveal-card'), {
        y: 36,
        opacity: 0,
        duration: 0.72,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 82%',
          once: true
        }
      });
    });

    gsap.from('.timeline-item', {
      x: 36,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top 78%',
        once: true
      }
    });

    gsap.to('#timeline-progress', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top 70%',
        end: 'bottom 55%',
        scrub: 0.5
      }
    });

    gsap.from('.project-slide', {
      x: 70,
      opacity: 0,
      duration: 0.85,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#projects-swiper',
        start: 'top 84%',
        once: true
      }
    });

    gsap.fromTo('.contact-panel',
      { y: 42, scale: 0.975, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.contact-panel',
          start: 'top 88%',
          once: true
        }
      }
    );

    document.querySelectorAll('main section[id]').forEach(section => {
      const id = section.id;
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!navLink) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: self => {
          if (!self.isActive) return;
          elements.navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
    });

    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  }

  function initProjectTilt() {
    if (!state.finePointer || state.reducedMotion || typeof gsap === 'undefined') return;

    document.querySelectorAll('.project-card').forEach(card => {
      const rotateX = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power3.out' });
      const rotateY = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power3.out' });

      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        rotateX(-y * 3.5);
        rotateY(x * 4.5);
      });

      card.addEventListener('pointerleave', () => {
        rotateX(0);
        rotateY(0);
      });
    });
  }

  function scheduleAutoplayResume(delay = 1400) {
    if (!state.swiper || state.reducedMotion) return;
    window.clearTimeout(state.resumeAutoplayTimer);
    state.resumeAutoplayTimer = window.setTimeout(() => {
      if (state.carouselLocked || elements.modal?.classList.contains('is-open')) return;
      state.swiper.params.speed = 4200;
      state.swiper.autoplay?.start();
    }, delay);
  }

  function manualSlide(direction) {
    if (!state.swiper || state.carouselLocked) return;

    state.carouselLocked = true;
    state.swiper.autoplay?.stop();
    window.clearTimeout(state.resumeAutoplayTimer);

    const increment = direction === 'next' ? 1 : -1;
    const targetIndex = (state.swiper.realIndex + increment + projectData.length) % projectData.length;
    state.swiper.params.speed = state.reducedMotion ? 0 : 560;
    state.swiper.slideToLoop(targetIndex, state.reducedMotion ? 0 : 560, true);

    elements.liveRegion.textContent = `${projectData[targetIndex].title} selected.`;
  }

  function initCarousel() {
    if (!elements.projectsSwiper || typeof Swiper === 'undefined') return;

    state.swiper = new Swiper(elements.projectsSwiper, {
      slidesPerView: 'auto',
      spaceBetween: 18,
      loop: true,
      loopAdditionalSlides: Math.min(4, projectData.length),
      speed: state.reducedMotion ? 0 : 4200,
      grabCursor: true,
      watchSlidesProgress: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous project',
        nextSlideMessage: 'Next project',
        slideLabelMessage: '{{index}} of {{slidesLength}}'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      autoplay: state.reducedMotion ? false : {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        reverseDirection: false
      },
      on: {
        touchStart(swiper) {
          swiper.autoplay?.stop();
          swiper.params.speed = 560;
          state.carouselLocked = false;
        },
        touchEnd() {
          scheduleAutoplayResume(1500);
        },
        sliderFirstMove(swiper) {
          swiper.autoplay?.stop();
        },
        transitionEnd() {
          state.carouselLocked = false;
          scheduleAutoplayResume(1300);
        }
      }
    });

    elements.projectPrev?.addEventListener('click', () => manualSlide('prev'));
    elements.projectNext?.addEventListener('click', () => manualSlide('next'));

    elements.projectsSwiper.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        manualSlide('next');
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        manualSlide('prev');
      }
    });

    elements.projectsSwiper.addEventListener('mouseenter', () => state.swiper?.autoplay?.stop());
    elements.projectsSwiper.addEventListener('mouseleave', () => scheduleAutoplayResume(350));
  }

  function getFocusableElements(container) {
    return [...container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )].filter(element => !element.hasAttribute('hidden') && element.offsetParent !== null);
  }

  function renderModal(index) {
    const project = projectData[index];
    if (!project) return;

    elements.modalVisual.innerHTML = `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" decoding="async" data-modal-project-image>`;
    const modalImage = elements.modalVisual.querySelector('[data-modal-project-image]');
    modalImage?.addEventListener('error', () => {
      if (modalImage.dataset.fallbackApplied === 'true') return;
      modalImage.dataset.fallbackApplied = 'true';
      modalImage.src = 'assets/projects/project-fallback.svg';
    });

    elements.modalCategory.textContent = project.category;
    elements.modalTitle.textContent = project.title;
    elements.modalDescription.innerHTML = project.description.map(paragraph => `<span>${escapeHtml(paragraph)}</span>`).join('');
    elements.modalProblem.textContent = project.problem;
    elements.modalRole.textContent = project.role;
    elements.modalDecisions.textContent = project.decisions;
    elements.modalFeatures.innerHTML = project.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join('');
    elements.modalTechnologies.innerHTML = project.technologies.map(tech => `<span>${escapeHtml(tech)}</span>`).join('');
    elements.modalCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(projectData.length).padStart(2, '0')}`;

    const links = [];
    if (project.githubUrl) {
      links.push(`<a class="button button-secondary" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">View Source Code <i class="fab fa-github" aria-hidden="true"></i></a>`);
    }
    if (project.liveDemoUrl) {
      links.push(`<a class="button button-primary" href="${escapeHtml(project.liveDemoUrl)}" target="_blank" rel="noopener noreferrer">Live demo <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`);
    }
    elements.modalLinks.innerHTML = links.length
      ? links.join('')
      : '<p class="project-link-note">Repository and live-demo links have not been supplied for this project yet.</p>';
  }

  function animateModalContent() {
    if (state.reducedMotion || typeof gsap === 'undefined') return;
    gsap.fromTo(
      elements.modalDialog.querySelectorAll('.modal-visual, .modal-category, .modal-copy h2, .modal-description, .modal-section, .modal-links'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.045, ease: 'power3.out', clearProps: 'transform,opacity' }
    );
  }

  function openModal(index, trigger) {
    if (!elements.modal || !elements.modalDialog) return;
    state.activeProject = index;
    state.lastFocusedElement = trigger || document.activeElement;
    renderModal(index);

    elements.modal.classList.add('is-open');
    elements.modal.setAttribute('aria-hidden', 'false');
    elements.body.classList.add('modal-open');
    state.lenis?.stop();
    state.swiper?.autoplay?.stop();

    if (state.modalTimeline) state.modalTimeline.kill();

    if (typeof gsap !== 'undefined' && !state.reducedMotion) {
      state.modalTimeline = gsap.timeline({
        onComplete: () => {
          elements.modalDialog.focus();
          animateModalContent();
        }
      })
        .to(elements.modal, { opacity: 1, duration: 0.28, ease: 'power2.out' })
        .to(elements.modalDialog, { x: 0, scale: 1, duration: 0.62, ease: 'power4.out' }, '<0.02');
    } else {
      elements.modal.style.opacity = '1';
      elements.modalDialog.style.transform = 'none';
      elements.modalDialog.focus();
    }

    elements.liveRegion.textContent = `${projectData[index].title} details opened.`;
  }

  function closeModal() {
    if (!elements.modal?.classList.contains('is-open')) return;

    const complete = () => {
      elements.modal.classList.remove('is-open');
      elements.modal.setAttribute('aria-hidden', 'true');
      elements.body.classList.remove('modal-open');
      elements.modal.removeAttribute('style');
      elements.modalDialog.removeAttribute('style');
      state.lenis?.start();
      scheduleAutoplayResume(500);
      state.lastFocusedElement?.focus?.();
      elements.liveRegion.textContent = 'Project details closed.';
    };

    if (state.modalTimeline) state.modalTimeline.kill();

    if (typeof gsap !== 'undefined' && !state.reducedMotion) {
      state.modalTimeline = gsap.timeline({ onComplete: complete })
        .to(elements.modalDialog, { x: 50, scale: 0.985, opacity: 0, duration: 0.36, ease: 'power2.in' })
        .to(elements.modal, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '-=0.12');
    } else {
      complete();
    }
  }

  function changeModalProject(direction) {
    if (state.modalTransitioning) return;
    state.modalTransitioning = true;
    state.activeProject = (state.activeProject + direction + projectData.length) % projectData.length;

    const finish = () => {
      state.modalTransitioning = false;
      elements.liveRegion.textContent = `${projectData[state.activeProject].title} project details displayed.`;
    };

    if (typeof gsap !== 'undefined' && !state.reducedMotion) {
      const content = elements.modalDialog.querySelector('.modal-content');
      gsap.to(content, {
        x: direction > 0 ? -24 : 24,
        opacity: 0,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          renderModal(state.activeProject);
          gsap.fromTo(content,
            { x: direction > 0 ? 24 : -24, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.35, ease: 'power3.out', onComplete: finish }
          );
        }
      });
    } else {
      renderModal(state.activeProject);
      finish();
    }
  }

  function initModal() {
    elements.projectsTrack?.addEventListener('click', event => {
      const card = event.target.closest('.project-card');
      if (!card) return;
      openModal(Number(card.dataset.projectIndex), card);
    });

    elements.projectsTrack?.addEventListener('keydown', event => {
      const card = event.target.closest('.project-card');
      if (!card || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      openModal(Number(card.dataset.projectIndex), card);
    });

    document.querySelectorAll('[data-modal-close]').forEach(element => {
      element.addEventListener('click', closeModal);
    });

    elements.modalPrev?.addEventListener('click', () => changeModalProject(-1));
    elements.modalNext?.addEventListener('click', () => changeModalProject(1));

    document.addEventListener('keydown', event => {
      if (!elements.modal?.classList.contains('is-open')) return;

      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key === 'ArrowLeft' && !event.altKey && !event.ctrlKey && !event.metaKey) {
        changeModalProject(-1);
      }

      if (event.key === 'ArrowRight' && !event.altKey && !event.ctrlKey && !event.metaKey) {
        changeModalProject(1);
      }

      if (event.key === 'Tab') {
        const focusable = getFocusableElements(elements.modalDialog);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  function cleanup() {
    window.clearTimeout(state.resumeAutoplayTimer);
    state.modalTimeline?.kill();
    state.menuTimeline?.kill();
    state.laptopTimeline?.kill();
    state.swiper?.destroy(true, true);
    if (state.lenisTicker && typeof gsap !== 'undefined') gsap.ticker.remove(state.lenisTicker);
    state.lenis?.destroy();
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  async function init() {
    renderSkills();
    renderExperience();
    renderProjects();
    initTheme();
    initNavigation();
    initSmoothScroll();
    initCarousel();
    initModal();
    initCursor();
    initLaptopToggle();
    initHeroParallax();

    await initLoader();

    initAnimations();
    initProjectTilt();

    window.addEventListener('beforeunload', cleanup, { once: true });
  }

  init().catch(error => {
    console.error('Portfolio initialization failed:', error);
    elements.loader?.remove();
  });
})();
