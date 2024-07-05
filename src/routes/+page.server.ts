import {articles} from '$lib/article-data/data.server';
import type { PageServerLoadEvent } from './$types';
export const load = async (event: PageServerLoadEvent) => {
  const posts = Object.values(articles).sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  const page = parseInt(event.url.searchParams.get('page') || '1');
  const rpp = 25;
  const start = (page - 1) * rpp;
  const end = start + rpp;
  const postsOnPage = posts.slice(start, end);
  return {
    postsOnPage,
    page,
    pageCount: Math.ceil(posts.length / rpp),
  };
};
