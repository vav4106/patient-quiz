from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = {
    "covid": {
        "name": "COVID-19",
        "diagnosis": "RT-PCR Test",
        "symptoms": ["Fever", "Cough", "Breathing difficulty"],
        "precautions": ["Mask", "Distance", "Sanitize"],
        "treatment": ["Rest", "Fluids", "Supportive care"],
        "diet": ["Fruits", "Warm liquids"]
    },

    "diabetes": {
        "name": "Diabetes",
        "diagnosis": "Fasting Blood Sugar Test",
        "symptoms": ["Fatigue", "Frequent urination"],
        "precautions": ["Avoid sugar", "Exercise"],
        "treatment": ["Metformin"],
        "diet": ["Low sugar food", "High fiber"]
    }
}

@app.route("/disease/<name>")
def disease(name):
    return jsonify(data.get(name, {}))

app.run(debug=True)
