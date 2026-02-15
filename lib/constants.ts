// Experience Data
export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string | 'Present';
    isCurrent: boolean;
    description: string;
    skills: string[];
    achievements?: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: 'exp-1',
        title: 'Senior React Dev',
        company: 'TechFlow Solutions',
        location: 'San Francisco, CA',
        startDate: '2021',
        endDate: 'Present',
        isCurrent: true,
        description: 'Leading a team of 5 developers. Architected a scalable component library used across 3 major products. Reduced load times by 40%.',
        skills: ['React', 'TypeScript', 'Next.js', 'Design Systems'],
        achievements: [
            'Reduced load times by 40%',
            'Built component library used across 3 products',
            'Led team of 5 developers'
        ]
    },
    {
        id: 'exp-2',
        title: 'Frontend Developer',
        company: 'Creative Agency X',
        location: 'Remote',
        startDate: '2019',
        endDate: '2021',
        isCurrent: false,
        description: 'Developed responsive web interfaces for high-profile clients. Implemented pixel-perfect designs from Figma to React components.',
        skills: ['React', 'JavaScript', 'Figma', 'CSS/SASS'],
        achievements: [
            'Delivered 15+ client projects',
            'Implemented pixel-perfect designs',
            'Improved performance by 30%'
        ]
    },
    {
        id: 'exp-3',
        title: 'Junior Web Developer',
        company: 'StartUp Inc.',
        location: 'New York, NY',
        startDate: '2017',
        endDate: '2019',
        isCurrent: false,
        description: 'Focused on front-end development using modern frameworks. Implemented responsive layouts and interactive components for e-commerce websites.',
        skills: ['HTML/CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        achievements: [
            'Built 10+ e-commerce websites',
            'Improved mobile responsiveness',
            'Collaborated with design team'
        ]
    }
];

// Education Data
export interface EducationItem {
    id: string;
    degree: string;
    field: string;
    institution: string;
    location?: string;
    startDate: string;
    endDate: string | 'Present';
    isCurrent: boolean;
    description: string;
    achievements?: string[];
    gpa?: string;
    courses?: string[];
}

export const education: EducationItem[] = [
    {
        id: 'edu-1',
        degree: 'M.S.',
        field: 'Computer Science',
        institution: 'University of Technology',
        location: 'California, USA',
        startDate: '2016',
        endDate: '2018',
        isCurrent: false,
        description: 'Specialized in Human-Computer Interaction and Advanced Web Technologies.',
        achievements: [
            'GPA: 3.8/4.0',
            'Published research on UI accessibility',
            'Teaching Assistant for Web Development course'
        ],
        gpa: '3.8/4.0',
        courses: ['HCI', 'Advanced Algorithms', 'Web Technologies', 'UI/UX Design']
    },
    {
        id: 'edu-2',
        degree: 'B.S.',
        field: 'Information Tech',
        institution: 'State University',
        location: 'Texas, USA',
        startDate: '2012',
        endDate: '2016',
        isCurrent: false,
        description: 'Graduated with Honors. Capstone project focused on mobile-first development.',
        achievements: [
            'Graduated with Honors',
            'Vice President of CS Club',
            'Won hackathon competition'
        ],
        gpa: '3.6/4.0',
        courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Mobile Development']
    }
];

// Projects Data
export interface ProjectItem {
    id: string;
    title: string;
    category: string;
    description: string;
    longDescription?: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    year: string;
    client?: string;
}

export const projects: ProjectItem[] = [
    {
        id: 'proj-1',
        title: 'E-Commerce Platform',
        category: 'Web Application',
        description: 'A full-featured e-commerce platform with real-time inventory management.',
        longDescription: 'Built a scalable e-commerce platform handling 10k+ daily users. Implemented real-time inventory tracking, payment integration, and admin dashboard.',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
        year: '2023',
        client: 'Retail Corp'
    },
    {
        id: 'proj-2',
        title: 'Design System Library',
        category: 'Component Library',
        description: 'Comprehensive React component library with 50+ components.',
        longDescription: 'Created a design system used across multiple products. Includes documentation, accessibility features, and theming support.',
        technologies: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
        githubUrl: 'https://github.com',
        featured: true,
        year: '2023'
    },
    {
        id: 'proj-3',
        title: 'Portfolio Website',
        category: 'Website',
        description: 'Modern portfolio website with smooth animations and dark mode.',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: 'https://example.com',
        featured: false,
        year: '2024'
    }
];

// Skills Data
export interface SkillCategory {
    category: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
    },
    {
        category: 'Tools & Others',
        skills: ['Git', 'Docker', 'AWS', 'Figma', 'Storybook', 'Jest']
    },
    {
        category: 'Design',
        skills: ['UI/UX Design', 'Responsive Design', 'Design Systems', 'Accessibility']
    }
];

// Testimonials Data
export interface TestimonialItem {
    id: string;
    name: string;
    role: string;
    company: string;
    image?: string;
    testimonial: string;
    rating?: number;
}

export const testimonials: TestimonialItem[] = [
    {
        id: 'test-1',
        name: 'Sarah Johnson',
        role: 'CTO',
        company: 'TechFlow Solutions',
        testimonial: 'Krishna is an exceptional developer who consistently delivers high-quality work. His attention to detail in UI interactions is unmatched. The component library he built transformed our entire product line.',
        rating: 5
    },
    {
        id: 'test-2',
        name: 'Michael Chen',
        role: 'Product Manager',
        company: 'Creative Digital',
        testimonial: 'Working with Krishna was a game-changer for our startup. He understood our vision immediately and executed it perfectly. The attention to detail in UI interactions is unmatched.',
        rating: 5
    },
    {
        id: 'test-3',
        name: 'Emily Rodriguez',
        role: 'Lead Designer',
        company: 'Design Studio Pro',
        testimonial: 'Krishna bridges the gap between design and development beautifully. His understanding of both disciplines made our collaboration seamless. Highly recommend!',
        rating: 5
    },
    {
        id: 'test-4',
        name: 'David Park',
        role: 'Founder & CEO',
        company: 'StartUp Ventures',
        testimonial: 'The level of strategic thinking and technical execution exceeded our expectations. Our conversion rates have seen a 40% uptick since the relaunch.',
        rating: 5
    },
    {
        id: 'test-5',
        name: 'Amanda Williams',
        role: 'Engineering Manager',
        company: 'Enterprise Solutions Inc',
        testimonial: 'Incredible attention to detail. They didn\'t just build a website; they built a comprehensive brand identity that resonates with our audience. Highly professional!',
        rating: 5
    }
];

// Stats Data
export interface StatsItem {
    label: string;
    value: string;
    suffix?: string;
}

export const stats: StatsItem[] = [
    { label: 'Years Experience', value: '8', suffix: '+' },
    { label: 'Projects Completed', value: '120', suffix: '+' },
    { label: 'Happy Clients', value: '45', suffix: '+' },
    { label: 'Awards Won', value: '10', suffix: '+' }
];

// Detailed Skills Data
export interface SkillItem {
    id: string;
    name: string;
    category: 'All' | 'Frontend' | 'Backend' | 'Tools' | 'DevOps';
    proficiencyLevel: 'Expert' | 'Advanced' | 'Intermediate';
    proficiencyPercentage: number;
    yearsOfExperience: string;
    description: string;
    iconKey: string; // Key to map to Lucide icon
}

export const skillsData: SkillItem[] = [
    // Frontend Skills
    {
        id: 'skill-1',
        name: 'React & Next.js',
        category: 'Frontend',
        proficiencyLevel: 'Expert',
        proficiencyPercentage: 95,
        yearsOfExperience: '5+ Years',
        description: 'Building scalable SPAs and SSR applications with React hooks, Redux, and Context API.',
        iconKey: 'react'
    },
    {
        id: 'skill-2',
        name: 'TypeScript',
        category: 'Frontend',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 90,
        yearsOfExperience: '4+ Years',
        description: 'Type-safe development ensuring robust codebases and excellent developer experience.',
        iconKey: 'typescript'
    },
    {
        id: 'skill-3',
        name: 'Tailwind CSS',
        category: 'Frontend',
        proficiencyLevel: 'Expert',
        proficiencyPercentage: 98,
        yearsOfExperience: '3+ Years',
        description: 'Utility-first styling for rapid UI development and maintaining consistent design systems.',
        iconKey: 'tailwind'
    },
    {
        id: 'skill-4',
        name: 'JavaScript & ES6+',
        category: 'Frontend',
        proficiencyLevel: 'Expert',
        proficiencyPercentage: 95,
        yearsOfExperience: '8+ Years',
        description: 'Deep understanding of ES6+ features and strict typing to build robust, maintainable, and bug-free codebases.',
        iconKey: 'javascript'
    },
    {
        id: 'skill-5',
        name: 'Responsive Design',
        category: 'Frontend',
        proficiencyLevel: 'Expert',
        proficiencyPercentage: 95,
        yearsOfExperience: '7+ Years',
        description: 'Creating mobile-first, responsive layouts that work seamlessly across all devices.',
        iconKey: 'responsive-design'
    },
    {
        id: 'skill-6',
        name: 'UI/UX Design',
        category: 'Frontend',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 85,
        yearsOfExperience: '6+ Years',
        description: 'Designing intuitive user interfaces with focus on accessibility and user experience.',
        iconKey: 'ui-ux'
    },

    // Backend Skills
    {
        id: 'skill-7',
        name: 'Node.js & Express',
        category: 'Backend',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 85,
        yearsOfExperience: '5+ Years',
        description: 'Building performant REST and GraphQL APIs with asynchronous logic.',
        iconKey: 'nodejs'
    },
    {
        id: 'skill-8',
        name: 'PostgreSQL',
        category: 'Backend',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 80,
        yearsOfExperience: '4+ Years',
        description: 'Optimized database schema design and high-speed caching strategies.',
        iconKey: 'postgresql'
    },
    {
        id: 'skill-9',
        name: 'MongoDB',
        category: 'Backend',
        proficiencyLevel: 'Intermediate',
        proficiencyPercentage: 75,
        yearsOfExperience: '3+ Years',
        description: 'NoSQL database design for flexible, scalable data storage.',
        iconKey: 'mongodb'
    },
    {
        id: 'skill-10',
        name: 'REST APIs',
        category: 'Backend',
        proficiencyLevel: 'Expert',
        proficiencyPercentage: 90,
        yearsOfExperience: '6+ Years',
        description: 'Designing and implementing RESTful APIs following best practices.',
        iconKey: 'rest-api'
    },

    // DevOps & Tools
    {
        id: 'skill-11',
        name: 'Git & GitHub',
        category: 'Tools',
        proficiencyLevel: 'Expert',
        proficiencyPercentage: 95,
        yearsOfExperience: '8+ Years',
        description: 'Version control, branching strategies, and collaborative development workflows.',
        iconKey: 'git'
    },
    {
        id: 'skill-12',
        name: 'Docker',
        category: 'DevOps',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 80,
        yearsOfExperience: '3+ Years',
        description: 'Containerization of microservices for consistent development across teams.',
        iconKey: 'docker'
    },
    {
        id: 'skill-13',
        name: 'AWS / Cloud',
        category: 'DevOps',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 85,
        yearsOfExperience: '4+ Years',
        description: 'Deploying and managing serverless functions, S3, and EC2 instances.',
        iconKey: 'aws'
    },
    {
        id: 'skill-14',
        name: 'CI/CD Pipelines',
        category: 'DevOps',
        proficiencyLevel: 'Advanced',
        proficiencyPercentage: 82,
        yearsOfExperience: '3+ Years',
        description: 'Automated testing and deployment pipelines for continuous integration.',
        iconKey: 'ci-cd'
    },
];

// Favorite Tools & Workflow
export interface FavoriteToolItem {
    id: string;
    name: string;
    description: string;
    iconKey: string;
}

export const favoriteTools: FavoriteToolItem[] = [
    {
        id: 'tool-1',
        name: 'VS Code',
        description: 'Primary code editor with custom extensions',
        iconKey: 'vscode'
    },
    {
        id: 'tool-2',
        name: 'Git & GitHub',
        description: 'Version control and collaboration',
        iconKey: 'git-github'
    },
    {
        id: 'tool-3',
        name: 'CI/CD Pipelines',
        description: 'Automated testing and deployment',
        iconKey: 'ci-cd-pipelines'
    },
    {
        id: 'tool-4',
        name: 'Terminal / Zsh',
        description: 'Command-line productivity with Oh My Zsh',
        iconKey: 'terminal'
    },
    {
        id: 'tool-5',
        name: 'Docker',
        description: 'Containerization and orchestration',
        iconKey: 'docker'
    },
    {
        id: 'tool-6',
        name: 'Figma',
        description: 'UI/UX design and prototyping',
        iconKey: 'figma'
    },
];

// Social Links
export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export const socialLinks: SocialLink[] = [
    {
        platform: 'github',
        url: 'https://github.com/krishnadevashish',
        icon: 'Github'
    },
    {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/krishna-devashish/',
        icon: 'Linkedin'
    },
    {
        platform: 'twitter',
        url: 'https://twitter.com/krishnadevashish',
        icon: 'Twitter'
    },
    {
        platform: 'email',
        url: 'mailto:krishnadevashish17@gmail.com',
        icon: 'Mail'
    }
];

// Contact Information
export interface ContactInfo {
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
}

export const contactInfo: ContactInfo = {
    email: 'krishnadevashish17@gmail.com',
    phone: '+917978423156',
    whatsapp: '+917978423156',
    location: 'Bengaluru, Karnataka, India'
};

