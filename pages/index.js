import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/Home.module.css";
import Button from "./../components/Button/Button";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        imageUrl="/images/home/hero-collage.png"
        headingText="UX Philippines"
        content={
          <>
            <p className="mb-5 leading-8">
              <b>
                Welcome to the Philippines' largest community of individuals
                passionate about the realm of UX (User Experience), and all
                things related.
              </b>
              Our community has over 4,000 local and international members from
              a wide range of industries related to technology and even
              traditional businesses.
            </p>
            <Button variant="white" className="mr-5">
              Learn More
            </Button>
            <Button variant="white-alternative">Join our Facebook group</Button>
          </>
        }
      />
    </Layout>
  );
}
