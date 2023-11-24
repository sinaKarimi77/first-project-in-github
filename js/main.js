const darkbtn = document.getElementById("darkbtn");
const lightbtn = document.getElementById("lightbtn");

darkbtn.addEventListener('click',()=>{
    // document.body.style.backgroundColor ="black";
    document.body.classList.add('text-bg-dark');
    // document.body.classList.add('text-white');
});
lightbtn.addEventListener('click',()=>{
    // document.body.style.backgroundColor ="black";
    document.body.classList.add('text-bg-white');
    // document.body.classList.add('text-white');
});