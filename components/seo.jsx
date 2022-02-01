import Head from "next/head";

const SEO = ({ title = "", desc = "" }) => {
  return (
    <Head>
      <title> {title} | UX PHilippines</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/brand/uxph_icon.png" />
    </Head>
  );
};

export default SEO;
