![gh-banner](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdK-M5bBRtsG-GxbHQh_QBfpEd9e-yBDJXg&s)
# Cloud Resume Challenge
This is a project I completed to compliment my <a href="https://learn.microsoft.com/api/credentials/share/en-us/LorenzoTaylor-3120/6F95045A1DCDBFBD?sharingId=8C20883C7202504B">Microsoft Certified: Azure Fundamentals AZ-900 Certification.</a>

## Project Goals

- Build a web application resume using Azure cloud services.
- Demonstrate proficiency in Azure technologies.
- Showcase skills and knowledge in cloud computing and web development.

## Steps Taken

### Prep Phase

- Researched the Azure Cloud Resume Challenge and its requirements.
- Set up a development environment with an Azure subscription.

### Execution Phase

1. **Repository Setup:**
    - Created a new repo in GitHub (named `azure-resume`).
    - Cloned the repo to the local desktop (SSH keys set up beforehand).
    - Cloned A Cloud Guru repo to the local desktop.
    - Copied backend and frontend folders from the ACG repo to the `azure-resume` repo.
2. **Front-End Development via VS Code:**
    - Developed the web application resume using HTML, CSS, and JavaScript.
    - Added a counter function written in JavaScript.
    - Pushed all code to GitHub repo.
3. **Back-End Development:**
    - Integrated Azure services including Azure Blob Storage for hosting, Azure Functions for server-less functions, and Azure Cosmos DB for data storage.
    - Deployed resources to Azure using Bicep:
        - Defined a new resource group (`azure-resume`).
        - Deployed Azure Cosmos DB Account with Bicep via GitHub Actions.
        - Created Azure Functions for the counter.
            - Azure Function Workflow
                1. **HTTP Trigger**: The function is triggered by an HTTP request (e.g., a user wants to increment the counter).
                2. **Input Binding**: The function reads the current counter value from Cosmos DB.
                
                1. **Processing**: The function increments the counter value.
                2. **Output Binding**: The function writes the updated counter value back to Cosmos DB.
        - Deployed the frontend to a static website via Azure Storage.
4. **Additional Services:**
    - Enabled Azure CDN to:
        - Cache website content.
        - Provision TLS certificates for HTTPS.
        - Map a custom domain name.
5. **CI/CD Implementation:**
    - Implemented a CI/CD pipeline using Azure DevOps for frontend and backend changes.
    - Implemented unit testing.

### Monitoring and Controlling Phase

- Monitored application performance using Azure Application Insights.
- Addressed any issues encountered during development and deployment.
- Tested application functionality and performance across different devices and browsers.

### Closure Phase

- Deployed the web application resume to Azure Blob Storage.
- Conducted a final review to ensure all requirements were met.
- Documented the project, including setup instructions and key learnings.

## Some Challenges I Faced While Working Through This Project

- **Learning Curve:** Acquiring proficiency in Azure services required time and effort.
- **Integration Complexities:** Ensuring seamless communication between different Azure services posed challenges.
- **Debugging and Troubleshooting:** Resolving issues related to deployment and configuration required thorough debugging and troubleshooting, I'll be honest and admit I leaned on StackOverflow and ChatGPT for this part :-)....
- **GitHub Issue:** Faced a challenge pushing code to GitHub due to forgetting the SSH passphrase. Used `ssh-agent` to cache SSH credentials as a solution <-- LESSON LEARNED

## Successes and Achievements

- Successfully built and deployed a web application resume using Azure cloud services.
- Demonstrated proficiency in Azure technologies and their practical application.
- Received positive feedback from the Azure Cloud Resume Challenge community.

## Lessons Learned

- Importance of thorough planning and research before implementation.
- Value of documentation for future reference and knowledge sharing.
- Continuous learning mindset is essential for mastering new technologies.

## Recommendations for Improvement

- I plan on exploring additional Azure features that can be included in this project to expand my knowledge and capabilities.
- Share project experiences and insights with the community to facilitate learning and collaboration.
