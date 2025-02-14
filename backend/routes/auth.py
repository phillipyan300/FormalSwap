from flask import Blueprint, request, jsonify
from models import User, db
from services.email import send_verification_email
import random
import string

auth = Blueprint('auth', __name__)

def generate_verification_code():
    return ''.join(random.choices(string.digits, k=6))

@auth.route('/api/auth/request-verification', methods=['POST'])
def request_verification():
    email = request.json.get('email')
    if not email.endswith('ox.ac.uk'):
        return jsonify({'error': 'Must use Oxford email'}), 400
        
    code = generate_verification_code()
    # Store code in Redis or similar with expiration
    send_verification_email(email, code)
    return jsonify({'message': 'Verification code sent'})

@auth.route('/api/auth/verify-code', methods=['POST'])
def verify_code():
    email = request.json.get('email')
    code = request.json.get('code')
    # Verify code from Redis
    # Create or update user
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(email=email)
        db.session.add(user)
    user.verified = True
    db.session.commit()
    
    token = create_token(user.id)  # JWT token
    return jsonify({
        'token': token,
        'expiresIn': 86400,  # 24 hours
        'user': user.to_dict()
    }) 