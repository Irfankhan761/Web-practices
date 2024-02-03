// Navbar hide and Show 
let isOpen = false;

let navbar = document.getElementById("navL");

function humbergerlist() {

    if (isOpen) {

        navbar.classList.remove("hideShow");

    }
    else {
        navbar.classList.add("hideShow");
    }
    isOpen = !isOpen

}


// ADD Skills Section Dynamicaly
const skillsData = [
    // {
    //     name: 'Html',
    //     imageSrc: './html-dcbfd618.png',
    //     description: 'I am a skilled HTML professional, experienced in creating structured, semantic, and accessible web content.'
    // },
    {
        name: 'CSS',
        imageSrc: './css-40182698.png',
        description: 'I am experienced in CSS, proficient in designing visually appealing and responsive web layouts with clean and organized styles.'
    },
    {
        name: 'JavaScript',
        imageSrc: './javascript-bbb37ab4.png',
        description: 'I have extensive experience in JavaScript, proficient in developing interactive and dynamic web applications with modern frameworks and libraries.'
    },
    {
        name: 'React',
        imageSrc: './react-ec218b95.png',
        description: 'Experienced in React, adept at building scalable and modular user interfaces with reusable components using React ecosystem.'
    },
    {
        name: 'SQL',
        imageSrc: './sql-server-eff0df96.png',
        description: 'Experienced in SQL, proficient in writing complex queries and optimizing database operations to ensure data integrity and performance.'
    },
    {
        name: 'MongoDB',
        imageSrc: './mongodb-fedbcc5f.png',
        description: 'I have expertise in MongoDB, skilled in designing and implementing database solutions for storing and managing data efficiently.'
    },
    {
        name: 'Taliwind CSS',
        imageSrc: './tailwind-713c3680.png',
        description: 'I am proficient in Tailwind CSS, skilled in utilizing its utility-first approach to create efficient and customizable UI components.'
    },
    {
        name: 'Java',
        imageSrc: './java-eee44270.png',
        description: 'Skilled in Java development, experienced in building robust and scalable applications with strong object-oriented programming principles.'
    }
];

const jskillDataPage = document.getElementById("jsSkillData");



skillsData.forEach((item)=>{
    let skillDetail=`<div class="skillDetail">
<img src="${item.imageSrc}" alt="" >
<h3 class="skillname">${item.name}</h3>
<p class="skilldescription"> ${item.description}</p>
</div>`
    jskillDataPage.insertAdjacentHTML("beforeend",skillDetail)
});



// Project Section Add Dynamically

const projectsData=[
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
    {
        name: "School Managment System",
        description:"Developed a semester project School Management System using Java GUI, applying GRASP principles with MySQL DataBase.",
        imageSrc:"./sms.png",
        source:"https://github.com/Irfankhan761/SMS_OOSE_JAVA",
        demo:"https://github.com/Irfankhan761/SMS_OOSE_JAVA"

    },
];

const jsProjectDataPage=document.getElementById("jsProjects");

projectsData.forEach((item)=>{
    let projectItems=`<div class="projectItems">
    <img src="${item.imageSrc}" alt="" >
    <h3 class="projectName">${item.name}</h3>
    <p class="projectDescription">${item.description}</p>
    <div class="projectBtn">
        <a href="${item.source}" class="sourceDemoBtn" target="_blank">Source Code</a>
        <a href="${item.demo}" class="sourceDemoBtn" target="_blank">Demo</a>
    </div>
    
    </div>`
    jsProjectDataPage.insertAdjacentHTML("beforeend",projectItems)
})


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navBtn');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});