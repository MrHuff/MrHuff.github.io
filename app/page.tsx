"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

type Publication = {
  year: string;
  venue: string;
  title: string;
  authors: string;
  href?: string;
};

type CodeProject = {
  name: string;
  href: string;
};

type WorkGroup = {
  title: string;
  description: string;
  publications: Publication[];
  code: CodeProject[];
};

const links = {
  scholar: "https://scholar.google.com/citations?user=SaxR4ugAAAAJ&hl=en",
  github: "https://github.com/MrHuff",
  linkedin: "https://www.linkedin.com/in/robert-hu-77680450/",
  oxford: "https://csml.stats.ox.ac.uk/people/hu_r/",
  orcid: "https://orcid.org/0000-0001-8620-4618",
};

const primaryWork: WorkGroup[] = [
  {
    title: "Systems and numerics for scale",
    description:
      "Numerical formats, GPU algorithms, and scalable methods that make training and inference more computationally efficient.",
    publications: [
      {
        year: "2026",
        venue: "arXiv",
        title: "UE5M3 FP4 Block Scaling for Stable Language Model Pretraining",
        authors: "Robert Hu, Carlo Luschi, Paul Balança",
        href: "https://arxiv.org/abs/2609.02846",
      },
      {
        year: "2025",
        venue: "arXiv",
        title: "Elucidating the Design Space of FP4 Training",
        authors: "Robert Hu, Carlo Luschi, Paul Balança",
        href: "https://arxiv.org/abs/2509.17791",
      },
      {
        year: "2022",
        venue: "NeurIPS",
        title: "Giga-scale Kernel Matrix-Vector Multiplication on GPU",
        authors: "Robert Hu, Siu Lun Chau, Dino Sejdinovic, Joan Glaunès",
        href:
          "https://proceedings.neurips.cc/paper_files/paper/2022/hash/3b1f32693e9fe15c949a0742bf226803-Abstract-Conference.html",
      },
      {
        year: "2022",
        venue: "Machine Learning, 111",
        title: "Large Scale Tensor Regression Using Kernels and Variational Inference",
        authors: "Robert Hu, Geoff K. Nicholls, Dino Sejdinovic",
        href: "https://link.springer.com/article/10.1007/s10994-021-06067-7",
      },
    ],
    code: [
      {
        name: "KernelFriedTensor",
        href: "https://github.com/MrHuff/KernelFriedTensor",
      },
    ],
  },
  {
    title: "Grounding and interpretation",
    description:
      "Causal methods and interpretable representations for models that learn more than correlation and are easier to inspect.",
    publications: [
      {
        year: "2024",
        venue: "Journal of Machine Learning Research, 25(160)",
        title:
          "A Kernel Test for Causal Association via Noise Contrastive Backdoor Adjustment",
        authors: "Robert Hu, Dino Sejdinovic, Robin J. Evans",
        href: "https://www.jmlr.org/papers/v25/21-1409.html",
      },
      {
        year: "2024",
        venue: "Transactions on Machine Learning Research",
        title:
          "Doubly Robust Kernel Statistics for Testing Distributional Treatment Effects",
        authors: "Jake Fawkes, Robert Hu, Robin J. Evans, Dino Sejdinovic",
        href: "https://openreview.net/forum?id=5g5zFVj33K",
      },
      {
        year: "2023",
        venue: "Computational Mathematics and Data Science",
        title: "Towards Deep Interpretable Features",
        authors: "Robert Hu, Dino Sejdinovic",
        href:
          "https://www.sciencedirect.com/science/article/pii/S277241582200027X",
      },
      {
        year: "2022",
        venue: "University of Oxford · DPhil thesis",
        title:
          "Large Scale Methods for Kernels, Causal Inference and Survival Modelling",
        authors: "Robert Hu",
        href:
          "https://ora.ox.ac.uk/objects/uuid%3A6a5773e7-2fea-4914-a693-05a55c8b3f5d",
      },
      {
        year: "2021",
        venue: "Northern Lights Deep Learning Workshop",
        title:
          "Robust Deep Interpretable Features for Binary Image Classification",
        authors: "Robert Hu, Dino Sejdinovic",
        href: "https://septentrio.uit.no/index.php/nldl/article/view/5708",
      },
    ],
    code: [
      {
        name: "kgformula",
        href: "https://github.com/MrHuff/kgformula",
      },
    ],
  },
];

const predictiveWork: WorkGroup = {
  title: "Predictive ML, recommendation, and decisions",
  description:
    "A second strand on preferences, uncertainty, survival modelling, and statistically principled prediction.",
  publications: [
    {
      year: "2023",
      venue: "Amazon Machine Learning Conference",
      title: "Quantifying Uncertainty in Advertising Auctions",
      authors: "Robert Hu, Ben Allison",
    },
    {
      year: "2022",
      venue: "NeurIPS",
      title:
        "Generalized Variational Inference in Function Spaces: Gaussian Measures Meet Bayesian Deep Learning",
      authors: "Veit D. Wild*, Robert Hu*, Dino Sejdinovic",
      href:
        "https://proceedings.neurips.cc/paper_files/paper/2022/hash/18210aa6209b9adfc97b8c17c3741d95-Abstract-Conference.html",
    },
    {
      year: "2022",
      venue: "NeurIPS",
      title: "Explaining Preferences with Shapley Values",
      authors: "Robert Hu*, Siu Lun Chau*, Jaime Ferrando Huertas, Dino Sejdinovic",
      href:
        "https://proceedings.neurips.cc/paper_files/paper/2022/hash/b1656d20067ca7c84a33785c4083a75e-Abstract-Conference.html",
    },
    {
      year: "2022",
      venue: "NeurIPS",
      title: "RKHS-SHAP: Shapley Values for Kernel Methods",
      authors: "Siu Lun Chau, Robert Hu, Javier González, Dino Sejdinovic",
      href:
        "https://proceedings.neurips.cc/paper_files/paper/2022/hash/54bb63eaec676b87a2278a22b1bd02a2-Abstract-Conference.html",
    },
    {
      year: "2022",
      venue: "AISTATS · Best Paper Honourable Mention",
      title:
        "Survival Regression with Proper Scoring Rules and Monotonic Neural Networks",
      authors: "David Rindt*, Robert Hu*, David Steinsaltz, Dino Sejdinovic",
      href: "https://proceedings.mlr.press/v151/rindt22a.html",
    },
  ],
  code: [
    { name: "PREF-SHAP", href: "https://github.com/MrHuff/PREF-SHAP" },
    { name: "GWI", href: "https://github.com/MrHuff/GWI" },
    { name: "Sumo-Net", href: "https://github.com/MrHuff/Sumo-Net" },
  ],
};

const experience = [
  {
    period: "2025 — 2026",
    role: "Research Scientist",
    place: "Graphcore, London",
    summary:
      "Research on low-precision pre-training, GPU kernels, and hardware-aware attention.",
  },
  {
    period: "2022 — 2025",
    role: "Applied Scientist",
    place: "Amazon, London",
    summary:
      "Developed and deployed language-model and advertising-auction systems.",
  },
  {
    period: "2022",
    role: "Postdoctoral Research Assistant",
    place: "University of Oxford",
    summary: "Worked on survival analysis for genomic data.",
  },
  {
    period: "2018 — 2022",
    role: "Industrial PhD",
    place: "H&M and University of Oxford",
    summary:
      "Combined statistical research with large-scale forecasting and churn modelling.",
  },
  {
    period: "2016 — 2018",
    role: "Data Scientist and Data Analyst",
    place: "H&M and iZettle, Stockholm",
    summary:
      "Built forecasting, experimentation, and decision-support systems.",
  },
];

const education = [
  {
    period: "2018 — 2022",
    degree: "DPhil in Machine Learning and Statistics",
    school: "University of Oxford",
  },
  {
    period: "2014 — 2016",
    degree: "MSc in Mathematical Statistics",
    school: "KTH Royal Institute of Technology",
  },
  {
    period: "2014 — 2017",
    degree: "BSc in Business and Economics",
    school: "Stockholm School of Economics",
  },
  {
    period: "2011 — 2014",
    degree: "BSc in Engineering Physics",
    school: "KTH Royal Institute of Technology",
  },
];

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function PublicationList({ publications }: { publications: Publication[] }) {
  return (
    <ol className="publication-list">
      {publications.map((publication) => (
        <li key={`${publication.year}-${publication.title}`}>
          <p className="publication-meta">
            {publication.year} · {publication.venue}
          </p>
          <h4>
            {publication.href ? (
              <ExternalLink href={publication.href}>
                {publication.title}
              </ExternalLink>
            ) : (
              publication.title
            )}
          </h4>
          <p className="publication-authors">{publication.authors}</p>
        </li>
      ))}
    </ol>
  );
}

function RelatedCode({ projects }: { projects: CodeProject[] }) {
  return (
    <p className="related-code">
      <span>Related code</span>{" "}
      {projects.map((project, index) => (
        <span key={project.name}>
          {index > 0 ? " · " : ""}
          <ExternalLink href={project.href}>{project.name}</ExternalLink>
        </span>
      ))}
    </p>
  );
}

export default function Home() {
  const [researchMode, setResearchMode] = useState<"main" | "predictive">(
    "main",
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robert Hu",
    jobTitle: "Machine Learning Researcher",
    url: "https://mrhuff.github.io/",
    image: "https://mrhuff.github.io/robert-hu.jpeg",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Oxford" },
      { "@type": "CollegeOrUniversity", name: "KTH Royal Institute of Technology" },
      { "@type": "CollegeOrUniversity", name: "Stockholm School of Economics" },
    ],
    sameAs: [links.scholar, links.github, links.linkedin, links.orcid],
    knowsAbout: [
      "Efficient machine learning systems",
      "Low-precision training",
      "Numerical methods for machine learning",
      "Hardware-aware algorithms",
      "Causal inference",
      "Recommender systems",
      "Interpretable machine learning",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page">
        <header className="site-header" id="top">
          <a className="site-title" href="#top">
            Robert Hu
            <span className="header-treat" role="img" aria-label="strawberry matcha">
              🍓🍵
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#research">Research</a>
            <a href="#work">Work</a>
            <a href="#background">Background</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="main">
          <section className="hero" aria-labelledby="intro-title">
            <div className="hero-copy">
              <p className="eyebrow">Machine learning researcher · London</p>
              <h1 id="intro-title">Robert Hu</h1>
              <p className="research-line">
                Systems and numerics for efficient learning.
              </p>
              <p className="intro-copy">
                I work on the systems and numerical foundations of large-scale
                learning, and on methods for grounding and interpreting what
                models learn.
              </p>
              <p className="link-line" aria-label="Profile links">
                <ExternalLink href={links.scholar}>Google Scholar</ExternalLink>
                <ExternalLink href={links.github}>GitHub</ExternalLink>
                <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={links.orcid}>ORCID</ExternalLink>
                <a href="#contact">Contact</a>
              </p>
            </div>

            <figure className="portrait">
              <img
                src="/robert-hu.jpeg"
                alt="Portrait of Robert Hu"
                width="800"
                height="1200"
              />
            </figure>
          </section>

          <div
            className={`research-mode${
              researchMode === "predictive" ? " is-predictive" : ""
            }`}
          >
            <section className="section research-overview" id="research">
              <div className="research-header">
                <h2>Research</h2>
                <button
                  className="mode-toggle"
                  type="button"
                  aria-pressed={researchMode === "predictive"}
                  aria-controls="research-content work-content"
                  onClick={() =>
                    setResearchMode((current) =>
                      current === "main" ? "predictive" : "main",
                    )
                  }
                >
                  <span aria-hidden="true">
                    {researchMode === "predictive" ? "☀" : "◐"}
                  </span>
                  {researchMode === "predictive"
                    ? "Main research"
                    : "Other research"}
                </button>
              </div>

              <div id="research-content" aria-live="polite">
                <article
                  className="research-summary"
                  hidden={researchMode !== "main"}
                >
                  <p className="section-label">Primary direction</p>
                  <h3>Efficient, grounded, interpretable learning.</h3>
                  <p>
                    Scaling is most useful when computation is efficient. I study
                    stable numerics and hardware-aware algorithms for pre-training
                    and inference. My longer-term goal is to bring these ideas
                    together: scale models efficiently, then teach them to infer
                    cause and effect rather than correlation alone—making their
                    predictions better grounded and easier to interpret.
                  </p>
                  <p className="current-focus">
                    <strong>Current focus.</strong> Low-precision training and
                    inference—particularly FP4—with an emphasis on stability and
                    hardware efficiency.
                  </p>
                </article>

                <article
                  className="research-summary alternate-summary"
                  hidden={researchMode !== "predictive"}
                >
                  <p className="section-label">Second strand</p>
                  <h3>Predictive ML and recommendation.</h3>
                  <p>
                    I also work on traditional predictive machine learning:
                    preferences and recommendation, uncertainty, survival
                    modelling, forecasting, advertising, and deployed decision
                    systems.
                  </p>
                </article>
              </div>
            </section>

            <section className="section" id="work">
              <div className="section-heading split-heading">
                <div>
                  <h2>Research, by theme</h2>
                  <p>
                    {researchMode === "predictive"
                      ? "The other half of the research record."
                      : "The main research programme."}
                  </p>
                </div>
                <ExternalLink href={links.scholar}>
                  Complete record on Scholar ↗
                </ExternalLink>
              </div>

              <div id="work-content">
                <div className="work-panel" hidden={researchMode !== "main"}>
                  {primaryWork.map((group) => (
                    <article className="work-group" key={group.title}>
                      <p className="section-label">Primary research</p>
                      <h3>{group.title}</h3>
                      <p className="group-description">{group.description}</p>
                      <PublicationList publications={group.publications} />
                      <RelatedCode projects={group.code} />
                    </article>
                  ))}
                </div>

                <div
                  className="work-panel alternate-work"
                  hidden={researchMode !== "predictive"}
                >
                  <article className="work-group">
                    <p className="section-label">Second strand</p>
                    <h3>{predictiveWork.title}</h3>
                    <p className="group-description">
                      {predictiveWork.description}
                    </p>
                    <PublicationList publications={predictiveWork.publications} />
                    <RelatedCode projects={predictiveWork.code} />
                  </article>
                </div>
              </div>
              <p className="footnote">* Equal contribution.</p>
            </section>
          </div>

          <section className="section" id="background">
            <h2>Background</h2>
            <div className="background-layout">
              <div>
                <div className="subheading-row">
                  <h3>Selected experience</h3>
                  <ExternalLink href={links.oxford}>Oxford profile ↗</ExternalLink>
                </div>
                <div className="plain-list">
                  {experience.map((item) => (
                    <article key={`${item.period}-${item.role}`}>
                      <p className="item-date">{item.period}</p>
                      <h4>{item.role}</h4>
                      <p className="item-place">{item.place}</p>
                      <p>{item.summary}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="subheading">Education</h3>
                <div className="plain-list education-list">
                  {education.map((item) => (
                    <article key={item.degree}>
                      <p className="item-date">{item.period}</p>
                      <h4>{item.degree}</h4>
                      <p>{item.school}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section contact" id="contact">
            <h2>Contact</h2>
            <p>The best way to reach me is by email.</p>
            <p className="email-address">
              robert.stats.hu <span>[at]</span> gmail <span>[dot]</span> com
            </p>
          </section>
        </main>

        <footer>
          <p>Robert Hu · Machine learning researcher · London</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
