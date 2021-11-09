import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HowItWork from "../components/Work/HowItWork";
import Work from "../components/Work/Work";
import WorkContainer from "../components/Work/WorkContainer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <WorkContainer />
      <HowItWork />
      <Footer />
    </>
  );
}
