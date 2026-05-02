import React from 'react';

export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  dateRange: string;
  achievements: React.ReactNode[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "symcor",
    company: "Symcor",
    logo: "/logos/symcor.jpg",
    role: "Cloud Engineer",
    dateRange: "OCT, 2024 - Present",
    achievements: [
      <>Engineered an enterprise fraud detection system using Azure AI Document Intelligence, architected to process and analyze <strong className="font-bold text-foreground">5-6 million cheques monthly</strong>.</>,
      <>Architected and deployed a <strong className="font-bold text-foreground">GPT-4 RAG pipeline</strong> integrated with Microsoft Teams to provide automated querying of on-premises Confluence documentation.</>,
      <>Designed and deployed secure, private environments for Azure OpenAI with end-to-end private connectivity using Private Link and Azure Service Bus.</>,
      <>Architected and configured private Azure Red Hat OpenShift (ARO) clusters, managing full-stack access control and secure DNS resolution.</>
    ],
    techStack: ["ARO", "Bicep", "Databricks", "Azure OpenAI", "Synapse"]
  },
  {
    id: "securian",
    company: "Securian Canada",
    logo: "/logos/securian.png",
    role: "Cloud Engineer",
    dateRange: "NOV, 2022 - OCT, 2024",
    achievements: [
      <>Developed a comprehensive library of Terraform scripts to automate the provisioning of core Azure resources, which <strong className="font-bold text-foreground">reduced deployment timelines by 50%</strong>.</>,
      <>Optimized global application performance by implementing Azure Front Door with advanced routing rules and caching policies.</>,
      <>Engineered robust CI/CD pipelines using Azure DevOps and GitHub Actions to streamline the application lifecycle.</>,
      <>Hardened cloud security posture by enforcing Azure Key Vault and configuring Network Security Groups (NSGs).</>
    ],
    techStack: ["Terraform", "Azure DevOps", "Azure Front Door"]
  }
];
