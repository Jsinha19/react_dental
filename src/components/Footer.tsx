import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-16 border-t-2 border-[#6c63ff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Clinic Info */}
        <div className="md:col-span-1">
          <img src={logo} alt="Millersneuk Logo" className="mb-4 w-[180px]" />
          <p className="text-sm leading-6 text-gray-300">
            112 Kirkintilloch Rd,<br />
            Lenzie, Kirkintilloch,<br />
            G66 4LQ
          </p>
          <p className="mt-4 text-sm text-gray-400">0141 777 7511</p>
          <p className="text-sm text-gray-400">info@dentalglasgow.co.uk</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[15px] font-semibold text-[#6c63ff] mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Referrals</li>
            <li>All Treatments</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-[15px] font-semibold text-[#6c63ff] mb-4">Useful links</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Blog</li>
            <li>News & Updates</li>
            <li>Complaints Procedure</li>
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h4 className="text-[15px] font-semibold text-[#6c63ff] mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm text-white">
            <li>Composite Bonding</li>
            <li>Invisalign®</li>
            <li>Implants</li>
            <li>Tooth Whitening</li>
            <li>Facial Aesthetics</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-[15px] font-semibold text-white mb-4">Subscribe</h4>
          <p className="text-sm text-gray-300 mb-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex space-x-2 mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-black border border-[#6c63ff] text-white text-sm w-full"
            />
            <button className="px-4 py-2 rounded border border-[#6c63ff] text-[#6c63ff] hover:bg-[#6c63ff] hover:text-white text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-[11px] text-gray-400">
            By subscribing you agree to with our <span className="underline">Privacy Policy</span> and provide consent to receive updates from our company.
          </p>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-3">
        <span>Website By FlakeySalt</span>
        <span>© 2023 Millersneuk. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
