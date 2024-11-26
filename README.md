# altius_hub
<br>

This repo contains the frontend and backend of the assignment. The backend is functional handling management of users and tasks created by the users. I was not able to implement the image upload part in the backend. The frontend only has the register and signup page. 

## frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev` to get the server running

# backend

1. `cd backend`
2. `pip install -r requirements.txt`
3. Setup the environment variables
```
    touch .env
    # write the following the environent variables in the .env file
    DB_NAME="task_db"
    DB_USER="postgres"
    DB_PWD="anurag"
    DB_HOST="localhost"
    DB_PORT="5432"
   ```
4. `./manage.py makemigrations initial_schema`
5. `./manage.py migrate`
6. To get the server running<br>
    `./manage.py runserver`