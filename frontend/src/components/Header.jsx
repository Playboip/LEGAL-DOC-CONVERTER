import React from 'react';
import { Button } from './ui/button';
import { Scale, FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">LegalConvert Pro</h1>
              <p className="text-xs text-slate-600">Document Converter & Analyzer</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Pricing
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">
              How it Works
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
              Sign In
            </Button>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;