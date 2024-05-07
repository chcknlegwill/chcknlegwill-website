import { c as create_ssr_component, d as escape, v as validate_component, b as add_attribute } from './ssr-BWVJttvk.js';
import { g as githubImg } from './github-BEGKGb_O.js';

const css$1 = {
  code: '@import "../styles/blog/blog.css";',
  map: `{"version":3,"file":"headerBlogSub.svelte","sources":["headerBlogSub.svelte"],"sourcesContent":["<!-- two different header for blog page and blog's themselves\\nas this would route them back to the main page - I need the blogs\\nto redirect to the blog page instead of the main page-->\\n<header class=\\"header\\">\\n    <div class=\\"links\\">\\n        <a href=\\"https://github.com/chcknlegwill/\\" target=\\"_blank\\">\\n            <img class=\\"github\\" id=\\"github\\"  alt=\\"github logo\\" src=\\"{githubImg}\\"/>\\n        </a>\\n    </div>\\n    <div class=\\"title-container\\">\\n        <a href=\\"/blog\\"><h1 class=\\"title\\">Chcknlegwill - blog</h1></a>\\n    </div>\\n    <div class=\\"github\\"  id=\\"github\\">\\n        <!--^ this is just a placeholder for now,\\n        mainly to get the header to stay in the middle with\\n        the github image on the left screwing up the flexbox\\n        alignment going more left due to elements on the left-->\\n    </div>\\n</header>\\n\\n<script>\\n    import githubImg from \\"../assesets/github.png\\";\\n\\n\\n<\/script>\\n\\n<style>\\n@import \\"../styles/blog/blog.css\\";\\n</style>"],"names":[],"mappings":"AA2BA,QAAQ,yBAAyB"}`
};
const HeaderBlogSub = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return ` <header class="header" data-svelte-h="svelte-1wrss9n"><div class="links"><a href="https://github.com/chcknlegwill/" target="_blank"><img class="github" id="github" alt="github logo"${add_attribute("src", githubImg, 0)}></a></div> <div class="title-container"><a href="/blog"><h1 class="title">Chcknlegwill - blog</h1></a></div> <div class="github" id="github"></div> </header>`;
});
const css = {
  code: '@import "$lib/styles/blog/blog.css";',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\texport let data;\\n    const { title, date, Content } = data;\\n    //above is to import data from .md files\\n\\n    import HeaderBlogSub from '$lib/components/headerBlogSub.svelte';\\n<\/script>\\n\\n<svelte:head>\\n    <title>Blog - {title}</title>\\n</svelte:head>\\n\\n<HeaderBlogSub/>\\n<article>\\n    <h1>{title}</h1>\\n    <p>Published: {date}</p>\\n    <Content />\\n</article>\\n\\n<style lang=\\"scss\\">@import \\"$lib/styles/blog/blog.css\\";</style>"],"names":[],"mappings":"AAmBmB,QAAQ,2BAA2B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, date, Content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ocjtv8_START -->${$$result.title = `<title>Blog - ${escape(title)}</title>`, ""}<!-- HEAD_svelte-1ocjtv8_END -->`, ""} ${validate_component(HeaderBlogSub, "HeaderBlogSub").$$render($$result, {}, {}, {})} <article><h1>${escape(title)}</h1> <p>Published: ${escape(date)}</p> ${validate_component(Content, "Content").$$render($$result, {}, {}, {})} </article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CC4o92Gg.js.map
