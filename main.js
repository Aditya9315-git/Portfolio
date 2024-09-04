
// splash

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active')
            }, (idx + 1) * 400)
        });


        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')

                }, (idx + 1) * 50)
            })
        }, 1500);

        setTimeout(() => {
            intro.style.top = "-100vh";
        }, 1000)

    })
})










// Type effects///

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Yha pr hum wo likenge jo show krna h yha array create ho rha h

const phrases = ["Frontend Developer.", "Backend Developer.", "Full Stack Developer."];

// yha hum id ko get kr rhe h//

let el = document.getElementById("TypeWriter");


// Time is time ko kam krne se tez ho jata h
let sleepTime = 100;
// index
let curPhareseIndex = 0;

const writeLoop = async () => {
    while (true) {
        // Pharase jo h uska index 0 kr diya h

        let cuword = phrases[curPhareseIndex];
        await sleep(sleepTime);

        // yha pr ek ek kr ke laya ja rha h  

        for (let i = 0; i < cuword.length; i++) {
            el.innerHTML = cuword.substring(0, i + 1);
            await sleep(sleepTime)
        }
        await sleep(sleepTime * 10);

        // Yha hataya  ja rha h

        for (let i = cuword.length; i > 0; i--) {
            el.innerHTML = cuword.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        if (curPhareseIndex === phrases.length - 1) {
            curPhareseIndex = 0;
        } else {
            curPhareseIndex++
        }
    };


};
writeLoop()

// 



function sleep2(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Yha pr hum wo likenge jo show krna h yha array create ho rha h

const phrases2 = ["console.log('Hello World');", "documemt.getElementById('Aditya');", "alert('I can build a website');"];

// yha hum id ko get kr rhe h//

let el2 = document.getElementById("TypeWriter2");


// Time is time ko kam krne se tez ho jata h
let sleepTime2 = 100;
// index
let curPhareseIndex2 = 0;

const writeLoop2 = async () => {
    while (true) {
        // Pharase jo h uska index 0 kr diya h

        let cuword2 = phrases2[curPhareseIndex2];
        await sleep2(sleepTime2);

        // yha pr ek ek kr ke laya ja rha h  

        for (let i = 0; i < cuword2.length; i++) {
            el2.innerHTML = cuword2.substring(0, i + 1);
            await sleep2(sleepTime2)
        }
        await sleep2(sleepTime2 * 10);

        // Yha hataya  ja rha h

        for (let i = cuword2.length; i > 0; i--) {
            el2.innerHTML = cuword2.substring(0, i - 1);
            await sleep2(sleepTime2);
        }
        await sleep2(sleepTime2 * 5);

        if (curPhareseIndex2 === phrases2.length - 1) {
            curPhareseIndex2 = 0;
        } else {
            curPhareseIndex2++
        }
    };


};
writeLoop2()



// gsap ////


let tl = gsap.timeline()

tl.from("nav", {
    opacity: 0,
    y: -40,
    delay: 2,
    // stagger: 0.6,
    duration: 1,
    // delay:0.5
})


tl.from("nav ul li", {
    opacity: 0,
    y: -10,
    stagger: 0.25,
    scrub: true,
    duration: 0.2,
    // delay:0.5
    // rotate:-90
})

tl.from(".para", {
    opacity: 0,
    x: -50,
    duration: 0.5

})


tl.from(".dv1", {
    opacity: 0,
    y: 50,
    duration: 0.5
})

tl.from(".img-para-div img ", {
    opacity: 0,
    x: -50,
    // duration:0.5
    stagger: 0.2

})

tl.from(".ab", {
    opacity: 0,
    duration: 0.3
})

tl.from(".about .left", {
    x: -200,
    delay: 1,
    duration: 0.8,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: '.about',
},)

tl.from('.right h3', {
    x: -200,
    duration: 0.8,
    opacity: 0,

})

tl.from('.right main div', {
    x: -200,
    opacity: 0,
    stagger: 0.1,
    duration: 1,

})

