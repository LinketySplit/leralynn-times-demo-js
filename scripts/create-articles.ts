import { randNumber, randParagraph, randBetweenDate } from "@ngneat/falso";
import slugify from "@sindresorhus/slugify";

type BaseArticle = {
  title: string;
  description: string;
}
type Article = {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  content: string[]

}
const baseArticles: BaseArticle[] = [
  {
    title: 'Dog Speaks Out After Man Bites Dog Kerfuffle',
    description: `
    Muffy the Dog, surrounded by her team of attorneys and public relations advisers, 
    spoke out today at a news conference hosted by the Zennia Street Knitting Society.
    `
  },
  {
    title: 'Area Man Rescued from Slough of Despond',
    description: `
    The man, Orrin Milquetoast, 49, wandered into the popular local watering hole "by mistake" Wednesday afternoon.
    When he did not return home in time for supper, his mother, Emily Milquetoast, 75, enlisted the aid of her comrades in the 
    North Loop Temperance League to conduct the extraction.`
  },
  
  {
    title: 'Austin to Study Pedestrian Nuisance',
    description: `
    The City Council voted to conduct a study on how best to deal with its growing pedestrian problem. 
    Options on the table range from removing legacy sidewalks to a citywide spay and neuter program. 
    `
  },

];
let publishedAt = new Date();
const articles: Article[] = baseArticles.map((article) => {
  const { title, description } = article;
  const slug = slugify(title);
  const numParas = randNumber({ min: 10, max: 20 });
  const publishedDate = publishedAt.toISOString();
  publishedAt = randBetweenDate({ from: new Date(publishedAt.valueOf() -  48 * 60 * 60 * 1000), to: publishedAt });
  return {
    title,
    description: description.trim(),
    slug,
    publishedDate,
    content: randParagraph({length: numParas})
  };
});



await Bun.write(`src/lib/article-data/articles.json`, JSON.stringify(articles, null, 1));

export default {};





