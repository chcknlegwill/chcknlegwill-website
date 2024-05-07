import { j as json } from './index-BIAFQWR9.js';

const fetchMarkdownPosts = async () => {
  const allPostFiles = /* @__PURE__ */ Object.assign({ "/src/routes/blog/first.md": () => import('./first-BPhYsur9.js'), "/src/routes/blog/second.md": () => import('./second-BFIyzuIs.js'), "/src/routes/blog/third.md": () => import('./third-r71j0jMx.js') });
  const iterablePostFiles = Object.entries(allPostFiles);
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(11, -3);
      return {
        meta: metadata,
        path: postPath
      };
    })
  );
  return allPosts;
};
const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });
  return json(sortedPosts);
};

export { GET };
//# sourceMappingURL=_server-BzXuCl8F.js.map
