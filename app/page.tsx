const links = {
  email: "mailto:robert.stats.hu@gmail.com",
  scholar:
    "https://scholar.google.com/citations?user=SaxR4ugAAAAJ&hl=en",
  github: "https://github.com/MrHuff",
  linkedin: "https://www.linkedin.com/in/robert-hu-77680450/",
  graphcore: "https://graphcore-research.github.io/author/roberthu/",
  oxford: "https://csml.stats.ox.ac.uk/people/hu_r/",
  orcid: "https://orcid.org/0000-0001-8620-4618",
};

const researchAreas = [
  {
    number: "01",
    title: "Low-precision training",
    description:
      "FP4 and microscaling recipes, numerical stability, and fused CUDA kernels that turn lower precision into real end-to-end throughput.",
    tags: ["FP4 / MXFP4", "CUDA", "Distributed training"],
  },
  {
    number: "02",
    title: "Long-context systems",
    description:
      "Hardware-aware attention algorithms for contexts that outgrow dense quadratic computation, including hierarchical and packed sparse topologies.",
    tags: ["Attention", "Sequence packing", "Kernel design"],
  },
  {
    number: "03",
    title: "Statistical machine learning",
    description:
      "Scalable kernel methods, causal testing, interpretable models, survival analysis, and uncertainty-aware learning.",
    tags: ["Causal inference", "Kernels", "Uncertainty"],
  },
];

const selectedWork = [
  {
    year: "2026",
    venue: "arXiv",
    title: "UE5M3 FP4 Block Scaling for Stable Language Model Pretraining",
    authors: "Robert Hu, Carlo Luschi, Paul Balança",
    description:
      "A simpler FP4 recipe built around wide-range UE5M3 block scales, evaluated by pretraining an 8B model for nearly 190 billion tokens.",
    href: "https://arxiv.org/abs/2609.02846",
    accent: "Latest",
  },
  {
    year: "2025",
    venue: "arXiv",
    title: "Elucidating the Design Space of FP4 Training",
    authors: "Robert Hu, Carlo Luschi, Paul Balança",
    description:
      "A unified gradient-based framework and large empirical study of scaling, rounding, and stabilization choices for FP4 training.",
    href: "https://arxiv.org/abs/2509.17791",
    accent: "FP4",
  },
  {
    year: "2024",
    venue: "JMLR",
    title:
      "A Kernel Test for Causal Association via Noise Contrastive Backdoor Adjustment",
    authors: "Robert Hu, Dino Sejdinovic, Robin J. Evans",
    description:
      "A non-parametric test for causal association that combines density-ratio estimation with kernel independence testing.",
    href: "https://www.jmlr.org/papers/v25/21-1409.html",
    accent: "Causality",
  },
  {
    year: "2022",
    venue: "NeurIPS",
    title: "Giga-scale Kernel Matrix-Vector Multiplication on GPU",
    authors: "Robert Hu, Siu Lun Chau, Dino Sejdinovic, Joan Glaunès",
    description:
      "An empirical linear-time, linear-memory GPU method that scales kernel matrix-vector products to a billion points.",
    href:
      "https://proceedings.neurips.cc/paper_files/paper/2022/hash/3b1f32693e9fe15c949a0742bf226803-Abstract-Conference.html",
    accent: "Systems",
  },
  {
    year: "2022",
    venue: "AISTATS · Honourable Mention",
    title:
      "Survival Regression with Proper Scoring Rules and Monotonic Neural Networks",
    authors: "David Rindt*, Robert Hu*, David Steinsaltz, Dino Sejdinovic",
    description:
      "A proper-scoring approach to neural survival regression with fast inference at million-observation scale.",
    href: "https://proceedings.mlr.press/v151/rindt22a.html",
    accent: "Award",
  },
];

const publications = [
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
    year: "2024",
    venue: "JMLR 25(160)",
    title:
      "A Kernel Test for Causal Association via Noise Contrastive Backdoor Adjustment",
    authors: "Robert Hu, Dino Sejdinovic, Robin J. Evans",
    href: "https://www.jmlr.org/papers/v25/21-1409.html",
  },
  {
    year: "2024",
    venue: "TMLR",
    title:
      "Doubly Robust Kernel Statistics for Testing Distributional Treatment Effects",
    authors: "Jake Fawkes, Robert Hu, Robin J. Evans, Dino Sejdinovic",
    href: "https://openreview.net/forum?id=5g5zFVj33K",
  },
  {
    year: "2023",
    venue: "J. Computational Mathematics & Data Science",
    title: "Towards Deep Interpretable Features",
    authors: "Robert Hu, Dino Sejdinovic",
    href:
      "https://www.sciencedirect.com/science/article/pii/S277241582200027X",
  },
  {
    year: "2023",
    venue: "Amazon Machine Learning Conference",
    title: "Quantifying Uncertainty in Advertising Auctions",
    authors: "Robert Hu, Ben Allison",
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
    venue: "AISTATS · Honourable Mention",
    title:
      "Survival Regression with Proper Scoring Rules and Monotonic Neural Networks",
    authors: "David Rindt*, Robert Hu*, David Steinsaltz, Dino Sejdinovic",
    href: "https://proceedings.mlr.press/v151/rindt22a.html",
  },
  {
    year: "2022",
    venue: "Machine Learning 111",
    title: "Large Scale Tensor Regression Using Kernels and Variational Inference",
    authors: "Robert Hu, Geoff K. Nicholls, Dino Sejdinovic",
    href: "https://link.springer.com/article/10.1007/s10994-021-06067-7",
  },
  {
    year: "2022",
    venue: "University of Oxford · DPhil thesis",
    title: "Large Scale Methods for Kernels, Causal Inference and Survival Modelling",
    authors: "Robert Hu",
    href:
      "https://ora.ox.ac.uk/objects/uuid%3A6a5773e7-2fea-4914-a693-05a55c8b3f5d",
  },
  {
    year: "2021",
    venue: "Northern Lights Deep Learning Workshop",
    title: "Robust Deep Interpretable Features for Binary Image Classification",
    authors: "Robert Hu, Dino Sejdinovic",
    href: "https://septentrio.uit.no/index.php/nldl/article/view/5708",
  },
];

const codeProjects = [
  {
    name: "PREF-SHAP",
    description: "Shapley-value explanations for pairwise preference models.",
    href: "https://github.com/MrHuff/PREF-SHAP",
  },
  {
    name: "GWI",
    description: "Gaussian Wasserstein inference in function spaces.",
    href: "https://github.com/MrHuff/GWI",
  },
  {
    name: "Sumo-Net",
    description: "Monotonic neural networks for survival regression.",
    href: "https://github.com/MrHuff/Sumo-Net",
  },
  {
    name: "kgformula",
    description: "Kernel testing for causal association with backdoor adjustment.",
    href: "https://github.com/MrHuff/kgformula",
  },
  {
    name: "KernelFriedTensor",
    description: "Scalable tensor regression with kernels and variational inference.",
    href: "https://github.com/MrHuff/KernelFriedTensor",
  },
];

const experience = [
  {
    period: "2025 — Now",
    role: "Research Scientist",
    place: "Graphcore · London",
    summary:
      "Building next-generation pretraining infrastructure: stable FP4/MXFP4 recipes, high-throughput CUDA kernels, and long-context attention systems.",
    highlights: ["FP4 pretraining", "CUDA kernels", "Hierarchical attention"],
  },
  {
    period: "2022 — 2025",
    role: "Applied Scientist",
    place: "Amazon · London",
    summary:
      "Developed and deployed LLM and auction-learning systems, spanning model fine-tuning, uncertainty quantification, exploration, and reserve-price mechanisms.",
    highlights: ["Production LLMs", "Ad auctions", "Causal experiments"],
  },
  {
    period: "2022",
    role: "Postdoctoral Research Assistant",
    place: "University of Oxford",
    summary:
      "Worked with Prof. David Steinsaltz on survival analysis for genomic data.",
    highlights: ["Survival analysis", "Genomics"],
  },
  {
    period: "2018 — 2022",
    role: "Industrial PhD",
    place: "H&M · Oxford / Stockholm",
    summary:
      "Combined academic research with deployed forecasting and churn models at tens-of-millions-of-observations scale.",
    highlights: ["Large-scale forecasting", "Churn modelling", "Deployment"],
  },
  {
    period: "2016 — 2018",
    role: "Data Scientist & Data Analyst",
    place: "H&M · iZettle · Stockholm",
    summary:
      "Built forecasting, experimentation, data, and decision-support systems for commerce and acquisition teams.",
    highlights: ["Gaussian processes", "A/B testing", "Data systems"],
  },
];

const education = [
  {
    period: "2018 — 2022",
    degree: "PhD · Machine Learning & Statistics",
    school: "University of Oxford",
    detail:
      "Scalable kernel methods, causal inference, and interpretable deep learning.",
  },
  {
    period: "2014 — 2016",
    degree: "MSc · Mathematical Statistics",
    school: "KTH Royal Institute of Technology",
    detail: "Including a semester in Mathematics at ETH Zürich.",
  },
  {
    period: "2014 — 2017",
    degree: "BSc · Business & Economics",
    school: "Stockholm School of Economics",
    detail: "Completed in parallel with studies at KTH.",
  },
  {
    period: "2011 — 2014",
    degree: "BSc · Engineering Physics",
    school: "KTH Royal Institute of Technology",
    detail: "Foundations in mathematics, physics, and computation.",
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

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robert Hu",
    jobTitle: "Research Scientist",
    url: "https://mrhuff.github.io/",
    email: "mailto:robert.stats.hu@gmail.com",
    worksFor: {
      "@type": "Organization",
      name: "Graphcore",
      url: "https://www.graphcore.ai/",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Oxford" },
      {
        "@type": "CollegeOrUniversity",
        name: "KTH Royal Institute of Technology",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Stockholm School of Economics",
      },
    ],
    sameAs: [
      links.scholar,
      links.github,
      links.linkedin,
      links.orcid,
      links.graphcore,
    ],
    knowsAbout: [
      "Low-precision machine learning",
      "FP4 training",
      "CUDA",
      "Causal inference",
      "Kernel methods",
      "Survival analysis",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page-noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Robert Hu, home">
          <span className="brand-mark">RH</span>
          <span className="brand-copy">
            <strong>Robert Hu</strong>
            <span>Research Scientist</span>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#code">Code</a>
          <a className="nav-cta" href="#contact">
            Contact <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero site-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Research Scientist · Graphcore · London
            </p>

            <h1>
              Machine learning,
              <span>from theorem to throughput.</span>
            </h1>

            <p className="hero-intro">
              I build learning systems that remain principled at scale — from
              causal inference and kernel methods to FP4 pretraining, CUDA
              kernels, and long-context attention.
            </p>

            <div className="hero-actions">
              <ExternalLink className="button button-primary" href={links.scholar}>
                Google Scholar <span aria-hidden="true">↗</span>
              </ExternalLink>
              <ExternalLink
                className="button button-secondary"
                href="https://arxiv.org/abs/2609.02846"
              >
                Latest paper <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>

            <div className="hero-links" aria-label="Profile links">
              <ExternalLink href={links.github}>GitHub</ExternalLink>
              <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={links.orcid}>ORCID</ExternalLink>
              <ExternalLink href={links.email}>Email</ExternalLink>
            </div>
          </div>

          <aside className="portrait-card" aria-label="About Robert Hu">
            <div className="portrait-grid" aria-hidden="true">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
            <div className="portrait-frame" aria-hidden="true">
              <span className="portrait-initials">R·H</span>
            </div>
            <div className="portrait-meta">
              <span>Current focus</span>
              <strong>Efficient foundation-model training</strong>
              <ExternalLink href={links.graphcore}>
                Graphcore Research <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Selected research signals">
          <div className="site-shell signal-grid">
            <div className="signal-item">
              <strong>190B</strong>
              <span>pretraining tokens in latest FP4 study</span>
            </div>
            <div className="signal-item">
              <strong>21.2%</strong>
              <span>model-body throughput uplift in native ablation</span>
            </div>
            <div className="signal-item">
              <strong>1B</strong>
              <span>point kernel product in under one minute</span>
            </div>
            <div className="signal-item">
              <strong>AISTATS ’22</strong>
              <span>Best Paper Honourable Mention</span>
            </div>
          </div>
        </section>

        <section className="section site-shell" id="research">
          <div className="section-heading">
            <p className="section-kicker">Research</p>
            <h2>Where algorithms meet the machine.</h2>
            <p>
              My work crosses statistical foundations, numerical formats, and
              hardware-aware implementation.
            </p>
          </div>

          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.number}>
                <span className="card-number">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul
                  className="tag-list"
                  aria-label={area.title + " topics"}
                >
                  {area.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="latest-section">
          <div className="site-shell latest-grid">
            <div>
              <p className="section-kicker section-kicker-light">Latest work</p>
              <p className="latest-date">02 · 09 · 2026</p>
            </div>
            <div className="latest-copy">
              <span className="paper-label">FP4 pretraining · arXiv</span>
              <h2>UE5M3 FP4 Block Scaling for Stable Language Model Pretraining</h2>
              <p>
                We pair E2M1 payloads with wider-range UE5M3 block scales,
                enabling a simpler recipe with periodic tensor scaling,
                selective stochastic rounding, and FP4 across eligible internal
                linear layers.
              </p>
              <div className="latest-facts">
                <span>Nemotron-H 8B</span>
                <span>Nearly 190B tokens</span>
                <span>21.2% throughput ablation uplift</span>
              </div>
              <ExternalLink
                className="text-link text-link-light"
                href="https://arxiv.org/abs/2609.02846"
              >
                Read the paper <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="section site-shell" id="publications">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>Research, with the implementation close at hand.</h2>
            </div>
            <ExternalLink className="text-link" href={links.scholar}>
              Complete record on Scholar <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>

          <div className="work-list">
            {selectedWork.map((work, index) => (
              <ExternalLink
                className="work-row"
                href={work.href}
                key={work.title}
              >
                <span className="work-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="work-main">
                  <span className="work-meta">
                    {work.year} · {work.venue}
                  </span>
                  <strong>{work.title}</strong>
                  <span className="work-authors">{work.authors}</span>
                  <span className="work-description">{work.description}</span>
                </span>
                <span className="work-accent">{work.accent}</span>
                <span className="work-arrow" aria-hidden="true">
                  ↗
                </span>
              </ExternalLink>
            ))}
          </div>

          <details className="publication-drawer">
            <summary>
              <span>View full publication list</span>
              <span className="summary-count">{publications.length} entries</span>
            </summary>
            <div className="publication-list">
              {publications.map((publication) => {
                const content = (
                  <>
                    <span className="publication-year">{publication.year}</span>
                    <span className="publication-copy">
                      <strong>{publication.title}</strong>
                      <span>{publication.authors}</span>
                      <em>{publication.venue}</em>
                    </span>
                    {publication.href ? (
                      <span className="publication-arrow" aria-hidden="true">
                        ↗
                      </span>
                    ) : null}
                  </>
                );

                return publication.href ? (
                  <ExternalLink
                    className="publication-row"
                    href={publication.href}
                    key={publication.year + "-" + publication.title}
                  >
                    {content}
                  </ExternalLink>
                ) : (
                  <div
                    className="publication-row"
                    key={publication.year + "-" + publication.title}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
            <p className="equal-note">* Equal contribution.</p>
          </details>
        </section>

        <section className="section section-tint" id="experience">
          <div className="site-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">Experience</p>
                <h2>Research that survives contact with production.</h2>
              </div>
              <ExternalLink className="text-link" href={links.oxford}>
                Oxford profile <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article
                  className="timeline-row"
                  key={item.period + "-" + item.role}
                >
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-title">
                    <h3>{item.role}</h3>
                    <p>{item.place}</p>
                  </div>
                  <div className="timeline-body">
                    <p>{item.summary}</p>
                    <ul className="tag-list">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section site-shell" id="code">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">Open source</p>
              <h2>Methods you can run.</h2>
            </div>
            <ExternalLink className="text-link" href={links.github}>
              @MrHuff on GitHub <span aria-hidden="true">↗</span>
            </ExternalLink>
          </div>

          <div className="code-grid">
            {codeProjects.map((project) => (
              <ExternalLink
                className="code-card"
                href={project.href}
                key={project.name}
              >
                <span className="code-prompt" aria-hidden="true">
                  $
                </span>
                <strong>{project.name}</strong>
                <p>{project.description}</p>
                <span className="code-link">
                  View repository <span aria-hidden="true">↗</span>
                </span>
              </ExternalLink>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="site-shell education-layout">
            <div className="section-heading">
              <p className="section-kicker">Education</p>
              <h2>A statistical foundation, built across disciplines.</h2>
              <ExternalLink className="text-link" href={links.oxford}>
                Oxford profile <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>

            <div className="education-list">
              {education.map((item) => (
                <article className="education-row" key={item.degree}>
                  <span>{item.period}</span>
                  <div>
                    <h3>{item.degree}</h3>
                    <strong>{item.school}</strong>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="recognition-card">
              <p className="section-kicker section-kicker-light">Recognition</p>
              <strong>AISTATS 2022</strong>
              <h3>Best Paper Honourable Mention</h3>
              <p>
                For work on proper scoring rules and monotonic neural networks
                for survival regression.
              </p>
              <div className="recognition-divider" />
              <p className="service-copy">
                Reviewer for NeurIPS, AISTATS, and ICML.
              </p>
            </aside>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="site-shell contact-grid">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>
                Interested in efficient training, long contexts, or statistical
                ML?
              </h2>
            </div>
            <div className="contact-action">
              <p>
                The best way to reach me is by email. I am based in London and
                always happy to compare notes on research.
              </p>
              <ExternalLink className="email-link" href={links.email}>
                robert.stats.hu@gmail.com
                <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="site-shell footer-grid">
          <div>
            <strong>Robert Hu</strong>
            <span>Machine learning · from theorem to throughput.</span>
          </div>
          <div className="footer-links">
            <ExternalLink href={links.scholar}>Scholar</ExternalLink>
            <ExternalLink href={links.github}>GitHub</ExternalLink>
            <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
            <a href="#top">Back to top ↑</a>
          </div>
          <p>London · 2026</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
