import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Zap, FileCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-8">
            <Shield className="h-4 w-4 mr-2" />
            Trusted by Legal Professionals Worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Convert & Analyze
            <span className="block text-slate-700">Legal Documents</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">
              Instantly
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload any legal document and get instant format conversion plus AI-powered analysis. 
            Streamline your legal workflow with professional-grade document processing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Converting Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-slate-100 rounded-full mb-4">
                <FileCheck className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Format Support</h3>
              <p className="text-slate-600 text-center">Convert between PDF, DOCX, TXT, RTF, and more formats seamlessly.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-slate-100 rounded-full mb-4">
                <Zap className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-slate-600 text-center">Get detailed legal insights, risk assessments, and compliance checks.</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-slate-100 rounded-full mb-4">
                <Shield className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-slate-600 text-center">Bank-level encryption and compliance with legal industry standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;