# ELMS

# Overview

The Backend conists of two API's:
main api - python
auth api - nodejs

## How to Run

Follow the steps below to run the application locally:


### Authentication API (Starts up in PORT 5000)
1. Install the required dependencies:

    ```bash
    npm install
    ```

2. Setup the environment variables

    3.1. create a file called '.env'

    3.2. Add these values below (These values will be used only in the dev environment)

    ```bash
    PORT = 5000
    ATLAS_URI = ""
    MONGO_URI = ""
    JWT_SEC = ""
    ```

    ATLAS_URI IS found on mongodb site when you create a new project

3. Start the local development server:

   ```bash
   npm start
   ```
    