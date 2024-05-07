import { c as create_ssr_component, v as validate_component } from './ssr-BWVJttvk.js';
import { H as Header } from './header-C1Twq_el.js';
import './github-BEGKGb_O.js';

const css = {
  code: '@import "../lib/styles/style.css";button.svelte-1rd5388{min-width:225px;height:auto;font-size:38px}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import Header from '$lib/components/header.svelte';\\n<\/script>\\n<svelte:head>\\n    <title>William - personal website</title>\\n</svelte:head>\\n\\n<Header/>\\n<main class=\\"main\\">\\n  <div class=\\"container-buttons\\">\\n      <a href=\\"/blog\\">\\n        <button class=\\"button\\">>Blog</button>\\n      </a>\\n      <a  href=\\"/about\\">\\n        <button class=\\"button\\">>About</button>\\n      </a>\\n      \\n  </div>\\n  <div class=\\"container-buttons\\">\\n    <a href=\\"/projects\\">\\n        <button class=\\"button\\">>Projects</button>\\n      </a>\\n  </div>\\n</main>\\n\\n\\n<style lang=\\"scss\\">/*lang=\\"scss\\" -> this enables the use of sass*/\\n/* has independant styling for buttons as they \\nare different as they have specific sizes for the content\\n- on the main page they are only one word so I need them big*/\\n@import \\"../lib/styles/style.css\\";\\nbutton {\\n  min-width: 225px; /*to max length of largest button (projects)*/\\n  height: auto;\\n  font-size: 38px;\\n}</style>"],"names":[],"mappings":"AA8BA,QAAQ,yBAAyB,CACjC,qBAAO,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-109eqb4_START -->${$$result.title = `<title>William - personal website</title>`, ""}<!-- HEAD_svelte-109eqb4_END -->`, ""} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="main" data-svelte-h="svelte-bqdts6"><div class="container-buttons"><a href="/blog"><button class="button svelte-1rd5388">&gt;Blog</button></a> <a href="/about"><button class="button svelte-1rd5388">&gt;About</button></a></div> <div class="container-buttons"><a href="/projects"><button class="button svelte-1rd5388">&gt;Projects</button></a></div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CBsbD-n6.js.map
