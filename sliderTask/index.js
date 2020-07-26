const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const image = document.getElementById("image");
const classNames = ["bc1", "bc2", "bc3"];


(init = () => {
    const classes = image.classList;
    let currentIndex = 0;
    classes.add(classNames[currentIndex]);

    leftBtn.addEventListener('click',() => {
        classes.remove(classNames[currentIndex]);
        currentIndex = (currentIndex === 0 ? classNames.length - 1 : currentIndex - 1);
        classes.add(classNames[currentIndex]);
    });

    rightBtn.addEventListener('click',() => {
        classes.remove(classNames[currentIndex]);
        currentIndex = (currentIndex + 1 === classNames.length ? 0 : currentIndex + 1);        classes.add(classNames[currentIndex]);
    });
})();