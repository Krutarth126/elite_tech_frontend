import Head from "next/head";
import About from "../component/About";
import Body from "../component/Body";
import Footer from "../component/Footer";
import Input from "../component/Input";
import Navbar from "../component/Navbar";
import Services from "../component/Services";
import Technology from "../component/Technology";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <title>Elite Tech</title>
        <meta property="og:title" content="Elite Tech" />
        <meta
          property="og:description"
          content="Professional Website developers. Get Your Website ready in 3 days"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/nDFz1tb/logo2.jpg"
        />
        <meta property="og:url" content="https://elite-tech.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="title" content="Elite Tech:- Website creators " />
        <meta
          name="description"
          content="Elite Tech || Do You Want Your Website ready in 3 days? You are in right place. Get your custom website ready within 3 days"
        />
        <link rel="icon" href="https://i.ibb.co/tQYzJPs/logo.png" />
        <meta name="allow-search" content="yes" />
        <meta name="googlebot" content="index,follow, noodp" />
        <meta name="yahooSeeker" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <Body />
      <Services />
      <Technology />
      <About />
      <Input />
      <Footer />
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
