const navLinks = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Projects",
        link: "#Work",
    },
    {
        name: "Experience",
        link: "#experience",
    },

];

const words = [
    { text: "Ideas", imgPath: "./images/ideas-min.svg" },
    { text: "Concepts", imgPath: "./images/concepts-min.svg" },
    { text: "Designs", imgPath: "./images/designs-min.svg" },
    { text: "Code", imgPath: "./images/code-min.svg" },
    { text: "Ideas", imgPath: "./images/ideas-min.svg" },
    { text: "Concepts", imgPath: "./images/concepts-min.svg" },
    { text: "Designs", imgPath: "./images/designs-min.svg" },
    { text: "Code", imgPath: "./images/code-min.svg" },

];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb", // already optimized
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb", // already optimized
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "3D Animation Developer",
        modelPath: "/models/blender.glb", // already optimized
        scale: 7.5,
        rotation: [0, -Math.PI / 11, 0],
        position: [0.5, -9, -5],
    },
    {
        name: "Motion Graphic Designer",
        modelPath: "/models/ae.glb", // already optimized
        scale: 3,
        rotation: [0, 0, 0],
    },
    {
        name: "UI/UX & Graphic Designer",
        modelPath: "./models/ps.glb",
        scale: 3,
        rotation: [0, 0, 0],
    },
];

const expCards = [
    {
        company: "Magic Bus India Foundation(funded by accenture)",
        review:
            "Proficient in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. Eager to apply learned skills in a dynamic front-end development role.",
        imgPath: "./ASSETS/assets/MagicBus/logo.webp",
        logoPath: "./ASSETS/assets/MagicBus/logo.webp",
        title: "Front-End Developer Apprentice-ship",
        date: "Jan 2025 - Present",
        responsibilities: [
            "Instagram Re-Creation – Re-Created Instagram app using React.js.",
            "Javascript Projects – Developed and worked with many Javascript projects such as ‘To-Do app’, ‘Calculator app’, ‘Testimonial Sections’, ‘Analog Clock App’, ‘Add to cart Section’, and Many Projects.",
            "Meesho Re-Design – Built a responsive e-commerce website replicating Meesho’s interface and core functionalities with HTML, CSS.",
            "UI / UX Projects – Creating and working on building various UI for websites with Figma, Wordpress."
        ],
    },
    {
        company: "ARR Immersive Entertainment",
        review:
            "Interested in VR technology and wanted to learn more about it, I worked at ARR Immersive Entertainment as a Virtual Reality Generalist (Internship) gaining knowledge in various VR technologies and applications.",
        imgPath: "./ASSETS/assets/ARR/logo.webp",
        logoPath: "./ASSETS/assets/ARR/logo.webp",
        title: "Virtual Reality Generalist (Internship)",
        date: "July 2024 - December 2024",
        responsibilities: [
            "Creative support for VR experience through HMD (head mounted display), music, smell, haptic and movements in 360 degrees of visual freedom.",
            "VR technologist and VFX generalist in production and film-making to create a Virtual Reality experience.",
            "Technical support and product testing for Virtual Reality Experience.",
            "Proficiency in Unreal Engine 5, and Virtual Reality Technologies.",
        ],
    },
    {
        company: "Fix It In Post Studios",
        review:
            "During my internship at Fix It In Post Studios, I contributed to various projects involving VFX compositing, 2D/3D animation, motion graphics, and graphic design for films, ad films, and music videos.",
        imgPath: "./ASSETS/assets/FIIP/logo.webp",
        logoPath: "./ASSETS/assets/FIIP/logo.webp",
        title: "VFX /Animation",
        date: "November 2022 - November 2023",
        responsibilities: [
            "VFX compositing, and creating visually appealing and photorealistic CG objects.",
            "Created 2D/3D animation, Motion graphics, Graphic Designs for Movies, Ad films, Music Videos and for many productions",
            "Developed Computer graphics with strong visual design and convincing photorealism.",
            "Proficiency in Premiere pro, After effects, Blender",

        ],
    },
    {
        company: "RV Matrix Software Technologies Pvt Ltd",
        review:
            "As a UI/UX Design and Graphic Designer intern at RV Matrix Software Technologies, my primary focus was creating user-centered designs for web applications and supporting marketing efforts with graphic assets.",
        imgPath: "./ASSETS/assets/RVM/RVM_logo.webp",
        logoPath: "./ASSETS/assets/RVM/RVM_logo.webp",
        title: "UI UX Design / Graphic Designer internship",
        date: "March 2022 - July 2022",
        responsibilities: [
            "Created high and low fidelity designs for the end users and provided intuitive solutions.",
            "Developed real-time UI/UX design, graphic design.",
            "Proficiency in Adobe Photoshop, Adobe XD, Figma.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "./ASSETS/assets/MagicBus/logo.webp",
    },
    {
        name: "logo2",
        imgPath: "./ASSETS/assets/ARR/logo.webp",
    },
    {
        name: "logo3",
        imgPath: "./ASSETS/assets/FIIP/logo.webp",
    },
    {
        name: "logo4",
        imgPath: "./ASSETS/assets/RVM/RVM_logo.webp",
    },
];


const socialImgs = [
    {
        name: "github",
        url: "https://github.com/harikrishnan-git-2000",
        imgPath: "./images/git.webp",
    },
    {
        name: "linkedin",
        url: "www.linkedin.com/in/harikrishnan3107",
        imgPath: "./images/linkedin.webp",
    },
];

export const projects = [
    {
        id: 'proj-card-1', // Unique ID for linking
        title: "Weather App in React",
        image: "./ASSETS/assets/weather-app/cover.webp",
        tags: ["React js"],
        description: "created a weather app in react js",

    },
    {
        id: 'proj-card-2', // Unique ID for linking (assuming this was a distinct project)
        title: "Thirukural - feature film CG (Self Employed)", // Renamed from duplicate
        image: "./ASSETS/assets/Thirukural/Templecover.webp", // Use correct image
        tags: ["Unreal Engine 5"],
        description: "Created movie shots depicting the forts of the three kings in south india",

    },
    {
        id: 'proj-card-3', // Unique ID for linking (assuming this was a distinct project)
        title: "Nippon Paints (Self Employed)", // Renamed from duplicate
        image: "./ASSETS/assets/Nippon/images.webp", // Use correct image
        tags: ["Adobe Illustrator","Adobe After Effects"],
        description: "Animations, Editing for Nippon Pro Champs",
    },


    {
        id: 'proj-card-4', // Unique ID for linking (assuming this was a distinct project)
        title: "Madras Canine Club (Self Employed)", // Renamed from duplicate
        image: "./ASSETS/assets/madras-canine-club/images.webp", // Use correct image
        tags: ["Blender"],
        description: "Created a detailed 3D visual layout for the mMadras Canine Club Dog Show.",
    },
    {
        id: 'proj-card-5', // Unique ID for linking (assuming this was a distinct project)
        title: "Fix It In Post", // Renamed from duplicate
        image: "./ASSETS/assets/FIIP/logo.webp",
        tags: ["Adobe After Effects", "Blender"],// already done
        description: "During my internship at Fix It In Post Studios, I contributed to various projects involving VFX compositing, 2D/3D animation," +
            " motion graphics, and graphic design for films, ad films, and music videos.",
    },
    {
        id: 'proj-card-6', // Unique ID for linking (assuming this was a distinct project)
        title: "RV Matrix Software Technologies Pvt Ltd", // Renamed from duplicate
        image: "./ASSETS/assets/RVM/RVM_logo.webp", // Use correct image
        tags: ["Adobe Photoshop", "Figma"],// already done
        description: "UI/UX Design and Graphic Designer intern at RV Matrix Software Technologies.",
    },
];



export const modalProjectDetails = {
    'proj-card-1': {
        banner: './ASSETS/assets/weather-app/cover.webp',
        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'paragraph', content: 'view app ->' },
            { type: "buttonlink", href: "https://linkedin.com/in/your-profile", label: "Live Preview" },
            { type: 'paragraph', content: 'view code ->' },
            { type: "buttonlink", href: "https://linkedin.com/in/your-profile", label: "View Code" },
            { type: 'heading', level: 2, content: '1. Introduction' },
            { type: 'paragraph', content: 'This document presents a case study of a real-time weather application developed using React. The application aims to provide users with current weather conditions and a 24-hour hourly forecast for any specified city. This project showcases my skills in frontend development, API integration, state management, and responsive design.' },
            { type: 'heading', level: 2, content: '2. Project Overview' },
            { type: 'paragraph', content: 'The Real-Time Weather Application is a web-based tool designed to deliver timely and accurate weather information to users. Key functionalities include searching for weather data by city name, displaying current weather details (temperature, description, icon), and presenting an hourly forecast for the upcoming 24 hours. The application prioritizes a clean, intuitive user interface and efficient data handling.' },
            { type: 'heading', level: 2, content: '3. Key Features' },
            {
                type: 'bulletList', items: [
                    'City Search: Users can input a city name to retrieve weather information.',
                    'Current Weather Display: Displays temperature, weather description, and a representative icon.',
                    '24-Hour Hourly Forecast: Provides an hourly breakdown of weather conditions for the next 24 hours.',
                    'No Results Handling: Displays a "No Results" message when a city is not found or an error occurs.',
                    'Responsive Design: Accessible and usable on various screen sizes (desktops, tablets, and mobile phones).'
                ]
            },

            { type: 'heading', level: 2, content: '4. Technology Stack' },
            { type: 'bulletList', items: [
                    'Frontend Framework: React',
                    'Styling: CSS Modules',
                    'Build Tool: Vite',
                    'Version Control: Git',
                    'Repository Hosting: https://github.com/harikrishnan-git-2000/weather_app-React.git',
                    'Deployment: Vercel.',
                ]
            },

            { type: 'heading', level: 2, content: '5. Development Process and Challenges' },
            { type: 'bulletList', items: [
                    'API Integration: Researching and selecting the WeatherAPI, obtaining an API key, and understanding its documentation.',
                    'Frontend Implementation (React): Setting up the project using Vite, Creating reusable React components, Implementing state management with useState, Utilizing useEffect and useRef hooks, Developing a function to filter hourly forecast data, Dynamically rendering weather icons, Implementing conditional rendering for error handling.',
                    'Styling and Responsiveness: Applying styles using CSS Modules and implementing media queries.',
                    'Error Handling: Implementing try...catch blocks and updating the application state (hasNoResults).',
                ]
            },
            { type: 'heading', level: 2, content: 'Challenges and Solutions:' },
            { type: 'paragraph', content: 'The development process presented several challenges. Managing asynchronous API requests was a key issue, which was resolved by using async/await and state variables. Extracting relevant data from the API response required implementing a function to filter the hourly data. Translating API weather codes to icons was another challenge, addressed by creating a weatherCodes mapping. Finally, ensuring the layout adapted to different screen sizes was achieved by implementing CSS media queries.' },

            { type: 'heading', level: 2, content: '6. Key Learnings and Outcomes' },
            { type: 'bulletList', items: [
                    'React fundamentals, including components, JSX, props, useState, and useEffect.',
                    'Asynchronous programming and API integration.',
                    'Data manipulation and filtering.',
                    'Error handling.',
                    'Responsive web design.',
                    'Component-based architecture.',
                    'Vite build tool.',
                ]
            },
            { type: 'paragraph', content: 'The application demonstrates my ability to develop a functional web application that integrates with external services and provides a positive user experience.' },

            { type: 'heading', level: 2, content: '7. Future Enhancements' },
            { type: 'bulletList', items: [
                    'Displaying additional weather details.',
                    'Implementing a multi-day forecast view.',
                    'Adding geolocation services.',
                    'Allowing users to save favorite cities.',
                    'Enhancing the visual design.',
                    'Implementing testing.',
                ]
            },

            { type: 'heading', level: 2, content: '8. Conclusion' },
            { type: 'paragraph', content: 'The Real-Time Weather Application showcases my skills in front-end development using React and API integration. The project demonstrates my ability to create functional, user-friendly, and responsive web solutions.' },



        ]
    },
    'proj-card-2': { // Matches id from projects array
        banner: './ASSETS/assets/Thirukural/Temple.webp', // <<<<---- ADD Actual Banner Path
        livePreviewUrl: 'https://github.com/',
        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'paragraph', content: '3D modelling and full composition of shots.\n' },
            { type: 'heading', level: 2, content: 'Key aspects' },
            { type: 'paragraph', content: 'The 3D workflow in Unreal Engine begins with ideation and gathering references to define the visual style and tone of the scene. Once the concept is clear, a basic blockout is created to plan layout, scale, and camera composition. Detailed models are then crafted in external software or within Unreal and imported as assets.\n' },
            { type: 'paragraph', content: 'These models are textured using tools like Blender or Quixel, and refined in Unreal Material Editor. Finally, lighting, visual effects, and post-processing are added, followed by optimization and rendering using Unreal’s powerful real-time engine.\n' },
            { type: 'paragraph', content: 'Note - I am not able to show the Actual project output\n' },
            { type: 'video', src: './ASSETS/assets/Thirukural/1.webm', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/2.webm', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/3.webm', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/4.webm', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/5.webm', caption: 'Fort Output' },
            { type: 'image', src: './ASSETS/assets/Thirukural/1.webp', caption: 'Fort Output' },
            { type: 'image', src: './ASSETS/assets/Thirukural/Temple.webp', caption: 'Fort Output' },



        ]
    },
    'proj-card-3': { // Matches id from projects array
        banner: './ASSETS/assets/Nippon/images.webp', // <<<<---- ADD Actual Banner Path
        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'heading', level:2, content: 'Nippon Paints - Pro Champs' },
            { type: 'paragraph', level:2, content: 'For Nippon Pro Champs, under Fix It In Post Studios, I spearheaded a comprehensive video project. My responsibilities included Character animation, animating sequences, editing footage, creating open card animations, and selecting background music, resulting in a polished and engaging final product.' },
            { type: 'video', src: './ASSETS/assets/Nippon/vid1.webm', caption: 'Nippon Paints - Pro Champs' },
        ] // already done
    },

    'proj-card-4': {
        banner: './ASSETS/assets/madras-canine-club/images.webp',

        details: [
            { type: 'heading', level:3, content: 'Madras Canine Club - Dog show 3D layout'},
            { type: 'paragraph', content: 'In this project, we are tasked with creating a detailed 3D visual layout for the Madras Canine Club Dog Show. The layout includes several key areas: the lunch area, stage, ring, working area, and various types of stalls.'},

            { type: 'heading', level:2, content: 'Skills and Expertise' },
            { type: 'bulletList', items: ['3D Modelling', '3D animation'] },

            { type: 'paragraph', level:2, content: 'The layout is provided by the client, and our aim is to deliver an accurate and visually appealing 3D model to help the organizers and participants visualize the event setup.' },

            { type: 'heading', level:2, content: 'Final Layout Animation' },
            {type: 'video', src: './ASSETS/assets/madras-canine-club/vid.webm', alt: 'loading' },

            { type: 'heading', level:4, content: 'Screen Grabs of Some projects' },

            { type: 'heading', level:2, content: 'The layout image provided by the client' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/1.webp', alt: 'loading' },

            { type: 'heading', level:2, content: 'The models of key areas in the layout' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/2.webp', alt: 'loading'},
            {type: 'image', src: './ASSETS/assets/madras-canine-club/3.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/4.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/5.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/6.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/7.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/8.webp', alt: 'loading' },

            { type: 'heading', level:2, content: 'Compositing the models based on the layout' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/9.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/10.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/11.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/12.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/13.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/14.webp', alt: 'loading' },

            { type: 'heading', level:2, content: 'Compositing the models with textures based on the layout' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/15.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/16.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/17.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/18.webp', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras-canine-club/19.webp', alt: 'loading' },
        ]
    },

    'proj-card-5': {
        banner: './ASSETS/assets/FIIP/logo.webp', // already done

        details: [
            { type: 'heading', level:2, content: 'Contributions & Responsibilities (Internship)' },
            { type: 'paragraph', content: 'During my internship at Fix It In Post Studios, I contributed to various projects involving VFX compositing, 2D/3D animation, motion graphics, and graphic design for films, ad films, and music videos.'},

            { type: 'heading', level:2, content: 'Skills and Expertise' },
            { type: 'bulletList', items: ['Motion Graphics', 'VFX Compositing', '2D & 3D Animation', 'Editing', 'Story Telling', 'Graphic Design'] },

            { type: 'heading', level:2, content: 'Key Projects Includes:' },
            { type: 'bulletList', items: [
                    'Akaali (Feature Film): Provided VFX and motion graphics.',
                    'Adho Mugam (Feature Film): Designed the app "Hidden Face" for the movie and composited the "Hidden Face" app interface and related shots all-over the film.',
                    'Fight Club (Feature Film): Worked on VFX sequences, including cleanup and element integration',
                    'Casagrand Primrose (TV Ad): Handled compositing, basic 3D animation (Blender), and motion graphics.',
                    'Paarai Desam (Web Series): Contributed to VFX compositing.',
                    'Nina (Web Series): Worked on VFX shots.',
                    'Nee Nee Nee (Music Video): Assisted VFX supervisor on-set and performed initial VFX compositing.'
                ] },
            { type: 'paragraph', level:2, content: 'My focus was on delivering high-quality visual content, ensuring photorealism where needed, and utilizing tools like Premiere Pro, After Effects, and Blender effectively within the production pipeline.' },

            { type: 'heading', level:2, content: 'Screen Grabs of Some projects' },

            {type: 'image', src: './ASSETS/assets/FIIP/HF_APP.webp', alt: 'loading', caption: 'Designed and animated with composition of elements within the shots for the movie "Adhomugam"'},
            {type: 'image', src: './ASSETS/assets/FIIP/casa_raw.webp', alt: 'loading'},
            {type: 'image', src: './ASSETS/assets/FIIP/casa.webp', alt: 'loading',  caption:'VFX Compositing, Motion Graphics, 3D Compositing for Casagrand Primrose Ad'},
            {type: 'image', src: './ASSETS/assets/FIIP/diesel.webp', alt: 'loading', caption: '2D & 3D Motion Graphics for the movie diesel' },
            {type: 'image', src: './ASSETS/assets/FIIP/NativeCraft.webp', alt: 'loading', caption: 'Designed and animated the Logo for a production company' },
            {type: 'image', src: './ASSETS/assets/FIIP/FC.webp', alt: 'loading', caption: '2D and 3D compositing for the the movie FightClub' },
            {type: 'image', src: './ASSETS/assets/FIIP/NNN.webp', alt: 'loading', caption: 'Assisted VFX supervision and VFX compositing for the video song "Nee Nee Nee" ' },
        ]
    },
    'proj-card-6': {
        banner: './ASSETS/assets/RVM/RVM_logo.webp',

        details: [
            { type: 'heading', level:2, content: 'Role and Responsibilities (Internship)' },
            { type: 'paragraph', content: 'As a UI/UX Design and Graphic Designer intern at RV Matrix Software Technologies, my primary focus was creating user-centered designs for web applications and supporting marketing efforts with graphic assets.'},
            { type: 'bulletList', items: ['Developed low and high-fidelity wireframes and mockups using Figma and Adobe XD.',
                    'Created intuitive user flows and interface solutions based on project requirements.',
                    'Designed graphic assets (icons, banners, illustrations) for web applications and marketing materials using Photoshop.',
                    'Iterated on designs based on feedback from senior designers and stakeholders.', // already done
                    'Ensured visual consistency across different design elements.', // already done
                    'Created intuitive user flows and interface solutions based on project requirements.',
                    'Gained practical experience in applying UI design principles and utilizing industry-standard design software.'
                ] },
            { type: 'heading', level:2, content: 'Skills and Expertise'},
            { type: 'bulletList', items: ['UI/UX Design', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Blender'] },
            { type: 'heading', level:2, content: 'My works' },
            {type: 'image', src: './ASSETS/assets/RVM/Medikcare_webUI_design.webp', alt: 'RV Matrix Software Technologies', caption: 'Medikcare Web UI design in figma'},
            {type: 'image', src: './ASSETS/assets/RVM/Medikcare_webUI_Prototype.webp', alt: 'RV Matrix Software Technologies',caption: 'Medikcare Web UI Prototype in figma'},
            {type: 'image', src: './ASSETS/assets/RVM/rvm1.webp', alt: 'RV Matrix Software Technologies', caption: 'Appreciation Posters'},
            {type: 'image', src: './ASSETS/assets/RVM/rvm2.webp', alt: 'RV Matrix Software Technologies' },
            {type: 'image', src: './ASSETS/assets/RVM/rvm3.webp', alt: 'RV Matrix Software Technologies' },
            {type: 'image', src: './ASSETS/assets/RVM/rvm4.webp', alt: 'RV Matrix Software Technologies' },
            {type: 'image', src: './ASSETS/assets/RVM/rvm5.webp', alt: 'RV Matrix Software Technologies', caption: 'Hiring Posters Materials'  },
            {type: 'image', src: './ASSETS/assets/RVM/rvm6.webp', alt: 'RV Matrix Software Technologies', caption: 'Appreciation Posters'  },

        ]
    },

    // Add entries for every project ID defined in the 'projects' array above
};

export {
    words,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    navLinks,
};