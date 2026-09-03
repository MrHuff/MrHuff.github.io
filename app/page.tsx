const links = {
  email: "mailto:robert.stats.hu@gmail.com",
  scholar: "https://scholar.google.com/citations?user=SaxR4ugAAAAJ&hl=en",
  github: "https://github.com/MrHuff",
  linkedin: "https://www.linkedin.com/in/robert-hu-77680450/",
  graphcore: "https://graphcore-research.github.io/author/roberthu/",
  oxford: "https://csml.stats.ox.ac.uk/people/hu_r/",
  orcid: "https://orcid.org/0000-0001-8620-4618",
};

const researchAreas = [
  {
    title: "Low-precision training",
    description:
      "FP4 and microscaling recipes, numerical stability, and fused CUDA kernels for efficient foundation-model training.",
  },
  {
    title: "Long-context systems",
    description:
      "Hardware-aware attention algorithms for contexts that outgrow dense quadratic computation.",
  },
  {
    title: "Statistical machine learning",
    description:
      "Scalable kernel methods, causal testing, interpretable models, survival analysis, and uncertainty-aware learning.",
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
    href: "https://www.sciencedirect.com/science/article/pii/S277241582200027X",
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
    venue: "AISTATS · Best Paper Honourable Mention",
    title:
      "Survival Regression with Proper Scoring Rules and Monotonic Neural Networks",
    authors: "David Rindt*, Robert Hu*, David Steinsaltz, Dino Sejdinovic",
    href: "https://proceedings.mlr.press/v151/rindt22a.html",
  },
  {
    year: "2022",
    venue: "Machine Learning, 111",
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

const experience = [
  {
    period: "2025 — present",
    role: "Research Scientist",
    place: "Graphcore, London",
    summary:
      "Working on FP4 pretraining, CUDA kernels, and long-context attention systems.",
  },
  {
    period: "2022 — 2025",
    role: "Applied Scientist",
    place: "Amazon, London",
    summary:
      "Developed and deployed language-model and auction-learning systems.",
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
      "Combined academic research with large-scale forecasting and churn modelling.",
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
      { "@type": "CollegeOrUniversity", name: "KTH Royal Institute of Technology" },
      { "@type": "CollegeOrUniversity", name: "Stockholm School of Economics" },
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

      <div className="page">
        <header className="site-header" id="top">
          <a className="site-title" href="#top">
            Robert Hu
          </a>
          <nav aria-label="Primary navigation">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#experience">Experience</a>
            <a href="#code">Code</a>
          </nav>
        </header>

        <main id="main">
          <section className="intro" aria-labelledby="intro-title">
            <div>
              <p className="position">Research Scientist · Graphcore · London</p>
              <h1 id="intro-title">Robert Hu</h1>
              <p className="intro-copy">
                I work on efficient machine learning systems and statistical
                machine learning—from theorem to throughput. My current work
                focuses on low-precision training, CUDA kernels, and long-context
                attention.
              </p>
              <p className="link-line" aria-label="Profile links">
                <ExternalLink href={links.scholar}>Google Scholar</ExternalLink>
                <ExternalLink href={links.github}>GitHub</ExternalLink>
                <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
                <ExternalLink href={links.orcid}>ORCID</ExternalLink>
                <ExternalLink href={links.email}>Email</ExternalLink>
              </p>
            </div>

            <figure className="matcha-figure">
              <div
                className="matcha-image"
                role="img"
                aria-label="A glass of strawberry matcha"
              />
              <figcaption>Strawberry matcha helps.</figcaption>
            </figure>
          </section>

          <section className="section" id="research">
            <h2>Research</h2>
            <p className="section-intro">
              My research sits between statistical foundations and efficient
              implementation.
            </p>
            <ul className="research-list">
              {researchAreas.map((area) => (
                <li key={area.title}>
                  <strong>{area.title}.</strong> {area.description}
                </li>
              ))}
            </ul>

            <article className="latest-paper">
              <p className="latest-label">
                <span aria-hidden="true" /> Latest paper · 2026
              </p>
              <h3>
                <ExternalLink href="https://arxiv.org/abs/2609.02846">
                  UE5M3 FP4 Block Scaling for Stable Language Model Pretraining
                </ExternalLink>
              </h3>
              <p className="paper-authors">Robert Hu, Carlo Luschi, Paul Balança</p>
              <p>
                A simpler FP4 recipe built around wide-range UE5M3 block scales,
                evaluated by pretraining an 8B model for nearly 190 billion
                tokens.
              </p>
            </article>
          </section>

          <section className="section" id="publications">
            <div className="section-heading">
              <h2>Publications</h2>
              <ExternalLink href={links.scholar}>Complete list on Google Scholar ↗</ExternalLink>
            </div>
            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={`${publication.year}-${publication.title}`}>
                  <span className="publication-year">{publication.year}</span>
                  <div>
                    <h3>
                      {publication.href ? (
                        <ExternalLink href={publication.href}>
                          {publication.title}
                        </ExternalLink>
                      ) : (
                        publication.title
                      )}
                    </h3>
                    <p>{publication.authors}</p>
                    <p className="venue">{publication.venue}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="footnote">* Equal contribution.</p>
          </section>

          <section className="section" id="experience">
            <div className="section-heading">
              <h2>Experience</h2>
              <ExternalLink href={links.oxford}>Oxford profile ↗</ExternalLink>
            </div>
            <div className="plain-list">
              {experience.map((item) => (
                <article key={`${item.period}-${item.role}`}>
                  <p className="item-date">{item.period}</p>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="item-place">{item.place}</p>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <div className="plain-list compact-list">
              {education.map((item) => (
                <article key={item.degree}>
                  <p className="item-date">{item.period}</p>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="code">
            <div className="section-heading">
              <h2>Code</h2>
              <ExternalLink href={links.github}>@MrHuff on GitHub ↗</ExternalLink>
            </div>
            <ul className="code-list">
              {codeProjects.map((project) => (
                <li key={project.name}>
                  <ExternalLink href={project.href}>{project.name}</ExternalLink>
                  <span> — {project.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="section contact" id="contact">
            <h2>Contact</h2>
            <p>
              The best way to reach me is at{" "}
              <ExternalLink href={links.email}>robert.stats.hu@gmail.com</ExternalLink>.
            </p>
          </section>
        </main>

        <footer>
          <p>Robert Hu · London</p>
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
