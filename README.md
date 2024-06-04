# azure-resume
This is a project I completed to compliment my AZ-900 certification.

Cloud Resume Challenge Write-Up:
**After Action Report**

**Project Title:** Azure Cloud Resume Challenge

**Date:** April 6, 2024

**Project Overview:**
The goal of the Azure Cloud Resume Challenge is to build a resume website that runs entirely on Azure cloud services.

**Key Stakeholders:**

- Project Initiator: Lorenzo Taylor

**Project Goals:**

- Build a web application resume using Azure cloud services.
- Demonstrate proficiency in Azure technologies.
- Showcase skills and knowledge in cloud computing and web development.

**Steps Taken:**

1. **Initiation Phase:**
    - Researched the Azure Cloud Resume Challenge and its requirements.
    - Set up a development environment with Azure subscription.
2. **Planning Phase:**
    - Defined the scope of the project, including the features to be implemented.
    - Created a project timeline with milestones for development and deployment.
    - Selected appropriate Azure services based on project requirements.
3. **Execution Phase:**
    - Created new repo in Git Hub (Named azure-resume)
    - Cloned repo to local desktop (Had to set up SSH keys beforehand)
    - Cloned A Cloud Guru repo to local desktop
    - Copied backend and frontend folders from ACG repo over to Azure-Resume repo
    - Developed the web application resume using HTML, CSS, and JavaScript. (Front End)
        - Edit Index.html file via VS Code
        - Edit frontend (add counter function which is written in javascript)
        - Push all of our code back up to GitHub (version control)
            - git add -A (Tells Git to add all of the changes that were made)
            - git commit -m (to commit changes and send a msg of what changes were made)
            - git push
    - Integrated Azure services, including Azure App Service for hosting, Azure Functions for serverless functions, and Azure Cosmos DB for data storage. (Back End)
        - We’ll deploy our resources to Azure using Bicep via Github actions.
        - In VScode:
            - Define new resource group (azure-resume resource group)
            - Research how to deploy Azure Cosmos DB Account with Bicep
    - Implemented continuous integration/continuous development & deployment (CI/CD) pipeline using Azure DevOps for automated deployment.
4. **Monitoring and Controlling Phase:**
    - Monitored application performance using Azure Application Insights.
    - Addressed any issues encountered during development and deployment.
    - Tested application functionality and performance across different devices and browsers.
5. **Closure Phase:**
    - Deployed the web application resume to Azure App Service.
    - Conducted a final review to ensure all requirements were met.
    - Documented the project, including setup instructions and key learnings.

**Processes Implemented:**

1. Agile Methodology
    - Utilized agile principles to iteratively develop and refine the web application resume.
    - Conducted regular stand-up meetings to track progress and discuss any blockers.

**Challenges Faced:**

- Learning curve: Acquiring proficiency in Azure services required time and effort.
- Integration complexities: Integrating different Azure services and ensuring seamless communication posed challenges.
- Debugging and troubleshooting: Resolving issues related to deployment and configuration required thorough debugging and troubleshooting.

**Successes and Achievements:**

- Successfully built and deployed a web application resume using Azure cloud services.
- Demonstrated proficiency in Azure technologies and their practical application.
- Received positive feedback from the Azure Cloud Resume Challenge community.

**Lessons Learned:**

- Importance of thorough planning and research before diving into implementation.
- Value of documentation for future reference and knowledge sharing.
- Continuous learning mindset is essential for mastering new technologies.

**Recommendations for Improvement:**

- Enhance skills in Azure services through further hands-on practice and experimentation.
- Explore additional Azure features and integrations to expand knowledge and capabilities.
- Share project experiences and insights with the community to facilitate learning and collaboration.

**Conclusion:**
The completion of the Azure Cloud Resume Challenge provided valuable hands-on experience in building and deploying applications using Azure cloud services. Through this project, I have not only demonstrated proficiency in Azure technologies but also gained insights into best practices and methodologies for cloud application development. Moving forward, I am excited to continue exploring and leveraging Azure services to tackle new challenges and contribute to innovative solutions.

**Attachments:**

- Azure Cloud Resume Project Documentation
- Screenshots of Deployed Web Application Resume
- Azure DevOps Pipeline Configuration

**Prepared By:**
[Your Name]
[Cloud Engineer]
[April 6, 2024]

**Reviewed By:**
[Supervisor's Name]
[Senior Cloud Architect]
[April 7, 2024]
