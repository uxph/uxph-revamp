import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import { Container, Box, Grid } from "@material-ui/core";
import Button from "./../components/Button/Button";
import PerkItem from "./../components/PerkItem/PerkItem";
import perks from "../data/volunteer-perks.json";

const Sponsorships = ({}) => {
  return (
    <Layout>
      <SEO title="Sponsorships" />
      <Hero>
        <div className="w-11/12 md:mx-14 md:w-full">
          <div className="md:w-full lg:w-[75%]">
            <h1>Partner with UXPH</h1>
            <p className="mt-5 mb-5">
              UXPH is committed to collaborating with like-minded non-profit or
              commercial companies and organizations. We're always interested in
              partnership opportunities whether it is for new project, speaking
              engagements, workshops, or sponsorships. Learn more about what we
              can do together to support our causes!
            </p>
            <p className="mt-5 mb-5">
              Send us an email at <b>partnerships@uxph.org</b> or download our
              Sponsorship Package to get started.
            </p>
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
        <Box component="section" py={12}>
          <Container maxWidth="lg">
            <h2 className="font-size-32 margin-bottom-64 text-dark text-center">
              Our Community Partners
            </h2>
            <Grid container spacing={4} justify="center">
              {community_partners.map((sponsor, index) => {
                return (
                  <Grid item xs={6} md={3} key={index}>
                    <SponsorItem sponsor={sponsor} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </section>
    </Layout>
  );
};

export default Sponsorships;
