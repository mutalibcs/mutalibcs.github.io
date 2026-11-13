export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  verified: boolean;
}

export interface Profile {
  name: string;
  role: string;
  statusPill: string;
  affiliation: string;
  department: string;
  researchCenter: string;
  location: string;
  email: string;
  siteUrl: string;
  bioIntroduction: string;
  interests: string[];
  profiles: SocialLink[];
}

export const profile: Profile = {
  name: "Md Abdul Mutalib",
  role: "Graduate Researcher & CSC Scholar",
  statusPill: "Graduate Researcher • Bio-Computing Research Center, HITSZ • CSC Scholar",
  affiliation: "Harbin Institute of Technology, Shenzhen (HITSZ)",
  department: "Department of Computer Science & Technology",
  researchCenter: "Bio-Computing Research Center",
  location: "Shenzhen, Guangdong, China",
  email: "mutalib.cs@gmail.com",
  siteUrl: "https://mutalibcs.github.io",
  bioIntroduction:
    "I research Computer Vision, 3D Vision, Medical Image Analysis, and Deep Learning Architectures at the Bio-Computing Research Center, HITSZ. My current work explores Semantic-Temporal 3D Gaussian Splatting for surgical anatomy understanding, alongside noise-resilient diagnostic pipelines for neuroimaging and chest radiography.",
  interests: [
    "Computer Vision",
    "3D Vision & Gaussian Splatting",
    "Medical Image Analysis",
    "Surgical Vision & Anatomy Understanding",
    "Deep Learning Architectures",
    "Multimodal Gesture Recognition"
  ],
  profiles: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=CkDoYbEAAAAJ",
      icon: "academicons:google-scholar",
      verified: true
    },
    {
      label: "ORCID",
      url: "https://orcid.org/0000-0002-0010-9677",
      icon: "academicons:orcid",
      verified: true
    },
    {
      label: "ResearchGate",
      url: "https://www.researchgate.net/profile/Md-Abdul-Mutalib-3",
      icon: "academicons:researchgate",
      verified: true
    },
    {
      label: "Academia.edu",
      url: "https://hit.academia.edu/MdAbdulMutalib",
      icon: "academicons:academia",
      verified: true
    },
    {
      label: "GitHub",
      url: "https://github.com/mutalibcs",
      icon: "simple-icons:github",
      verified: true
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/md-abdul-mutalib",
      icon: "simple-icons:linkedin",
      verified: true
    }
  ]
};
