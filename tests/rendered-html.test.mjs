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
  assert.doesNotMatch(html, /class="research-line"/i);
  assert.match(html, /Research thesis/i);
  assert.match(html, /Papers, by theme/i);
  assert.doesNotMatch(html, /Primary direction/i);
  assert.match(html, /Predictive ML and recommender systems/i);
  assert.match(html, /infer cause and effect rather than correlation alone/i);
  assert.match(html, /particularly FP4/i);
  assert.match(html, /aria-pressed="false"/i);
  assert.match(html, /🍓🍵/u);
  assert.match(html, /Var hälsad/i);
  assert.doesNotMatch(html, /God dag/i);
  assert.doesNotMatch(html, /Strawberry matcha enthusiast/i);
  assert.match(html, /Portrait of Robert Hu/i);
  assert.match(html, /\/institutions\/graphcore\.svg/i);
  assert.match(html, /\/institutions\/amazon\.png/i);
  assert.match(html, /\/institutions\/oxford\.svg/i);
  assert.match(html, /\/institutions\/hm\.png/i);
  assert.match(html, /\/institutions\/izettle\.svg/i);
  assert.match(html, /\/institutions\/kth\.svg/i);
  assert.match(html, /\/institutions\/sse\.svg/i);
  assert.match(
    html,
    /Supervised by Dino Sejdinovic, Robin Evans, and Geoff Nicholls\./i,
  );
  assert.match(html, /UE5M3 FP4 Block Scaling/i);
  assert.match(html, /Google Scholar/i);
  assert.match(html, /github\.com\/MrHuff/i);
  assert.match(html, /robert\.stats\.hu/i);
  assert.match(html, /\[at\]/i);
  assert.doesNotMatch(html, /mailto:/i);
  assert.doesNotMatch(html, /robert\.stats\.hu@gmail\.com/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
