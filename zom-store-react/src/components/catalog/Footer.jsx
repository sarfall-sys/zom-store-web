
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="py-8 mt-12 text-white bg-primary-800">
                <div className="grid grid-cols-4 gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-primary-200">
                            Lavstyle
                        </h3>
                        <p className="text-primary-300">
                            Lavstyle buy your favourite clothes, makeup,
                            skincare products.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-primary-200">
                            Contact Us
                        </h4>
                        <div className="space-y-2 text-primary-300">
                            <p>Email: hello@lavstyle.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                    </div>
                </div>
                {/*Social Media */}
                <div>
                    <h4 className="mb-4 text-lg font-semibold text-primary-200">
                        Follow Us
                    </h4>
                    <div className="flex space-x-4 text-primary-300">
                        <Link to="#" className="hover:text-primary-100">
                            <FaFacebook size={24} />
                        </Link>
                        <Link to="#" className="hover:text-primary-100">
                            <FaTwitter size={24} />
                        </Link>
                        <Link to="#" className="hover:text-primary-100">
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div>

                <div className="pt-6 mt-8 text-center border-t border-primary-700 text-primary-400">
                    <p>&copy; 2025 Lavstyle. All rights reserved.</p>
                </div>
        </footer>
    );
}

export default Footer;
