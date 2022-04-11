import { Certification, HobbyProject, Jobs, Personal, School, Skills } from "./types"

export const welcome = "Thanks for checking out my site! I used AWS Amplify to help host it."

export const personal: Personal = {
    name: "Ethan Bowen",
    email: "ethan.a.bowen@gmail.com",
    whoAmI: "Passionate, driven, concept-focused technologist eager to create meaningful products that impact lives.",
    yearsExperience: 9,
    social: {
        linkedIn: "https://www.linkedin.com/in/ethan-bowen-89115250/",
        gitHub: "https://github.com/ethanabowen",
        faceBook: "https://www.facebook.com/ethan.a.bowen"
    }
}

export const schools: School[] = [
    {
        school: "Texas Tech University",
        degree: "Bachelor's of Science in Computer Science",
        year: 2012
    },
    {
        school: "University of Texas at Arlington",
        degree: "Master's of Science in Computer Science",
        year: 2016
    }
]

export const skills : Skills = {
    AWS: [
        { technology: "Operational Excellence", proficiency: 8 },
        { technology: "Security", proficiency: 7 },
        { technology: "Reliability", proficiency: 8 },
        { technology: "Performance Efficiency", proficiency: 9 },
        { technology: "Cost Optimization", proficiency: 7 }
    ],
    backend: [
        { technology: "Java", proficiency: 10 },
        { technology: "Spring", proficiency: 10 },
        { technology: "Python", proficiency: 7 },
        { technology: "C#", proficiency: 8 },
        { technology: "C/C++", proficiency: 6 },
        { technology: "PHP", proficiency: 8 },
        { technology: "Groovy", proficiency: 8 },
        { technology: "Eureka/Zuul", proficiency: 7 }
    ],
    frontend: [
        { technology: "Angular", proficiency: 5 },
        { technology: "Javascript", proficiency: 8 },
        { technology: "React", proficiency: 8 },
        { technology: "Node", proficiency: 5 },
        { technology: "Bootstrap", proficiency: 7 },
        { technology: "CSS", proficiency: 7 },
        { technology: "SCSS", proficiency: 5 }
    ],
    /*"Frontend Library": [
        { technology: "RapiDoc", proficiency: 10  },
        { technology: "D3", proficiency: 6 },
        { technology: "Gulp", proficiency: 7 },
        { technology: "Kendo", proficiency: 5 }
    ],*/
    design: [
        { technology: "DDD", proficiency: 8 },
        { technology: "SOLID", proficiency: 9 },
        { technology: "OOP", proficiency: 8 },
        { technology: "Clean Code", proficiency: 7 },
        { technology: "Web CDD", proficiency: 6 },
    ],
    communication: [
        { technology: "REST", proficiency: 10 },
        { technology: "SOAP", proficiency: 8 },
        { technology: "RabbitMQ", proficiency: 9 },
        { technology: "WebSphere", proficiency: 5 },
        { technology: "JMS", proficiency: 7 }
    ],
    storage: [
        { technology: "Dynamo", proficiency: 6 },
        { technology: "MySql", proficiency: 5 },
        { technology: "DB2", proficiency: 5 },
        { technology: "Heidi", proficiency: 5 },
        { technology: "Mongo", proficiency: 5 },
    ],
    analysis: [
        { technology: "SonarQube", proficiency: 8 },
        { technology: "Tableau", proficiency: 8 },
        { technology: "AWS QuickSight", proficiency: 10 }
    ],
    scripting: [
        { technology: "Python", proficiency: 7 },
        { technology: "Bash/Shell", proficiency: 9 }
    ],
    "CI/CD": [
        { technology: "Jenkins", proficiency: 10 },
        { technology: "Gitlab", proficiency: 8 }
    ],
    OS: [
        { technology: "Windows", proficiency: 8 },
        { technology: "Unix", proficiency: 8 }
    ],
    "IaC": [
        { technology: "Serverless", proficiency: 5 },
        { technology: "Terraform", proficiency: 5 }
    ]
}

/*export const softSkills = [
    "2+ years of technical leadership on multiple projects",
    "Initiated knowledge sharing sessions on multiple teams"
]*/

export const jobs: Jobs = {
    slalomBuild: [
        {
            company: "Slalom Build",
            title: "Software Architect",
            startDate: "04/2021",
            endDate: "Present",
            details: [
                "Consultant to multiple clients ranging in software stacks and solutions.",
            ],
            site: "https://www.slalombuild.com/",
            icon: "skiing"
        }
    ],
    cbord: [
        {
            company: "CBORD",
            title: "Advisory Software Engineer",
            startDate: "03/2020",
            endDate: "Present",
            details: [
                "Led, designed, and coded a robust multi-tenant analytics solution (QuickSight) spanning multiple AWS regions",
                "Serving as technical lead on company wide Hub integration project",
                "Integrating AWS services such as functions, storage, and authentication throughout CBORD",
                "Introducing and harnessing IaC with Serverless and Terraform",
            ],
            site: "https://www.cbord.com/",
            icon: "university"
        },
        {
            company: "CBORD",
            title: "Software Engineer",
            startDate: "04/2019",
            endDate: "04/2021",
            details: [
                "Led external team members daily on technical and domain-specific topics",
                "Initiated several projects and proof of concepts in an effort to push the team forward",
                "Developed React webpages for CSGold's web migration"
            ],
            site: "https://www.cbord.com/",
            icon: "university"
        }
    ],
    lockheedMartin: [{
        company: "Lockheed Martin - Skunkworks",
        title: "Software Engineer III",
        startDate: "09/2018",
        endDate: "04/2019",
        details: [
            "Built a plugin-based dependency injection library using native Java",
            "Refactored and heavily optimized entire CI/CD pipeline via Jenkins/Groovy",
            "Initiated more through SCRUM practices (retrospectives, code reviews, better planning)"
        ],
        site: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/aeronautics/skunkworks.html",
        icon: "fighter-jet"
    }],
    pier1: [{
        company: "Pier 1 Imports",
        title: "Software Engineer II",
        startDate: "04/2016",
        endDate: "09/2018",
        details: [
            "Developed micro-service architecture to provide reliable, tolerant, and extensible Supply Chain products",
            "Adopted the open-source mindset by actively seeking and applying new opportunities to enhance the customer experience",
            "Created 'Generic Class Generator' in Java that populated any Java object with random values (recursively if needed)"
        ],
        site: "https://www.pier1.com/",
        icon: "store"
    }],
    bnsf: [{
        company: "BNSF Railway",
        title: "Software Developer II",
        startDate: "09/2012",
        endDate: "04/2016",
        details: [
            "Drove preventative mechanical derailment efforts on WebSphere, Java, UNIX, and TIBCO platforms",
            "Implemented “Train Matching” software in charge of aggregating multiple real-time data feeds",
            "Resolved on-call production issues leading to several initiatives for system optimization and stability",
        ],
        site: "https://www.bnsf.com/",
        icon: "train"
    }],
    rtl: [{
        company: "RTL Genomics",
        title: "Intern",
        startDate: "11/2011",
        endDate: "03/2012",
        details: [
            "Assist and create stream line automation of DNA analysis processes using C#,Python, and UNIX",
            "Ground up creation of a multithreaded Server-Client application using C#’s TCP API"
        ],
        site: "https://rtlgenomics.com/",
        icon: "dna"
    }],
    halliburton: [{
        company: "Halliburton",
        title: "Intern",
        startDate: "06/2011",
        endDate: "08/2011",
        details: [
            "Creating in-house C# applications used to meta-manage data from a database",
            "Familiarized selfwith FORTRAN and VisualBasic and embedded DLLs into other languages"
        ],
        site: "https://www.halliburton.com/"
    }],
    motio: [{
        company: "Motio Inc",
        title: "Intern",
        startDate: "05/2010",
        endDate: "08/2010",
        details: [
            "Familiarized self with IBM Cognos BI environment while applying to it programming",
            "Programmed on MotioPI, a java - based product used to accompany the IBMCognos platform"
        ],
        site: "https://motio.com/"
    }
    ]
}

export const collegeProjects: string[] = [
    "Created website that displays the latest news on every NASDAQ Stock ticker using web-scraped data.",
    "Implementation of Support Vector Machine and creation of custom Kernel",
    "Constant experimentation with technologies to understand their place in the development ecosystem"]

export const hobbyProjects: HobbyProject[] = [
    {
        title: '<a href="https://ethanabowen.github.io/isometric-terrain-generation-hosting/">Isometric Terrain Generator</a>',
        description: "Using a home brewed Perlin Noise algorithm, this project combines Isometric Tileset Art with my vision of dynamic Terrain Generation. There are preset worlds setup for exploration and play! <strong>Maximize for best experience.</strong> Try out the Zoom (Right Click) and Drag features while exploring the different terrains!  <a href=\"https://ethanabowen.github.io/isometric-terrain-generation-hosting/\">Try it out!</a>",
        lastPublishDate: "01/03/2021",
        credits:
            [
                {
                    title: "Unity Game Engine",
                    link: "https://unity.com/"
                },
                {
                    title: "Sebastian Lague's Procedural Landmass Generation series.",
                    link: "https://www.youtube.com/watch?v=wbpMiKiSKm8&list=PLFt_AvWsXl0eBW2EiBtl_sxmDtSgZBxB3"
                },
                {
                    title: "Tileset designs by Max Heyder Art",
                    link: "https://assetstore.unity.com/publishers/10686"
                }
            ],
        gitHubUrl: "https://github.com/ethanabowen/isometric-terrain-generation"
    },
    {
        title: "Generate Random Object Values (GROV)",
        description: "On-going project that will populate, recursively, any Java object.  Best used for Testing with complex schemas or for stress testing.  I've implemented this twice professionally and have decided to start rewriting it for my own work.",
        lastPublishDate: "11/09/2020",
        gitHubUrl: "https://github.com/ethanabowen/GROV"
    },
]


export const certifications: Certification[] = [
    {
        name: "AWS Cloud Practitioner",
        link: "https://www.credly.com/badges/f866b75d-7266-4b06-83bf-a8d1c535e95c",
        image: "https://images.credly.com/size/340x340/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png",
        startDate: "09/20",
        endDate: "01/25"
    },
    {
        name: "AWS Developer Associate",
        link: "https://www.credly.com/badges/3a7b71a8-fd59-41a4-be34-359e292487b5",
        image: "https://images.credly.com/size/340x340/images/598f6ac6-2dbd-4394-8ae4-943b2f4c43ea/AWS-Developer-Associate-2020.png",
        startDate: "12/21",
        endDate: "12/24"
    },
    {
        name: "AWS Solutions Architect Associate",
        link: "https://www.credly.com/badges/1e44a067-d3ba-47cc-8a80-3e4c9e9fc670",
        image: "https://images.credly.com/size/340x340/images/4bc21d8b-4afe-4fbd-9a90-a9de8bf7b240/AWS-SolArchitect-Associate-2020.png",
        startDate: "08/21",
        endDate: "08/24"
    },
    {
        name: "AWS SysOps Admin Associate",
        link: "https://www.credly.com/badges/c7436a9b-8c42-4a2c-a9d5-5ae831f1a445",
        image: "https://images.credly.com/size/340x340/images/bf588058-87cc-4cbd-94b0-ef0385fb4371/AWS-SysOpAdmin-Associate-2020.png",
        startDate: "01/22",
        endDate: "01/25"
    }
]