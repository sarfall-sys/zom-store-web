import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
function Footer() {
    return (
        <footer className="py-12 mt-16 text-white bg-primary-600">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-3">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-primary-100">
                            Lavstyle
                        </h3>
                        <p className="leading-relaxed text-primary-300">
                            Discover your favorite clothes, makeup, and skincare
                            products all in one place.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-primary-100">
                            Contact Us
                        </h4>
                        <div className="space-y-3 text-primary-300">
                            <p className="transition hover:text-primary-100">
                                <BiMailSend className="inline mr-2 text-primary-300" /> hello@lavstyle.com
                            </p>
                            <p className="transition hover:text-primary-100">
                                <BiPhone className="inline mr-2 text-primary-300" /> (555) 123-4567
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-primary-100">
                            Follow Us
                        </h4>
                        <div className="flex items-center space-x-6">
                            <Link
                                to="#"
                                className="transition transform text-primary-300 hover:text-primary-100 hover:scale-110"
                            >
                                <FaFacebook  className = "inline text-primary-300" size={24} />
                            </Link>
                            <Link
                                to="#"
                                className="transition transform text-primary-300 hover:text-primary-100 hover:scale-110"
                            >
                                <FaTwitter  className = "inline text-primary-300" size={24} />
                            </Link>
                            <Link
                                to="#"
                                className="transition transform text-primary-300 hover:text-primary-100 hover:scale-110"
                            >
                                <FaInstagram className = "inline text-primary-300" size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center border-t border-primary-700 text-primary-400">
                    <p>&copy; 2025 Lavstyle. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
