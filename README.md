# AI Phishing Detection System

An AI-powered system that detects phishing websites using machine learning.

## Features

- Detect phishing websites using URL analysis
- Machine learning model trained on phishing dataset
- REST API using Flask
- Simple frontend interface
- Real-time prediction

## Tech Stack

Python, Flask, Scikit-learn, Pandas, HTML, CSS, JavaScript

## Project Structure

backend – Flask API  
frontend – Web interface  
dataset – Training dataset  
models – Trained ML model

## How to Run

1. Clone the repository

```
git clone https://github.com/yourusername/phishing-ai-sih.git
```

2 Install requirements

```
pip install -r requirements.txt
```

3 Run backend

```
cd backend
python app.py
```

4 Open frontend

Open

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

Input:

```
http://paypal-login-alert.com
```

Output:

```
Phishing Website
```

## Future Improvements

- Browser extension
- Real-time scanning
- Deep learning model
- Cloud deployment