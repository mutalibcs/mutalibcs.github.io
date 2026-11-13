---
title: "A Semi-Supervised and Explainable Stacked Ensemble Model for Multi-Class Haematological Disorder Classification Using Complete Blood Count Data"
authors:
  - "Kopil Das"
  - "Noshin Amina"
  - "Md Abdul Mutalib"
  - "Nasrin Chowdhury"
  - "Mohaiminul Islam"
type: "book"
year: 2026
date: "2026-01"
venue: "Taylor & Francis Book Chapter"
publisher: "Taylor & Francis"
pages: "1-16"
repositoryUrl: "https://www.researchgate.net/publication/396650424_A_Semi-Supervised_and_Explainable_Stacked_Ensemble_Model_for_Multi-Class_Haematological_Disorder_Classification_Using_Complete_Blood_Count_Data"
localPdf: "/publication/haematological-disorder-classification-cbc/paper.pdf"
pdfVersionLabel: "Full Text (PDF)"
featured: true
firstAuthor: false
isLead: false
topics:
  - "Medical AI"
  - "Semi-Supervised Learning"
  - "Haematology"
  - "Explainable AI (XAI)"
  - "Ensemble Learning"
summary: "Proposes a semi-supervised multi-class classification pipeline using Complete Blood Count (CBC) data with Label Spreading, SMOTE-Tomek resampling, and a seed-averaged stacked ensemble (RF, Extra Trees, SVC, Logistic Regression, Gradient Boosting, XGBoost), achieving 94.94% accuracy with SHAP explainability."
legacyRedirects: []
---

## Author-Written Abstract

Accurate interpretation of Complete Blood Count (CBC) data is essential for diagnosing haematological disorders, but manual analysis is time-consuming, subjective, and challenging in resource-constrained clinical settings. This research proposes a semi-supervised multi-class classification method for haematological diseases based on regular CBC values, clinically relevant feature engineering, a seed-averaged stacked ensemble classifier, and explainable artificial intelligence approaches. The proposed architecture is built on 1,281 labeled CBC samples at the patient level and 643 unlabeled routine CBC reports. We trained a stacked ensemble of Random Forest, Extra Trees, Support Vector Classifier, Logistic Regression, Gradient Boosting and XGBoost with logistic regression as a meta-learner. Training data was resampled to handle class imbalance using SMOTE Tomek resampling. The final seed-averaged model attained the accuracy of 94.94% on the held-out test set. Permutation importance and SHAP explainability analysis showed clinically relevant predictors such as haemoglobin level, platelet count, white blood cell count, MCV-related characteristics and red-cell indices. The results suggest that semi-supervised learning, engineered CBC features and stacked ensemble modeling can give an effective and interpretable solution for deployment in low-resource clinical environments to multi-class haematological disorder classification utilizing routine CBC data.

---

## Plain-English Research Brief

### 1. Clinical Motivation & Diagnostic Challenge
Haematological conditions such as anemia, leukemia, and thrombocytopenia are major causes of global morbidity. Routine Complete Blood Count (CBC) testing is universally accessible and cost-effective, but diagnosing specific blood disorders from subtle CBC parameter variations typically requires expert haematologist review. In low-resource healthcare clinics, automated, trustworthy, and explainable classification of routine CBC data can significantly accelerate patient triage.

### 2. Semi-Supervised Data Architecture
* **Dataset Scale:** 1,281 patient-level labeled CBC records alongside 643 unlabeled routine CBC laboratory reports.
* **Semi-Supervised Label Spreading:** Leverages graph-based label propagation to harness unlabeled clinical cases, improving generalization on rare blood pathologies.
* **Class Imbalance Mitigation:** Applies hybrid **SMOTE-Tomek** resampling (synthetic minority oversampling combined with Tomek link removal) to prevent majority-class bias.

### 3. Stacked Ensemble Architecture
* **Level-0 Base Learners:** Six heterogeneous models—Random Forest, Extra Trees, Support Vector Classifier (SVC), Logistic Regression, Gradient Boosting, and XGBoost.
* **Level-1 Meta-Learner:** Regularized Logistic Regression trained on out-of-fold probability distributions with seed averaging across multiple random initializations.
* **Clinically Engineered Features:** Derived red-cell ratios (Mentzer index, Green & King index, Shine & Lal formula, NLR, PLR) to enhance microcytic and hypochromic anomaly discrimination.

### 4. Key Performance Benchmarks & Explainable AI (XAI)
* **Test Accuracy:** Achieved **94.94% classification accuracy** on held-out patient test cohorts.
* **SHAP & Permutation Explainability:** Model transparency verified using Shapley Additive exPlanations (SHAP), proving that predictions align with established haematological indicators: hemoglobin concentration, platelet counts, total WBC, and MCV-derived indices.

