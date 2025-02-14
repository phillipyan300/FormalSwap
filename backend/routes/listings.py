from flask import Blueprint, request, jsonify, g
from flask_login import login_required
from models import Listing, db

listings = Blueprint('listings', __name__)

@listings.route('/api/listings/<int:listing_id>/confirm', methods=['POST'])
@login_required
def confirm_match(listing_id):
    listing = Listing.query.get_or_404(listing_id)
    user = g.user
    
    # Check if user is either host or joiner
    if user.id not in [listing.host_id, listing.joiner_id]:
        return jsonify({'error': 'Unauthorized'}), 403
        
    if user.id == listing.host_id:
        listing.host_confirmed = True
    else:
        listing.joiner_confirmed = True
        
    # If both confirmed, mark as matched and reveal contact info
    if listing.host_confirmed and listing.joiner_confirmed:
        listing.status = 'matched'
        # Send confirmation emails to both parties
        
    db.session.commit()
    return jsonify(listing.to_dict()) 