import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-screen"></div>
    </Layout>
  );
}
