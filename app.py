from flask import Flask, render_template,  jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello World"

if __name__ == "__main__":
    app.run()