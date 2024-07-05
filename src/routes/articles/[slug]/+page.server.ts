import {articles} from '$lib/article-data/data.server';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { getLinketySplitSDK } from '$lib/linketysplit/sdk';
export const load = async (event: PageServerLoadEvent) => {
  
  const article = articles.find(a => a.slug === event.params.slug);
  if(!article) {
    throw error(404, 'Article not found');
  }
  const linketysplit = getLinketySplitSDK();
  const linketySplitPurchaseUrl =await linketysplit.createArticlePurchaseUrl(event.url.href);
  const linketySplitShareUrl = await linketysplit.createArticlePurchaseUrl(event.url.href, undefined, true);

  return {
    article,
    linketySplitPurchaseUrl,
    linketySplitShareUrl
  };
};