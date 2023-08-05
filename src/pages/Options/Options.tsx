import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-semibold">
            Dev Box
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Manage Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto mt-4 flex flex-col lg:flex-row">
        <aside className="w-1/4 lg:w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-700">
                Manage Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Settings
              </a>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-4 bg-white">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to the Dashboard!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vestibulum, velit a fringilla.
          </p>
        </main>
      </div>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
          <ul className="flex space-x-4 mb-4 lg:mb-0">
            <li>
              <a href="/" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Options;
