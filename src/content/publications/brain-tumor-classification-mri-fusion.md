---
title: "Hybrid Deep Learning and Radiomic Shape Feature Fusion for Automated Brain Tumor Classification from MRI Images"
authors:
  - "Md Rashidul Islam"
  - "Abdulla Al Mobassir"
  - "Md Abdul Mutalib"
  - "Anamul Haque"
  - "Md. Abul Ala Moududi"
  - "Rakibul Islam"
  - "Md Mehedi Hasan"
  - "Nafizur Rahman"
  - "Najmul Haque"
  - "Abu Saleh Musa Miah"
  - "Md. Saiful Islam"
type: "conference"
year: 2026
date: "2026-04"
venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)"
conference: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)"
location: "Chittagong, Bangladesh"
publisher: "IEEE"
pages: "1-6"
doi: "10.1109/QPAIN69676.2026.11545798"
publisherUrl: "https://doi.org/10.1109/QPAIN69676.2026.11545798"
localPdf: "/publication/brain-tumor-classification-mri-fusion/paper.pdf"
pdfVersionLabel: "Full Text (PDF)"
featured: true
firstAuthor: false
topics:
  - "Medical AI"
  - "Deep Learning"
  - "Brain Tumor"
  - "MRI"
  - "Feature Fusion"
summary: "A hybrid deep learning and radiomic shape feature fusion framework leveraging EfficientNetB0 with dual spatial pooling to achieve 94% binary and 84.5% multiclass brain tumor classification on MRI benchmark scans."
legacyRedirects:
  - "/publication/2026-01-01-2026-ieee-2nd-international-conference-on-quantum-photonics-artificial-intelligence-networking-qpain/"
  - "/publication/2026-01-01-2026-ieee-2nd-international-conference-on-quantum-photonics-artificial-intelligence-networking-qpain"
  - "/publication/brain-tumor-classification-mri-fusion"
  - "/publication/brain-tumor-classification-mri-fusion/"
---

## Author-Written Abstract

Brain tumor diagnosis using magnetic resonance imaging is a critical challenging task due to variations in tumor appearance, class imbalance, and limited labeled medical data. Accurate and robust automated classification systems can significantly assist radiologists in early diagnosis and clinical decisionmaking. We propose the hybrid EfficientNet, Restnet1 based deep learning frameworks for both binary (tumor vs. no tumor) and multiclasses brain tumor classification using MRI images. The transfer learning with EfficientNetB0 as the backbone for effective feature extraction, combined with global average pooling and global max pooling to capture complementary spatial information. To enhance robustness and discriminative capability, an adaptive feature fusion strategy used, integrating deep CNN features with auxiliary radiomic features. Separate preprocessing pipelines and augmentation strategies are designed for binary and multiclass datasets to address data heterogeneity and class imbalance. The models are trained using a two-phase strategy involving frozen-backbone training followed by controlled finetuning. Extensive experiments are conducted on two publicly available brain MRI datasets. The proposed framework achieves 94% accuracy in binary classification and 84.5% accuracy in multiclass classification, with high tumor recall and balanced performance across classes. Experimental results and ablation studies demonstrate that hybrid feature fusion significantly improves classification performance compared to baseline CNN models. The proposed approach offers a robust, efficient, and clinically applicable solution for automated brain tumor classification in MRI.

---

## Plain-English Research Brief

### 1. Research Question & Clinical Motivation
Automating brain tumor classification from Magnetic Resonance Imaging (MRI) is complicated by high intra-tumoral heterogeneity, subtle contrast gradients between lesion margins and healthy brain parenchyma, and substantial dataset class imbalance. This study investigates whether coupling deep convolutional representations with auxiliary radiomic shape and texture descriptors improves classification stability and discriminative accuracy for both binary screening (presence vs. absence of tumor) and multiclass categorization (glioma, meningioma, pituitary).

### 2. Methodological Architecture & Workflow
* **Deep Feature Extraction Backbone:** Utilizes EfficientNetB0 pre-trained via transfer learning, augmented with dual pooling paths (Global Average Pooling and Global Max Pooling) operating in parallel to preserve dominant structural signals as well as diffuse spatial contextual cues.
* **Radiomic Shape & Descriptor Extraction:** Extracts quantitative morphologic descriptors (sphericity, compactness, elongation, perimeter-to-area ratios) to explicitly capture clinical geometric indicators often overlooked by convolutional filters alone.
* **Adaptive Feature Fusion:** High-level latent CNN representations are integrated with normalized radiomic feature vectors through an adaptive bottleneck fusion layer.
* **Two-Phase Optimization:** A two-stage training strategy: initial weights are optimized with frozen backbone layers to align the fusion and classifier stages, followed by targeted end-to-end fine-tuning with learning-rate scheduling and data augmentation to prevent overfitting.

### 3. Experimental Data & Validation
* Evaluated across two widely utilized public brain MRI benchmark datasets.
* Implements stratified splits with targeted class-weighted penalization to mitigate class imbalance effects.

### 4. Key Findings & Performance Metrics
* **Binary Classification:** Achieves **94.0% accuracy** with high tumor recall, reducing false negatives in triage scenarios.
* **Multiclass Classification:** Achieves **84.5% accuracy** across multiple tumor categories, consistently outperforming standard CNN baseline backbones.
* **Ablation Evidence:** Ablation experiments demonstrate consistent observed improvements in accuracy and recall when fusing deep CNN representations with radiomic features, compared to either modality alone.

### 5. Study Limitations & Future Directions
* Current evaluations rely on retrospective public benchmark repositories.
* Multi-center institutional validation and real-time processing under clinical motion artifacts remain areas for prospective validation.

