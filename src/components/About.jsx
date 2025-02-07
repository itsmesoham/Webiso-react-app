import React from 'react'
import '../styles/About.css'
import AboutImg from '../assets/images/about-img-left.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react"

export default function About() {
    return (
        <div className='about'>
            <div className="about-left">
                <motion.div
                    initial={{ opacity: 0, x: -250 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="about-img-left">
                    <img src={AboutImg} alt="about-img-left" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.3,
                        scale: { type: "spring", visualDuration: 1, bounce: 0.1 },
                    }}
                    className="about-img-text">
                    <ul>
                        <FaCheckCircle id='check' />Custom Solutions
                    </ul>
                    <ul>
                        <FaCheckCircle id='check' />Cutting-Edge Design
                    </ul>
                    <ul>
                        <FaCheckCircle id='check' />SEO Optimization
                    </ul>
                    <ul>
                        <FaCheckCircle id='check' />Responsive Design
                    </ul>
                    <ul>
                        <FaCheckCircle id='check' />Innovative Technology
                    </ul>
                    <ul>
                        <FaCheckCircle id='check' />Security and Reliability
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}
