## Downloading the project
Download the zip file or open a program such as Visual Studio Code. 
Open a terminal. Make sure you have the latest version of NodeJS. To do this, type node -v in the terminal. If the version is less than 20, then type nvm use 20.
Copy the ssh key from git hub, then type git init and git clone from the ssh key in the terminal.

## Getting Started

First, run the development server:

npm install
# then
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## about the project

I made similar components to those on the site with the link you gave in the message. 
There are three active pages (home, how to, guides).
I used the FSD architecture to better separate the code. The mock JSON file is located in the api folder. 
The app folder contains the project pages and layout components. 
The shared folder contains small elements for the project, such as images and buttons. 
I divided the pages into two types to make it easier to use styling. 
The page folders contain components that are used only for these pages. 
For easy styling, I used clsx.