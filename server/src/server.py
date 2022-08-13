from distutils.log import debug
import requests
from flask import (
    Flask,
    json,
    jsonify,
    make_response,
    request
)

app = Flask(__name__)

@app.route("/", methods=["GET"])
def health_check():
    from datetime import datetime
    return json.dumps(
        {
            "message": "The server is working",
            "timestamp": datetime.now()
        }
    )

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int("5050"), debug=False)