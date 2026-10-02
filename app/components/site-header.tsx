// Use ordinary links because GitHub Pages serves static HTML documents.

type SiteHeaderProps = {
  page?: "home" | "posts";
};

export default function SiteHeader({ page = "home" }: SiteHeaderProps) {
  const home = page === "home" ? "" : "/";

  return (
    <header className="site-header" id="top">
      <a
        className="site-title"
        href={page === "home" ? "#top" : "/"}
        aria-label={page === "home" ? "Robert Hu, back to top" : "Robert Hu, home"}
      >
        Var hälsad
        <span className="header-treat" role="img" aria-label="strawberry matcha">
          🍓🍵
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <a href={`${home}#research`}>Research</a>
        <a href={`${home}#work`}>Work</a>
        <a href="/posts/" aria-current={page === "posts" ? "page" : undefined}>
          Posts
        </a>
        <a href={`${home}#background`}>Background</a>
        <a href={`${home}#contact`}>Contact</a>
      </nav>
    </header>
  );
}
