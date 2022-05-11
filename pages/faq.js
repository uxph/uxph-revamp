import dynamic from "next/dynamic";
import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import notion from "../utils/notion";
import FaqItem from "../components/FaqItem/FaqItem";
import classNames from "classnames";

import { Tabs, Tab, Grid, makeStyles } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

const useStyleTabs = makeStyles({
  indicator: {
    left: "0",
  },
  tabsRoot: {
    textAlign: "left !important",
  },
});

const Faq = ({ categories, items }) => {
  const [value, setValue] = useState("All Topics");
  const isMobileView = useMediaQuery({ query: "(max-device-width: 959px)" });

  const tabsClasses = useStyleTabs();
  return (
    <Layout animateNav={false}>
      <SEO title="FAQ" />
      <section className="items-center px-8 py-32 sm:px-16 md:px-32">
        <h2 className="mb-4 text-primary-color">Frequently Asked Questions</h2>
        <Grid container spacing={4}>
          <Grid item md={3} style={{ maxWidth: `100%` }}>
            {!isMobileView ? (
              <Tabs
                value={value}
                classes={{
                  indicator: tabsClasses.indicator,
                }}
                orientation={isMobileView ? "horizontal" : "vertical"}
                variant="scrollable"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                textColor="primary"
                indicatorColor="primary"
                aria-label="Categories"
                className="tabs-container"
              >
                {categories.map((item, index) => {
                  return (
                    <Tab
                      label={item}
                      key={index}
                      value={item}
                      // classes={{
                      //   root: tabClasses.root,
                      // }}
                      className={classNames("font-size-12 tab-item", {
                        tab_active: item === value,
                      })}
                      disableFocusRipple={false}
                    />
                  );
                })}
              </Tabs>
            ) : (
              <select
                className="border-sm bg-gray-50 px-2 py-4 text-sm shadow-sm"
                onChange={(e) => setValue(e.target.value)}
              >
                {categories.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            )}
          </Grid>
          <Grid item md={9}>
            {items.map((item, index) => {
              if (item.category.includes(value) || value === "All Topics") {
                return <FaqItem faq={item} key={index} />;
              }

              return null;
            })}
          </Grid>
        </Grid>{" "}
      </section>{" "}
    </Layout>
  );
};

export async function getServerSideProps() {
  let { results } = await notion.databases.query({
    database_id: process.env.NOTION_FAQ_DATABASE,
    sorts: [
      {
        property: "Category",
        direction: "ascending",
      },
    ],
  });

  const categories = [
    "All Topics",
    ...new Set(results.map((result) => result.properties.Category.select.name)),
  ];

  const items = results.map((result) => {
    return {
      question: result.properties.Question.title[0].text.content,
      category: result.properties.Category.select.name,
      answer: result.properties.Answer.rich_text,
    };
  });

  return {
    props: { categories, items },
  };
}

export default dynamic(() => Promise.resolve(Faq), {
  ssr: false,
});
