import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8 text-center">
      <p className="mb-2">© 2025 ALX-Stay. All rights reserved.</p>
      <div className="flex justify-center gap-4 text-sm">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">Privacy</a>
      </div>
    </div>
  </footer>
);

export default Footer;