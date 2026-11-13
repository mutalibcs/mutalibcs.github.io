---
title: "Machine Learning-Based Air Quality Forecasting in Key Urban-Industrial Zones of Bangladesh"
authors:
  - "Md. Anamul Hossain Chowdhury"
  - "Rumi Chowdhury"
  - "Md Abdul Mutalib"
  - "Rayhan Mahmud Rakib"
  - "Pujan Dey Anik"
  - "Saeid Islam Tanvir"
type: "conference"
year: 2025
date: "2025-07"
venue: "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)"
conference: "16th International Conference on Computing, Communication and Networking Technologies (ICCCNT 2025)"
location: "IIT Indore, India"
publisher: "IEEE"
pages: "1-7"
repositoryUrl: "https://www.researchgate.net/publication/396399680_Machine_Learning-Based_Air_Quality_Forecasting_in_Key_Urban-Industrial_Zones_of_Bangladesh"
localPdf: "/publication/air-quality-forecasting-bangladesh/paper.pdf"
pdfVersionLabel: "Full Text (PDF)"
featured: true
firstAuthor: false
isLead: false
topics:
  - "Machine Learning"
  - "Environmental AI"
  - "Air Quality Forecasting"
  - "XGBoost"
  - "Urban Analytics"
summary: "Investigates machine learning forecasting of the Air Quality Index (AQI) across industrial and urban regions in Bangladesh over a decade-long dataset (2013–2022) with Random Forest, Decision Trees, KNN, and XGBoost, achieving R²=0.997 and MAE=0.349 with XGBoost."
legacyRedirects: []
---

## Author-Written Abstract

Worldwide air contamination stands as a serious problem which produces huge effects on human health and the climate as well as the economy. This research explores the prediction of Air Quality Index across essential industrial and urban regions in Bangladesh through RF, DT, KNN, and XGBoost machine learning algorithms. A time-span dataset from July 2013 until September 2022 presents information about CO, PM10, NOx, PM2.5, and O3 alongside other pollutants. We aim to choose the best ML model for predicting Air Quality Index and explore trends related to particulate matter in air quality. The research found that XGBoost performs as the best model by achieving MAE 0.349 and R² value 0.997. Our focus centers on PM2.5 and PM10 because they significantly worsen air quality and we have selected target-based pollution reduction approaches as our main strategy. The research demonstrates that advanced machine learning models are highly reliable in predicting air quality, making them useful tools for monitoring the environment and deciding on actions.

---

## Plain-English Research Brief

### 1. Research Question & Environmental Motivation
Rapid urbanization, dense traffic corridors, and heavy industrial manufacturing have made air pollution a severe environmental crisis across urban hubs in Bangladesh. Traditional atmospheric monitoring stations are spatially sparse and offer retrospective data. This study investigates the accuracy of tree-based and gradient-boosted ensemble models in forecasting the **Air Quality Index (AQI)** using multi-pollutant atmospheric time-series records.

### 2. Longitudinal Dataset & Target Pollutants
* **Temporal Span:** Comprehensive 10-year atmospheric time series spanning July 2013 to September 2022.
* **Pollutant Parameters:** Tracked particulate matter (PM2.5, PM10), nitrogen oxides (NOx), carbon monoxide (CO), sulfur dioxide (SO2), and ozone (O3).
* **Correlation Findings:** PM2.5 ($r = 0.84$) and PM10 ($r = 0.82$) exhibited the strongest positive correlation with AQI spikes, followed by NOx ($r = 0.59$).

### 3. Machine Learning Algorithms Evaluated
* **Extreme Gradient Boosting (XGBoost):** Sequential regularized boosting optimizing both linear and tree booster objectives.
* **Random Forest (RF):** Bagged decision ensembles with out-of-bag error minimization.
* **Decision Tree (DT) & K-Nearest Neighbors (KNN):** Baseline non-parametric estimators.

### 4. Key Performance Benchmarks
* **Best Performing Architecture:** **XGBoost** achieved the highest generalization accuracy with **R² = 0.997**, **MAE = 0.349**, **MSE = 5.11**, and **RMSE = 2.261**.
* **Model Comparison:** Random Forest and Decision Trees delivered high baseline correlations but exhibited greater variance on volatile transition seasons.
* **Practical Policy Utility:** Enables municipal agencies and public health bodies to deploy early warning advisory systems during dry winter months when thermal inversions trap toxic particulate matter.

