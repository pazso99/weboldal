const skills = document.querySelectorAll('.skill-name');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.classList.toggle('active');
        skill.nextElementSibling.classList.toggle('active');
    });
});