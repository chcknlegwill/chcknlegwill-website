const load = async ({ fetch }) => {
  const repsonse = await fetch(`/api/posts`);
  const posts = await repsonse.json();
  return { posts };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D6j_kUZG.js')).default;
const universal_id = "src/routes/blog/+page.js";
const imports = ["_app/immutable/nodes/4.BxVvqprA.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.DEgs2rZ3.js","_app/immutable/chunks/github.DwHK1PrU.js"];
const stylesheets = ["_app/immutable/assets/4.Dztvgq3N.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-elqWB6Wq.js.map
