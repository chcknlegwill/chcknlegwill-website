import { compile } from 'mdsvex';

// @ts-ignore
export async function load({ params }) {
    const post = await import(`../${params.slug}.md`); // Adjust path as needed
    const { title, date, lastModified } = post.metadata;
    const content = post.default;    


    return {
        content,
        title,
        date,
        lastModified 
    };
}