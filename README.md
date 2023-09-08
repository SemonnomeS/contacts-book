# My Contacts Book App

This is a sample README file for my Contacts Book Angular application. Below, I'll provide information about the CI/CD pipeline I've set up to build, test, and deploy my application.

## Continuous Integration and Continuous Deployment (CI/CD)

### Workflow Description

I've set up a CI/CD workflow using GitHub Actions that automates the building, testing, and deployment of my Angular application whenever changes are pushed to the `master` branch.

The workflow consists of the following steps:

1. **Checkout code:** This step checks out the code from the `master` branch.

2. **Set up Node.js:** I specify Node.js version 18 for my build environment.

3. **Install dependencies:** This step installs the project dependencies using `npm install`.

4. **Run Angular tests:** I run Angular tests using `npm test`, ensuring that tests are run in headless Chrome.

5. **Build Angular app:** The application is built using `npm run build-production`, creating the production-ready build.

6. **Deploy:** The application is deployed to GitHub Pages using the [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action). The built application is deployed from the `./dist/contacts-book` folder.

