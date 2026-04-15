const portfolioProjects = [
  {
    title: "Veteran Demographic Mapping in North Carolina",
    summary:
      "This project visualizes veteran population patterns across North Carolina census tracts, including age-based demographic breakdowns. It demonstrates choropleth design, classification choices, and clear comparative map production for policy or planning audiences.",
    image: "./assets/screenshots/veterans-mapping-layout.png",
    imageAlt: "North Carolina veteran demographic mapping layout",
    category: "Demographic Cartography",
    tools: ["R", "tmap", "Census tract data"],
    skills: ["Thematic mapping", "Classification design", "Demographic analysis"],
    downloads: [
      {
        label: "Download HTML Project",
        file: "./assets/projects/veterans-demographic-mapping.html"
      }
    ]
  },
  {
    title: "GEOG 491 Shoreline Change Analysis",
    summary:
      "This shoreline change project analyzes coastal movement, erosion patterns, and site-specific change over time using mapped transects, contour comparisons, and coastal reference data. The work combines cartographic presentation with quantitative interpretation for a formal GIS course project.",
    image: "./assets/screenshots/shoreline-net-volumetric-change.png",
    imageAlt: "Shoreline net volumetric change map",
    category: "Coastal GIS Analysis",
    tools: ["ArcGIS Pro", "Raster analysis", "Shoreline transects"],
    skills: ["Change detection", "Map layout", "Technical presentation"],
    downloads: [
      {
        label: "Download Term Paper",
        file: "./assets/projects/shoreline-change-term-paper.pdf"
      },
      {
        label: "Download Presentation",
        file: "./assets/projects/shoreline-change-presentation.pptx"
      }
    ]
  },
  {
    title: "Bogue Banks Coastal Research",
    summary:
      "This research-focused project examines the impacts of seasonal weather patterns, erosion events, and sediment dynamics on Bogue Banks and the Emerald Isle shoreface. It presents a stronger research narrative while still emphasizing GIS-supported spatial analysis and communication.",
    image: "./assets/screenshots/bogue-banks-research-cover.png",
    imageAlt: "Bogue Banks research presentation cover slide",
    category: "Coastal Research",
    tools: ["ArcGIS Pro", "Coastal topographic data", "Research presentation design"],
    skills: ["Environmental analysis", "Scientific communication", "Spatial interpretation"],
    downloads: [
      {
        label: "Download Research Presentation",
        file: "./assets/projects/bogue-banks-research-presentation.pptx"
      },
      {
        label: "Download Sedimentation Study",
        file: "./assets/projects/emerald-isle-sedimentation-study.pdf"
      }
    ]
  },
  {
    title: "Project Four",
    summary: "coming soon",
    image: "",
    imageAlt: "Upcoming GIS project",
    category: "",
    tools: [],
    skills: [],
    downloads: []
  }
];

const projectList = document.getElementById("project-list");

function createTagList(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function createDownloadList(downloads) {
  if (!downloads.length) {
    return '<p class="empty-state">Add downloadable project files in <code>assets/projects</code>.</p>';
  }

  return downloads
    .map(
      (download) =>
        `<a class="download-link" href="${download.file}" download>${download.label}</a>`
    )
    .join("");
}

function renderProjects(projects) {
  if (!projects.length) {
    projectList.innerHTML =
      '<div class="empty-state">No projects added yet. Add your screenshots and files, then update <code>projects.js</code>.</div>';
    return;
  }

  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-visual">
            <img
              src="${project.image}"
              alt="${project.imageAlt}"
              loading="lazy"
              onerror="this.replaceWith(Object.assign(document.createElement('div'), { className: 'image-fallback', textContent: 'Project screenshot goes here' }))"
            />
          </div>
          <div class="project-copy">
            <div>
              ${project.category ? `<span class="meta-label">${project.category}</span>` : ""}
              <h3>${project.title}</h3>
            </div>
            <p>${project.summary}</p>
            ${project.tools.length ? `
            <div class="tag-block">
              <span class="summary-label">Tools Used</span>
              <div class="tag-list">${createTagList(project.tools)}</div>
            </div>` : ""}
            ${project.skills.length ? `
            <div class="tag-block">
              <span class="summary-label">Skills Demonstrated</span>
              <div class="tag-list">${createTagList(project.skills)}</div>
            </div>` : ""}
            ${project.downloads.length ? `
            <div class="tag-block">
              <span class="summary-label">Downloads</span>
              <div class="download-list">${createDownloadList(project.downloads)}</div>
            </div>` : ""}
          </div>
        </article>
      `
    )
    .join("");
}

renderProjects(portfolioProjects);
