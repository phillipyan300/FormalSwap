from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import environ

app = Flask(__name__)
CORS(app)  # Enable CORS for Vercel frontend

# Use environment variables for configuration
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
db = SQLAlchemy(app)

@app.route('/api/health')
def health_check():
    return {'status': 'healthy'}

if __name__ == '__main__':
    app.run(debug=True) 