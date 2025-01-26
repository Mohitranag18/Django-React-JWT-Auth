# JWT Authentication System with Django, DRF, and React

This project demonstrates a secure JWT (JSON Web Token) authentication system built with Django, Django Rest Framework (DRF), and React. It includes features like user login, signup, and logout with secure authentication using cookies.

## Features

- **Signup**: Allows users to create an account with email and password.
- **Login**: Allows users to log in and receive a JWT token stored securely in cookies.
- **Logout**: Allows users to log out by deleting the JWT token stored in cookies.
- **Secure**: The JWT token is stored in HTTP-only cookies for enhanced security.
  
## Tech Stack

- **Backend**: Django, Django Rest Framework (DRF)
- **Frontend**: React.js
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: SQLite (or any other database of your choice)
- **Security**: Cookies (HTTP-Only)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Python (preferably 3.7+)
- Node.js and npm
- Django
- Django Rest Framework (DRF)

### Backend Setup

1. Clone the repository.
   
   ```bash
   git clone https://github.com/your-username/Django-React-JWT-Auth.git
   ```

2. Navigate to the backend directory.

   ```bash
   cd backend
   ```

3. Create and activate a virtual environment.

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   ```

4. Install required packages.

   ```bash
   pip install -r requirements.txt
   ```

5. Run migrations to set up the database.

   ```bash
   python manage.py migrate
   ```

6. Create a superuser (optional) to access the Django admin.

   ```bash
   python manage.py createsuperuser
   ```

7. Start the Django development server.

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory.

   ```bash
   cd frontend
   ```

2. Install required dependencies.

   ```bash
   npm install
   ```

3. Start the React development server.

   ```bash
   npm start
   ```

### Features Walkthrough

1. **Signup**: Users can create a new account by entering their email and password. This sends a POST request to the backend, where a JWT token is generated and returned upon successful registration.
2. **Login**: Users can log in using their credentials. On successful authentication, a JWT token is returned and stored in a secure HTTP-only cookie.
3. **Logout**: JWT token is deleted from cookies when the user logs out.

## Future Enhancements

- Implement password reset functionality.
- Add email verification for user signup.
- Improve security with token refresh mechanism.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
