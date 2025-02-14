import jwt
from datetime import datetime, timedelta

def create_token(user_id: int) -> str:
    """Create a new JWT token for a user"""
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(days=1),  # Token expires in 1 day
        'iat': datetime.utcnow()  # Token issued at
    }
    
    return jwt.encode(
        payload,
        'your-secret-key',  # Store this in environment variables
        algorithm='HS256'
    ) 