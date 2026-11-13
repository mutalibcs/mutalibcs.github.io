export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: "ongoing" | "awarded";
  gpa?: string;
  scholarship?: string;
  details?: string[];
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  location?: string;
  period: string;
  category: "research" | "professional" | "leadership";
  project?: string;
  highlights: string[];
}

export interface PresentationEntry {
  title: string;
  event: string;
  role: string;
  location: string;
  year: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AwardEntry {
  year: string;
  title: string;
  organization: string;
}

export interface CVData {
  summary: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  presentations: PresentationEntry[];
  certifications: CertificationEntry[];
  skills: SkillCategory[];
  awards: AwardEntry[];
  extracurricular: ExperienceEntry[];
}

export const cvData: CVData = {
  summary:
    "Graduate researcher and Chinese Government Scholarship (CSC) recipient at Harbin Institute of Technology, Shenzhen (HITSZ) specializing in Computer Vision, 3D Vision, and Medical Image Analysis. Conducting research on Semantic-Temporal 3D Gaussian Splatting for surgical anatomy understanding at the Bio-Computing Research Center, alongside hybrid radiomic-deep feature fusion for neuroimaging and learnable noise-resilient diagnostic pipelines.",
  education: [
    {
      degree: "Master of Science (M.Sc.)",
      field: "Computer Science and Technology",
      institution: "Harbin Institute of Technology, Shenzhen (HITSZ)",
      location: "Shenzhen, China",
      period: "Sep. 2025 – Present",
      status: "ongoing",
      gpa: "3.53 / 4.00",
      scholarship: "Chinese Government Scholarship (CSC) Recipient",
      details: [
        "Graduate researcher at the Bio-Computing Research Center, HITSZ.",
        "Current GPA: 3.53 / 4.00.",
        "Awarded full Chinese Government Scholarship (CSC) for Master's study.",
        "Research focus: Artificial Intelligence, Computer Vision, 3D Vision, and Medical Image Analysis."
      ]
    },
    {
      degree: "Bachelor of Science (Engg.)",
      field: "Computer Science & Engineering",
      institution: "North East University Bangladesh (NEUB)",
      location: "Sylhet, Bangladesh",
      period: "Aug. 2019 – Mar. 2024",
      status: "awarded",
      gpa: "3.47 / 4.00",
      details: [
        "Graduated with CGPA: 3.47 / 4.00.",
        "Undergraduate Thesis/Project: 'Pneumonia Detection from Chest X-Ray Using Machine Learning and Deep Learning Models' (Evaluated SVM, handcrafted HOG, CNN architectures, transfer learning, and learnable denoising autoencoders)."
      ]
    }
  ],
  experience: [
    {
      role: "Graduate Researcher",
      organization: "Bio-Computing Research Center, HITSZ",
      location: "Shenzhen, China",
      period: "Sep. 2025 – Present",
      category: "research",
      project: "Semantic-Temporal 3D Gaussian Splatting for Surgical Anatomy Understanding",
      highlights: [
        "Investigating 3D Gaussian Splatting (3DGS) frameworks for semantic representation, reconstruction, and spatio-temporal tracking of dynamic surgical anatomy.",
        "Systematically reviewing existing 3D Gaussian Splatting and surgical vision algorithms to identify structural limitations and research gaps in minimally invasive procedures.",
        "Designing novel neural radiance and explicit point-based rendering architectures for intra-operative surgical perception."
      ]
    },
    {
      role: "Research Assistant",
      organization: "Consortium Research Center (CRC)",
      location: "Bangladesh",
      period: "Jun. 2024 – Nov. 2025",
      category: "research",
      project: "Hand Gesture Recognition and Visual Estimations",
      highlights: [
        "Systematically evaluated 252 peer-reviewed studies (1995–2024) across input modalities, benchmark datasets, algorithmic paradigms, and embedded edge constraints.",
        "Benchmarked classical machine learning models (SVM, HMM) against deep learning architectures (CNNs, 3D CNNs, ST-GCNs, and Transformers).",
        "Co-authored comprehensive review paper published in International Journal of Computer Applications (IJCA 2025)."
      ]
    },
    {
      role: "Assistant Director, R&D Science Unit",
      organization: "UniV",
      location: "Bangladesh",
      period: "Sep. 2024 – Present",
      category: "professional",
      highlights: [
        "Guide a 15-member scientific R&D team in research activities, technical prototyping, and algorithmic problem-solving.",
        "Organized and facilitated 'Research & Publications for Beginners — Batch 13', providing hands-on research and paper-writing training to 47 participants.",
        "Moderate technical research sessions and facilitate discussions on scientific methodology, LaTeX document preparation, and peer-review publication practices."
      ]
    },
    {
      role: "Aspire Leadership Fellow",
      organization: "Aspire Institute",
      location: "Founded by Harvard University Faculty",
      period: "Aug. 2024 – Nov. 2024",
      category: "leadership",
      highlights: [
        "Completed 30 hours of intensive coursework in personal and professional development, educator-led masterclasses, and the Aspire Horizons leadership curriculum.",
        "Developed competencies in ethical decision-making, strategic problem-solving, and community impact."
      ]
    }
  ],
  presentations: [
    {
      title: "Robust AI-Based Pneumonia Detection from Chest X-Ray Images Using Denoising Autoencoder–CNN Integration",
      event: "APEC Shenzhen – Advancing with AI 2026 International Youth Event",
      role: "Poster Presenter & Outstanding Paper Awardee",
      location: "SUSTech, Shenzhen, China",
      year: "Jun. 2026"
    },
    {
      title: "Hybrid Deep Learning and Radiomic Shape Feature Fusion for Automated Brain Tumor Classification from MRI Images",
      event: "IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
      role: "Conference Presenter",
      location: "Chittagong, Bangladesh / Hybrid",
      year: "2026"
    },
    {
      title: "Two-Stage Noise-Reduced Pneumonia Detection in Chest X-Ray Images Using Denoising Autoencoder–CNN Integration",
      event: "IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
      role: "Conference Presenter",
      location: "Chittagong, Bangladesh / Hybrid",
      year: "2026"
    },
    {
      title: "A Semi-Supervised and Explainable Stacked Ensemble Model for Multi-Class Haematological Disorder Classification Using Complete Blood Count Data",
      event: "International Conference on Electrical, Computer and Communication Technologies (ECCT)",
      role: "Conference Presenter",
      location: "Bangladesh",
      year: "2026"
    },
    {
      title: "A Hybrid Denoising Autoencoder and CNN Approach for Pneumonia Detection from Chest X-Ray Images",
      event: "3rd International Poster Competition for Young Researchers 2025",
      role: "Poster Presenter & Platinum Innovator Awardee",
      location: "UniV, Bangladesh",
      year: "2025"
    }
  ],
  awards: [
    {
      year: "2026",
      title: "Outstanding Paper Award",
      organization: "APEC Shenzhen – Advancing with AI 2026 International Youth Event (SUSTech)"
    },
    {
      year: "2025",
      title: "Platinum Innovator Award",
      organization: "3rd International Poster Competition for Young Researchers 2025 (UniV)"
    },
    {
      year: "2025",
      title: "Chinese Government Scholarship (CSC)",
      organization: "China Scholarship Council — Full scholarship for Master's Study at Harbin Institute of Technology, Shenzhen"
    },
    {
      year: "2023",
      title: "Dean's List Academic Recognition",
      organization: "North East University Bangladesh (NEUB)"
    }
  ],
  certifications: [
    {
      title: "Research Methodology and Scientific Writing",
      issuer: "Maryam Abacha American University of Nigeria (MAAUN)",
      date: "Feb. 2025"
    },
    {
      title: "Online CRT Winter School 2025",
      issuer: "Center for Research & Thought (CRT)",
      date: "Feb. 2025"
    },
    {
      title: "2024 Aspire Leaders Program (30 Hours Coursework)",
      issuer: "Aspire Institute (Founded by Harvard University Faculty)",
      date: "Nov. 2024"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford University / Coursera",
      date: "Jun. 2023"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM / Coursera",
      date: "Jun. 2023"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Simplilearn",
      date: "Nov. 2024"
    },
    {
      title: "What is Data Science?",
      issuer: "IBM / Coursera",
      date: "Aug. 2023"
    }
  ],
  extracurricular: [
    {
      role: "General Member & Campus Ambassador",
      organization: "Bangladesh-China Youth Student Association (BCYSA)",
      location: "Shenzhen, China",
      period: "2025 – Present",
      category: "leadership",
      highlights: [
        "Contributing to a platform of Bangladeshi students and professionals in China promoting bilateral scientific cooperation and cultural understanding."
      ]
    },
    {
      role: "Assistant Director",
      organization: "UniV Newsletter",
      location: "Bangladesh",
      period: "2024 – Present",
      category: "leadership",
      highlights: [
        "Coordinated the newsletter editorial team and supervised technical content curation and publication workflows."
      ]
    },
    {
      role: "Volunteer Service Member",
      organization: "Shenzhen Volunteer Service (Nanshan District)",
      location: "Shenzhen, China",
      period: "Apr. 2026",
      category: "leadership",
      highlights: [
        "Participated in civic and university community volunteer service activities certified by the Shenzhen Volunteer Federation."
      ]
    },
    {
      role: "Mentor & Executive Member",
      organization: "NEUB CSE Society & ACM Lab",
      location: "Sylhet, Bangladesh",
      period: "2022 – 2024",
      category: "leadership",
      highlights: [
        "Mentored undergraduate students in data structures, algorithms, competitive programming, and academic problem solving."
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C", "C++", "Java", "LaTeX", "TypeScript", "JavaScript", "HTML/CSS"]
    },
    {
      category: "AI, Machine Learning & Deep Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "Deep Learning Architectures",
        "Transfer Learning",
        "Ensemble Modeling",
        "Denoising Autoencoders (DAE)"
      ]
    },
    {
      category: "Computer Vision & Medical AI",
      items: [
        "3D Gaussian Splatting (3DGS)",
        "OpenCV",
        "Medical Image Analysis (MRI, CXR)",
        "Surgical Vision & Anatomy Tracking",
        "Feature Fusion & Radiomics",
        "Grad-CAM & Explainable AI",
        "HOG / LBP Descriptors"
      ]
    },
    {
      category: "Data Science & Scientific Tools",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Git & GitHub", "Linux", "Astro"]
    },
    {
      category: "Languages",
      items: ["Bengali (Native)", "English (Fluent / Professional)", "Chinese (Conversational / Elementary)"]
    }
  ]
};
