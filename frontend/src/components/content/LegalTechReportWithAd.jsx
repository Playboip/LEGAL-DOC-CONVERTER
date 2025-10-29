import React from 'react';
import AdSenseAd from '../ads/AdSenseAd';

// Legal Tech Industry Report with Ad Integration
export const LegalTechReportWithAd = ({ className = "my-12" }) => (
  <div className={`bg-white shadow-xl rounded-xl border border-gray-200 ${className}`}>
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        2025 Legal Technology Industry Report: Document Management Trends
      </h2>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The legal technology industry has experienced unprecedented growth in 2025, with
          document management and conversion technologies leading the transformation. This
          comprehensive report analyzes current trends, market dynamics, and future opportunities
          in the legal document processing sector, providing insights essential for law firms
          and legal departments planning their technology investments.
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Market Overview and Growth Metrics
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The global legal document management market has reached $6.8 billion in 2025,
          representing a 23% year-over-year growth. This expansion is driven by increasing
          digitization requirements, remote work adoption, and regulatory compliance needs.
          Document conversion and analysis tools specifically account for $1.2 billion of
          this market, with AI-powered solutions commanding premium pricing due to their
          enhanced capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">78%</div>
            <p className="text-blue-800 font-medium">of firms increased legal tech spending</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-900 mb-2">$15K</div>
            <p className="text-green-800 font-medium">average annual savings per attorney</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-900 mb-2">92%</div>
            <p className="text-purple-800 font-medium">client satisfaction improvement</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Emerging Technologies Reshaping Legal Practice
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Artificial intelligence and machine learning technologies are fundamentally changing
          how legal professionals interact with documents. Natural language processing enables
          sophisticated contract analysis, while optical character recognition advances have
          made legacy document digitization more accurate and efficient. These technologies
          are not just improving existing processes but enabling entirely new capabilities
          such as predictive legal analytics and automated compliance monitoring.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-indigo-900 mb-4">
            Top 5 Legal Tech Innovations of 2025
          </h4>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
              <div>
                <h5 className="font-semibold text-indigo-900">AI-Powered Contract Intelligence</h5>
                <p className="text-indigo-800 text-sm">Automated clause identification, risk scoring, and compliance checking</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
              <div>
                <h5 className="font-semibold text-indigo-900">Blockchain Document Verification</h5>
                <p className="text-indigo-800 text-sm">Immutable document history and authenticity verification</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
              <div>
                <h5 className="font-semibold text-indigo-900">Advanced OCR and Document Mining</h5>
                <p className="text-indigo-800 text-sm">Extraction of structured data from unstructured legal documents</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
              <div>
                <h5 className="font-semibold text-indigo-900">Real-time Collaboration Platforms</h5>
                <p className="text-indigo-800 text-sm">Secure, multi-party document editing with audit trails</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</div>
              <div>
                <h5 className="font-semibold text-indigo-900">Predictive Legal Analytics</h5>
                <p className="text-indigo-800 text-sm">Case outcome prediction and strategic decision support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* AD PLACEMENT WITH SUBSTANTIAL CONTEXT */}
    <div className="px-8 py-6 bg-gray-50 border-t border-b border-gray-200">
      <div className="text-center mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Professional Legal Software Solutions
        </h4>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Discover cutting-edge legal technology solutions trusted by leading law firms
          and corporate legal departments worldwide. These platforms offer advanced
          document management, AI-powered analysis, and comprehensive compliance tools.
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <AdSenseAd
          slot={process.env.REACT_APP_ADSENSE_TECH_REPORT_SLOT_ID}
          style={{ display: 'block', width: '300px', height: '250px' }}
          format="rectangle"
        />
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-500">
          Sponsored content helps us provide free legal technology research and insights
        </p>
      </div>
    </div>

    {/* CONTINUED CONTENT AFTER AD */}
    <div className="p-8">
      <div className="prose max-w-none">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Implementation Strategies for Legal Technology Adoption
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Successful legal technology implementation requires careful planning, stakeholder
          buy-in, and phased deployment strategies. Leading law firms are adopting a
          systematic approach that includes pilot programs, comprehensive training, and
          continuous optimization. The most successful implementations focus on user
          adoption and workflow integration rather than technology features alone.
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-green-900 mb-4">
            Best Practices for Technology Adoption
          </h4>
          <ul className="text-green-800 space-y-2">
            <li>• Start with pilot programs in specific practice areas</li>
            <li>• Invest heavily in user training and change management</li>
            <li>• Establish clear ROI metrics and success indicators</li>
            <li>• Maintain strong data security and compliance protocols</li>
            <li>• Plan for scalability and future technology integration</li>
          </ul>
        </div>

        <p className="text-center text-lg font-semibold text-gray-900 mt-8">
          Stay ahead of the legal technology curve with comprehensive document
          management solutions designed for modern legal practice.
        </p>
      </div>
    </div>
  </div>
);

export default LegalTechReportWithAd;