import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the finished Northline experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Northline — Homes resolved to the last line<\/title>/i);
  assert.match(html, /Homes, resolved/);
  assert.match(html, /blueprint-house\.jpg/);
  assert.match(html, /role="tablist"/);
  assert.match(html, /Structure becomes space/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("renders every portfolio route and preserves the motion system", async () => {
  for (const [path, copy] of [["/projects", "Residences shaped"], ["/services", "The whole house"], ["/studio", "Small studio"], ["/journal", "Notes on making"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(copy));
  }
  const [site, css] = await Promise.all([
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.match(site, /IntersectionObserver/);
  assert.match(site, /requestAnimationFrame/);
  assert.match(site, /onPointerMove/);
  assert.match(css, /@keyframes scan/);
  assert.match(css, /@keyframes lineReveal/);
  assert.match(css, /prefers-reduced-motion/);
});
