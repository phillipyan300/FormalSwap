from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from os import environ
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for Vercel frontend

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = environ.get('SECRET_KEY')

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