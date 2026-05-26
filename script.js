// Structured data for the EduHub Single-Page Education Platform
export const CATEGORIES_DATA = [
  {
    id: "cat-math",
    name: "Mathematics",
    code: "MTH",
    icon: "bi-calculator",
    color: "#0369a1",
    tagClass: "tag-math",
    description: "From foundational algebra to advanced multi-variable calculus, unlock the universal language of logic and patterns."
  },
  {
    id: "cat-physics",
    name: "Physics",
    code: "PHY",
    icon: "bi-radioactive",
    color: "#6b21a8",
    tagClass: "tag-physics",
    description: "Explore the laws governing matter and energy, from quantum mechanics to cosmic astrophysics."
  },
  {
    id: "cat-chemistry",
    name: "Chemistry",
    code: "CHM",
    icon: "bi-heart-pulse-fill",
    color: "#9f1239",
    tagClass: "tag-chemistry",
    description: "Master organic synthesis, reaction kinetics, and chemical equilibrium through interactive modules."
  },
  {
    id: "cat-cs",
    name: "Computer Science",
    code: "CSC",
    icon: "bi-cpu",
    color: "#065f46",
    tagClass: "tag-cs",
    description: "Dive into algorithm design, operating systems, compiler theory, and cloud modern architectures."
  },
  {
    id: "cat-humanities",
    name: "Humanities",
    code: "HUM",
    icon: "bi-book-half",
    color: "#9a3412",
    tagClass: "tag-humanities",
    description: "Deep dive into historic literature, cognitive human theories, and critical design philosophies."
  },
  {
    id: "cat-languages",
    name: "Languages",
    code: "LNG",
    icon: "bi-translate",
    color: "#374151",
    tagClass: "tag-languages",
    description: "Achieve fluency through phonetics practice, comprehensive grammatical synthesis, and rhetoric structures."
  }
];

export const RESOURCES_DATA = [
  {
    id: "res-math-1",
    title: "Advanced Mathematical Calculus",
    category: "Mathematics",
    difficulty: "Advanced",
    duration: "14 hrs",
    tagClass: "tag-math",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUFRv3PDyV5biaZ5viC-S6--zVMsp3-IfTmnyNRKQWOZPkb45qg6KRYf-wGPJ9kQ99TKRB0CJd42rcdVDFZZhrcq5jyh3Wyf-wnmpZ5Fm9jUwOt_02KiAl-le6Sselo7sFdB2KJ8CjA3pJ5P-4hrZclqrwybre7DzJHdi7it7xrddvM0RWf6iiovQ1g80nM_ch3_JxYUsqXggCgfDMJlBsCYRoSiUuz6R_qRGL4rbDTjTggD21l7CtCakowBmfNg7OF0lY1qOU_hQ",
    shortDesc: "Complete module covering limits, partial derivatives, and complex line integrations with high-fidelity analytical graphs.",
    longDesc: "This comprehensive syllabus encompasses advanced concepts of multi-variable calculus and analysis. Students will engage with rigorous limit proofs, vector fields, curl, divergence theorems, and high-dimensional parameterizations of complex geometries.",
    objectives: [
      "Prove limits using the analytical epsilon-delta definition.",
      "Calculate curl and divergence of multi-variable vector fields.",
      "Apply Green's, Stokes' and Gauss' divergence theorems in 3D physics problems.",
      "Model optimization scenarios with Lagrange Multiplicators."
    ],
    prereq: "Intermediate Linear Algebra & Calculus II",
    quiz: {
      question: "What does the curl of a vector field physically represent in fluid dynamics?",
      opt1: "The density change at any local point.",
      opt2: "The rotational rate/vorticity of a fluid element.",
      correct: 2,
      feedback: "Correct! The curl measure measures local rotational speed and direction of fluid elements."
    }
  },
  {
    id: "res-physics-1",
    title: "Quantum Waveguide Principles",
    category: "Physics",
    difficulty: "Advanced",
    duration: "18 hrs",
    tagClass: "tag-physics",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbvcbNxogcImDH5DyQJFyvCKlshmwKcZC79lLnhuiK_DeG0XCPvOUqKv-WJ8rEOvh0j8Q3Ga35ML8gTDXNQP6_2C5Fyt8-l7VT4Wbn7wNAry9k71ijhRrRrDRnyIYF_Ex-WcskTH1EpvsFyfkRxr1r3AULQo75xxSD9nXQdCN74AmfLYxAZq4p3uzE25DMIBCWF-YxGl6jNdwquKusB1_zA5hCNaXU0u25hrvm2-nAX6WykA1y_mS7M1oO3rES7A5V14NT60vOTYc",
    shortDesc: "A systematic investigation into electronic potential barriers, wavefunction propagation, and energy level quantization.",
    longDesc: "Delve deep into the Schrodinger formulations of matter waves. This module explores semiconductor junctions, multi-barrier tunneling, quantum confinement structures, and numerical solutions of quantum wave equations.",
    objectives: [
      "Solve the 1D Schrödinger equation for finite and infinite potential wells.",
      "Quantify tunneling probability across dynamic dielectric barriers.",
      "Plot electron wavefunction spatial distributions in nanostructures.",
      "Understand quantum state superposition and decoherence mechanics."
    ],
    prereq: "Differential Equations & Classical Electrodynamics",
    quiz: {
      question: "Which equation represents the foundational formulation of quantum mechanics?",
      opt1: "Schrödinger Equation",
      opt2: "Maxwell's Equations",
      correct: 1,
      feedback: "Exactly! The Schrödinger equation describes the development-over-time of a quantum state."
    }
  },
  {
    id: "res-chem-1",
    title: "Organic Synthesis Sandbox",
    category: "Chemistry",
    difficulty: "Intermediate",
    duration: "8 hrs",
    tagClass: "tag-chemistry",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5BuOQn57mOidFI75O_zRW_IZ9Yrl57mAVpSJifNUuYqBnsAdfFKOf8l6GJmmAU6wYHbhbYM8xqk1pTG8S4NETHto4lb86FlYlLE5wX6iQW9c_-mBltbbqOKTTilCCXAYUVGkEszo8o7ecPFsINjBGdrYv-1HXS05vF9y8fVnbFnaVd6adkPmSolvVYGgdl5lj3uOiSOyOCF1AsUyG7aHCZACiistMzDbbMTiFp_GPE47Uqk-IXenNROt99p8haRUZgHiP9UrWPA4",
    shortDesc: "Master sophisticated retrosynthetic analyses and reaction pathways with practical laboratory walkthroughs.",
    longDesc: "A modular, interactive laboratory series taking you from fundamental carbon bonds to complex macromolecular compounds. Features exhaustive animations of nucleophilic substitutions and carbon-carbon coupling mechanisms.",
    objectives: [
      "Synthesize retrosynthetic trees for complex polyfunctional molecules.",
      "Distinguish between SN1, SN2, E1, and E2 mechanism kinetics.",
      "Predict stereochemical outcomes of cycloadditions and rearrangement reactions.",
      "Interpret NMR and IR spectroscopy peaks for composition validation."
    ],
    prereq: "General Chemistry Principles",
    quiz: {
      question: "What is the primary factor prioritizing SN2 over SN1 reaction pathways?",
      opt1: "Presence of tertiary sterically hindered carbon centers.",
      opt2: "Polar aprotic solvents and unhindered primary carbon centers.",
      correct: 2,
      feedback: "Correct! SN2 reactions thrive on back-attack pathways requiring unhindered centers in polar aprotic environments."
    }
  },
  {
    id: "res-cs-1",
    title: "Operating Systems Internals",
    category: "Computer Science",
    difficulty: "Advanced",
    duration: "15 hrs",
    tagClass: "tag-cs",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQv_88FkCSWYw3rtwoxffO5b50Ux9EXWWFsX0mmfgl2gWUK5sJyTWuiBgVJUTazVFsGKcvcEB0z_vV26GRw5vXZ1JUFl8Z7lNExPO5eF10ID1y7hTv6T6FaH0bns_IQUJMFKYZtR7p_givDR8sNArfNXJuMcKCgI4vKLc-dcyYi6YA8ftfQei7JOy5ATXhaIwItSUljVwuXGVod7mPGgj5_bAK4eKoGL5l6kpWHcibTPvLvVgw3Qa26o1gjs9IpJUaS3Er8R4QPro",
    shortDesc: "Comprehensive study of virtual memory paging, process scheduling threads, lock semaphores, and filesystem nodes.",
    longDesc: "Explore how kernels mediate control between software structures and silicon microarchitectures. Understand CPU scheduling, mutual exclusion deadlock, pagination page table walks, virtual memory mapping, and journaled I/O execution.",
    objectives: [
      "Implement thread pool context management algorithms.",
      "Detect and resolve deadlocks using Banker's Algorithm parameters.",
      "Configure virtual paging frameworks and page replacement routines (LRU).",
      "Write device driver controllers addressing block memory partitions."
    ],
    prereq: "Computer System Architecture & C Programming",
    quiz: {
      question: "What does virtual memory translation primarily solve in multi-tenant environments?",
      opt1: "Direct secure isolation and enlargement of program address space.",
      opt2: "Bypassing hardware registers for direct physical allocation.",
      correct: 1,
      feedback: "Perfect! Virtual memory abstracts physics to allocate isolated, simulated contiguous spaces for secure execution."
    }
  },
  {
    id: "res-human-1",
    title: "Renaissance Art & Philosophy",
    category: "Humanities",
    difficulty: "Beginner",
    duration: "6 hrs",
    tagClass: "tag-humanities",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQv_88FkCSWYw3rtwoxffO5b50Ux9EXWWFsX0mmfgl2gWUK5sJyTWuiBgVJUTazVFsGKcvcEB0z_vV26GRw5vXZ1JUFl8Z7lNExPO5eF10ID1y7hTv6T6FaH0bns_IQUJMFKYZtR7p_givDR8sNArfNXJuMcKCgI4vKLc-dcyYi6YA8ftfQei7JOy5ATXhaIwItSUljVwuXGVod7mPGgj5_bAK4eKoGL5l6kpWHcibTPvLvVgw3Qa26o1gjs9IpJUaS3Er8R4QPro",
    shortDesc: "Analyze historic structural artworks, literature forms, and human philosophies that defined Western civilization.",
    longDesc: "An analytical trip through the cultural revival in Europe. Analyze visual and philosophical transitions from scholastic theology to secular and humanistic structures of thought.",
    objectives: [
      "Trace visual perspective developments by Brunelleschi and Da Vinci.",
      "Analyse civic humanist works by Machiavelli, Erasmus and More.",
      "Evaluate religious and secular cross-sections leading to the Reformation.",
      "Draft critical theories comparing Gothic styles with Romanesque resurgences."
    ],
    prereq: "None",
    quiz: {
      question: "Who is credited with codifying the laws of linear perspective in architecture?",
      opt1: "Filippo Brunelleschi",
      opt2: "Michelangelo Buonarroti",
      correct: 1,
      feedback: "Correct! Filippo Brunelleschi formulated mathematical perspective rules inside Florence."
    }
  },
  {
    id: "res-lang-1",
    title: "Phonology & Structural Grammar",
    category: "Languages",
    difficulty: "Intermediate",
    duration: "10 hrs",
    tagClass: "tag-languages",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbvcbNxogcImDH5DyQJFyvCKlshmwKcZC79lLnhuiK_DeG0XCPvOUqKv-WJ8rEOvh0j8Q3Ga35ML8gTDXNQP6_2C5Fyt8-l7VT4Wbn7wNAry9k71ijhRrRrDRnyIYF_Ex-WcskTH1EpvsFyfkRxr1r3AULQo75xxSD9nXQdCN74AmfLYxAZq4p3uzE25DMIBCWF-YxGl6jNdwquKusB1_zA5hCNaXU0u25hrvm2-nAX6WykA1y_mS7M1oO3rES7A5V14NT60vOTYc",
    shortDesc: "Deconstruct phonetics, morpheme clusters, syntax sentence nodes, and semantics structures across world linguistics.",
    longDesc: "Study the computational and historical attributes of speech. Focuses heavy on the International Phonetic Alphabet (IPA), transformational-generative grammar, and neural syntactic representations.",
    objectives: [
      "Transcribe spoken rhetoric using the IPA with precision.",
      "Map syntactic tree branches representing complex sentence clauses.",
      "Analyze historical language shifts using acoustic sound wave comparisons.",
      "Contrast structuralist theories of Saussure with universal grammar model inputs."
    ],
    prereq: "Introduction to General Linguistics",
    quiz: {
      question: "Which term describes the smallest structural unit of sound that distinguishes meaning?",
      opt1: "Morpheme",
      opt2: "Phoneme",
      correct: 2,
      feedback: "Brilliant! A phoneme is the smallest contrastive unit of speech distinct within phonology."
    }
  }
];

// App state management
let activeCategoryFilter = "ALL";
let searchFilterQuery = "";
let difficultyFilterVal = "ALL";
let showSavedOnlyVal = false;
let bookmarkedIds = [];

// Pomodoro Timer state
let timerInterval = null;
let timerType = "work"; // 'work' or 'break'
let timerMinutes = 25;
let timerSeconds = 0;
let isTimerRunning = false;

// Onload initialization
document.addEventListener("DOMContentLoaded", () => {
  // Load saved bookmarks from localStorage
  const savedBookmarks = localStorage.getItem("eduhub_bookmarks");
  if (savedBookmarks) {
    try {
      bookmarkedIds = JSON.parse(savedBookmarks);
    } catch (e) {
      bookmarkedIds = [];
    }
  }
  updateBookmarkTextIndicator();

  // Render initial static segments
  renderCategoryGrid();
  renderResourcesList(RESOURCES_DATA);
  renderFeaturedSection();

  // Bind navigational scroll tracking
  setupActiveNavSpy();
});

// Setup active state tracking scroll spy
function setupActiveNavSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  window.addEventListener("scroll", () => {
    let currentActiveId = "home";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentActiveId = section.getAttribute("id") || "home";
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentActiveId}`) {
        link.classList.add("active");
      }
    });
  });
}

// -------------------------------------------------------------
// RENDERING ENGINES
// -------------------------------------------------------------

// Render all Category Listing Cards
export function renderCategoryGrid() {
  const container = document.getElementById("categories");
  if (!container) return;

  // Render Category Listings section header
  let html = `
    <div class="row mb-5 justify-content-between align-items-end">
      <div class="col-md-7">
        <span class="edu-tag tag-math mb-2">Academic Catalogs</span>
        <h2 class="font-display fs-1 mb-2">Study Domain Categories</h2>
        <p class="text-muted font-sans mb-0">Select a category domain to instantly filter the curated research repositories and open study textbooks below.</p>
      </div>
      <div class="col-md-4 text-md-end mt-3 mt-md-0">
        <button class="btn btn-light border btn-sm py-2 px-3 fw-medium" id="btn-reset-filters" style="border-radius: 8px;" onclick="resetResourceFilters()">
          <i class="bi bi-arrow-counterclockwise"></i> Show All Resources
        </button>
      </div>
    </div>
    
    <div class="row g-3 justify-content-center mb-5" id="categories-grid-inner"></div>
  `;
  container.innerHTML = html;

  const innerGrid = document.getElementById("categories-grid-inner");
  if (!innerGrid) return;

  CATEGORIES_DATA.forEach((category) => {
    const isSelected = activeCategoryFilter === category.name;
    const borderStyle = `border-bottom: 3.5px solid ${category.color};`;
    
    const cardCol = document.createElement("div");
    cardCol.className = "col-6 col-md-4 col-lg-2";
    cardCol.innerHTML = `
      <div class="edu-card text-center p-3 h-100 d-flex flex-column align-items-center justify-content-center shadow-xs ${isSelected ? 'active-category bg-light' : ''}" 
           id="${category.id}" 
           onclick="filterByCategory('${category.name}', '${category.id}')" 
           style="cursor: pointer; ${borderStyle}">
        <i class="bi ${category.icon} fs-2 mb-2" style="color: ${category.color};"></i>
        <h5 class="fs-6 font-display mb-1 text-truncate w-100" style="color: #0f172a;">${category.name}</h5>
        <small class="text-muted font-mono" style="font-size: 11px;">${category.code}</small>
      </div>
    `;
    innerGrid.appendChild(cardCol);
  });
}

// Render Featured Cards (3 Highlight Items)
export function renderFeaturedSection() {
  const container = document.getElementById("featured");
  if (!container) return;

  // The featured section always outputs 3 prominent cards for mathematics, science, arts
  const featuredResources = RESOURCES_DATA.slice(0, 3);

  let html = `
    <div class="text-center mb-5">
      <span class="edu-tag tag-physics mb-2">Curated Highlights</span>
      <h2 class="font-display fs-1 mb-3">Featured Study Instruments</h2>
      <p class="text-muted max-w-2xl mx-auto">Explore high-quality modules praised by peer communities for deep concept mastery.</p>
    </div>
    <div class="row g-4 justify-content-center">
  `;

  featuredResources.forEach((resource, index) => {
    const isBookmarked = bookmarkedIds.includes(resource.id);
    html += `
      <div class="col-md-6 col-lg-4">
        <div class="edu-card h-100 d-flex flex-column justify-content-between position-relative">
          <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${resource.id}', event)" title="Save to Handouts">
            <i class="bi ${isBookmarked ? 'bi-bookmark-fill text-white' : 'bi-bookmark'}"></i>
          </button>
          <div>
            <div class="img-zoom mb-3">
              <img src="${resource.imgUrl}" alt="${resource.title} Visual Representation" class="img-fluid" referrerpolicy="no-referrer">
              <span class="edu-tag ${resource.tagClass} position-absolute bottom-0 start-0 m-3 shadow-sm rounded-pill py-1 px-3">STEM : ${resource.category}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <span class="badge badge-difficulty ${getDiffBadgeClass(resource.difficulty)}"><i class="bi bi-star-fill text-warning me-1"></i> ${resource.difficulty}</span>
              <span class="text-muted font-mono" style="font-size: 12px;"><i class="bi bi-clock me-1"></i> ${resource.duration}</span>
            </div>
            <h4 class="fs-4 font-display mb-2" style="color: #0c0f1d">${resource.title}</h4>
            <p class="text-muted font-sans mb-4 small">${resource.shortDesc}</p>
          </div>
          <div>
            <button class="btn btn-outline-teal w-100" onclick="triggerQuickView('${resource.id}')">
              <i class="bi bi-journal-text me-1"></i> View Syllabus
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// Render Core Directory List (Filterable)
export function renderResourcesList(list) {
  const container = document.getElementById("resources-grid-container");
  const emptyState = document.getElementById("resources-empty-state");
  if (!container) return;

  container.innerHTML = "";

  // Apply filter states
  let filtered = list.filter((res) => {
    // 1. Check active category click
    if (activeCategoryFilter !== "ALL" && res.category !== activeCategoryFilter) {
      return false;
    }
    // 2. Check search input query
    if (searchFilterQuery) {
      const q = searchFilterQuery.toLowerCase();
      const inTitle = res.title.toLowerCase().includes(q);
      const inDesc = res.shortDesc.toLowerCase().includes(q) || res.longDesc.toLowerCase().includes(q);
      const inCat = res.category.toLowerCase().includes(q);
      if (!inTitle && !inDesc && !inCat) return false;
    }
    // 3. Check difficulty select
    if (difficultyFilterVal !== "ALL" && res.difficulty !== difficultyFilterVal) {
      return false;
    }
    // 4. Check Saved Only Toggle Value
    if (showSavedOnlyVal && !bookmarkedIds.includes(res.id)) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    emptyState.classList.remove("d-none");
    container.classList.add("d-none");
    return;
  }

  emptyState.classList.add("d-none");
  container.classList.remove("d-none");

  filtered.forEach((resource) => {
    const isBookmarked = bookmarkedIds.includes(resource.id);
    const cardCol = document.createElement("div");
    cardCol.className = "col-md-6 col-lg-4";
    cardCol.innerHTML = `
      <div class="edu-card h-100 d-flex flex-column justify-content-between position-relative">
        <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${resource.id}', event)" title="Save to Handouts">
          <i class="bi ${isBookmarked ? 'bi-bookmark-fill text-white' : 'bi-bookmark'}"></i>
        </button>
        <div>
          <div class="img-zoom mb-3">
            <img src="${resource.imgUrl}" alt="${resource.title} Visual representation" referrerpolicy="no-referrer">
            <span class="edu-tag ${resource.tagClass} position-absolute bottom-0 start-0 m-3 shadow-sm rounded-pill py-1 px-3">${resource.category}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between mb-3">
            <span class="badge badge-difficulty ${getDiffBadgeClass(resource.difficulty)}">${resource.difficulty}</span>
            <span class="text-muted font-mono" style="font-size: 11px;"><i class="bi bi-clock"></i> ${resource.duration}</span>
          </div>
          <h4 class="fs-5 font-display mb-2 text-dark">${resource.title}</h4>
          <p class="text-muted font-sans small mb-4">${resource.shortDesc}</p>
        </div>
        <div>
          <button class="btn btn-teal w-100" onclick="triggerQuickView('${resource.id}')">
            <i class="bi bi-file-earmark-text me-1"></i> Retrieve Syllabus
          </button>
        </div>
      </div>
    `;
    container.appendChild(cardCol);
  });
}

function getDiffBadgeClass(difficulty) {
  switch (difficulty) {
    case "Beginner": return "diff-beginner";
    case "Intermediate": return "diff-intermediate";
    case "Advanced": return "diff-advanced";
    default: return "diff-intermediate";
  }
}

// -------------------------------------------------------------
// FILTERING & INTERACTION TRIGGERS
// -------------------------------------------------------------

// Trigger Category click filter
window.filterByCategory = function(categoryName, elementId) {
  // Toggle selection
  if (activeCategoryFilter === categoryName) {
    activeCategoryFilter = "ALL";
  } else {
    activeCategoryFilter = categoryName;
  }
  
  // Re-compile views
  renderCategoryGrid();
  renderResourcesList(RESOURCES_DATA);
};

// Reset all search/category inputs
window.resetResourceFilters = function() {
  activeCategoryFilter = "ALL";
  searchFilterQuery = "";
  difficultyFilterVal = "ALL";
  showSavedOnlyVal = false;

  const searchInput = document.getElementById("resource-search-input");
  if (searchInput) searchInput.value = "";

  const diffSelect = document.getElementById("difficulty-filter");
  if (diffSelect) diffSelect.value = "ALL";

  renderCategoryGrid();
  renderResourcesList(RESOURCES_DATA);
};

// Text search input change
window.handleSearchFilter = function() {
  const searchInput = document.getElementById("resource-search-input");
  if (searchInput) {
    searchFilterQuery = searchInput.value;
    renderResourcesList(RESOURCES_DATA);
  }
};

// Difficulty selector dropdown change
window.handleDifficultyFilter = function() {
  const diffSelect = document.getElementById("difficulty-filter");
  if (diffSelect) {
    difficultyFilterVal = diffSelect.value;
    renderResourcesList(RESOURCES_DATA);
  }
};

// Toggle Bookmarking Favoriting System
window.toggleBookmark = function(resourceId, event) {
  if (event) event.stopPropagation();
  
  const index = bookmarkedIds.indexOf(resourceId);
  if (index > -1) {
    bookmarkedIds.splice(index, 1);
  } else {
    bookmarkedIds.push(resourceId);
  }

  localStorage.setItem("eduhub_bookmarks", JSON.stringify(bookmarkedIds));
  
  // Re-draw panels to align favorites status and indicators
  updateBookmarkTextIndicator();
  renderFeaturedSection();
  renderResourcesList(RESOURCES_DATA);
};

// Highlight Saved Only toggle
window.toggleShowSavedOnly = function() {
  showSavedOnlyVal = !showSavedOnlyVal;
  
  const btn = document.getElementById("btn-show-saved-only");
  if (btn) {
    if (showSavedOnlyVal) {
      btn.innerHTML = `<i class="bi bi-eye-slash"></i> Clear Bookmarked Filter`;
      btn.classList.add("btn-teal");
      btn.classList.remove("btn-outline-teal");
    } else {
      btn.innerHTML = `<i class="bi bi-eye"></i> Show Favorited Handouts`;
      btn.classList.remove("btn-teal");
      btn.classList.add("btn-outline-teal");
    }
  }
  renderResourcesList(RESOURCES_DATA);
};

// Update Bookmark description box
function updateBookmarkTextIndicator() {
  const indicator = document.getElementById("bookmark-indicator-text");
  if (indicator) {
    if (bookmarkedIds.length === 0) {
      indicator.innerText = "No Saved Resources";
    } else {
      indicator.innerText = `${bookmarkedIds.length} Educational Resource${bookmarkedIds.length > 1 ? 's' : ''} Saved Offline`;
    }
  }
}

// -------------------------------------------------------------
// DYNAMIC MODAL TRIGGERS (SYLLABUS & MICRO QUIZ)
// -------------------------------------------------------------
let currentActiveResourceSyllabus = null;

window.triggerQuickView = function(resourceId) {
  const resource = RESOURCES_DATA.find((r) => r.id === resourceId);
  if (!resource) return;

  currentActiveResourceSyllabus = resource;

  // Set Modal descriptions
  document.getElementById("syllabusModalTitle").innerText = resource.title;
  
  const catBadge = document.getElementById("modal-syllabus-category");
  catBadge.innerText = resource.category;
  catBadge.className = `edu-tag ${resource.tagClass} font-mono`;

  document.getElementById("modal-syllabus-desc").innerText = resource.longDesc;
  document.getElementById("modal-syllabus-time").innerText = resource.duration;
  document.getElementById("modal-syllabus-prereq").innerText = resource.prereq;

  // Render Objectives
  const objectivesContainer = document.getElementById("modal-syllabus-objectives");
  objectivesContainer.innerHTML = "";
  resource.objectives.forEach((obj) => {
    const li = document.createElement("li");
    li.innerText = obj;
    objectivesContainer.appendChild(li);
  });

  // Render Difficulty levels
  const modalDiffBadge = document.getElementById("modal-syllabus-difficulty");
  modalDiffBadge.innerText = resource.difficulty;
  modalDiffBadge.className = `badge badge-difficulty ${getDiffBadgeClass(resource.difficulty)}`;

  // Set Sandbox Quiz Questions
  document.getElementById("modal-syllabus-quiz-q").innerText = resource.quiz.question;
  
  const opt1Btn = document.getElementById("btn-quiz-opt1");
  const opt2Btn = document.getElementById("btn-quiz-opt2");

  opt1Btn.innerText = `A) ${resource.quiz.opt1}`;
  opt2Btn.innerText = `B) ${resource.quiz.opt2}`;

  opt1Btn.className = "btn btn-xs btn-outline-secondary text-start small py-1 px-2";
  opt2Btn.className = "btn btn-xs btn-outline-secondary text-start small py-1 px-2";

  document.getElementById("modal-syllabus-quiz-feedback").classList.add("d-none");

  // Show Modal using Bootstrap classes
  const modalEl = document.getElementById("syllabusDetailsModal");
  if (modalEl) {
    const bootstrapModal = new bootstrap.Modal(modalEl);
    bootstrapModal.show();
  }
};

// Check Micro Quiz answer
window.submitSyllabusQuiz = function(selectedOptionNum) {
  if (!currentActiveResourceSyllabus) return;

  const quizObj = currentActiveResourceSyllabus.quiz;
  const feedbackEl = document.getElementById("modal-syllabus-quiz-feedback");
  const opt1Btn = document.getElementById("btn-quiz-opt1");
  const opt2Btn = document.getElementById("btn-quiz-opt2");

  feedbackEl.classList.remove("d-none");

  if (selectedOptionNum === quizObj.correct) {
    feedbackEl.innerText = quizObj.feedback;
    feedbackEl.className = "small fw-medium text-success text-xs mt-2";
    
    if (selectedOptionNum === 1) {
      opt1Btn.className = "btn btn-xs btn-success text-white text-start small py-1 px-2";
    } else {
      opt2Btn.className = "btn btn-xs btn-success text-white text-start small py-1 px-2";
    }
  } else {
    feedbackEl.innerText = "Incorrect answer, try consulting the alternate theory option!";
    feedbackEl.className = "small fw-medium text-danger text-xs mt-2";
    
    if (selectedOptionNum === 1) {
      opt1Btn.className = "btn btn-xs btn-danger text-white text-start small py-1 px-2";
    } else {
      opt2Btn.className = "btn btn-xs btn-danger text-white text-start small py-1 px-2";
    }
  }
};

window.triggerClaimNotification = function() {
  // Dismiss current open modal
  const modalEl = document.getElementById("syllabusDetailsModal");
  if (modalEl) {
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) {
      modalInstance.hide();
    }
  }

  // Trigger achievement toast
  const toastEl = document.getElementById("claimAchievementToast");
  if (toastEl) {
    const toastInstance = new bootstrap.Toast(toastEl, { delay: 4000 });
    toastInstance.show();
  }
};

// -------------------------------------------------------------
// POMODORO FOCUS TIMER COMPONENT
// -------------------------------------------------------------
window.setTimerType = function(type) {
  timerType = type;
  isTimerRunning = false;
  clearInterval(timerInterval);
  document.getElementById("btn-timer-toggle").innerHTML = `<i class="bi bi-play-fill me-1"></i> Start Flow`;

  const workBtn = document.getElementById("btn-timer-work");
  const breakBtn = document.getElementById("btn-timer-break");

  if (type === "work") {
    timerMinutes = 25;
    timerSeconds = 0;
    workBtn.classList.add("active");
    breakBtn.classList.remove("active");
  } else {
    timerMinutes = 5;
    timerSeconds = 0;
    breakBtn.classList.add("active");
    workBtn.classList.remove("active");
  }

  updateTimerLayout();
};

window.toggleStudyTimer = function() {
  const toggleBtn = document.getElementById("btn-timer-toggle");

  if (isTimerRunning) {
    isTimerRunning = false;
    clearInterval(timerInterval);
    toggleBtn.innerHTML = `<i class="bi bi-play-fill me-1"></i> Resume Flow`;
  } else {
    isTimerRunning = true;
    toggleBtn.innerHTML = `<i class="bi bi-pause-fill me-1"></i> Intermit`;

    timerInterval = setInterval(() => {
      if (timerSeconds === 0) {
        if (timerMinutes === 0) {
          // Timer reached the end
          clearInterval(timerInterval);
          isTimerRunning = false;
          alert(`Focus Session Finished! Time to start a ${timerType === 'work' ? '5 minutes break' : '25 minutes deep work session'}!`);
          setTimerType(timerType === "work" ? "break" : "work");
          return;
        }
        timerMinutes--;
        timerSeconds = 59;
      } else {
        timerSeconds--;
      }
      updateTimerLayout();
    }, 1000);
  }
};

window.resetStudyTimer = function() {
  setTimerType(timerType);
};

function updateTimerLayout() {
  const minsStr = timerMinutes.toString().padStart(2, "0");
  const secsStr = timerSeconds.toString().padStart(2, "0");
  document.getElementById("timer-display-visual").innerText = `${minsStr}:${secsStr}`;
}

// -------------------------------------------------------------
// CONTACT SUBMISSIONS ADVISORY CHANNELS
// -------------------------------------------------------------
window.handleContactSubmission = function(event) {
  event.preventDefault();

  const form = document.getElementById("support-advisory-form");
  if (!form) return;

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  // Retrieve input content
  const academicName = document.getElementById("contact-name").value;
  const emailVal = document.getElementById("contact-email").value;
  const roleVal = document.getElementById("contact-role").value;
  const topicVal = document.getElementById("contact-topic").value;

  // Set Success panel outputs
  document.getElementById("summary-name").innerText = academicName;
  document.getElementById("summary-email").innerText = emailVal;
  document.getElementById("summary-role").innerText = roleVal;
  document.getElementById("summary-topic").innerText = topicVal;

  // Animate change transitions
  document.getElementById("contact-form-wrapper").classList.add("d-none");
  const successWrapper = document.getElementById("contact-success-wrapper");
  successWrapper.classList.remove("d-none");
  successWrapper.classList.add("fade-in");
};

window.resetContactFormState = function() {
  const form = document.getElementById("support-advisory-form");
  if (form) {
    form.reset();
    form.classList.remove("was-validated");
  }

  document.getElementById("contact-success-wrapper").classList.add("d-none");
  document.getElementById("contact-form-wrapper").classList.remove("d-none");
};

// Clipboard utilities
window.copySupportText = function(textStr, buttonEl) {
  navigator.clipboard.writeText(textStr).then(() => {
    const originalIcon = buttonEl.innerHTML;
    buttonEl.innerHTML = `<i class="bi bi-check-lg text-success"></i>`;
    setTimeout(() => {
      buttonEl.innerHTML = originalIcon;
    }, 2000);
  });
};
