from flask import Flask, request, jsonify
from flask_cors import CORS  # Correct import
import joblib
import pandas as pd
import os
import numpy as np
print("Current working directory:", os.getcwd())
app = Flask(__name__)
CORS(app)
# Load the model
model = joblib.load("model.pkl")


# @app.route("/predict", methods=["POST"])
# def predict():
#     # Get input data
#     data = request.get_json()
#     df = pd.DataFrame(data)
#     predictions = model.predict(df)
#     return jsonify({"predictions": predictions.tolist()})

# if __name__ == "__main__":
#     app.run(debug=True)
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Extract features from the input data
    features = np.array([[
        data[0]['overtime_hours'],
        data[0]['leaves_taken'],
        data[0]['sprint_duration_weeks']
    ]])

    # Get prediction
    prediction = model.predict(features)

    return jsonify({'predictions': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)