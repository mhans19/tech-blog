# <div align="center">**TECH-BLOG**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> The purpose of this challenge was to build a CMS-style blog site so developers can publish blog posts and comment on other developers' posts. The application code must use a MVC structure, use [express-handlebars](https://www.npmjs.com/search?q=handlebars), [Sequelize](https://www.npmjs.com/package/sequelize), and [express session](https://www.npmjs.com/package/express-session). Additionally, this project was to be deployed via [Heroku](https://dashboard.heroku.com/).  

---

## **APPLICATION LINKS**
> [Live Heroku Application](https://infinite-springs-68982.herokuapp.com/)   
> [GitHub Repository](https://github.com/mhans19/tech-blog)  

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submisksionId=813167e8-8027-1e16-5911-1c143c23561f) |  
  
---

## **DEVELOPMENT**  
This application was developed with the following application structures:  
1. [Node.js](https://nodejs.org/en/)  
2. [Node Package Manager (NPM)](https://www.npmjs.com/)
    + [NPM express-handlebars](https://www.npmjs.com/search?q=handlebars)  
    + [NPM bcrypt](https://www.npmjs.com/package/bcrypt)  
    + [NPM connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
    + [NPM Express](https://www.npmjs.com/package/express)
    + [NPM express-session](https://www.npmjs.com/package/express-session)
    + [NPM mysql2](https://www.npmjs.com/package/mysql2)
    + [NPM sequelize](https://www.npmjs.com/package/sequelize)
    + [NPM jest](https://www.npmjs.com/package/jest)
3. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   
4. [jQuery](https://jquery.com/)   
5. [JSON](https://www.json.org/json-en.html)
6. [Insomnia](https://support.insomnia.rest/article/11-getting-started)
7. [Hypertext Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML)  
8. [Heroku](https://dashboard.heroku.com/)

---

## **INSTALLATION**
> This online application does not require any installation prior to running.   
However, if interested in contributing to the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/tech-blog) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.   

---

## **USAGE**
> The application is deployed with Heroku and available for immediate use. Simply navigate to the application by following the [application link](https://infinite-springs-68982.herokuapp.com/).


---

## **TESTING**
> During development efforts, [Insomnia](https://support.insomnia.rest/article/11-getting-started) was used to test GET and POST routes. [NPM jest](https://www.npmjs.com/package/jest) was also used for development testing.  

---

## **USER STORY**  
> AS A developer who writes about tech    
> I WANT a CMS-style blog site      
> SO THAT I can publish articles, blog posts, and my thoughts and opinions       
---

## **ACCEPTANCE CRITERIA**
> GIVEN a CMS-style blog site    
> WHEN I visit the site for the first time    
> THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in    
> WHEN I click on the homepage option    
> THEN I am taken to the homepage    
> WHEN I click on any other links in the navigation    
> THEN I am prompted to either sign up or sign in    
> WHEN I choose to sign up    
> THEN I am prompted to create a username and password    
> WHEN I click on the sign-up button    
> THEN my user credentials are saved and I am logged into the site    
> WHEN I revisit the site at a later time and choose to sign in    
> THEN I am prompted to enter my username and password    
> WHEN I am signed in to the site    
> THEN I see navigation links for the homepage, the dashboard, and the option to log out    
> WHEN I click on the homepage option in the navigation    
> THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created    
> WHEN I click on an existing blog post    
> THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment    
> WHEN I enter a comment and click on the submit button while signed in    
> THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created    
> WHEN I click on the dashboard option in the navigation    
> THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post    
> WHEN I click on the button to add a new blog post    
> THEN I am prompted to enter both a title and contents for my blog post    
> WHEN I click on the button to create a new blog post    
> THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post    
> WHEN I click on one of my existing posts in the dashboard    
> THEN I am able to delete or update my post and taken back to an updated dashboard    
> WHEN I click on the logout option in the navigation    
> THEN I am signed out of the site    
> WHEN I am idle on the page for more than a set time    
> THEN I am automatically signed out of the site     

---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Technical Acceptance Criteria: 40%</div>**
- [x] Satisfies all of the preceding acceptance criteria plus the following
- [x] Application’s folder structure follows the Model-View-Controller paradigm.
- [x] Uses the express-handlebars package to use Handlebars.js for your Views.
- [x] Application must be deployed to Heroku.

### **<div align="center">Deployment: 32%</div>**
- [x] Application deployed at live URL.
- [x] Application loads with no errors.
- [x] Application GitHub URL submitted.
- [x] GitHub repository contains application code.

### **<div align="center">Application Quality: 15%</div>**
- [x] User experience is intuitive and easy to navigate.
- [x] User interface style is clean and polished.
- [x] Application resembles the mock-up functionality provided in the Challenge instructions.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains quality README file with description, screenshot, and link to deployed application.

---

## **FUNCTIONALITY**  
1. In an internet browser, navigate to [deployed application](https://infinite-springs-68982.herokuapp.com/). The webpage will populate with codeBloggers, a CMS-style blog. The homepage shows previously published blog posts by all codeBlogger users. Before contributing to the blog, a use must login to or sign-up for a codeBloggers account.  
![](/assets/images/homepage.PNG)  
2. When the user clicks on the 'Sign-up' button at the top right-hand side of the screen, they are redirected to a sign-up for asking for their username, email, and password. After submitting this information, they are automatically logged in and routed to their dashboard.  
![](/assets/images/signup.PNG)  
3. If the user already has a codeBloggers account, they could select the 'Login' button at the top right-hand side of the screen. They will be redirected to a login form asking for their email and password. Once their account is authenticated, they are routed tot their dashboard.  
![](/assets/images/login.PNG)  
4. One the user is logged in and routed to their dashboard, they will see any of their previously posted blog entries and have the option for creating a new post.  
![](/assets/images/dash1.PNG)  
5. To create a new blog post, the user will enter a title and a body for the post. They will click the 'Create' button to publish the post.   
![](/assets/images/dash2.PNG)   
6. The user is then directed back to their dashboard where they will see the new post.   
![](/assets/images/dash3.PNG)   
7. If a user needs to edit. delete, or add comments to a blog post they created, they can click the 'Edit' button on the appropriate post. This will take them to a screen to modify the post.   
![](/assets/images/editblog.PNG)   
8. The user can navigate back to the home page by clicking on the 'Home' or 'codeBloggers' buttons at the top of the page. The home page features all posts that have been made by codeBloggers users.    
![](/assets/images/homepage.PNG)   
9. Users can comment on blog posts by clicking the 'Comments' and adding the details in the comment box.   
![](/assets/images/commentpage.PNG)  
10. Enjoy codeBloggers!  