---
title: "Assessment and Prediction of Organic Pollution Index Using Deep Learning Models: A Case Study of Major Lakes in Dhaka City, Bangladesh"
authors:
  - "Md Abdul Mutalib"
  - "Md. Anamul Hossain Chowdhury"
  - "Rayhan Mahmud Rakib"
  - "Rumi Chowdhury"
  - "Saeid Islam Tanvir"
  - "Md Abdur Rashid Sarker"
  - "Md. Fahad Jubayer"
type: "conference"
year: 2025
date: "2025-07"
venue: "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)"
conference: "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)"
location: "IIT Indore, India"
publisher: "IEEE"
pages: "1-7"
repositoryUrl: "https://www.researchgate.net/publication/393664724_Assessment_and_Prediction_of_Organic_Pollution_Index_Using_Deep_Learning_Models_A_Case_Study_of_Major_Lakes_in_Dhaka_City_Bangladesh"
localPdf: "/publication/lake-water-quality-organic-pollution-prediction/paper.pdf"
pdfVersionLabel: "Full Text (PDF)"
featured: true
firstAuthor: true
isLead: false
topics:
  - "Deep Learning"
  - "Environmental AI"
  - "Water Quality Prediction"
  - "CNN-LSTM"
  - "TabNet"
summary: "Evaluates and forecasts the Organic Pollution Index (OPI) across three major urban lakes in Dhaka City (Dhanmondi, Hatirjheel, and Gulshan) over six years (2019–2024) using CNN, TabNet, CNN-LSTM, and XGBoost architectures, achieving R²=0.9969 with CNN."
legacyRedirects: []
---

## Author-Written Abstract

Dhaka City has experienced rapid urbanization that has polluted its major lakes organically and urgent need of the hour are accurate assessment and prediction methods to handle water management sustainably. This current study evaluates and forecasts the Organic Pollution Index (OPI) by using deep learning techniques from the analysis of water quality data of three lakes (Dhanmondi, Hatirjheel and Gulshan) pH, DO, BOD, COD, TDS, Chloride, Turbidity, SS, and Total Alkalinity TDS, EC, collected over six years (2019-2024). Our models are Convolutional Neural Network (CNN), TabNet, a combination of CNN – LSTM network and XGBoost: CNN gives the best results (R²= 0.9969, MAE= 0.1888). Three different models (weighted CNN, TabNet, and XGBoost) combination represented in the form of an ensemble model yields the best trade-offs between calibration ability (R²=0.9856) and robustness while the importance of features can be easily interpreted in the case of the TabNet. Results show the effectiveness of deep learning when used to capture nonlinear relationships to predict OPI using a scalable tool for real-time monitoring of pollution.

---

## Plain-English Research Brief

### 1. Research Problem & Environmental Context
Rapid and uncontrolled urbanization in Dhaka City, Bangladesh, has severely degraded its freshwater lake ecosystems through municipal runoff, untreated sewage discharge, and industrial waste. Traditional laboratory-based water quality testing is resource-intensive and provides retrospective snapshots rather than dynamic forecasting. This study develops a predictive machine learning framework to evaluate and forecast the **Organic Pollution Index (OPI)** in real time, supporting municipal environmental decision-making.

### 2. Multi-Year Dataset & Parameters
* **Study Scope:** 864 field samples collected across three major urban water bodies in Dhaka—Dhanmondi Lake, Hatirjheel Lake, and Gulshan Lake—spanning six consecutive years (2019 to 2024).
* **Physicochemical Features:** Monitored 10 key environmental parameters including Dissolved Oxygen (DO), Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), pH, Total Dissolved Solids (TDS), Electrical Conductivity (EC), Chloride, Suspended Solids (SS), and Total Alkalinity.

### 3. Model Architecture & Methodological Workflow
* **1D Convolutional Neural Network (CNN):** Designed with localized 1D kernels to extract high-order non-linear feature interactions between water quality indices.
* **Hybrid CNN-LSTM:** Integrates convolutional feature extraction with Long Short-Term Memory cells to capture temporal trends and seasonal variations.
* **TabNet Attention Architecture:** Employs sequential attention mechanisms to generate interpretable decision masks, quantifying the exact contribution of each parameter at each decision step.
* **Ensemble Modeling:** Combines weighted CNN, TabNet, and XGBoost to achieve robust generalization across varying seasonal conditions.

### 4. Key Performance Benchmarks
* **1D CNN:** Achieved the highest predictive accuracy with **R² = 0.9969**, **MAE = 0.1888**, and **RMSE = 0.5930**.
* **Ensemble Model:** Achieved **R² = 0.9856** and **MAE = 0.5645**, providing an optimal balance between calibration accuracy and generalization robustness across outlier scenarios.
* **Hybrid CNN-LSTM:** Achieved **R² = 0.9670** and **MAE = 1.1055**.
* **Explainability Insights:** TabNet attention masks identified COD, BOD, and Dissolved Oxygen (DO) as the dominant drivers of organic pollution spikes during seasonal runoff events.

