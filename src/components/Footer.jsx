import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Talrn</h3>
            <p className="text-gray-300 text-sm">
              Building solutions to scale your team easier & faster.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/why" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Why Talrn
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Talent</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/apply-as-vendor" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Apply as Developer
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/hire-ios-dev" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Hire iOS Developer
                </Link>
              </li>
              <li>
                <Link to="/find-ios-dev" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Browse Developers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Talrn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
