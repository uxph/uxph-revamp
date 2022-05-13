import NotionBlock from "../../components/NotionBlock/NotionBlock";
import notion from "../../utils/notion";
import Layout from "../../components/layout";
import Image from "next/image";
import SEO from "../../components/seo";
import readingTime from "reading-time";

const BlogPost = ({ properties, blocks }) => {
  const text = blocks
    .map((block) => {
      if (block.type === "paragraph")
        return block.paragraph.text.map((rt) => rt.text.content).join(" ");
      return " ";
    })
    .join();
  const stats = readingTime(text);
  return (
    <Layout>
      <SEO title={properties.title} />
      <section
        className=" relative w-full overflow-hidden bg-black"
        style={{ height: "50vh", zIndex: -1 }}
      >
        <Image
          layout={"fill"}
          objectFit="cover"
          src={properties?.imgBanner}
          className="opacity-40"
        />
      </section>
      <section className="container relative mx-auto w-full items-center px-4 py-4 sm:px-8 md:px-16 lg:px-40">
        <div className="  mb-4 pt-4 pb-2  md:pt-8 md:pb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl">
            {properties?.title}
          </h2>
          <p className="mt-4 text-base font-light">
            by {properties?.author} <span className="mx-2">•</span>{" "}
            {new Date(properties.date).toLocaleDateString(undefined, {
              month: "short",
              year: "numeric",
              day: "numeric",
            })}
            <span className="mx-2">•</span>{" "}
            <span className="italic">{stats.text}</span>
          </p>
        </div>

        {blocks.map((block, index) => {
          return <NotionBlock object={block} />;
        })}
      </section>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  let { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOGS_DATABASE,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: ctx.params.slug,
        },
      },
    },
  });

  let properties = {
    title: results[0].properties.Title.title[0].text.content,
    source: results[0].properties.Source.select.name,
    date: results[0].properties.Date.date.start,
    author: results[0].properties.Author.rich_text[0].text.content,
    imgBanner: results[0].properties["Image Banner"].files[0].file.url,
    imgSquare: results[0].properties["Image Square"].files[0].file.url,
    previewText:
      results[0].properties["Preview Text"].rich_text[0].text.content,
    slug: results[0].properties.Slug.formula.string,
  };

  const PAGE_ID = results[0].id;
  const response = await notion.blocks.children.list({
    block_id: PAGE_ID,
    page_size: 50,
  });
  let blocks = response.results;

  return {
    props: { properties, blocks },
  };
}

export default BlogPost;
