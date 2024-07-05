import articles from '$lib/article-data.server'

export const load = async () => {
  
  return {
    articles
  };
};
