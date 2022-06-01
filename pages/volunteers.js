import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import Button from "./../components/Button/Button";
import PerkItem from "./../components/PerkItem/PerkItem";
import perks from "../data/volunteer-perks.json";

const Volunteers = ({}) => {
    return (
        <Layout>
          <SEO title="Volunteers" />
          <Hero>
            <div className="w-11/12 md:mx-14 md:w-full">
              <div className="md:w-full lg:w-[75%]">
                <h1>Be a part of the organizing team</h1>
                <p className="mt-5 mb-5">
                  UXPH is always looking for passionate and enthusiastic individuals who 
                  want to be a part of the growing Filipino design community! 
                  Whether you're a professional, student, or simply a design 
                  enthusiast, we're happy to have you join us!
                </p>
                
                <div className="flex flex-col lg:flex-row">
                  <Button variant="white" className="mb-5 lg:mb-0 lg:mr-5" href="https://docs.google.com/forms/d/e/1FAIpQLSebupcyPib0ZjVih7kYqXWDyiTB0Q6Vv3R3hHaySNpWwGzUcQ/viewform">
                    Sign up to Volunteer
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-16 md:mt-0 md:w-9/12">
              <div className="relative block">
                <Image
                  src="/images/home/organizing-team.png"
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
          <section className="flex flex-auto flex-col items-center justify-end py-14 ">
            <div className="w-11/12 md:mx-14 lg:w-1/2 lg:pb-8">
              <h2 className="text-primary-color">Volunteer Perks</h2>
            </div>
            <div className="mt-16 grid w-[90%] grid-cols-1 justify-center gap-11 sm:grid-cols-2 lg:mt-0  lg:w-1/2 lg:pr-14">
              {perks.map(({ img_url, title, content }, index) => (
                <PerkItem
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

export default Volunteers;


