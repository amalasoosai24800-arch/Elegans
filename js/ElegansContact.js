/* WAVE ON LOAD */
window.addEventListener("load",()=>{
  document.querySelectorAll(".wave")
    .forEach((el,i)=>setTimeout(()=>el.classList.add("show"),i*90));
});

/* SUBMIT */
const form=document.getElementById("contactForm");
const loading=document.getElementById("loading");
const success=document.getElementById("success");

form.addEventListener("submit",e=>{
  e.preventDefault();
  loading.style.display="block";

  setTimeout(()=>{
    loading.style.display="none";
    success.style.display="block";
    setTimeout(()=>success.style.display="none",2200);
    form.submit();
  },1200);
});

/* CLOSE */
document.getElementById("closeBtn").onclick=()=>{
  location.href="index.html";
};