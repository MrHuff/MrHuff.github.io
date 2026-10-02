import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

const title = "The case for FP4 — Robert Hu";
const description =
  "The hardware, numerics and kernel work behind training and serving LLMs in FP4.";
const url = "/posts/the-case-for-fp4/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    url,
    title,
    description,
    siteName: "Robert Hu",
    publishedTime: "2026-10-02",
    authors: ["Robert Hu"],
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Portrait of Robert Hu, machine learning researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const references = [
  {
    title: "GB300 NVL72 specifications",
    author: "NVIDIA. ",
    href: "https://www.nvidia.com/en-us/data-center/gb300-nvl72/",
  },
  {
    title: "Vera Rubin NVL72 specifications",
    author: "NVIDIA. ",
    href: "https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/",
  },
  {
    title: "Format-Aware Fusion for Fast FP4 Pretraining",
    href: "https://arxiv.org/abs/2610.00053",
  },
  {
    title: "Fast Polynomial Transcendentals for LLMs",
    href: "https://arxiv.org/abs/2610.00049",
  },
  {
    title: "Pretraining Large Language Models with NVFP4",
    href: "https://arxiv.org/abs/2509.25149",
  },
  {
    title: "UE5M3 FP4 Block Scaling for Stable Language Model Pretraining",
    href: "https://arxiv.org/abs/2609.02846",
  },
  {
    title: "MixFP4: Enhancing NVFP4 with Adaptive FP4/INT4 Block Representations",
    href: "https://arxiv.org/abs/2605.31035",
  },
  {
    title: "Four Over Six: More Accurate NVFP4 Quantization with Adaptive Block Scaling",
    href: "https://arxiv.org/abs/2512.02010",
  },
  {
    title: "Elucidating the Design Space of FP4 Training",
    href: "https://arxiv.org/abs/2509.17791",
  },
  {
    title: "Beyond 2:4: Exploring V:N:M Sparsity for Efficient Transformer Inference on GPUs",
    href: "https://arxiv.org/abs/2410.16135",
  },
  {
    title: "Accelerating Transformer Pre-training with 2:4 Sparsity",
    href: "https://arxiv.org/html/2404.01847v3",
  },
  {
    title: "Jensen Huang: Career Tips for the Age of AI",
    author: "CASPA. ",
    href: "https://www.youtube.com/watch?v=XzpQaPYmqrk",
  },
];

export default function TheCaseForFP4() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page posts-page">
        <SiteHeader page="posts" />
        <main className="post-main" id="main">
          <a className="post-back" href="/posts/">
            ← All posts
          </a>
          <article aria-labelledby="post-title">
            <header className="post-header">
              <h1 id="post-title">The case for FP4</h1>
              <p className="post-meta">
                Robert Hu · <time dateTime="2026-10-02">2 October 2026</time>
              </p>
            </header>
            <div className="post-body">
              <p>
                We are at an inflection point for low-precision computation. With
                sparsity, FP4 reaches{" "}
                <strong>
                  20 PFLOPS per GPU on GB300 and 50 PFLOPS on Rubin
                </strong>
                —<strong>8× and 12.5× their dense BF16 peaks</strong>, respectively.
                <sup>
                  <a id="fnref-1" href="#fn-1" role="doc-noteref" aria-label="Footnote 1">
                    1
                  </a>
                </sup>
              </p>
              <p>
                Those numbers change where we need to spend our effort. Faster
                matrix multiplication makes quantisation, sparsification, scaling
                and data movement more expensive relative to the work they
                support. But we have exceptionally many levers to pull and explore
                to train and serve models in FP4:
              </p>
              <ul className="post-levers">
                <li>
                  <strong>Choose formats by layer.</strong> NVFP4 offers finer
                  scaling, while MXFP4 offers more scale range. NVIDIA’s
                  pretraining experiments found the final layers particularly
                  sensitive to FP4, giving us a concrete reason to explore
                  different formats across the network.
                </li>
                <li>
                  <strong>Change the scale.</strong> Our UE5M3 experiments kept the
                  four-bit payload unchanged and demonstrated stable pretraining
                  without Hadamard transforms in software emulation. Changing the
                  scale can change the stabilisation recipe too, which makes
                  alternatives such as UE4M4 worth investigating.
                </li>
                <li>
                  <strong>Change the payload.</strong> E2M1 offers more range,
                  while E1M2 offers more evenly spaced values. MixFP4 explores
                  choosing between them block by block, matching the
                  representation to the local distribution of values.
                </li>
                <li>
                  <strong>Improve stability.</strong> Tensor scaling, stochastic
                  rounding and Hadamard transforms give us several ways to manage
                  quantisation error. Four Over Six shows that even choosing
                  between two scaling targets—four and six—can improve accuracy
                  without changing the four-bit payload.
                </li>
                <li>
                  <strong>Add sparsification.</strong> Structured sparsity, such
                  as 2:4 or V:N:M, reduces the work left for tensor cores. Sparse
                  transformer pretraining shows that pruning costs and accuracy
                  recovery must be addressed alongside kernel speed; combining
                  these lessons with FP4 gives us another direction to explore.
                </li>
              </ul>
              <p>
                I believe there exists a world where we no longer need to train,
                tune or serve LLMs in BF16, and every layer can run as A4W4.
                <sup>
                  <a id="fnref-2" href="#fn-2" role="doc-noteref" aria-label="Footnote 2">
                    2
                  </a>
                </sup>
              </p>
              <p>
                We should care about this because serving a model on 4 GPUs
                instead of 16 at the same speed would cut GPU costs per token by a
                factor of 4, at the same hourly rate per GPU.
              </p>
              <p>
                The path to full A4W4 has proven perilous: we face quantisation
                and stabilisation overheads, transcendentals that can&apos;t keep
                up with FP4 tensor cores, and the deeper hardware optimisation
                needed to saturate them.
              </p>
              <p>
                With the advancement of LLM coding agents, the gap between
                intuition and machine code is the smallest it&apos;s been since
                the inception of CUDA, making optimal low precision kernels and
                numerics more attainable than ever.
              </p>
              <p>
                This is a call to the community to be optimistic and act with
                urgency in hardware aware ML. LLMs are driving another industrial
                revolution, and growing demand for tokens from more capable
                models makes efficient computation essential. As uncle Jensen
                says: “Now is the most important time. Just dedicate yourself to
                now.”
              </p>
            </div>
            <section className="post-notes" aria-label="Footnotes" role="doc-endnotes">
              <ol>
                <li id="fn-1">
                  These headline ratios compare sparse FP4 with dense BF16:
                  20/2.5 PFLOPS on GB300 and 50/4 PFLOPS on Rubin. They therefore
                  combine precision and sparsity gains. The dense-only ratios are
                  6× and 8.75×. GB300 also supports sparse BF16 at 5 PFLOPS per
                  GPU, giving a sparse-to-sparse ratio of 4×.{" "}
                  <a href="#fnref-1" role="doc-backlink" aria-label="Back to footnote 1 reference">
                    ↩
                  </a>
                </li>
                <li id="fn-2">
                  Here, A4W4 means four-bit activation and weight operands for
                  matrix multiplication, with wider accumulators, scales and
                  optimiser state. Peak FLOPS alone do not establish application
                  speed or cost: those gains have to survive the complete
                  training or serving workload.{" "}
                  <a href="#fnref-2" role="doc-backlink" aria-label="Back to footnote 2 reference">
                    ↩
                  </a>
                </li>
              </ol>
            </section>
            <section className="post-references" aria-labelledby="references-heading">
              <h2 id="references-heading">References</h2>
              <ol>
                {references.map((reference) => (
                  <li key={reference.href}>
                    {reference.author}
                    <a href={reference.href}>{reference.title}</a>.
                  </li>
                ))}
              </ol>
            </section>
          </article>
        </main>
        <footer>
          <p>Robert Hu · Machine learning researcher · London</p>
          <a href="/posts/">All posts</a>
        </footer>
      </div>
    </>
  );
}
