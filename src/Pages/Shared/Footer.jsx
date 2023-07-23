import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-orange-50'>
            <footer className="footer py-10 text-base-content md:w-10/12 md:mx-auto mx-5">
                <div>
                    <div className='flex items-center'>
                        <img className='md:w-24 w-14' src="https://i.ibb.co/V38wWgR/logo.png" alt="" />
                        <Link className="md:text-5xl text-3xl font-semibold cursive-font">Academix</Link>
                    </div>
                    <p>Explore, Compare, and Reserve Your Seat <br/>Online - Your Journey to Success Starts Here!</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;