import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Resources from "@/components/Resource";
import Section from "@/components/Section";
import Community from "@/components/Communiy";
import Heading from "@/components/Heading";
import BusinessCard from "@/components/Bussiness";
import ConsumerCard from "@/components/Consumer";


export default function Home() {
  return (
    <div>

      <Head>
        Ismail Bajwa
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section>
        <BusinessCard />
      </section>

      <section>
        <ConsumerCard />
      </section>

      <section>
        <Heading />
      </section>

      <section>
        <Community />
      </section>

      <section id="review">
        <Reviews />
      </section>

      <section id="resource">
        <Resources />
      </section>

      <section id="section-pg">
        <Section />
      </section>

      <Footer />


    </div>
  );
}
