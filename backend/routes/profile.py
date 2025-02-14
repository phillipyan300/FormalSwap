from flask import Blueprint, request, jsonify
from flask import g
from flask_login import login_user, logout_user, login_required
from models import User, db

profile = Blueprint('profile', __name__)

@profile.route('/api/profile', methods=['PUT'])
@login_required
def update_profile():
    user = g.user  # From auth middleware
    data = request.json
    
    user.college = data.get('college')
    user.year = data.get('year')
    user.major = data.get('major')
    
    db.session.commit()
    return jsonify(user.to_dict()) 