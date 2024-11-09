//this has to return posts like in the other +page.js file 
// @ts-ignore
export const load = async ( { fetch }) => {
  const response = await fetch (`/api/projects`);
  const posts = await response.json();

  return {posts};
}