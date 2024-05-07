import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from './ssr-BWVJttvk.js';
import { g as githubImg } from './github-BEGKGb_O.js';

const css$1 = {
  code: '@import "../styles/style.css";',
  map: `{"version":3,"file":"headerBlog.svelte","sources":["headerBlog.svelte"],"sourcesContent":["<!-- two different header for blog page and blog's themselves\\nas this would route them back to the main page - I need the blogs\\nto redirect to the blog page instead of the main page-->\\n<header class=\\"header\\">\\n    <div class=\\"links\\">\\n        <a href=\\"https://github.com/chcknlegwill/\\" target=\\"_blank\\">\\n            <img class=\\"github\\" id=\\"github\\"  alt=\\"github logo\\" src=\\"{githubImg}\\"/>\\n        </a>\\n    </div>\\n    <div class=\\"title-container\\">\\n        <a href=\\"/\\"><h1 class=\\"title\\">Chcknlegwill - blog</h1></a>\\n    </div>\\n    <div class=\\"github\\"  id=\\"github\\">\\n        <!--^ this is just a placeholder for now,\\n        mainly to get the header to stay in the middle with\\n        the github image on the left screwing up the flexbox\\n        alignment going more left due to elements on the left-->\\n    </div>\\n</header>\\n\\n<script>\\n    import githubImg from \\"../assesets/github.png\\";\\n\\n\\n<\/script>\\n\\n<style>\\n@import \\"../styles/style.css\\";\\n</style>"],"names":[],"mappings":"AA2BA,QAAQ,qBAAqB"}`
};
const HeaderBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return ` <header class="header" data-svelte-h="svelte-6vu653"><div class="links"><a href="https://github.com/chcknlegwill/" target="_blank"><img class="github" id="github" alt="github logo"${add_attribute("src", githubImg, 0)}></a></div> <div class="title-container"><a href="/"><h1 class="title">Chcknlegwill - blog</h1></a></div> <div class="github" id="github"></div> </header>`;
});
const css = {
  code: '@import "$lib/styles/blog/blog.css";',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import HeaderBlog from \\"$lib/components/headerBlog.svelte\\";\\n  export let data;\\n\\n  let mouseOver = false;\\n  //going to add animations to this once I get the site\\n  //working on server and know how to use svelte better\\n<\/script>\\n\\n<svelte:head>\\n  <title>Blog</title>\\n</svelte:head>\\n\\n<HeaderBlog />\\n<main class=\\"main\\">\\n  <div class=\\"button-container\\">\\n    {#each data.posts as post}\\n      <a href={post.path}>\\n        <button class=\\"button-blog\\">\\n          <p class=\\"blog-date\\">{post.meta.date}</p>\\n          <p class=\\"blog-title\\">{post.meta.title}</p>\\n          <p class=\\"blog-desc\\">{post.meta.description}</p>\\n        </button>\\n      </a>\\n    {/each}\\n  </div>\\n</main>\\n<!--\\n{#each data.posts as post}\\n            <a href={post.path}>\\n                {post.meta.title}\\n            </a>\\n       </li> \\n    {/each}\\n-->\\n\\n<style lang=\\"scss\\">@import \\"$lib/styles/blog/blog.css\\";</style>\\n"],"names":[],"mappings":"AAoCmB,QAAQ,2BAA2B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10h7psl_START -->${$$result.title = `<title>Blog</title>`, ""}<!-- HEAD_svelte-10h7psl_END -->`, ""} ${validate_component(HeaderBlog, "HeaderBlog").$$render($$result, {}, {}, {})} <main class="main"><div class="button-container">${each(data.posts, (post) => {
    return `<a${add_attribute("href", post.path, 0)}><button class="button-blog"><p class="blog-date">${escape(post.meta.date)}</p> <p class="blog-title">${escape(post.meta.title)}</p> <p class="blog-desc">${escape(post.meta.description)}</p></button> </a>`;
  })}</div></main> `;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D6j_kUZG.js.map
