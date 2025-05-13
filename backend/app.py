from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import environ
from dotenv import load_dotenv
import sys

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for Vercel frontend

# Check if environment variables are loaded
database_url = environ.get('DATABASE_URL')
if not database_url:
    print("Error: DATABASE_URL environment variable not found!")
    print("Please make sure you have a .env file with DATABASE_URL defined.")
    sys.exit(1)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = database_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = environ.get('SECRET_KEY', 'fallback-secret-key')

# Initialize extensions
db = SQLAlchemy(app)

# Import routes after db initialization to avoid circular imports
from routes.auth import auth
from routes.profile import profile
from routes.listings import listings

# Register blueprints
app.register_blueprint(auth)
app.register_blueprint(profile)
app.register_blueprint(listings)

@app.route('/api/health')
def health_check():
    return {'status': 'healthy'}

# Create tables
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True) 