document.addEventListener("DOMContentLoaded",()=>{
  if(window.lucide) lucide.createIcons();
  const menu=document.getElementById("menuToggle");
  const nav=document.getElementById("desktopNav");
  menu?.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"));});
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
  document.getElementById("year").textContent=new Date().getFullYear();

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  const topBtn=document.getElementById("toTop");
  window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>500),{passive:true});
  topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  const sections=[...document.querySelectorAll("main section[id]")];
  const links=[...document.querySelectorAll(".desktop-nav a")];
  const activeObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));
      }
    });
  },{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section=>activeObserver.observe(section));

  // Replace with OGS LAB's official WhatsApp number, including country code without +.
  const whatsappNumber="";
  const whatsappLink=document.getElementById("whatsappLink");
  if(whatsappNumber) whatsappLink.href=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً OGS LAB، أود الاستفسار عن خدماتكم.")}`;
  else whatsappLink.addEventListener("click",e=>{e.preventDefault();alert("أضف رقم واتساب الشركة داخل ملف script.js لتفعيل زر التواصل.");});
});