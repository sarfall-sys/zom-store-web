function Footer() {
  return (
    <footer className="bg-lavender-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-lavender-200">
              Zom Store
            </h3>
            <p className="text-lavender-300">
              Zom Store buy yoy favourite makeup ,skinare
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-lavender-200">
              Contact Us
            </h4>
            <div className="text-lavender-300 space-y-2">
              <p>Email: hello@lavenderapp.com</p>
              <p>Phone: (555) 123-LAVE</p>
              <p>Address: 123 Lavender Lane</p>
            </div>
          </div>
        </div>

        <div className="border-t border-lavender-700 mt-8 pt-6 text-center text-lavender-400">
          <p>&copy; 2025 Zom Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
