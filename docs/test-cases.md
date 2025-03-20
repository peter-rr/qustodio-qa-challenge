# Task 1: Test Cases

## TC_001 | Add new routine

Description: Test to create a new routine.
Preconditions: user logged in.

| Test Steps | Expected Result |
|------------|----------------|
| Navigate to the login page | The login form is displayed |
| Enter valid credentials<br>- Username: `testuser`<br>- Password: `password123` | The user is authenticated and redirected to the dashboard |
| Click the logout button | The user is logged out<br>The login page is displayed again |
