export async function load() {

  const blogPosts = import.meta.glob('./blog/*.md');
  const projectPosts = import.meta.glob('./projects/*.md');

  const allPosts = { ...blogPosts, ...projectPosts };
  const postEntries = Object.entries(allPosts);
  const randomIndex = Math.floor(Math.random() * postEntries.length);
  const [randomSlug, importPost] = postEntries[randomIndex];
  
  const post = await importPost();
  // @ts-ignore
  const { title, date } = post.metadata;
  // @ts-ignore
  const Content = post.default;

  return {
    randomPost: {
      Content,
      title,
      date,
      slug: randomSlug.replace(/^\.\/(blog|projects)\//, '').replace('.md', '')
    }
  };
}