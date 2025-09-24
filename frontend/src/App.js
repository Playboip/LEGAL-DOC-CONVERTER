import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DocumentProcessor from "./components/DocumentProcessor";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import SignInModal from "./components/auth/SignInModal";
import SignUpModal from "./components/auth/SignUpModal";
import LegalModalManager from "./components/legal/LegalModalManager";
import { Toaster } from "./components/ui/toaster";
import LegalDocumentGuideWithAd from "./components/content/LegalDocumentGuideWithAd";
import LegalTechReportWithAd from "./components/content/LegalTechReportWithAd";
import AffiliateSection from "./components/marketing/AffiliateSection";
import LegalBlog from "./components/content/LegalBlog";
import SecurityPage from "./components/legal/SecurityPage";
import TermsOfService from "./components/legal/TermsOfService";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import CookiePolicy from "./components/legal/CookiePolicy";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      
      {/* SUBSTANTIAL CONTENT: Complete Legal Document Guide with Ad Integration */}
      <LegalDocumentGuideWithAd />
      
      <Features />
      
      <DocumentProcessor />
      
      {/* Affiliate marketing section */}
      <AffiliateSection />
      
      {/* SUBSTANTIAL CONTENT: Legal Tech Industry Report with Ad Integration */}
      <LegalTechReportWithAd />
      
      <Pricing />
      <Footer />
    </>
  );
};

const BlogPage = () => {
  return (
    <>
      <Header />
      <LegalBlog />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </BrowserRouter>
        <SignInModal />
        <SignUpModal />
        <LegalModalManager />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;