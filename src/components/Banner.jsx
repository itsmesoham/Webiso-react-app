import React from 'react'
import '../styles/Banner.css'
import { motion } from 'framer-motion';

export default function Banner() {
    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <>
            <div className='banner'>
                <div className="bannerContent">
                    <h1 className="bannerTitle">
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        >
                            Transform Your <br />
                            <span className='gradTitle'>Online Presence</span> <br />
                            Today!
                        </motion.div>
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, y: -35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    >
                        <p className="bannerSubtitle">Est in adipiscing odio lectus parturient ex euismod arcu porttitor facilisis. Nisi curae blandit facilisis nisl est adipiscing.</p>
                        <div className="bannerButtons">
                            <button className="bannerButton primaryButton">Get Started</button>
                            <button className="bannerButton secondaryButton">Explore Portfolio</button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="freeconwhatwedo">
                <div className='whatwedo'>
                    <div className="boxes">
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        >
                            <div className="box1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="38" color="#71ECB6" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                    <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M21 15H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 9H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className='box1Content'>
                                    <br />
                                    <span>Design & Development</span>
                                    <p>Focusing on user experience and interface design to ensure intuitive navigation and engagement.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        >
                        <div className="box2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#71ECB6" fill="none">
                                <path d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.716C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.0399 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.716C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.716 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.0399 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.716 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            <br />
                            <div className="box2Content">
                                <span>Maintainance & Support</span>
                                <p>Keeping your website up-to-date, fast loading times, smooth performance and security patches.</p>
                            </div>
                        </div>
                        </motion.div>
                    </div>
                </div>
                <div className='rotatedText'>Get an Appointment</div>
                <motion.div
                    className="freeCon"
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={containerVariants}
                >
                    <h2>Free Consultations</h2>
                    <div className="nameCompany">
                        <div className="name">
                            Name <br />
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="company">
                            Company <br />
                            <input type="text" name="company" placeholder="Company" />
                        </div>
                    </div>
                    <div className="phoneEmail">
                        <div className="phone">
                            Phone <br />
                            <input type="text" name="phone" placeholder="Phone" />
                        </div>
                        <div className="email">
                            Email <br />
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="message-container">
                        Message <br />
                        <textarea className="message" placeholder="Message" />
                    </div>
                    <div className="getAppointment">
                        <input type="text" name="appointment" placeholder="Get an Appointment" />
                    </div>
                </motion.div>
            </div>
        </>
    )
}