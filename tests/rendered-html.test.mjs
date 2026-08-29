import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://periolife-diabetes.vercel.app/v2", {
      headers: { accept: "text/html", host: "periolife-diabetes.vercel.app" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the PerioLife diabetes landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="pt-BR"/i);
  assert.match(html, /Diabetes e Saúde Periodontal \| PerioLife Brasília/i);
  assert.match(html, /Diabetes e saúde periodontal:.*uma relação que você precisa conhecer/is);
  assert.match(html, /Dra\. Elisa Grilo/i);
  assert.match(html, /0,43/);
  assert.match(html, /QUERO AVALIAR MINHA SAÚDE PERIODONTAL/);
  assert.match(html, /AGENDAR UMA AVALIAÇÃO PERIODONTAL/);
  assert.match(html, /wa\.me\/5561999603770/);
  assert.match(html, /\/og\.png/);
  assert.match(html, /periolife-diabetes-hero\.png/);
  assert.doesNotMatch(html, /relacao-visual|evidence-card|REVISÃO COCHRANE · 2022/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("removes starter-only preview code and metadata", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
