from flask_mail import Mail, Message
from app import app
from os import environ

# Railway can store these securely
app.config['MAIL_SERVER'] = 'smtp.sendgrid.net'
app.config['MAIL_USERNAME'] = 'apikey'
app.config['MAIL_PASSWORD'] = environ.get('SENDGRID_API_KEY')

mail = Mail(app)

def send_verification_email(user_email, token):
    msg = Message('Verify your FormSwap account',
                 sender='noreply@formswap.com',
                 recipients=[user_email])
    msg.body = f'Click here to verify: {verification_link}'
    mail.send(msg) 