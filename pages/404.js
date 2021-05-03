import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
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
          content="Do You Want Your Website ready in 3 days? You are in right place. Get your custom website ready within 3 days"
        />
        <link rel="icon" href="https://i.ibb.co/tQYzJPs/logo.png" />
        <meta name="allow-search" content="yes" />
        <meta name="googlebot" content="index,follow, noodp" />
        <meta name="yahooSeeker" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="d-flex justify-content-center  h-100 my-auto">
        <h1>Oppppssssss..... Page Not Found Error 404</h1>
      </div>
    </>
  );
}
