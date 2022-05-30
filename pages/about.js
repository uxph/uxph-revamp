import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import MissionVision from "../components/MissionVision/MissionVision";
import Button from "./../components/Button/Button";
import AboutItem from "./../components/AboutItem/AboutItem";
import initiatives from "../data/about-initiatives.json";

const About = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <Hero>
        <div className="w-11/12 md:mx-14 md:w-full">
          <div className="md:w-full lg:w-[75%]">
            <h1>About UXPH</h1>
            <p className="mt-5 mb-5">
              <b>
                UXPH (User Experience Philippines) is a Filipino non-profit
                organization that hosts the largest network of design
                professionals, enthusiasts, and students in the Philippines.
              </b>{" "}
              As of 2020, the community has over 4,000 local and international
              members from a wide range of industries related to technology and
              even traditional businesses.
            </p>
            <MissionVision
              imageUrl="/images/about/mission-icon.png"
              content={
                <p>
                  <b>Our mission</b> is to grow and nurture the Filipino
                  creative community through sharing and collaboration, to help
                  uplift the lives of people and our society.
                </p>
              }
            />
            <MissionVision
              imageUrl="/images/about/vision-icon.png"
              content={
                <p>
                  <b>Our vision</b> is to have an empowered culture where
                  products and services are built mindfully and sustainably.
                </p>
              }
            />
            <div className="flex flex-col lg:flex-row">
              <Button variant="white" className="mb-5 lg:mb-0 lg:mr-5">
                Join our Facebook group
              </Button>
              <Button variant="white-alternative">Visit our page</Button>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-0 md:w-9/12">
          <div className="relative block">
            <Image
              src="/images/home/hero-collage.png"
              alt="Image"
              // layout="fill"
              width={800}
              height={700}
              objectFit="contain"
              objectPosition="right"
            />
          </div>
        </div>
      </Hero>
      <section className="flex flex-auto flex-col items-center justify-end py-14  lg:flex-row">
        <div className="w-11/12 md:mx-14 lg:w-1/2">
          <h2 className="text-primary-color">Organization Initiatives</h2>
          <p className="my-5 w-[80%] text-secondary-activeColor">
            Since 2012, we have been building towards a more mature,
            collaborative, and design-driven country through hosting online and
            offline community initiatives, conferences, and programs within
            local design and technology communities.
          </p>

          <Button href="/">See our events</Button>
        </div>
        <div className="mt-16 grid w-[90%] grid-cols-1 justify-center gap-11 sm:grid-cols-2 lg:mt-0  lg:w-1/2 lg:pr-14">
          {initiatives.map(({ img_url, title, content }, index) => (
            <AboutItem
              key={index}
              imageUrl={img_url}
              title={title}
              content={content}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
