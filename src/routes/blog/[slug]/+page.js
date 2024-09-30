// @ts-ignore
export async function load({ params }) {
    const post = await import(`../${params.slug}.md`);
    const { title, date, lastModified } = post.metadata;
    const Content = post.default;
    //need to get description here but the date and title
    //will do for now

    return {
        Content,
        title,
        date,
        lastModified
    };
}

//content must be capitalised as using it as it's own
//component within .svelte 
