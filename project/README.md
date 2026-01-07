# 🌦️ All-Weather Image Enhancement & Object Detection

## 📌 Overview

This project presents a **hybrid two-stage deep learning system** for robust surveillance under adverse weather conditions such as **fog, rain, snow, and low-light**. The system enhances degraded images and performs **real-time object detection** using a lightweight detector.

---

## 🧠 System Architecture

### **Stage-1: Image Enhancement**

* Hybrid enhancement using:

  * Scale-wise Distilled Diffusion (SwD)
  * Latent Diffusion Models (LDM)
  * Patch-based Diffusion
* Feature-level fusion ensures global clarity and fine-grained detail restoration.

### **Stage-2: Object Detection**

* YOLOv8-Nano for fast and efficient detection
* Detects vehicles, personnel, and general objects in real time

---

## 🖥️ User Interface

* **Streamlit-based single interface**
* Supports:

  * Image upload
  * Video upload
  * Live webcam detection
* Displays:

  * Original image
  * Enhanced image
  * Detected output with bounding boxes
  * FPS and confidence metrics
  * Downloadable outputs

---

## 🚀 Features

* All-weather image enhancement
* Real-time object detection
* Video and webcam support
* Performance metrics (FPS & confidence)
* Download enhanced and detected outputs
* Modular and extensible design

---

## 🛠️ Technologies Used

* **Python**
* **Streamlit** – Interface
* **PyTorch** – Deep learning
* **YOLOv8-Nano** – Object detection
* **OpenCV** – Image & video processing
* **NumPy, PIL**

### Google Technologies

* **Google Colab** – Model training & experimentation
* **Gemini** – Research and design assistance
* **NotebookLM** – Literature review & understanding

---

## 📂 Project Structure

```
project/
│── app.py
│── requirements.txt
│── models/
│    ├── enhancement_model.py
│    └── yolov8.pt
```

---

## ▶️ How to Run

```bash
pip install -r requirements.txt
streamlit run app.py
```

---

## 📊 Output

* Enhanced images with improved visibility
* Bounding boxes and class labels on detected objects
* Real-time surveillance visualization

---

## 🔮 Future Scope

* Multi-modal fusion (RGB + Thermal/IR)
* End-to-end optimization
* Edge-device deployment
* Temporal video intelligence
* Behavior and anomaly detection

---

## 📜 Conclusion

This system demonstrates a **robust, real-time, and scalable solution** for surveillance in challenging environmental conditions. The hybrid enhancement strategy combined with lightweight detection enables reliable performance for defense and security applications.

---

## 👤 Author

**Nandaluri Badrinath Reddy**

---

## ⭐ Acknowledgements

* Ultralytics YOLO
* Streamlit Community
* Google AI Tools

---

🎯 **YOU ARE DONE. PROJECT COMPLETE.**

If you want:

* PPT slides
* Architecture diagram
* Viva explanations
* Resume-ready project description

Just tell me 👍
