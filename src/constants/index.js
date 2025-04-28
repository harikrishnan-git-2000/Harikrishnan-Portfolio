const navLinks = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Projects",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },

];

const words = [
    { text: "Ideas", imgPath: "./images/ideas.svg" },
    { text: "Concepts", imgPath: "./images/concepts.svg" },
    { text: "Designs", imgPath: "./images/designs.svg" },
    { text: "Code", imgPath: "./images/code.svg" },

];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "3D Animation Developer",
        modelPath: "./models/blender.glb",
        scale: 7.5,
        rotation: [0, -Math.PI / 11, 0],
        position: [0.5, -9, -5],
    },
    {
        name: "Motion Graphic Designer",
        modelPath: "./models/ae.glb",
        scale: 3,
        rotation: [0, 0, 0],
    },
    {
        name: "UI/UX & Graphic Designer",
        modelPath: "/models/ps.glb",
        scale: 3,
        rotation: [0, 0, 0],
    },
];

const expCards = [
    {
        company: "Magic Bus India Foundation(funded by accenture)",
        review:
            "Proficient in building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. Eager to apply learned skills in a dynamic front-end development role.",
        imgPath: "./ASSETS/assets/MagicBus/logo.png",
        logoPath: "./ASSETS/assets/MagicBus/logo.png",
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
        imgPath: "./ASSETS/assets/ARR/logo.jpg",
        logoPath: "./ASSETS/assets/ARR/logo.jpg",
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
        imgPath: "./ASSETS/assets/FIIP/FIXITINPOST_logo.png",
        logoPath: "./ASSETS/assets/FIIP/FIXITINPOST_logo.png",
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
        imgPath: "./ASSETS/assets/RVM/RVM_logo.jpg",
        logoPath: "./ASSETS/assets/RVM/RVM_logo.jpg",
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
        imgPath: "./ASSETS/assets/MagicBus/logo.png",
    },
    {
        name: "logo2",
        imgPath: "./ASSETS/assets/ARR/logo.jpg",
    },
    {
        name: "logo3",
        imgPath: "./ASSETS/assets/FIIP/FIXITINPOST_logo.png",
    },
    {
        name: "logo4",
        imgPath: "./ASSETS/assets/RVM/RVM_logo.jpg",
    },
];


const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export const projects = [
    {
        id: 'proj-card-1', // Unique ID for linking
        title: "Instagram clone",
        image: "/images/project3.png",
        tags: ["Angular", "MongoDB"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
        id: 'proj-card-2', // Unique ID for linking (assuming this was a distinct project)
        title: "Thirukural - feature film CG (Self Employed)", // Renamed from duplicate
        image: "./ASSETS/assets/Thirukural/Templecover.png", // Use correct image
        tags: ["Svelte", "Firebase"],
        description: "Created movie shots depicting the forts of the three kings in south india",

    },
    {
        id: 'proj-card-3', // Unique ID for linking (assuming this was a distinct project)
        title: "Nippon Paints (Self Employed)", // Renamed from duplicate
        image: "./ASSETS/assets/Nippon/images.png", // Use correct image
        tags: ["Adobe Illustrator","Adobe After Effects"],
        description: "Animations, Editing for Nippon Pro Champs",
    },


    {
        id: 'proj-card-4', // Unique ID for linking (assuming this was a distinct project)
        title: "Madras Canine Club (Self Employed)", // Renamed from duplicate
        image: "./ASSETS/assets/madras canine club/images.png", // Use correct image
        tags: ["Blender"],
        description: "Created a detailed 3D visual layout for the mMadras Canine Club Dog Show.",
    },
    {
        id: 'proj-card-5', // Unique ID for linking (assuming this was a distinct project)
        title: "Fix It In Post", // Renamed from duplicate
        image: "./ASSETS/assets/FIIP/FIXITINPOST_logo.png",
        tags: ["Adobe After Effects", "Blender"],
        description: "During my internship at Fix It In Post Studios, I contributed to various projects involving VFX compositing, 2D/3D animation," +
            " motion graphics, and graphic design for films, ad films, and music videos.",
    },
    {
        id: 'proj-card-6', // Unique ID for linking (assuming this was a distinct project)
        title: "RV Matrix Software Technologies Pvt Ltd", // Renamed from duplicate
        image: "./ASSETS/assets/RVM/RVM_logo.png", // Use correct image
        tags: ["Adobe Photoshop", "Figma"],
        description: "UI/UX Design and Graphic Designer intern at RV Matrix Software Technologies.",
    },
];



export const modalProjectDetails = {
    'proj-card-1': { // Matches id from projects array
        banner: '/images/project3.png', // <<<<---- ADD Actual Banner Path
        livePreviewUrl: 'https://github.com/', // <<<<---- ADD Live Preview URL
        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'paragraph', content: 'Detailed description about Project 1. Explain the goals, challenges, and outcomes.' },
            { type: 'image', src: '/images/project-1-detail-image.png', alt: 'Screenshot of Project 1 feature' },
            { type: 'heading', level: 2, content: 'Technologies Used' },
            { type: 'bulletList', items: ['React', 'Node.js', 'CSS Modules'] }
        ]
    },
    'proj-card-2': { // Matches id from projects array
        banner: './ASSETS/assets/Thirukural/Temple.png', // <<<<---- ADD Actual Banner Path
        livePreviewUrl: 'https://github.com/',
        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'paragraph', content: '3D modelling and full composition of shots.\n' },
            { type: 'heading', level: 2, content: 'Key aspects' },
            { type: 'paragraph', content: 'The 3D workflow in Unreal Engine begins with ideation and gathering references to define the visual style and tone of the scene. Once the concept is clear, a basic blockout is created to plan layout, scale, and camera composition. Detailed models are then crafted in external software or within Unreal and imported as assets.\n' },
            { type: 'paragraph', content: 'These models are textured using tools like Blender or Quixel, and refined in Unreal Material Editor. Finally, lighting, visual effects, and post-processing are added, followed by optimization and rendering using Unreal’s powerful real-time engine.\n' },
            { type: 'paragraph', content: 'Note - I am not able to show the Actual project output\n' },
            { type: 'video', src: './ASSETS/assets/Thirukural/1.mp4', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/2.mp4', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/3.mp4', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/4.mp4', caption: 'Fort Output' },
            { type: 'video', src: './ASSETS/assets/Thirukural/5.mp4', caption: 'Fort Output' },
            { type: 'image', src: './ASSETS/assets/Thirukural/1.png', caption: 'Fort Output' },
            { type: 'image', src: './ASSETS/assets/Thirukural/Temple.png', caption: 'Fort Output' },



        ]
    },
    'proj-card-3': { // Matches id from projects array
        banner: './ASSETS/assets/Nippon/Nippon_Logo.jpg', // <<<<---- ADD Actual Banner Path
        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'heading', level:2, content: 'Nippon Paints - Pro Champs' },
            { type: 'paragraph', level:2, content: 'For Nippon Pro Champs, under Fix It In Post Studios, I spearheaded a comprehensive video project. My responsibilities included Character animation, animating sequences, editing footage, creating open card animations, and selecting background music, resulting in a polished and engaging final product.' },
            { type: 'video', src: './ASSETS/assets/Nippon/Vid1.mp4', caption: 'Nippon Paints - Pro Champs' },
        ]
    },

    'proj-card-4': { // Matches id from projects array
        banner: './ASSETS/assets/madras canine club/images.jpg',

        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'heading', level:3, content: 'Madras Canine Club - Dog show 3D layout'},
            { type: 'paragraph', content: 'In this project, we are tasked with creating a detailed 3D visual layout for the Madras Canine Club Dog Show. The layout includes several key areas: the lunch area, stage, ring, working area, and various types of stalls.'},

            { type: 'heading', level:2, content: 'Skills and Expertise' },
            { type: 'bulletList', items: ['3D Modelling', '3D animation'] },

            { type: 'paragraph', level:2, content: 'The layout is provided by the client, and our aim is to deliver an accurate and visually appealing 3D model to help the organizers and participants visualize the event setup.' },

            { type: 'heading', level:2, content: 'Final Layout Animation' },
            {type: 'video', src: './ASSETS/assets/madras canine club/vid1.mp4', alt: 'loading' },

            { type: 'heading', level:4, content: 'Screen Grabs of Some projects' },

            { type: 'heading', level:2, content: 'The layout image provided by the client' },
            {type: 'image', src: './ASSETS/assets/madras canine club/1.png', alt: 'loading' },

            { type: 'heading', level:2, content: 'The models of key areas in the layout' },
            {type: 'image', src: './ASSETS/assets/madras canine club/2.png', alt: 'loading'},
            {type: 'image', src: './ASSETS/assets/madras canine club/3.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/4.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/5.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/6.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/7.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/8.png', alt: 'loading' },

            { type: 'heading', level:2, content: 'Compositing the models based on the layout' },
            {type: 'image', src: './ASSETS/assets/madras canine club/9.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/10.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/11.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/12.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/13.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/14.png', alt: 'loading' },

            { type: 'heading', level:2, content: 'Compositing the models with textures based on the layout' },
            {type: 'image', src: './ASSETS/assets/madras canine club/15.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/16.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/17.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/18.png', alt: 'loading' },
            {type: 'image', src: './ASSETS/assets/madras canine club/19.png', alt: 'loading' },
        ]
    },

    'proj-card-5': { // Matches id from projects array
        banner: './ASSETS/assets/FIIP/FIXITINPOST_logo.png', // <<<<---- ADD Actual Banner Path

        details: [ // <<<<---- ADD Detailed Content for Modal
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

            {type: 'image', src: './ASSETS/assets/FIIP/HF_APP.png', alt: 'loading', caption: 'Designed and animated with composition of elements within the shots for the movie "Adhomugam"'},
            {type: 'image', src: './ASSETS/assets/FIIP/casa_raw.png', alt: 'loading'},
            {type: 'image', src: './ASSETS/assets/FIIP/casa.png', alt: 'loading',  caption:'VFX Compositing, Motion Graphics, 3D Compositing for Casagrand Primrose Ad'},
            {type: 'image', src: './ASSETS/assets/FIIP/diesel.png', alt: 'loading', caption: '2D & 3D Motion Graphics for the movie diesel' },
            {type: 'image', src: './ASSETS/assets/FIIP/NativeCraft.png', alt: 'loading', caption: 'Designed and animated the Logo for a production company' },
            {type: 'image', src: './ASSETS/assets/FIIP/FC.png', alt: 'loading', caption: '2D and 3D compositing for the the movie FightClub' },
            {type: 'image', src: './ASSETS/assets/FIIP/NNN.png', alt: 'loading', caption: 'Assisted VFX supervision and VFX compositing for the video song "Nee Nee Nee" ' },
        ]
    },
    'proj-card-6': { // Matches id from projects array
        banner: './ASSETS/assets/RVM/RVM_logo.jpg', // <<<<---- ADD Actual Banner Path

        details: [ // <<<<---- ADD Detailed Content for Modal
            { type: 'heading', level:2, content: 'Role and Responsibilities (Internship)' },
            { type: 'paragraph', content: 'As a UI/UX Design and Graphic Designer intern at RV Matrix Software Technologies, my primary focus was creating user-centered designs for web applications and supporting marketing efforts with graphic assets.'},
            { type: 'bulletList', items: ['Developed low and high-fidelity wireframes and mockups using Figma and Adobe XD.',
                    'Created intuitive user flows and interface solutions based on project requirements.',
                    'Designed graphic assets (icons, banners, illustrations) for web applications and marketing materials using Photoshop.',
                    'Iterated on designs based on feedback from senior designers and stakeholders.',
                    'Ensured visual consistency across different design elements.',
                    'Created intuitive user flows and interface solutions based on project requirements.',
                    'Gained practical experience in applying UI design principles and utilizing industry-standard design software.'
                ] },
            { type: 'heading', level:2, content: 'Skills and Expertise'},
            { type: 'bulletList', items: ['UI/UX Design', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Blender'] },
            { type: 'heading', level:2, content: 'My works' },
            {type: 'image', src: './ASSETS/assets/RVM/Medikcare_webUI_design.jpg', alt: 'RV Matrix Software Technologies', caption: 'Medikcare Web UI design in figma'},
            {type: 'image', src: './ASSETS/assets/RVM/Medikcare_webUI_Prototype.jpg', alt: 'RV Matrix Software Technologies',caption: 'Medikcare Web UI Prototype in figma'},
            {type: 'image', src: './ASSETS/assets/RVM/rvm1.png', alt: 'RV Matrix Software Technologies', caption: 'Appreciation Posters'},
            {type: 'image', src: './ASSETS/assets/RVM/rvm2.png', alt: 'RV Matrix Software Technologies' },
            {type: 'image', src: './ASSETS/assets/RVM/rvm3.png', alt: 'RV Matrix Software Technologies' },
            {type: 'image', src: './ASSETS/assets/RVM/rvm4.png', alt: 'RV Matrix Software Technologies' },
            {type: 'image', src: './ASSETS/assets/RVM/rvm5.png', alt: 'RV Matrix Software Technologies', caption: 'Hiring Posters Materials'  },
            {type: 'image', src: './ASSETS/assets/RVM/rvm6.png', alt: 'RV Matrix Software Technologies', caption: 'Appreciation Posters'  },


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