# Simple MERN Stack Boilerplate
<p>A Simple <b>MERN Stack</b> Boilerplate To Get Started Fast For Development</p>
<p>Enter "<b>npm start</b>" or "<b>yarn start</b>" to get started.</p>
<p>This Boilerplate is built using MERN stack</p>
<ol>
    <li>M - MongoDB</li>
    <li>E - ExpressJS</li>
    <li>R - ReactJS</li>
    <li>N - NodeJS</li>
</ol>

#### Hot Reloading and Concurrently
<p>1. Added Webpack Configuration For Hot Reloading - Client Side</p>
<p>2. Added Nodemon for auto-loading - Server Side</p>
<p>3. Added Concurrently For Simultaneously Running Client and Server</p>

### Steps to connect with mongoDB
<ul>
    <li>Create a "<b>.env</b>" file in the server directory of your project</li>
    <li>In that file place the following line</li>
</ul>
<code>
module.exports = { 
              mongoURI: "Your Connection String Here"
              };
</code>
<ul>
    <li>Eg:- <code>mongoURI: 'mongodb://127.0.0.1/my_mern'</code></li>
</ul>

## Get Started
To get started, Clone this repo

```
git clone https://github.com/arravind-r/simple-mern-stack.git
cd simple-mern-stack
"npm install" or "yarn install"
```

Then to install node_modules `npm run server` in root folder.
And for client side, change the directory into client and run install.

```
cd client
"npm install" or "yarn install"
```

After installing the node_modules in "client" folder, go back to main or root directory
```
cd ..
```

##Final Step
Finally run the below command to see it in action
```
"npm run start:dev"
        or
"yarn run start:dev"
```

<b>HELP NOTE:</b>
If any of you could help improve this boilerplate, please do.