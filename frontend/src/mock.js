// Mock data for Legal Document Converter and Analyzer

export const mockAnalysis = {
  summary: "This employment contract contains standard terms and conditions with some notable provisions that require attention.",
  keyFindings: [
    "Non-compete clause extends for 2 years post-employment",
    "Confidentiality agreement includes broad scope of proprietary information",
    "Termination clause allows for 30-day notice period",
    "Compensation structure includes base salary plus performance bonuses",
    "Intellectual property rights are assigned to the company"
  ],
  riskAssessment: [
    {
      level: "Medium",
      issue: "Non-compete clause duration may be excessive in some jurisdictions",
      recommendation: "Consider reducing to 12-18 months for better enforceability"
    },
    {
      level: "Low",
      issue: "Standard confidentiality terms are reasonable",
      recommendation: "No immediate action required"
    }
  ],
  compliance: {
    score: 85,
    details: "Document is generally compliant with employment law standards"
  }
};

export const supportedFormats = {
  input: ['PDF', 'DOCX', 'DOC', 'TXT', 'RTF', 'ODT'],
  output: ['PDF', 'DOCX', 'DOC', 'TXT', 'RTF', 'ODT', 'HTML']
};

export const subscriptionPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "3 document uploads",
      "1 legal document analysis",
      "Basic file conversion",
      "Standard support"
    ],
    limitations: ["Limited uploads", "Basic analysis only"]
  },
  {
    name: "Professional",
    price: "$49.99",
    period: "month",
    features: [
      "Unlimited document uploads",
      "Unlimited legal document analysis",
      "Advanced AI analysis",
      "All format conversions",
      "Priority support",
      "Bulk processing"
    ],
    popular: true
  }
];

export const mockConversion = {
  originalFile: "contract.pdf",
  convertedFile: "contract.docx",
  status: "completed",
  downloadUrl: "#"
};

export const blogPosts = [
  {
    id: 1,
    title: "5 Essential Legal Document Formats Every Attorney Should Master",
    excerpt: "Understanding the nuances of PDF/A, DOCX, and other legal document formats is crucial for modern legal practice. Learn which formats to use when and why.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Document Management",
    content: "Understanding the nuances of PDF/A, DOCX, and other legal document formats is crucial for modern legal practice. Learn which formats to use when and why."
  },
  {
    id: 2,
    title: "AI in Legal Practice: Document Analysis Revolution",
    excerpt: "Artificial intelligence is transforming how lawyers review contracts and legal documents. Discover the latest AI tools and their practical applications.",
    date: "2025-01-12",
    readTime: "12 min read",
    category: "Legal Technology",
    content: "Artificial intelligence is transforming how lawyers review contracts and legal documents. Discover the latest AI tools and their practical applications."
  },
  {
    id: 3,
    title: "Compliance Checklist: Legal Document Security Best Practices",
    excerpt: "Protect client confidentiality and ensure regulatory compliance with these essential security practices for legal document handling.",
    date: "2025-01-10",
    readTime: "15 min read",
    category: "Compliance",
    content: "Protect client confidentiality and ensure regulatory compliance with these essential security practices for legal document handling."
  },
  {
    id: 4,
    title: "Court Filing Requirements: Digital Document Standards 2025",
    excerpt: "Stay current with the latest court filing requirements and digital document standards across different jurisdictions.",
    date: "2025-01-08",
    readTime: "10 min read",
    category: "Court Procedures",
    content": "Stay current with the latest court filing requirements and digital document standards across different jurisdictions."
  },
  {
    id: 5,
    title: "Contract Review Automation: Tools and Techniques",
    excerpt: "Streamline your contract review process with automated tools and AI-powered analysis. Increase accuracy while reducing review time.",
    date: "2025-01-05",
    readTime: "14 min read",
    category: "Contract Law",
    content: "Streamline your contract review process with automated tools and AI-powered analysis. Increase accuracy while reducing review time."
  },
  {
    id: 6,
    title: "The Rise of Legal Tech: 2025 Trends Shaping the Industry",
    excerpt: "The legal landscape is undergoing a seismic shift, driven by technological innovation. From AI-powered research to blockchain-based smart contracts, discover the key trends that are redefining legal practice in 2025 and beyond.",
    date: "2025-02-20",
    readTime: "10 min read",
    category: "Legal Technology",
    content": "The legal profession, once a bastion of tradition, is now at the epicenter of a technological earthquake. The tremors of innovation are reshaping everything from legal research to client interactions. As we navigate 2025, it's clear that staying ahead of the curve is no longer an option—it's a necessity. At the forefront of this transformation is the meteoric rise of Artificial Intelligence. AI-powered platforms are no longer the stuff of science fiction; they are indispensable tools for modern attorneys. These systems can analyze thousands of documents in minutes, identifying relevant clauses, potential risks, and critical precedents with a level of accuracy that surpasses human capabilities. This not only accelerates the discovery process but also provides a deeper level of insight, enabling lawyers to build stronger cases. But AI is just one piece of the puzzle. The emergence of blockchain technology and smart contracts is another trend with profound implications. Smart contracts, which are self-executing contracts with the terms of the agreement directly written into code, promise a future of automated, transparent, and tamper-proof transactions. While still in their early stages, their potential to revolutionize corporate law, real estate, and intellectual property is undeniable. Furthermore, the shift towards remote work has accelerated the adoption of cloud-based practice management solutions. These platforms offer a centralized hub for case management, client communication, billing, and document storage, allowing firms to operate seamlessly from anywhere in the world. This flexibility is not just a convenience; it's a competitive advantage in a globalized legal market. The rise of online dispute resolution (ODR) platforms is also democratizing access to justice, offering a faster and more affordable alternative to traditional litigation. As these technologies continue to mature and converge, they will create a legal landscape that is more efficient, accessible, and data-driven than ever before. The firms that embrace this change will be the ones that thrive in the years to come. This article will explore these trends in greater detail, providing insights into how they are shaping the future of the legal profession. We will delve into the practical applications of AI in legal research, the potential of blockchain to transform transactional law, and the impact of cloud computing on the business of law. We will also examine the ethical considerations that arise from the increasing use of technology in the legal profession, and discuss the skills that lawyers will need to succeed in this new environment. By the end of this article, you will have a comprehensive understanding of the key trends in legal tech and their implications for the future of the legal profession. You will also have a clear sense of the opportunities and challenges that lie ahead, and be better equipped to navigate the changing legal landscape. So, let's dive in and explore the future of law."
  },
  {
    id: 7,
    title: "AI and Contract Lifecycle Management: A Perfect Match",
    excerpt: "Discover how AI is streamlining contract lifecycle management (CLM), from creation and negotiation to execution and renewal. Learn how automation is reducing risks and improving efficiency.",
    date: "2025-02-28",
    readTime: "12 min read",
    category: "Contract Law",
    content: "Contract lifecycle management (CLM) has long been a labor-intensive process, fraught with manual tasks and potential for human error. But the integration of Artificial Intelligence is turning this traditional pain point into a strategic advantage. AI-powered CLM solutions are automating and optimizing every stage of the contract lifecycle, delivering unprecedented levels of efficiency, accuracy, and insight. It all begins with contract creation. AI can generate customized contracts in minutes, drawing from a library of pre-approved templates and clauses. This not only saves time but also ensures consistency and compliance with internal policies and legal standards. During the negotiation phase, AI acts as a vigilant assistant, analyzing contract drafts to identify unfavorable terms, missing clauses, and potential risks. By comparing the draft against a predefined playbook of best practices, AI can flag deviations and suggest alternative language, empowering legal teams to negotiate more effectively. Once a contract is executed, AI's work is far from over. It continuously monitors key dates, obligations, and renewal deadlines, sending automated alerts to relevant stakeholders. This proactive approach minimizes the risk of missed milestones and ensures that opportunities for renegotiation are never overlooked. Furthermore, AI-powered analytics can extract valuable insights from a portfolio of contracts, identifying trends, assessing risks, and uncovering opportunities for cost savings. By understanding how different clauses impact performance, organizations can refine their contracting strategies and make more data-driven decisions. The benefits of this AI-driven approach are clear: reduced legal risk, accelerated sales cycles, improved compliance, and a more strategic allocation of legal resources. As businesses face increasing pressure to operate with agility and efficiency, AI-powered CLM is no longer a luxury—it's a fundamental component of a modern legal department. In the following sections, we will explore the key features of AI-powered CLM solutions, discuss the benefits of implementation, and provide a roadmap for getting started. We will also examine the challenges and considerations that organizations should be aware of when adopting this transformative technology. By the end of this article, you will have a clear understanding of how AI is revolutionizing contract lifecycle management and how your organization can leverage this technology to gain a competitive advantage. So, let's explore the future of contract management."
  },
  {
    id: 8,
    title: "The Ethical Lawyer: Navigating AI in Legal Practice",
    excerpt: "As AI becomes more integrated into the legal profession, it raises a host of ethical questions. Explore the key ethical considerations, from algorithmic bias to the unauthorized practice of law, and learn how to navigate this new frontier responsibly.",
    date: "2025-03-05",
    readTime: "15 min read",
    category: "Legal Ethics",
    content": "The integration of Artificial Intelligence into legal practice is not just a technological shift; it's an ethical one. As we delegate more tasks to algorithms, we must confront a new set of challenges that strike at the heart of the legal profession's core principles. One of the most pressing concerns is the potential for algorithmic bias. AI systems learn from historical data, and if that data reflects societal biases, the AI will perpetuate and even amplify them. In the context of criminal justice, this could lead to biased sentencing recommendations. In corporate law, it could result in discriminatory hiring practices. Ensuring that AI tools are fair, transparent, and accountable is a critical ethical imperative. Another significant issue is the unauthorized practice of law. As AI-powered legal tech becomes more sophisticated, there's a risk that it could cross the line from providing information to giving legal advice. This raises questions about who is responsible when an AI makes a mistake. Is it the developer, the user, or the AI itself? The traditional framework of legal ethics, which is built around human lawyers, is ill-equipped to handle these new scenarios. Confidentiality is another area of concern. Legal professionals have a sacred duty to protect client information, but the use of cloud-based AI platforms introduces new security vulnerabilities. A data breach could expose sensitive client data, with devastating consequences. Furthermore, the increasing reliance on AI raises questions about the future of the legal profession itself. As AI automates tasks that were once the domain of junior lawyers, how will the next generation of attorneys get the training and experience they need to develop their skills? Navigating this new ethical frontier requires a proactive and collaborative approach. Law firms must develop clear policies and guidelines for the use of AI. Legal educators must incorporate AI ethics into their curricula. And regulators must create a framework that balances innovation with the protection of the public. The ethical lawyer of the future will be not just a legal expert, but also a technologically savvy and ethically astute navigator of the complex relationship between law and AI. This article will delve deeper into these ethical challenges, providing a framework for ethical decision-making in the age of AI. We will explore the concept of 'explainable AI' and its role in promoting transparency and accountability. We will also discuss the importance of human oversight and the need for a 'human-in-the-loop' approach to AI-powered legal tech. By the end of this article, you will have a nuanced understanding of the ethical landscape of AI in law and be better equipped to navigate this new frontier responsibly."
  },
  {
    id: 9,
    title: "Cybersecurity for the Modern Law Firm: A 2025 Guide",
    excerpt: "Law firms are prime targets for cyberattacks. Learn the essential cybersecurity best practices for 2025, from multi-factor authentication and data encryption to employee training and incident response planning.",
    date: "2025-03-12",
    readTime: "11 min read",
    category: "Cybersecurity",
    content": "In today's digital age, law firms are not just custodians of justice; they are repositories of sensitive client data. From confidential case files and intellectual property to financial records and personal information, the data held by law firms is a lucrative target for cybercriminals. The consequences of a data breach can be catastrophic, leading to financial loss, reputational damage, and even legal malpractice claims. As we move further into 2025, the cybersecurity threat landscape is becoming more sophisticated, and law firms must adopt a proactive and multi-layered approach to protect themselves and their clients. The first line of defense is a strong security culture. This starts with comprehensive employee training. Every member of the firm, from partners to support staff, must be educated about the latest phishing scams, social engineering tactics, and best practices for password hygiene. Regular security awareness training can turn the firm's biggest vulnerability—its people—into its greatest asset in the fight against cybercrime. Technology also plays a crucial role. Multi-factor authentication (MFA) should be mandatory for accessing all firm systems and applications. MFA adds an extra layer of security beyond just a password, making it much more difficult for unauthorized users to gain access. Data encryption is another essential safeguard. All sensitive data, whether it's stored on a server, a laptop, or in the cloud, should be encrypted both at rest and in transit. This ensures that even if a device is lost or stolen, the data remains inaccessible. Regular security audits and vulnerability assessments are also critical for identifying and addressing potential weaknesses in the firm's defenses. But even with the best preventative measures, breaches can still happen. That's why every law firm needs a well-defined incident response plan. This plan should outline the steps to be taken in the event of a breach, from containing the threat and notifying affected clients to working with law enforcement and restoring systems. By taking a comprehensive and proactive approach to cybersecurity, law firms can not only protect themselves from the ever-evolving threat of cyberattacks but also build trust with their clients and demonstrate their commitment to the highest standards of professional responsibility. In the following sections, we will provide a detailed checklist of cybersecurity best practices for law firms, including recommendations for specific technologies and policies. We will also discuss the latest trends in cybersecurity threats and provide actionable advice for mitigating these risks. By the end of this article, you will have a comprehensive understanding of the cybersecurity landscape for law firms and be well-equipped to protect your firm and your clients from the ever-present threat of cyberattacks."
  },
  {
    id: 10,
    title: "The E-Discovery Revolution: AI's Impact on Legal Research",
    excerpt: "E-discovery has transformed the litigation landscape. Discover how AI-powered tools are making the process faster, more accurate, and more cost-effective, and what it means for the future of legal research.",
    date: "2025-03-20",
    readTime: "13 min read",
    category: "Legal Technology",
    content": "The explosion of digital data has turned the discovery process in litigation into a monumental challenge. Manually reviewing terabytes of emails, documents, and other electronic files is not just time-consuming; it's also incredibly expensive and prone to human error. But the integration of Artificial Intelligence into e-discovery platforms is revolutionizing this critical aspect of legal practice, making it faster, more accurate, and more cost-effective. At the heart of this revolution is Technology Assisted Review (TAR), also known as predictive coding. TAR uses machine learning algorithms to identify relevant documents with a level of speed and accuracy that is simply unattainable through manual review. The process begins with a senior attorney reviewing a small sample of documents and coding them as relevant or not relevant. The TAR system then uses this seed set to learn the characteristics of a relevant document and applies that knowledge to the entire collection. As the system reviews more documents, it refines its understanding and becomes even more accurate. The benefits of TAR are transformative. It can reduce the volume of documents that require human review by as much as 99%, leading to massive cost savings. It also accelerates the review process, allowing legal teams to get to the key evidence faster. But the impact of AI in e-discovery goes beyond just document review. AI-powered tools can also analyze documents to identify key concepts, timelines, and relationships between individuals. This can help lawyers to quickly understand the narrative of a case and to identify potential witnesses and lines of inquiry. AI can also be used to identify privileged documents, which can help to prevent inadvertent disclosure and to protect client confidentiality. As AI technology continues to advance, we can expect to see even more sophisticated e-discovery tools. For example, AI will be able to analyze not just text but also audio and video files. It will also be able to identify emotional sentiment in documents, which could be a valuable tool in assessing the credibility of a witness. The e-discovery revolution is not just about technology; it's about a fundamental shift in how legal research is conducted. By embracing these AI-powered tools, legal professionals can not only improve the efficiency and accuracy of the discovery process but also deliver better outcomes for their clients. This article will provide a deep dive into the world of e-discovery, exploring the different types of AI-powered tools available and their practical applications. We will also discuss the legal and ethical implications of using AI in e-discovery and provide a roadmap for implementing these technologies in your practice. By the end of this article, you will have a comprehensive understanding of the e-discovery revolution and be well-equipped to leverage the power of AI to transform your legal research."
  },
  {
    id: 11,
    title: "From Paper to Pixels: The Business Case for Digitizing Legal Documents",
    excerpt: "In a digital-first world, relying on paper documents is a recipe for inefficiency and risk. Discover the compelling business case for digitizing your legal documents, from improved accessibility and security to enhanced collaboration and disaster recovery.",
    date: "2025-03-28",
    readTime: "9 min read",
    category: "Document Management",
    content": "In an era of remote work and instant communication, the traditional law office, with its towering filing cabinets and endless reams of paper, is becoming an anachronism. The transition from paper to pixels is no longer a question of if, but when. The business case for digitizing legal documents is not just compelling; it's overwhelming. The most immediate benefit is improved accessibility. With digital documents, you can access any file from anywhere, at any time, on any device. This is a game-changer for a profession that is no longer tethered to a physical office. It enables seamless collaboration between colleagues, clients, and co-counsel, regardless of their location. Security is another critical advantage. Paper documents are vulnerable to fire, flood, and theft. Digital documents, on the other hand, can be stored in secure, cloud-based repositories with multiple layers of protection, including encryption, access controls, and audit trails. This not only protects against physical disasters but also provides a robust defense against unauthorized access. Digitization also drives significant efficiency gains. Searching for a specific document in a physical archive can take hours. With a digital document management system, you can find what you need in seconds, using powerful search and filtering capabilities. This frees up valuable time for lawyers to focus on what they do best: practicing law. Furthermore, digitization is a key enabler of automation. Once documents are in a digital format, you can leverage AI-powered tools to extract key data, analyze clauses, and automate workflows. This can streamline everything from contract management to e-discovery, further enhancing efficiency and reducing the risk of human error. Finally, digitizing your legal documents is a crucial component of a comprehensive disaster recovery plan. In the event of a catastrophic event, such as a fire or a natural disaster, a digital archive ensures that your firm's most valuable asset—its data—is safe and can be quickly restored. The transition from paper to pixels is not just an IT project; it's a strategic business initiative that can transform how your firm operates. By embracing digitization, you can create a more efficient, secure, and resilient practice, better equipped to meet the challenges of the modern legal landscape. In this article, we will provide a practical guide to digitizing your legal documents, from choosing the right document management system to implementing a secure and efficient workflow. We will also discuss the challenges and considerations that you should be aware of when making the transition to a paperless office. By the end of this article, you will have a clear roadmap for digitizing your legal documents and be well on your way to creating a more modern and efficient practice."
  }
];
