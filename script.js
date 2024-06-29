function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("hidden");
}

function openModal() {
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

var tl= gsap.timeline()

tl.from(".navbar img",{
    y:-20,
    duration:0.5,
    delay:0.25,
    opacity:0,
    })
        tl.from(".lefttoright",{
            x:-200,
            duration:0.5,
            delay:0.25,
            opacity:0,
        })

tl.from(".textleftanimate",{
    opacity:0,
    x:200,
    duration:1,
    scrollTrigger:{
        trigger:".textleftanimate",
        scroller:"body",
        start:"top 95%",
        end:"top 50%",
        scrub:true,
    }
}
)
gsap.from(".textrightanimate",{
    opacity:0,
    x:-200,
    duration:2,
    scrollTrigger:{
        trigger:".textrightanimate",
        scroller:"body",
        start:"top 95%",
        end:"top 50%",
        scrub:true,
    }
}
)
gsap.from(".texttopanimate",{
    opacity:0,
    y:100,
    duration:2,
    scrollTrigger:{
        trigger:".texttopanimate",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:true,
    }
}
)
gsap.from(".texttopanimate2",{
    opacity:0,
    y:90,
    duration:2,
    scrollTrigger:{
        trigger:".texttopanimate2",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:true,
    }
}
)
gsap.from(".iconanimation",{
    scale:0,
    duration:1,
    scrollTrigger:".iconanimation",
}
)
gsap.from(".moveleft h4",{
    opacity:0,
    x:100,
    duration:1,
    stagger:.2,
    scrollTrigger:{
        trigger:".moveleft",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        scrub:true,
    }
}
)
gsap.from(".moveup1",{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:".moveup1",
}
)
gsap.from(".moveup2",{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:".moveup2",
}
)
gsap.from(".moveup3",{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:".moveup3",
}
)
gsap.from(".moveleft2",{
    opacity:0,
    x:300,
    duration:.8,
    stagger:.2,
    scrollTrigger:{
        trigger:".moveleft2",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        scrub:true,
    }
}
)