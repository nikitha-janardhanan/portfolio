/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function scrollspy() {
    navLink.forEach(n => n.addEventListener('click', () => {
      /*Active link*/
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      /*Remove menu mobile*/
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.remove('show')
  }));
}


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor : 0.5,
    viewOffset: {
        top: 10,
        right: 0,
        bottom: 50,
        left: 0,
    },
    reset: true
});



/*SCROLL HOME*/
sr.reveal('#home',{ beforeReveal: () => {
    document.querySelector('#homelink').classList.add('active')
  },
  afterReset: () => {
    document.querySelector('#homelink').classList.remove('active')
  }
});
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__img',{delay: 400});
sr.reveal('.home__social-icon',{ interval: 200});


/*SCROLL ABOUT*/
sr.reveal('#about',{ beforeReveal: () => {
    document.querySelector('#aboutlink').classList.add('active')
  },
  afterReset: () => {
    document.querySelector('#aboutlink').classList.remove('active')
  }
});
sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});

/*SCROLL SKILLS*/
sr.reveal('#skills',{ beforeReveal: () => {
    document.querySelector('#skillslink').classList.add('active')
  },
  afterReset: () => {
    document.querySelector('#skillslink').classList.remove('active')
  }
});
sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 600});


/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200});
sr.reveal('#work',{ beforeReveal: () => {
    document.querySelector('#worklink').classList.add('active')
  },
  afterReset: () => {
    document.querySelector('#worklink').classList.remove('active')
  }
});

/* Scroll Experience */
sr.reveal('.experience__subtitle',{interval: 400});
sr.reveal('.experience__text',{delay: 400});
sr.reveal('#experience',{ beforeReveal: () => {
    document.querySelector('#explink').classList.add('active')
  },
  afterReset: () => {
    document.querySelector('#explink').classList.remove('active')
  }
});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});
sr.reveal('#contact',{beforeReveal: () => {
    document.querySelector('#contactlink').classList.add('active')
  },
  afterReset: () => {
    document.querySelector('#contactlink').classList.remove('active')
  }
});
