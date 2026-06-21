const envelope = document.getElementById("envelope");
const content = document.getElementById("content");
const music = document.getElementById("music");

envelope.addEventListener("click", () => {

```
envelope.style.display = "none";

content.style.display = "block";

music.play().catch(() => {});
```

});

const eventDate = new Date("January 30, 2027 16:00:00").getTime();

setInterval(() => {

```
const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML =
    days + " días " +
    hours + " h " +
    minutes + " m " +
    seconds + " s";
```

},1000);

const particles = document.getElementById("particles");

function createParticle(){

```
const particle = document.createElement("div");

particle.classList.add("particle");

particle.style.left = Math.random()*100 + "vw";

particle.style.animationDuration = (Math.random()*5+5)+"s";

particles.appendChild(particle);

setTimeout(()=>{
    particle.remove();
},10000);
```

}

setInterval(createParticle,200);