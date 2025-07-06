"use client";

import React from "react";
import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 min-h-screen bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-6">About CAiRL</h1>
        <p className="text-lg mb-4">
          CAiRL is a leading research lab dedicated to advancing AI technologies that benefit society.
        </p>
        <p className="text-lg mb-4">
          Our mission is to develop AI-based solutions, entrepreneurial ethics, and responsible AI for everyone.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;