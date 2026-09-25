/**
 * JOHN PELKMAN - PORTFOLIO INTERACTION ENGINE
 * Modern Vanilla JavaScript for Navigation, Filtering, Modals & Mobile UX
 */

(function () {
  "use strict";

  // Project Data Store for Instant In-Page Modals
  const projectsData = {
    "evo-worlds": {
      title: "Evo Worlds",
      studio: "Space Cadet Studio (UEFN)",
      badge: "Commercial Title",
      url: "https://www.space-cadets.au/evo",
      urlLabel: "Visit Space Cadets Studio",
      images: [
        "assets/img/portfolio/EvoW_2.png",
        "assets/img/portfolio/EvoW_1.webp",
        "assets/img/portfolio/EvoW_3.webp",
        "assets/img/portfolio/EvoW_4.png",
        "assets/img/portfolio/Evo_W_0.png"
      ],
      contributions: [
        "System Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "UEFN (Unreal Engine For Fortnite), Verse, Networked Physics",
      description: "An online multiplayer sandbox built for silliness, player agency, exploration, and customisation. Implemented fully networked physics, player economy, and persistent worlds with seamless multi-player synchronization and platform-constrained optimizations."
    },
    "evo-rogue": {
      title: "Evo Rogue",
      studio: "Space Cadet Studio (UEFN)",
      badge: "Commercial Title",
      url: "https://www.fortnite.com/@spacecadets/4518-2577-7986?lang=en-US",
      urlLabel: "Play on Fortnite Island",
      images: [
        "assets/img/portfolio/EvoR_0.png",
        "assets/img/portfolio/EvoR_2.png",
        "assets/img/portfolio/ERogueLogo.png"
      ],
      contributions: [
        "System Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "UEFN, Verse, Gameplay Architecture, Save Systems",
      description: "EVO: Rogue is a high-octane 1-6 player roguelike experience featuring 25 hand-crafted rooms across 3 diverse biomes with unique enemy archetypes. Developed scalable combat ability systems, powerup progression (Poison, Lightning, Life Steal), room reward loops, persistent cross-session player saves, and responsive HUD elements."
    },
    "fishing-quest": {
      title: "Fishing Quest",
      studio: "Space Cadet Studio (UEFN)",
      badge: "100-Player Experience",
      url: "https://www.fortnite.com/@spacecadets/3325-2466-7020?lang=en-US",
      urlLabel: "Play on Fortnite Island",
      images: [
        "assets/img/portfolio/FQLogo.png",
        "assets/img/portfolio/FQ_1.png",
        "assets/img/portfolio/FQ_2.png",
        "assets/img/portfolio/FQ_3.png"
      ],
      contributions: [
        "System Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "UEFN, Verse, Massive Multiplayer Sync, Quest Architecture",
      description: "Fishing Quest is a 100-player cozy adventure set across a vibrant archipelago. Implemented procedural and spot fishing mechanics, rare fish catch tables, 10+ island quest chains with townsfolk NPCs, skill leveling progression, and global competition leaderboards."
    },
    "wwu": {
      title: "Which Way Up: Galaxy Games",
      studio: "Turtle Flip Studio",
      badge: "Steam & Nintendo Switch",
      url: "https://store.steampowered.com/app/2318660/Which_Way_Up_Galaxy_Games/",
      urlLabel: "View on Steam Store",
      links: [
        { label: "View on Steam", url: "https://store.steampowered.com/app/2318660/Which_Way_Up_Galaxy_Games/", icon: "fa-brands fa-steam", class: "btn-primary-glow" },
        { label: "Nintendo eShop", url: "https://ec.nintendo.com/AU/en/titles/70010000069413", icon: "bi bi-controller", class: "btn-secondary-glass" }
      ],
      images: [
        "assets/img/portfolio/WWU_KeyArt_Portrait.png",
        "assets/img/portfolio/WWU_1.jpg",
        "assets/img/portfolio/WWU_2.jpg",
        "assets/img/portfolio/WWU_3.jpg"
      ],
      contributions: [
        "System Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "Unity (C#), Local Shared-Screen Multiplayer, PC, Xbox & Nintendo Switch Certification",
      description: "Perform graceful gravity gymnastics, outrun the relentless pull of a black hole, and launch friends into orbit in this competitive party game. Engineered shared-screen local multiplayer logic, interactive physics events, cross-platform controller validation, and hardware-specific optimizations for PC, Xbox, and Nintendo Switch consoles."
    },
    "time": {
      title: "T.I.M.E",
      studio: "Commercial Indie Release",
      badge: "Steam Release",
      url: "https://store.steampowered.com/app/2632920/TIME/",
      urlLabel: "View on Steam Store",
      images: [
        "assets/img/portfolio/TIME_Logo.png",
        "assets/img/portfolio/Time_1.jpg",
        "assets/img/portfolio/Time_2.jpg",
        "assets/img/portfolio/Time_3.jpg",
        "assets/img/portfolio/Time_4.jpg",
        "assets/img/portfolio/Time_5.jpg",
        "assets/img/portfolio/Time_6.jpg",
        "assets/img/portfolio/Time_7.jpg",
        "assets/img/portfolio/Time_8.jpg"
      ],
      contributions: [
        "Network Programmer",
        "System Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "Unreal Engine, Custom Netcode, High-Speed Traversal, Steamworks",
      description: "A fast-paced 1v1 arena shooter set within a dystopian brutalist arena where round-by-round decisions dictate combat outcomes. Implemented networked gameplay synchronization, dynamic weapon/powerup spawners, and high-velocity traversal mechanics (jetpacks, sliding, wall-bounces) alongside an innovative 'Run-it-back' round playback system."
    },
    "closed-captions": {
      title: "Closed Captions",
      studio: "Multiplayer Indie",
      badge: "Photon Networking",
      url: "https://tattooedmilk.itch.io/closed-captions",
      urlLabel: "Play on Itch.io",
      images: [
        "assets/img/portfolio/CC_Logo.png",
        "assets/img/portfolio/CC_1.png",
        "assets/img/portfolio/CC_2.png",
        "assets/img/portfolio/CC_3.png",
        "assets/img/portfolio/CC_4.png"
      ],
      contributions: [
        "Lead Networking Programmer",
        "Systems Programmer"
      ],
      techStack: "Unity (C#), Photon PUN2 Networking, Real-Time Voting Server",
      description: "Humorous party game where up to 5 players watch classic film clips and compete by submitting real-time captions. Built the complete multiplayer network backbone using Photon Networking, managing room matchmaking, real-time caption synchronization, client voting rounds, and score tracking with zero host latency issues."
    },
    "heatmap-tool": {
      title: "Heatmap Tool For Unity",
      studio: "Open Source Tooling",
      badge: "Custom Engine Tool",
      url: "https://github.com/Oxyjon/2D-Heatmap-For-Unity",
      urlLabel: "View on GitHub",
      images: [
        "assets/img/portfolio/HydraHeatmapLogo.png",
        "assets/img/portfolio/HydraHeatmap.png",
        "assets/img/portfolio/Heatmap_1.png",
        "assets/img/portfolio/Heatmap_2.png",
        "assets/img/portfolio/Heatmap_3.png",
        "assets/img/portfolio/Heatmap_4.png"
      ],
      contributions: [
        "Lead Tools Developer",
        "Systems Architecture"
      ],
      techStack: "Unity Editor Scripting, C#, Custom JSON Serialization, Mesh Gizmos",
      description: "A comprehensive in-editor telemetry tool for Unity that enables game designers to record, parse, and visually debug player movement patterns, death spots, and high-traffic bottlenecks. Features an optimized JSON event recording pipeline and an interactive editor frontend with customizable gradient heat layers and density clustering."
    },
    "doon": {
      title: "Doon",
      studio: "Indie Scavenger",
      badge: "Survival Game",
      url: "https://matthewcarver.itch.io/doon-underground-2",
      urlLabel: "Play on Itch.io",
      images: [
        "assets/img/portfolio/Doon_Logo.png",
        "assets/img/portfolio/Doon1.png",
        "assets/img/portfolio/Doon2.png",
        "assets/img/portfolio/Doon3.png",
        "assets/img/portfolio/Doon4.png"
      ],
      contributions: [
        "System Programmer",
        "Gameplay Programmer"
      ],
      techStack: "Unity (C#), AI NavMesh, Inventory Architecture",
      description: "A harsh sci-fi survival experience set on an unforgiving desert planet. Architected resource gathering systems, oxygen/hydration depletion cycles, creature AI stalking algorithms, and procedural hazard spawning to create tense, atmospheric survival gameplay."
    },
    "vr-lava": {
      title: "Loderr's Lava Plugging",
      studio: "VR Experience",
      badge: "Virtual Reality",
      url: "https://amaynard.itch.io/loderrslavaplugging",
      urlLabel: "Play on Itch.io",
      images: [
        "assets/img/portfolio/VR_Logo.png",
        "assets/img/portfolio/VR_1.png",
        "assets/img/portfolio/VR_2.png",
        "assets/img/portfolio/VR_3.png",
        "assets/img/portfolio/VR_4.png",
        "assets/img/portfolio/VR_5.png"
      ],
      contributions: [
        "VR Systems Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "Unity XR, VR Physics Interaction, Custom Warhammer Haptics",
      description: "Play as a frantic dwarven craftsman in VR plugging holes on a floating lava minigolf course with a trusty warhammer and limited rocks. Engineered robust VR physical hand presence, collision detection, parabolic trajectory forecasting, and ergonomic 3D spatial user interfaces."
    },
    "breaking-green": {
      title: "Breaking Green",
      studio: "Game Jam / Simulation",
      badge: "Systems Sim",
      url: "https://its-just-nick.itch.io/breaking-green-e-core",
      urlLabel: "Play on Itch.io",
      images: [
        "assets/img/portfolio/BGreen_Logo.png",
        "assets/img/portfolio/BGreen_1.png",
        "assets/img/portfolio/BGreen_2.png",
        "assets/img/portfolio/BGreen_3.png",
        "assets/img/portfolio/BGreen_4.png"
      ],
      contributions: [
        "System Programmer",
        "UI Programmer",
        "Gameplay Programmer"
      ],
      techStack: "Unity (C#), Simulation State Machine, Economic Balancing",
      description: "An innovative apartment permaculture simulation where players learn sustainable agricultural techniques to survive a financial crisis. Built systemic plant growth algorithms, environmental moisture/light feedback loops, and an intuitive management UI."
    }
  };

  /**
   * Helper DOM Selectors
   */
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  /**
   * Header Scroll State & Scrollspy
   */
  const header = $('#header');
  const navLinks = $$('.nav-menu .nav-link');
  const sections = $$('section[id], #hero');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Header sticky shadow
    if (header) {
      if (scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    const backToTopBtn = $('.back-to-top');
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }

    // Scrollspy navigation highlight
    const scrollPosition = scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('load', handleScroll);

  /**
   * Mobile Navigation Toggle
   */
  const mobileToggle = $('.mobile-nav-toggle');
  const navMenu = $('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('bi-list', !isOpen);
      mobileToggle.classList.toggle('bi-x', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.classList.add('bi-list');
          mobileToggle.classList.remove('bi-x');
          mobileToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.classList.add('bi-list');
        mobileToggle.classList.remove('bi-x');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * Portfolio Filtering
   */
  const filterBtns = $$('.filter-btn');
  const portfolioItems = $$('.portfolio-grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue.replace('.', ''))) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /**
   * In-Page Interactive Project Modal
   */
  const modalBackdrop = $('#projectModal');
  const modalCloseBtn = $('#modalCloseBtn');
  const detailTriggers = $$('[data-project-trigger]');

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data || !modalBackdrop) return;

    // Set title and studio badge
    const titleEl = $('#modalProjectTitle');
    const studioEl = $('#modalProjectStudio');
    const badgeEl = $('#modalProjectBadge');
    const urlBtn = $('#modalProjectUrl');
    const rolesList = $('#modalProjectRoles');
    const techEl = $('#modalProjectTech');
    const descEl = $('#modalProjectDesc');
    const mainImg = $('#modalMainImg');
    const thumbsRow = $('#modalThumbsRow');

    if (titleEl) titleEl.textContent = data.title;
    if (studioEl) studioEl.textContent = data.studio;
    if (badgeEl) badgeEl.textContent = data.badge;
    if (techEl) techEl.textContent = data.techStack;
    if (descEl) descEl.textContent = data.description;

    const actionsRow = $('.modal-actions-row');
    if (actionsRow) {
      actionsRow.innerHTML = '';
      if (data.links && data.links.length > 0) {
        data.links.forEach(link => {
          const a = document.createElement('a');
          a.href = link.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = link.class || 'btn-primary-glow';
          a.innerHTML = `${link.label} <i class="${link.icon || 'bi bi-box-arrow-up-right'} ms-1"></i>`;
          actionsRow.appendChild(a);
        });
      } else if (data.url) {
        const a = document.createElement('a');
        a.id = 'modalProjectUrl';
        a.href = data.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'btn-primary-glow';
        a.innerHTML = `${data.urlLabel || "View Live Project"} <i class="bi bi-box-arrow-up-right ms-1"></i>`;
        actionsRow.appendChild(a);
      }
    }

    if (rolesList) {
      rolesList.innerHTML = '';
      data.contributions.forEach(role => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="bi bi-check2-circle text-info me-2"></i>${role}`;
        rolesList.appendChild(li);
      });
    }

    // Setup Gallery
    if (mainImg && data.images && data.images.length > 0) {
      mainImg.src = data.images[0];
      mainImg.alt = data.title;

      if (thumbsRow) {
        thumbsRow.innerHTML = '';
        data.images.forEach((imgSrc, index) => {
          const thumbBtn = document.createElement('button');
          thumbBtn.className = `modal-thumb-btn ${index === 0 ? 'active' : ''}`;
          thumbBtn.type = 'button';
          thumbBtn.setAttribute('aria-label', `View image ${index + 1}`);
          thumbBtn.innerHTML = `<img src="${imgSrc}" alt="${data.title} preview ${index + 1}">`;

          thumbBtn.addEventListener('click', () => {
            $$('.modal-thumb-btn', thumbsRow).forEach(b => b.classList.remove('active'));
            thumbBtn.classList.add('active');
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
              mainImg.src = imgSrc;
              mainImg.style.opacity = '1';
            }, 120);
          });

          thumbsRow.appendChild(thumbBtn);
        });
      }
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  detailTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-trigger');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /**
   * Back to Top Click
   */
  const backToTopBtn = $('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Smooth Anchor Links Handling
   */
  $$('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = $(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

})();