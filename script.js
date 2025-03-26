document.addEventListener("DOMContentLoaded", function () { 
    const skillsBtn = document.querySelector(".profile__skills-btn"); 
    const ptsBlock = document.querySelector(".info__pts"); 
    const awardsBlock = document.querySelector(".info__awards");
    const skillsHead = document.querySelector(".info__skills-head");
    const skillsBlock = document.querySelector(".info__skills");

    skillsBtn.addEventListener("click", function () {
        if (skillsBlock.style.display === "none" || skillsBlock.style.display === "") {
            ptsBlock.style.display = "none";  
            awardsBlock.style.display = "none";  
            skillsBlock.style.display = "flex";  
            skillsHead.style.display = "flex"; 
            skillsBtn.textContent = "Мои достижения";
        } else {
            skillsBlock.style.display = "none";  
            skillsHead.style.display = "none"; 
            ptsBlock.style.display = "flex";  
            awardsBlock.style.display = "flex";  
            skillsBtn.textContent = "Мои навыки";
        }
    });
});
