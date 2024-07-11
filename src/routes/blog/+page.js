export const load = async ({ fetch }) => {
    const repsonse = await fetch(`/api/posts`);
    const posts = await repsonse.json();

    return {posts};
}
