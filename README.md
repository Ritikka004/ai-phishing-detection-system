# AI Phishing Detection System

An AI-powered system that detects phishing websites using machine learning.

## Features

* Detect phishing websites using URL analysis
* Machine learning model trained on phishing dataset
* REST API built using Flask
* Simple web frontend interface
* Real-time URL prediction

## Tech Stack

Python, Flask, Scikit-learn, Pandas, HTML, CSS, JavaScript

## Project Structure

backend – Flask API
frontend – Web interface
models – Trained ML model

## How to Run

### 1. Clone the repository

```
git clone https://github.com/Ritikka004/ai-phishing-detection-system.git
```

### 2. Install requirements

```
pip install -r requirements.txt
```

### 3. Run backend

```
cd backend
python app.py
```

### 4. Open frontend

Open the file:

```
frontend/index.html
```

## Example

Input URL:

```
https://google.com
```

Output:

```
Safe Website
```

Input URL:

```
http://paypal-login-alert.com
```

Output:

```
Phishing Website
```

## Future Improvements

* Browser extension integration
* Real-time phishing scanning
* Deep learning model improvements
* Cloud deployment
