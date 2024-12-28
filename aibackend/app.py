from flask import Flask, request, jsonify
from flask_cors import CORS  # Correct import
import joblib
import pandas as pd
import os
print("Current working directory:", os.getcwd())
app = Flask(__name__)
CORS(app)
# Load the model
model = joblib.load("model.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    # Get input data
    data = request.get_json()
    df = pd.DataFrame(data)
    predictions = model.predict(df)
    return jsonify({"predictions": predictions.tolist()})

if __name__ == "__main__":
    app.run(debug=True)
