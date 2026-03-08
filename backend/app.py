from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load("models/phishing_model.pkl")

@app.route("/")
def home():
    return "Phishing Detection API Running"

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    url = data["url"]

    risk_score = 0

    if "login" in url:
        risk_score += 30

    if "-" in url:
        risk_score += 20

    if "verify" in url:
        risk_score += 30

    if "secure" in url:
        risk_score += 20

    if risk_score >= 50:
        result = "⚠ Phishing Website"
    else:
        result = "✅ Safe Website"

    return jsonify({
        "prediction": result,
        "risk_score": risk_score
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)