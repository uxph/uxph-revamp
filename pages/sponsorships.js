import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "next/image";
import { Container, Box, Grid } from "@material-ui/core";
import PerkItem from "./../components/PerkItem/PerkItem";
import SponsorItem from "../components/SponsorItem/SponsorItem";
import perks from "../data/sponsorship-perks.json";
import community_partners from "../data/community_partners.json";

const Sponsorships = () => {
  //console.log(perks);
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
          <h2 className="text-primary-color">Sponsorship Perks</h2>
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
        <h2 className="my-16 text-center">Our Community Partners</h2>
        <Box component="section" py={12}>
          <Container maxWidth="md">
            <Grid container spacing={2} justifyContent="center">
              {community_partners.map((sponsor, index) => {
                //console.log(sponsor);
                return (
                  <Grid item xs={6} md={4} key={index}>
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
