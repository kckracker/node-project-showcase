_____________________________________________________________________
-------------------- NODE PROJECT SHOWCASE --------------------------
_____________________________________________________________________

Welcome to the Node Project Showcase powered by NodeJS and Express! This project is a collection of my Team Treehouse work thus far and serves to demonstrate both my previous projects and my own skillset within NodeJS and Express frameworks. 

*********************************************************************
                            SUMMARY
*********************************************************************
The project can be broken down into a few steps.

    * First, the express framework is setup in the app.js file. This file serves as the main hub for data collection, static file / view assignment, request receipt, and response handling. 
        - In addition to requiring Express, I am requiring a number of npm dependencies including Pug, which will serve as the view engine on the server side. 
        - I am pointing requests to specific Pug files based on user interaction and url request.
        - Finally, I am setting up the local server to listen on port 3000 and publish a line confirming success of server setup.

    * Second, I have compiled source data that will feed data to my Express project.
        - I stored a total of three screenshots of each of my previous projects to add a visual demonstration of my work. Images are used for both grid and landscape views from the index and project views.
        - I generated a JSON file containing the necessary data about my previous projects to inform the site. I manually entered this information and pointed images to the static images for the project. This data is pulled into the app.js file and required in order to populate the data within the various views for the Pug pages.
        

    * Third, I updated the default pug files to inform the page with inherited data from the data.json file I created. Making use of the iterator and interpolation supported by Pug, I was able to dynamically add html to the page specific to each of my previous projects. In addition to the default views, I generated an error and page-not-found view to display upon error. 
        - The page not found view is specific to the error 404 and hosts a friendly 'page not found' message with dev details available.
        - The error view is returned when a general error occurs and is not tied to status 404. A default value of 500 is assigned to the status and a friendly message informs the user an error has occurred with their request.

*********************************************************************
                            STYLING CHANGES
*********************************************************************

I have made a few styling changes to personalize the look and feel of the project: 
    
    * First, I chose to reformat the sidebar to a fixed position separated by a thin right border. In addition, I rounded the border radius on the profile picture, added hover listeners to the more information link and menu button (on smaller screens), and updated the font color to black.

    * Second, I updated the color theme throughout the project to maroon. Border colors, hover highlights on grid selections and text, and button backgrounds on hover have all been updated to maroon to better facilitate a unity on site aesthetics. 

    * Third, I added a class to address the page not found display. Utilizing an image I created using Canva (https://www.canva.com), I set a unique page background and updated font color to white to better display error message.

_____________________________________________________________________
----------------- THANKS FOR READING! CHEERS! -----------------------
_____________________________________________________________________