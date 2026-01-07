import streamlit as st
import cv2
import numpy as np
from PIL import Image
from ultralytics import YOLO
from models.enhancement_model import enhance_image
import tempfile
import os
import time

# Load YOLOv8 Nano
yolo_model = YOLO("yolov8n.pt")


st.set_page_config(page_title="All-Weather Surveillance", layout="wide")

st.title("🌦️ All-Weather Image Enhancement & Object Detection")

fps_placeholder = st.sidebar.empty()
conf_placeholder = st.sidebar.empty()

mode = st.sidebar.selectbox(
    "Select Input Type",
    ["Image", "Video", "Webcam"]
) 

# ---------------- IMAGE MODE ----------------
if mode == "Image":
    uploaded_file = st.file_uploader("Upload Image", type=["jpg", "png", "jpeg"])

    if uploaded_file:
        image = Image.open(uploaded_file)
        image_np = np.array(image)
        image_bgr = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)

        col1, col2, col3 = st.columns(3)

        with col1:
            st.subheader("Original")
            st.image(image_np, use_column_width=True)

        # Stage 1: Enhancement
        enhanced = enhance_image(image_bgr)
        enhanced_rgb = cv2.cvtColor(enhanced, cv2.COLOR_BGR2RGB)

        with col2:
            st.subheader("Enhanced")
            st.image(enhanced_rgb, use_column_width=True)

        # Stage 2: Detection
        results = yolo_model(enhanced_rgb)
        detected = results[0].plot()

        with col3:
            st.subheader("Detected")
            st.image(detected, use_column_width=True)

        # Display confidence metric
        boxes = results[0].boxes
        if boxes is not None:
            try:
                confidences = boxes.conf.cpu().numpy()
                avg_conf = round(float(confidences.mean()), 3) if len(confidences) > 0 else 0
            except Exception:
                avg_conf = 0
            conf_placeholder.metric("Avg Confidence", avg_conf)

        # Save detected image
        output_path = "output_detected.jpg"
        cv2.imwrite(output_path, cv2.cvtColor(detected, cv2.COLOR_RGB2BGR))

        with open(output_path, "rb") as file:
            st.download_button(
                label="Download Detected Image",
                data=file,
                file_name="detected_output.jpg",
                mime="image/jpeg"
            )

# ---------------- VIDEO MODE ----------------
if mode == "Video":
    uploaded_video = st.file_uploader("Upload Video", type=["mp4", "avi", "mov"])

    if uploaded_video:
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        temp_file.write(uploaded_video.read())

        cap = cv2.VideoCapture(temp_file.name)

        fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        out = cv2.VideoWriter(
            "output_video.mp4",
            fourcc,
            20.0,
            (int(cap.get(3)), int(cap.get(4)))
        )

        stframe = st.empty()

        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            start_time = time.time()

            enhanced = enhance_image(frame)
            enhanced_rgb = cv2.cvtColor(enhanced, cv2.COLOR_BGR2RGB)

            results = yolo_model(enhanced_rgb)
            output_frame = results[0].plot()

            end_time = time.time()
            fps = round(1 / (end_time - start_time), 2) if (end_time - start_time) > 0 else 0
            fps_placeholder.metric("FPS", fps)

            boxes = results[0].boxes
            if boxes is not None:
                try:
                    confidences = boxes.conf.cpu().numpy()
                    avg_conf = round(float(confidences.mean()), 3) if len(confidences) > 0 else 0
                except Exception:
                    avg_conf = 0
                conf_placeholder.metric("Avg Confidence", avg_conf)

            out.write(cv2.cvtColor(output_frame, cv2.COLOR_RGB2BGR))
            stframe.image(output_frame, channels="RGB", use_column_width=True)

        cap.release()
        out.release()

        with open("output_video.mp4", "rb") as file:
            st.download_button(
                label="Download Detected Video",
                data=file,
                file_name="detected_video.mp4",
                mime="video/mp4"
            )

# ---------------- WEBCAM MODE ----------------
if mode == "Webcam":
    st.warning("Press STOP to end webcam stream")

    start = st.button("START CAMERA")
    stop = st.button("STOP")

    if start:
        cap = cv2.VideoCapture(0)
        stframe = st.empty()

        while cap.isOpened():
            if stop:
                break

            ret, frame = cap.read()
            if not ret:
                st.error("Failed to access webcam")
                break

            start_time = time.time()

            # Stage 1: Enhancement
            enhanced_frame = enhance_image(frame)
            enhanced_rgb = cv2.cvtColor(enhanced_frame, cv2.COLOR_BGR2RGB)

            # Stage 2: YOLO Detection
            results = yolo_model(enhanced_rgb)
            output_frame = results[0].plot()

            end_time = time.time()
            fps = round(1 / (end_time - start_time), 2) if (end_time - start_time) > 0 else 0
            fps_placeholder.metric("FPS", fps)

            boxes = results[0].boxes
            if boxes is not None:
                try:
                    confidences = boxes.conf.cpu().numpy()
                    avg_conf = round(float(confidences.mean()), 3) if len(confidences) > 0 else 0
                except Exception:
                    avg_conf = 0
                conf_placeholder.metric("Avg Confidence", avg_conf)

            stframe.image(
                output_frame,
                channels="RGB",
                use_column_width=True
            )

            if st.button("Capture Frame"):
                cv2.imwrite(
                    "webcam_detected.jpg",
                    cv2.cvtColor(output_frame, cv2.COLOR_RGB2BGR)
                )

                with open("webcam_detected.jpg", "rb") as file:
                    st.download_button(
                        label="Download Snapshot",
                        data=file,
                        file_name="webcam_detected.jpg",
                        mime="image/jpeg"
                    )

        cap.release()
        cv2.destroyAllWindows()

