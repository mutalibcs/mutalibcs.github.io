---
title: "Two-Stage Noise-Reduced Pneumonia Detection in Chest X-Ray Images Using Denoising Autoencoder–CNN Integration"
authors:
  - "Md Abdul Mutalib"
  - "Kopil Das"
  - "Mohammad Hossain"
  - "Shahriar Hussain"
  - "Avijit Deb Nath"
  - "Md Mahmud Zaman"
  - "Md. Alamgir Hossain"
type: "conference"
year: 2026
date: "2026-04"
venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)"
conference: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)"
location: "Chittagong, Bangladesh"
publisher: "IEEE"
pages: "1-6"
doi: "10.1109/QPAIN69676.2026.11546042"
publisherUrl: "https://doi.org/10.1109/QPAIN69676.2026.11546042"
localPdf: "/publication/two-stage-noise-reduced-pneumonia-detection/paper.pdf"
pdfVersionLabel: "Full Text (PDF)"
featured: true
firstAuthor: true
isLead: true
topics:
  - "Medical AI"
  - "Deep Learning"
  - "Chest X-Ray"
  - "Pneumonia Detection"
  - "Denoising Autoencoder"
summary: "A two-stage deep learning pipeline integrating a Denoising Autoencoder (DAE) with a CNN classifier to suppress imaging artifacts, achieving 92.9% accuracy (+6.8 percentage points over baseline) and 90.9% balanced accuracy on the study dataset."
legacyRedirects:
  - "/publication/2026-04-01-two-stage-noise-reduced-pneumonia-detection-chest-x-ray/"
  - "/publication/2026-04-01-two-stage-noise-reduced-pneumonia-detection-chest-x-ray"
---

## Author-Written Abstract

Pneumonia remains a major cause of morbidity and mortality worldwide, with chest X-ray imaging serving as a primary tool for early diagnosis. However, the presence of noise, artifacts, and low-quality acquisitions significantly degrades image interpretability and limits the effectiveness of automated deep learning–based detection systems. Conventional convolutional neural networks (CNNs) are particularly sensitive to such degradations, leading to reduced classification reliability. To address this limitation, we propose a hybrid deep learning framework that integrates a denoising autoencoder (DAE) with a CNN for robust pneumonia detection from chest X-ray images. The DAE is trained to reconstruct clean images from noisy inputs, enabling the suppression of noise while preserving diagnostically relevant features, and is subsequently coupled with a CNN classifier in a unified pipeline. The proposed model is evaluated on the publicly available Kaggle chest X-ray dataset using data augmentation, class-weighted loss, and early stopping to mitigate class imbalance and overfitting. Experimental results demonstrate that the DAE-CNN framework consistently outperforms a CNN-only baseline, achieving an accuracy of 92.9%, an F1-score of 94.6%, and a balanced accuracy of 90.9%, compared to 86.1% accuracy and an F1-score of 89.8% obtained without denoising. These results highlight the effectiveness of incorporating learnable denoising into deep learning pipelines and underscore its potential for improving the robustness and reliability of automated pneumonia detection in benchmark imaging scenarios.

---

## Plain-English Research Brief

### 1. Research Question & Diagnostic Challenge
Chest radiography (CXR) is the standard frontline imaging modality for pneumonia evaluation, but scans in real-world scenarios frequently suffer from low signal-to-noise ratio (SNR), patient motion, and sensor variability. Standard deep learning classifiers can mistake high-frequency imaging noise for pathological infiltrates. This study evaluates whether coupling a dedicated learnable denoising stage before convolutional feature extraction improves benchmark classification accuracy on noisy pediatric radiographs.

### 2. Methodological Architecture & Two-Stage Pipeline
* **Stage 1 (Learnable Denoising Autoencoder - DAE):** An encoder-decoder architecture with bottleneck feature compression trained to suppress non-diagnostic noise patterns while preserving essential anatomical landmarks (costophrenic margins and pulmonary parenchymal textures).
* **Stage 2 (CNN Diagnostic Classifier):** The reconstructed, denoised radiograph is passed to a convolutional neural network classifier equipped with batch normalization and dropout regularization.
* **Optimization Strategy:** Employs class-weighted loss to address dataset imbalance between normal and pneumonia cases, combined with adaptive learning rate scheduling and early stopping.

### 3. Experimental Benchmarks & Evaluation
* Evaluated on the widely used pediatric chest X-ray benchmark (Kaggle / Guangzhou Women and Children's Medical Center dataset, 5,856 total images).
* Benchmarked against an identical baseline CNN trained directly on raw, un-denoised radiographs to quantify the specific contribution of the learnable denoising stage.

### 4. Key Findings & Performance Metrics
* **Classification Accuracy:** **92.9%** (DAE-CNN) vs. **86.1%** (CNN Baseline), representing an **increase of 6.8 percentage points** on the study dataset.
* **F1-Score:** **94.6%** vs. **89.8%**, indicating improved harmonic balance between precision and recall.
* **Balanced Accuracy:** **90.9%** for the proposed DAE-CNN model.
* **Error Profile:** On the 624-image test set, the proposed model yielded 41 false positives and 3 false negatives.
* **Scope Note:** These findings demonstrate performance improvements on retrospective benchmark data; prospective clinical utility requires multi-center validation on diverse hospital imaging hardware.

### 5. Open Questions & Future Research Directions
* Extending the learnable denoising stage to multi-center clinical cohorts with diverse digital detector hardware.
* Exploring unsupervised domain adaptation for cross-pathology diagnosis (e.g., differentiating viral vs. bacterial pneumonia and COVID-19 co-infections).

