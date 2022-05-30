import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "./../components/Button/Button";

export default function Home() {
  const volunteerPerks = [
    "Access to the largest network of UX designers in the Philippines",
    "Ongoing mentorship and learning",
    "Community events and avenues to learn more skills",
    "Career opportunities",
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <div className="w-11/12 md:mx-14 md:w-full">
          <h1>UX Philippines</h1>
          <p className="mb-5">
            <b>
              Welcome to the Philippines' largest community of individuals
              passionate about the realm of UX (User Experience), and all things
              related.
            </b>
            Our community has over 4,000 local and international members from a
            wide range of industries related to technology and even traditional
            businesses.
          </p>
          <div className="flex flex-col lg:flex-row">
            <Button variant="white" className="mb-5 lg:mb-0 lg:mr-5">
              Learn More
            </Button>
            <Button variant="white-alternative">Join our Facebook group</Button>
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

      <section className="flex flex-auto flex-col items-center justify-end py-12  md:flex-row">
        <div className="w-11/12 md:mx-14 md:w-full">
          <h2 className="text-primary-color">Be part of the organizing team</h2>
          <p className="my-5">
            UXPH is always looking for passionate and enthusiastic individuals
            who want to be a part of the growing Filipino design community!
            Whether you're a professional, student, or simply a design
            enthusiast, we're happy to have you join us!
          </p>
          <ul className="mb-7">
            {volunteerPerks.map((perk, index) => (
              <li className="mb-3 flex items-center gap-4" key={index}>
                <Image
                  src={"/images/home/check-icon.png"}
                  alt="Image"
                  width={20}
                  height={20}
                  quality={100}
                />
                {perk}
              </li>
            ))}
          </ul>
          <Button href="/">See volunteer opportunities</Button>
        </div>
        <div className="mt-16 md:mt-0 md:w-9/12">
          <div className="relative block">
            <Image
              src={"/images/home/organizing-team.png"}
              alt="Image"
              // layout="fill"
              width={800}
              height={700}
              objectFit="contain"
              objectPosition="right"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-auto flex-col items-center justify-end py-12 md:flex-row">
        <div className="order-2 w-11/12 md:mx-14 md:w-full">
          <h2 className="text-primary-color">Be a community partner</h2>
          <p className="my-5">
            UXPH is committed to collaborating with like-minded non-profit or
            commercial companies and organizations. We're always interested in
            partnership opportunities whether it is for new projects, speaking
            engagements, workshops, or sponsorships. Learn more about what we
            can do together to support our causes!
          </p>
          <Button href="/">Learn More</Button>
        </div>
        <div className="order-1 mt-16 md:mt-0 md:w-9/12">
          <div className="relative block">
            <Image
              src={"/images/home/community-partner.png"}
              alt="Image"
              // layout="fill"
              width={800}
              height={700}
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
