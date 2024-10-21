export async function load() {
  const allPosts = import.meta.glob('./blog/*.md');
  const postEntries = Object.entries(allPosts);
  const randomIndex = Math.floor(Math.random() * postEntries.length);
  const [randomSlug, importPost] = postEntries[randomIndex];
  
  const post = await importPost();
  const { title, date } = post.metadata;
  const Content = post.default;

  return {
    randomPost: {
      Content,
      title,
      date,
      slug: randomSlug.replace('./blog/', '').replace('.md', '')
    }
  };
}