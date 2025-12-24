Garuda

## Repository Structure

- `frontend/` – UI dashboard built with React, Vite, Tailwind
- `ml/` – Image enhancement and object detection modules
- `data/` – Datasets (raw and processed)
- `docs/` – Architecture and system documentation

Robust Image Enhancement and Object Detection Under Adverse Conditions

Overview

Sentinel-Vision is a computer vision system designed to enhance visual perception and improve object detection accuracy under challenging environmental conditions such as fog, rain, snow, and low-light scenarios. The project focuses on improving surveillance and monitoring reliability by combining advanced image enhancement techniques with lightweight real-time object detection models.

Problem Statement

Image-based surveillance systems often fail under adverse weather and poor lighting conditions due to reduced visibility, contrast degradation, and loss of fine-grained features. These challenges significantly affect real-time monitoring, safety analytics, and automated decision-making systems.

Proposed Solution

Sentinel-Vision introduces a two-stage hybrid deep learning pipeline:

Image Enhancement Stage
Enhances degraded images by restoring global clarity and fine spatial details to improve visual quality and downstream task performance.

Object Detection Stage
Uses an optimized, lightweight object detection model for real-time inference on enhanced frames, suitable for edge and resource-constrained environments.

System Architecture
Input Image / Video
        ↓
Hybrid Image Enhancement Module
        ↓
Enhanced Visual Output
        ↓
Real-Time Object Detection Engine
        ↓
Detected Objects + Confidence Scores

Tech Stack

Programming Language: Python, TypeScript

Frontend: React + Vite + Tailwind + shadcn/ui

Deep Learning: PyTorch

Object Detection: YOLO (lightweight variant)

Computer Vision: OpenCV

Deployment Target: Real-time / Edge-ready systems

Key Features

Robust performance under fog, rain, snow, and low-light

Lightweight architecture for real-time inference

Modular design for enhancement and detection stages

Scalable for surveillance, traffic monitoring, and smart city use cases

Future Scope

Adaptive model selection based on environmental conditions

Integration with video analytics pipelines

Edge deployment using TensorRT / ONNX

Performance benchmarking across diverse weather datasets