export interface ResearchInquiry {
  question: string;
  answer: string;
  linkUrl: string;
  linkLabel: string;
}

export const researchFaqs: ResearchInquiry[] = [
  {
    question: "How does feature fusion improve automated brain tumor classification from MRI scans?",
    answer:
      "Deep convolutional networks excel at detecting localized hierarchical patterns but often miss subtle macroscopic geometric boundaries in heterogeneous tumors. Our QPAIN research pairs an EfficientNetB0 backbone with auxiliary radiomic shape and texture descriptors via an adaptive bottleneck fusion layer, achieving 94.0% binary classification accuracy and 84.5% multiclass classification accuracy across benchmark MRI scans.",
    linkUrl: "/publication/brain-tumor-classification-mri-fusion/",
    linkLabel: "Read Brain Tumor Paper & Research Brief →"
  },
  {
    question: "How does your review categorize the evolution of Hand Gesture Recognition (HGR)?",
    answer:
      "Evaluating 252 peer-reviewed articles published between 1995 and 2024, our IJCA review establishes a chronological taxonomy: progressing from early rule-based models and classical ML (SVM, HMM) to modern 3D CNNs, Graph Convolutional Networks (GCNs), and Transformers across multimodal sensing inputs (RGB, depth, IMU, and sEMG).",
    linkUrl: "/publication/hand-gesture-recognition-review/",
    linkLabel: "Explore IJCA Systematic Review →"
  },
  {
    question: "How does learnable denoising improve pneumonia diagnosis in chest radiographs?",
    answer:
      "Imaging artifacts and low signal-to-noise ratios often cause conventional CNNs to misclassify high-frequency noise as pulmonary infiltrates. Our two-stage QPAIN framework trains a Denoising Autoencoder (DAE) to suppress non-diagnostic distortions while preserving pulmonary parenchymal textures prior to CNN classification, achieving 92.9% accuracy (an increase of 6.8 percentage points over the 86.1% baseline on the study dataset) and a 94.6% F1-score.",
    linkUrl: "/publication/two-stage-noise-reduced-pneumonia-detection/",
    linkLabel: "Examine Pneumonia Detection Paper →"
  }
];

