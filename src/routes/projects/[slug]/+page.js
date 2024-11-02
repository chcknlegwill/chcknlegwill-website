import { error } from "@sveltejs/kit";

// @ts-ignore
export const load = async ({ params }) => {
  try {
    const post = await import (`../../projects/${params.slug}.md`)

    return {
      Content: post.default,
      title: post.metadata.title,
      date: post.metadata.date,
      lastModified: post.metadata.lastModified
    };
  } catch (err) {
    throw error(404, `Couldn't find project ${params.slug}`);
  }
}