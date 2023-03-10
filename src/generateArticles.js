const {
  categories,
  homepage,
  writers,
  articles,
  global,
} = require("../data/data.json");
const { faker } = require("@faker-js/faker");

const mostlyTrue = () => {
  return Math.floor(Math.random() * 100) > 20;
};

const mostlyFalse = () => {
  return Math.floor(Math.random() * 100) <= 20;
};

const generateArticles = (qty) => {
  let articles = [];
  for (let i = 0; i < qty; i++) {
    const title = faker.lorem.words();
    const slug = title.toLowerCase().replace(/[\W_]+/g, "-");
    const content = faker.lorem.paragraphs(
      5,
      "\n\n[Testing Markdown](https://www.google.com)\n\n"
    );
    const description = faker.lorem.sentence();
    const featured = mostlyFalse();
    const author = {
      id: Math.floor(Math.random() * writers.length) + 1,
    };
    const category = {
      id: Math.floor(Math.random() * categories.length),
    };
    const image = "article-generic.jpg";

    articles.push({
      title,
      content,
      slug,
      category,
      author,
      description,
      image,
      featured,
    });
  }

  return articles;
};

module.exports = { generateArticles };
