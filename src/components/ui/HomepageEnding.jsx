// components/HomepageEnding.js
"use client";
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const HomepageEnding = () => {
    return (
        <div className="text-center py-20 bg-black text-white">
            <h2 className="text-4xl font-bold text-yellow-400">Ready to Elevate Your Social Media Presence?</h2>
            <p className="mt-4 mb-8 text-lg">
                Join us today and discover how our AI-powered social media manager can help you generate engaging content effortlessly!
            </p>
            <a
                href="https://hey-bunny.vercel.app/sign-in?redirect_url=https%3A%2F%2Fhey-bunny.vercel.app%2Fdashboard"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-yellow-300"
            >
                Get Started
            </a>

            <section className="py-10">
                <h2 className="text-3xl font-bold text-yellow-400">What We Offer</h2>
                <div className="flex flex-wrap justify-center mt-6">
                    <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                        <h3 className="text-xl font-semibold">AI-Powered Post Generation</h3>
                        <p className="mt-2">Automatically generate high-quality social media posts that resonate with your audience.</p>
                    </div>
                    <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Content Scheduling</h3>
                        <p className="mt-2">Plan and schedule your posts for optimal engagement without the hassle.</p>
                    </div>
                    <div className="m-4 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                        <h3 className="text-xl font-semibold">Performance Analytics</h3>
                        <p className="mt-2">Get insights into your posts performance to refine your strategy and maximize reach.</p>
                    </div>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-bold text-yellow-400">Stay Connected</h2>
                <p className="mt-4 mb-6">
                    Follow us on social media for the latest updates on our features and tips on social media marketing!
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://www.linkedin.com/in/subhash-singh-879161248" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="https://x.com/subhash_x_singh" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/subhash_x_singh?igsh=NnY2b3Yxc2tvb2lh" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">
                        <FaInstagram className="text-2xl" />
                    </a>
                </div>
            </section>

            <footer className="py-4 bg-gray-800">
                <p className="text-sm">🚀💡 Ideas Launched by Subhash</p>
            </footer>
        </div>
    );
};

export default HomepageEnding;
