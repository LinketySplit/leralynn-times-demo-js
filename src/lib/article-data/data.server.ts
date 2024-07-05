import type { Article } from './data';
import articleJson from './articles.json?raw';
export const articles: Article[] = JSON.parse(articleJson);
