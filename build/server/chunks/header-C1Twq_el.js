import { c as create_ssr_component, b as add_attribute } from './ssr-BWVJttvk.js';
import { g as githubImg } from './github-BEGKGb_O.js';

const css = {
  code: '@import "../styles/style.css";',
  map: '{"version":3,"file":"header.svelte","sources":["header.svelte"],"sourcesContent":["\\n<header class=\\"header\\">\\n    <div class=\\"links\\">\\n        <a href=\\"https://github.com/chcknlegwill/\\" target=\\"_blank\\">\\n            <img class=\\"github\\" id=\\"github\\"  alt=\\"github logo\\" src=\\"{githubImg}\\"/>\\n        </a>\\n    </div>\\n    <div class=\\"title-container\\">\\n        <a href=\\"/\\"><h1 class=\\"title\\">Chcknlegwill</h1></a>\\n    </div>\\n    <div class=\\"github\\"  id=\\"github\\">\\n        <!--^ this is just a placeholder for now,\\n        mainly to get the header to stay in the middle with\\n        the github image on the left screwing up the flexbox\\n        alignment going more left due to elements on the left-->\\n    </div>\\n</header>\\n\\n<script>\\n    import githubImg from \\"../assesets/github.png\\";\\n\\n\\n<\/script>\\n\\n<style>\\n@import \\"../styles/style.css\\";\\n</style>"],"names":[],"mappings":"AAyBA,QAAQ,qBAAqB"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="header" data-svelte-h="svelte-5k5goc"><div class="links"><a href="https://github.com/chcknlegwill/" target="_blank"><img class="github" id="github" alt="github logo"${add_attribute("src", githubImg, 0)}></a></div> <div class="title-container"><a href="/"><h1 class="title">Chcknlegwill</h1></a></div> <div class="github" id="github"></div> </header>`;
});

export { Header as H };
//# sourceMappingURL=header-C1Twq_el.js.map
