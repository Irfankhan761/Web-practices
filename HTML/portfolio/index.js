
const skillsetData = [
    {
        name: 'Html',
        imageSrc: './html-dcbfd618.png',
        description: 'I am a skilled HTML professional, experienced in creating structured, semantic, and accessible web content.'
    },
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






let skillParent = document.getElementById("sk")

skillsetData.forEach((item, index) => {


    let elem = ` <div class="skillset">
<img src="${item.imageSrc}" alt="" height="80px" width="80px">
<h3 class="skillname"> ${item.name}</h3>
<p class="skilldescription">${item.description}</p>
</div>`

    skillParent.insertAdjacentHTML("beforeend", elem)





})

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.anchor');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});