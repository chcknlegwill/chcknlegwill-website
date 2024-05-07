const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../first.md": () => import('./first-BPhYsur9.js'), "../second.md": () => import('./second-BFIyzuIs.js'), "../third.md": () => import('./third-r71j0jMx.js') }), `../${params.slug}.md`);
  const { title, date } = post.metadata;
  const Content = post.default;
  return {
    Content,
    title,
    date
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CC4o92Gg.js')).default;
const universal_id = "src/routes/blog/[slug]/+page.js";
const imports = ["_app/immutable/nodes/5.BKNkrXV0.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.DEgs2rZ3.js","_app/immutable/chunks/github.DwHK1PrU.js"];
const stylesheets = ["_app/immutable/assets/5.CkBsIasz.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-Dj5ePZI1.js.map
