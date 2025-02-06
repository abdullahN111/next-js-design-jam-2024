# Deployment Preparation and Staging Environment Setup

## Introduction
This project focuses on preparing for deployment by setting up a staging environment. We configure hosting, manage environment variables securely, and conduct staging tests to ensure a smooth transition to production.

## Hosting Platform
We use **Vercel** for its ease of deployment and seamless GitHub integration.

## Steps for Deployment

### 1. Connecting GitHub Repository to Vercel
- Sign in to Vercel and create a new project.
- Select the GitHub repository containing the marketplace project.
- Configure build settings and enable automatic deployments.

### 2. Configuring Environment Variables
- Create `.env.local` with necessary keys.
- Add variables like `NEXT_PUBLIC_SANITY_PROJECT_ID`, `API_KEY` in Vercel’s dashboard under **Project Settings > Environment Variables**.

### 3. Deploying to Staging
- Push the latest code to GitHub.
- Deploy the application using Vercel’s automatic build process.
- Ensure the deployment completes without errors.

### 4. Staging Environment Testing
#### a) Functional Testing
- Verify key features such as product listing, search, and cart operations.
- Use **Cypress** for UI testing and **Postman** for API validation.

#### b) Performance Testing
- Use **GTmetrix** to analyze speed and responsiveness.
- Optimize images and reduce render-blocking resources.

#### c) Security Testing
- Ensure **HTTPS** is enabled and input fields are validated.
- Check for secure handling of API keys and authentication data.

### 5. Organizing Project Files and Documentation
Maintain a clear folder structure:
```
DOCUMENTS/  - Planning and testing docs
furniro/    - Source code
  ├── src/
  │   ├── sanity/       - Sanity schema and client files
  │   ├── app/          - Layout, main pages, and routes
  │   ├── components/   - Reusable components
README.md   - Project summary and setup instructions
```
Document all test cases in a CSV file with details on expected vs. actual results.
Submit performance reports from **Lighthouse** or **GTmetrix**.

### 6. Finalizing Deployment Strategy
- Ensure all issues are resolved for production readiness.
- Maintain a professional GitHub repository with structured documentation.

## Conclusion
The application is now production-ready with all optimizations and security measures in place. The final step is ensuring the repository is structured correctly and submitting required documents.

