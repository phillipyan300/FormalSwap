from functools import wraps
from flask import request, jsonify, g
import jwt
from models import User

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # 1. Get the auth token from header
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({'error': 'No authorization token provided'}), 401

        token = auth_header.split(' ')[1]
        
        try:
            # 2. Verify the token
            payload = jwt.decode(
                token, 
                'your-secret-key',  # Store this in environment variables
                algorithms=['HS256']
            )
            
            # 3. Get the user from database
            user = User.query.get(payload['user_id'])
            if not user:
                return jsonify({'error': 'User not found'}), 401
                
            # 4. Attach user to request context
            g.user = user
            
            # 5. Continue to the route handler
            return f(*args, **kwargs)
            
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Invalid token'}), 401
            
    return decorated 