# Lone Working Register Portal
The following is the code for the frontend Vue website used as a portal to access the Lone Working Register system.

## How to Test
The website is hosted on Heroku and can be found [here](https://radiant-forest-06530.herokuapp.com/login)

### Admin Accounts
Admin accounts cannot be created through the frontend, in order to test Admin dashboard please use the following account credentials when loging in: 

> Email: 11111111@students.lincoln.ac.uk
> Password: Admin123

### Student Accounts
If you want to test creating a new account the email must be a valid UoL student email, in the actual system an email would be sent to the student to verify their account.

For testing purposes open the web developer console by pressing `f12`, when you click register, the response from the backend will appear in the developer console, if you expand this response you will find one of the fields is the authentication code, copy this into the verify screen and the new account will be verified and can now login to the system as a normal user.

On the other hand if you want to test a student account that is already verified in the database then please use the following credentials when loging in:

> Email: 99999999@students.lincoln.ac.uk
> Password: Student123

### Signing into register
If you log into the system as a student you will notice that a message will be displayed at the bottom of the screen saying you have not yet scanned the QR code, so you cannot change rooms.

You need to scan a valid QR code on the same device as you used to login on so it is recommended to login to your student account on your phone.

Navigate to the website hosting the QR code [here](https://jakeswin.github.io/qr_site/)

Scan the QR code using the phone you are logged in on. This should redirect you to the dashboard where you can now acces the "Change Rooms" form.

### Checking that the Sign In request was handled correctly 
When you send the change rooms request, you can check if the request was handled correctly by refreshing the page, the top of the student page should now say that you are logged in and what room you are logged in on.

Adittionally if you look at the admin page you should now see the student ID you signed in with as well as what room and what time you signed in in the list of currently signed in students.