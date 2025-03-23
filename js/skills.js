(function(){
    const titleSkills = [...document.querySelectorAll('.skills__title')];
    console.log(titleSkills)

    titleSkills.forEach(skill =>{
        skill.addEventListener('click',()=>{
            let height = 0;
            let answer = skill.nextElementSibling
            let addPadding = skill.parentElement.parentElement;

            addPadding.classList.toggle('skills__padding--add')

            skill.children[0].classList.toggle('skills__arrow--rotate');


            if(answer.clientHeight === 0){
                height = answer.scrollHeight;

            }

            answer.style.height = `${height}px`;

        })

    })



})();
