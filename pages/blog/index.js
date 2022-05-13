import React, { useState } from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import BlogItem from "../../components/BlogItem/BlogItem";
import notion from "../../utils/notion";
import { Grid } from "@material-ui/core";

const Blog = ({ blogs }) => {
  return (
    <Layout animateNav={false}>
      <SEO title="Blogs" />
      <section className="items-center px-8 py-32 sm:px-16 md:px-32">
        <h2 className="margin-bottom-24 font-size-32 mb-4">Blog</h2>
        <Grid container spacing={3}>
          {blogs.map((blog, index) => {
            return (
              <Grid item md={4} key={index}>
                <BlogItem blog={blog} />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  let { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOGS_DATABASE,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const blogs = results.map((result) => {
    return {
      title: result.properties.Title.title[0].text.content,
      source: result.properties.Source.select.name,
      date: result.properties.Date.date.start,
      author: result.properties.Author.rich_text[0].text.content,
      //      imgBanner: result.properties["Image Banner"].files[0].file.url,
      imgSquare: result.properties["Image Square"].files[0].file.url,
      previewText: result.properties["Preview Text"].rich_text[0].text.content,
      slug: result.properties.Slug.formula.string,
    };
  });

  return {
    props: { blogs },
  };
}

export default Blog;
