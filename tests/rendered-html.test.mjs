import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    String(process.pid) + "-" + String(Date.now()),
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Robert Hu's academic website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Robert Hu — Machine Learning Researcher<\/title>/i,
  );
  assert.match(html, /Systems and numerics for efficient learning/i);
  assert.match(html, /Primary direction/i);
  assert.match(html, /Predictive ML and recommendation/i);
  assert.match(html, /Strawberry matcha enthusiast/i);
  assert.match(html, /Portrait of Robert Hu/i);
  assert.match(html, /UE5M3 FP4 Block Scaling/i);
  assert.match(html, /Google Scholar/i);
  assert.match(html, /github\.com\/MrHuff/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
