import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Upload, FileText, Download, Brain, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DocumentProcessor = () => {
  const [file, setFile] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [supportedFormats, setSupportedFormats] = useState({ input: [], output: [] });
  const [outputFormat, setOutputFormat] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [conversionResult, setConversionResult] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const { toast } = useToast();

  // Load supported formats on component mount
  useEffect(() => {
    const loadSupportedFormats = async () => {
      try {
        const response = await axios.get(`${API}/formats`);
        setSupportedFormats(response.data);
      } catch (error) {
        console.error('Error loading supported formats:', error);
        // Fallback to default formats
        setSupportedFormats({
          input: ['PDF', 'DOCX', 'DOC', 'TXT', 'RTF', 'ODT'],
          output: ['PDF', 'DOCX', 'DOC', 'TXT', 'RTF', 'ODT', 'HTML']
        });
      }
    };
    loadSupportedFormats();
  }, []);

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      const response = await axios.post(`${API}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFile(uploadedFile);
      setFileId(response.data.file_id);
      setIsUploading(false);
      
      toast({
        title: "File uploaded successfully",
        description: `${uploadedFile.name} is ready for processing.`,
      });
    } catch (error) {
      setIsUploading(false);
      toast({
        title: "Upload failed",
        description: error.response?.data?.detail || "Failed to upload file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleConvert = async () => {
    if (!fileId || !outputFormat) {
      toast({
        title: "Missing information",
        description: "Please upload a file and select an output format.",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);
    try {
      const response = await axios.post(`${API}/convert`, {
        file_id: fileId,
        target_format: outputFormat,
      });

      setConversionResult(response.data);
      setIsConverting(false);
      
      toast({
        title: "Conversion completed",
        description: "Your document has been successfully converted.",
      });
    } catch (error) {
      setIsConverting(false);
      toast({
        title: "Conversion failed",
        description: error.response?.data?.detail || "Failed to convert file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAnalyze = async () => {
    if (!fileId) {
      toast({
        title: "No file uploaded",
        description: "Please upload a file first to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const response = await axios.post(`${API}/analyze`, {
        file_id: fileId,
      });

      setAnalysisResult(response.data);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis completed",
        description: "Legal document analysis is ready for review.",
      });
    } catch (error) {
      setIsAnalyzing(false);
      toast({
        title: "Analysis failed",
        description: error.response?.data?.detail || "Failed to analyze document. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    if (!conversionResult?.conversion_id) return;
    
    try {
      const response = await axios.get(`${API}/download/${conversionResult.conversion_id}`, {
        responseType: 'blob',
      });
      
      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', conversionResult.converted_file);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      toast({
        title: "Download started",
        description: "Your converted file is being downloaded.",
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Failed to download converted file. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="processor" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Process Your Legal Documents
          </h2>
          <p className="text-lg text-slate-600">
            Upload your document and choose to convert formats or get AI analysis
          </p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Document Upload
            </CardTitle>
            <CardDescription>
              Supported formats: {supportedFormats.input.join(', ')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 transition-colors duration-200">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".pdf,.docx,.doc,.txt,.rtf,.odt"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="h-12 w-12 text-slate-400 animate-spin mb-4" />
                    <p className="text-slate-600">Uploading...</p>
                  </div>
                ) : file ? (
                  <div className="flex flex-col items-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                    <p className="text-slate-900 font-medium">{file.name}</p>
                    <p className="text-slate-600 text-sm">Click to upload a different file</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <FileText className="h-12 w-12 text-slate-400 mb-4" />
                    <p className="text-slate-900 font-medium">Click to upload your legal document</p>
                    <p className="text-slate-600 text-sm">or drag and drop it here</p>
                  </div>
                )}
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Convert Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Format Conversion
              </CardTitle>
              <CardDescription>
                Convert your document to any supported format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select output format" />
                </SelectTrigger>
                <SelectContent>
                  {supportedFormats.output.map((format) => (
                    <SelectItem key={format} value={format.toLowerCase()}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                onClick={handleConvert}
                disabled={!fileId || !outputFormat || isConverting}
                className="w-full bg-slate-900 hover:bg-slate-800"
              >
                {isConverting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Convert Document
                  </>
                )}
              </Button>

              {conversionResult && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium text-green-800">Conversion Complete</span>
                  </div>
                  <p className="text-sm text-green-700 mb-3">
                    {conversionResult.original_file} → {conversionResult.converted_file}
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleDownload}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Converted File
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analyze Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI Legal Analysis
              </CardTitle>
              <CardDescription>
                Get detailed insights and legal analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="text-sm text-slate-700">
                  Our AI will analyze your document for:
                </p>
                <ul className="text-sm text-slate-600 mt-2 space-y-1">
                  <li>• Key legal provisions</li>
                  <li>• Risk assessments</li>
                  <li>• Compliance checks</li>
                  <li>• Recommendations</li>
                </ul>
              </div>
              
              <Button 
                onClick={handleAnalyze}
                disabled={!fileId || isAnalyzing}
                className="w-full bg-slate-700 hover:bg-slate-800"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Analyze Document
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Results */}
        {analysisResult && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                Legal Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Summary */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Executive Summary</h4>
                <p className="text-blue-800">{analysisResult.summary}</p>
              </div>

              {/* Key Findings */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Key Findings</h4>
                <ul className="space-y-2">
                  {analysisResult.key_findings.map((finding, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk Assessment */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Risk Assessment</h4>
                <div className="space-y-3">
                  {analysisResult.risk_assessment.map((risk, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center mb-2">
                        <AlertCircle className={`h-4 w-4 mr-2 ${
                          risk.level === 'High' ? 'text-red-500' : 
                          risk.level === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                        }`} />
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          risk.level === 'High' ? 'bg-red-100 text-red-800' : 
                          risk.level === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {risk.level} Risk
                        </span>
                      </div>
                      <p className="text-slate-700 mb-2">{risk.issue}</p>
                      <p className="text-sm text-slate-600">
                        <strong>Recommendation:</strong> {risk.recommendation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Score */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Compliance Score</h4>
                <div className="flex items-center mb-2">
                  <div className="text-2xl font-bold text-green-800 mr-2">
                    {analysisResult.compliance.score}%
                  </div>
                  <div className="flex-1 bg-green-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${analysisResult.compliance.score}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-green-800">{analysisResult.compliance.details}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default DocumentProcessor;