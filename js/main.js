const darkbtn = document.getElementById("darkbtn");
const lightbtn = document.getElementById("lightbtn");

darkbtn.addEventListener('click',()=>{
    // document.body.style.backgroundColor ="black";
    document.body.classList=('text-bg-dark');
    // document.body.classList.add('text-white');
});
lightbtn.addEventListener('click',()=>{
    // document.body.style.backgroundColor ="black";
    document.body.classList=('text-bg-white');
    // document.body.classList.add('text-white');
});
