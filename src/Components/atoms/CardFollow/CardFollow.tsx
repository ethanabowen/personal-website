let constrain = 200;
let mousePos = { x: 0, y: 0 };

function transforms(el: any) {
  let box = el.getBoundingClientRect();

  var xTarget = mousePos.x - window.innerWidth / 2;
  var yTarget = mousePos.y - window.innerHeight / 2;

  let calcX = -(yTarget - box.y - box.height / 2) / constrain;
  let calcY = (xTarget - box.x - box.width / 2) / constrain;

  return (
    "perspective(100px) " +
    "   rotateX(" +
    calcX +
    "deg) " +
    "   rotateY(" +
    calcY +
    "deg) "
  );
}

function transformElement(el: any) {
  el.style.transform = transforms.apply(null, [el]);
}

function onMouseMove(e: any) {
  let resumeLink: any = document.getElementById("resume-link");
  let projectsLink: any = document.getElementById("projects-link");
  let blogLink: any = document.getElementById("blog-link");
  let aboutLink: any = document.getElementById("about-link");

  mousePos = { x: e.clientX, y: e.clientY };
  window.requestAnimationFrame(function() {
    transformElement(resumeLink);
    transformElement(projectsLink);
    transformElement(blogLink);
    transformElement(aboutLink);
  });
}

export default function CardFollow({ children }: any) {
  return <div onMouseMove={onMouseMove}>{children}</div>;
}
