# AI-Powered Insights Engine

## Project Overview

The **AI-Powered Insights Engine** is a full-stack application designed to analyze historical employee performance data and predict future performance trends. The project leverages AI/ML techniques to derive actionable insights, such as employee productivity patterns and team velocity predictions. The insights are exposed via an API and visualized through an intuitive frontend interface.

---

## Objective

To build an AI-powered module that:

1. Analyzes historical data to identify performance trends.
2. Predicts future performance scores for employees and teams.
3. Provides these insights via an API endpoint and visualizes them through an interactive frontend.

---

## Key Features

1. **Dataset Handling**

   - Sample dataset of employee performance history, formatted around Agile stories and story points.
   - Temporary API created using an online API mock site to simulate real-world API integration.

2. **AI Module**

   - Machine learning models built using Python or JavaScript libraries such as TensorFlow\.js, PyTorch, or Scikit-learn.
   - Key functionalities:
     - Analyze historical data to detect trends like productivity drops or consistent performance.
     - Predict next month’s performance for employees and teams.

3. **Integration**

   - AI model exposed as a RESTful API endpoint for easy access.
   - Frontend visualizations created to display trends and predictions using charts and graphs.

---

## Technology Stack

1. **Programming Languages**: Python or JavaScript
2. **Machine Learning Libraries**: TensorFlow\.js, PyTorch, or Scikit-learn
3. **Database**: MySQL
4. **Frontend**: HTML, CSS, JavaScript (with a charting library like Chart.js or D3.js)
5. **API Integration**: RESTful API with mock API data

---

## Requirements

1. **Dataset**

   - Historical employee performance data including Agile stories and story points.
   - Mock dataset generated via online API mock tools.

2. **AI Module**

   - Preprocess the dataset (e.g., normalization, missing value handling).
   - Train a machine learning model to:
     - Identify trends in historical data.
     - Predict future performance scores.
   - Evaluate the model’s accuracy and relevance.

3. **API Integration**

   - Develop a RESTful API endpoint to interact with the AI model.
   - Enable the API to accept employee data and return predictions or trends.

4. **Frontend Visualizations**

   - Build an interactive frontend that:
     - Fetches data from the API.
     - Displays insights using dynamic charts or graphs.

---

## Installation and Setup

### Prerequisites

- Python 3.8+ or Node.js (depending on chosen implementation)
- MySQL database server
- Modern web browser

### Steps

1. **Clone the Repository**

   ```
   git clone <repository-url>
   cd ai-powered-insights-engine
   ```

2. **Backend Setup**

   - Install dependencies:
     ```
     pip install -r requirements.txt   # For Python
     npm install                      # For JavaScript
     ```
   - Start the backend server:
     ```
     python app.py                    # For Python
     node server.js                   # For JavaScript
     ```

3. **Frontend Setup**

   - Open the `index.html` file in a browser.
   - Ensure the backend server is running to fetch data from the API.

4. **Database Setup**

   - Import the provided sample dataset into MySQL:
     ```
     mysql -u <username> -p < database_name < sample_dataset.sql
     ```

---

## Usage

1. **Data Analysis and Prediction**

   - Access the API endpoint at `/api/predict` to submit employee data and retrieve predictions.
   - Example API request:
     ```
     POST /api/predict
     {
       "employee_id": 123,
       "past_sprints": [
         {"sprint_id": 1, "story_points": 15},
         {"sprint_id": 2, "story_points": 20}
       ]
     }
     ```

2. **Frontend Visualizations**

   - Open the frontend application to view:
     - Historical trends (e.g., employee productivity).
     - Predicted performance scores and team velocity for upcoming sprints.

---

## Evaluation Criteria

1. **Understanding of AI/ML Concepts**
   - Preprocessing techniques, model training, and evaluation.
2. **Integration**
   - Seamless integration of the AI model into a full-stack application.
3. **Code Clarity and Documentation**
   - Well-documented, modular, and readable code.
4. **Insights Accuracy**
   - Relevance and precision of the trends and predictions.

---

## Future Enhancements

1. Expand the dataset for improved model accuracy.
2. Enhance the AI model with advanced techniques like neural networks.
3. Develop a more sophisticated frontend with detailed filters and analysis tools.
4. Integrate additional APIs for broader context, such as employee feedback data.

---

## Authors

- [Your Name]
- [Contact Information]

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

