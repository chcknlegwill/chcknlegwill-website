
//works!!

import { fetchMarkdownPostsBlog } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPostsBlog();

	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-ignore
		return new Date(b.meta.date) - new Date(a.meta.date);
        //ignore this error as it works just fine
	});

	return json(sortedPosts);
};