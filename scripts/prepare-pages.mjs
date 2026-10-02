import { access, copyFile, mkdir, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const output = new URL("../dist/client/", import.meta.url);
const manifest = JSON.parse(
  await readFile(new URL("../dist/server/vinext-prerender.json", import.meta.url), "utf8"),
);
const missingRoutes = manifest.routes.filter((route) => route.status !== "rendered");
if (missingRoutes.length > 0) {
  throw new Error(
    `Static export omitted routes: ${missingRoutes.map((route) => route.route).join(", ")}`,
  );
}

// Keep the exported .html and .rsc files, and add directory indexes so GitHub
// Pages serves canonical URLs such as /posts/ without a server-side router.
async function prepareDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await prepareDirectory(path);
    } else if (
      entry.name.endsWith(".html") &&
      entry.name !== "index.html" &&
      entry.name !== "404.html"
    ) {
      const routeDirectory = path.slice(0, -".html".length);
      await mkdir(routeDirectory, { recursive: true });
      await copyFile(path, join(routeDirectory, "index.html"));
    }
  }
}

await prepareDirectory(fileURLToPath(output));
await Promise.all([
  access(new URL("index.html", output)),
  access(new URL("posts/index.html", output)),
]);
console.log("GitHub Pages entry points verified: / and /posts/");
