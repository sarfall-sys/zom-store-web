function Footer() {
    return (
        <footer className="py-8 mt-12 text-white bg-primary-800">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Company Info */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-primary-200">
                            Zom Store
                        </h3>
                        <p className="text-primary-300">
                            Zom Store buy your favourite clothes, makeup,
                            skincare products.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-primary-200">
                            Contact Us
                        </h4>
                        <div className="space-y-2 text-primary-300">
                            <p>Email: hello@zoomstore.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 mt-8 text-center border-t border-primary-700 text-primary-400">
                    <p>&copy; 2025 Zom Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
