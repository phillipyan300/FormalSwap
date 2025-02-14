from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from os import environ

def send_verification_email(user_email: str, code: str):
    if environ.get('FLASK_ENV') == 'development':
        print(f"Development mode: Verification code for {user_email} is {code}")
        return True
    else:
        # Use SendGrid in production
        message = Mail(
            from_email='noreply@formswap.com',  # You'll need to verify this domain
            to_emails=user_email,
            subject='Verify your FormSwap account',
            html_content=f'''
                <h1>Welcome to FormSwap!</h1>
                <p>Your verification code is: <strong>{code}</strong></p>
                <p>This code will expire in 10 minutes.</p>
            '''
        )
        
        try:
            sg = SendGridAPIClient(environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            return True
        except Exception as e:
            print(f"Error sending email: {e}")
            return False 