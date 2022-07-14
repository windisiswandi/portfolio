var lang_item = document.querySelector(".lang-item"),
    lang_main = document.querySelector(".lang-main");
var btnToggle = document.querySelector('.btn-toggle');
btnToggle.addEventListener('click', (e) => {
    btnToggle.classList.toggle('toggle');
    document.querySelector(".navbar-menu").classList.toggle("show");
});

lang_item.addEventListener("click", e => {
  var src_main = lang_main.getAttribute("src"),
      src_item = e.target.getAttribute("src");

  lang_main.setAttribute("src", src_item)
  lang_item.setAttribute("src", src_main)

  if (e.target.getAttribute("data-lang") == "eng") {
    lang_item.setAttribute("data-lang", "idn")
    setLangToEnglish()
  }else {
    lang_item.setAttribute("data-lang", "eng")
    setLangToIndo()
  }
})

document.querySelector(".themes").addEventListener("click", () => {
  document.querySelector(".themes").classList.toggle("dark")
  document.querySelector("body").classList.toggle("dark")
})

window.onscroll = function () {
  var navbarContent = document.querySelector('#navbar-section');
  if (window.pageYOffset > 10) {
    navbarContent.classList.add('navbar-fixed');
  } else {
    navbarContent.classList.remove('navbar-fixed');
  }
};

function getWitdh() {
  var witdhDevice = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (witdhDevice < 768) {
    document.querySelector('.navbar-menu').classList.add('sm');
  } else {
    document.querySelector('.navbar-menu').classList.remove('sm');
  }
}

getWitdh()


function setLangToEnglish() {
  // navbar-secion
  document.querySelector("#navbar-section .navbar-menu li:nth-child(1) a").textContent = "Home";
  document.querySelector("#navbar-section .navbar-menu li:nth-child(2) a").textContent = "About Me";
  document.querySelector("#navbar-section .navbar-menu li:nth-child(5) a").textContent = "Services";
  document.querySelector("#navbar-section .navbar-menu li:nth-child(6) a").textContent = "Contact";

  // Hero Section
  document.querySelector("#hero-section h1").innerHTML = `Hello Everyone, I'm <span class="dblock fw-bold txt-slate-900 fs-30 fw-bold">Windi Siswandi</span>`;
  document.querySelector("#hero-section h2").textContent = `Hamzanwadi University students`;
  document.querySelector("#hero-section p").innerHTML = `Learning web programming is easy and fun isn't it. <b class="txt-slate-900">No!</b>`;
  document.querySelector("#hero-section a").textContent = `Contact Me`;

  // about section
  document.querySelector("#about-section h1").textContent = "About me";
  document.querySelector("#about-section .flex-colom:nth-child(2) h2").innerHTML = "Come on, learn web programming <br> at WinTech id";
  document.querySelector('#about-section .flex-colom:nth-child(2) p').textContent =
    'WinTech id is a youtube channel that discusses the world of web programming & networking, starting from UI/UX Design, Front End, Back End, Full Stack, network installation, and others.';
  document.querySelector("#about-section .flex-colom:nth-child(3) h2").textContent = "Skill";

  //profolio section
  document.querySelector("#portfolio-section .container > h1").textContent = "Latest Project";
  document.querySelector('#portfolio-section .container > p').textContent = `Here are some of the projects I'm working on this year, some already completed and some still in progress.`;
  document.querySelector('#portfolio-section .dflex .flex-colom:nth-child(1) p').textContent = 'QRCODE attendance is a web-based student attendance at SMKN 1 Selong. I made this application using Codeigniter 3.';
  document.querySelector('#portfolio-section .dflex .flex-colom:nth-child(2) p').textContent = 'The POST application is a cashier application in general, but this application has a more modern UI.';
  document.querySelector('#portfolio-section .dflex .flex-colom:nth-child(3) p').textContent = 'Company Profile is a special website application for a company profile such as company products, company information and others.';

  // client section
  document.querySelector("#client-section .container > h1").textContent = "Who Have Collaborated";
  document.querySelector('#client-section .container > p').textContent = 'Here are some of the major agencies that have worked together.';

  // service section
  document.querySelector("#service-section .container > h2").textContent = "Services";
  document.querySelector('#service-section .container > h1').textContent = 'Professional Web & Network Services';
  document.querySelector('#service-section .container > p').textContent = 'Serving web application creation and network installation services such as hotspots and web servers for your business.';

  // contack section 
  document.querySelector("#footer-section .content-contact h2").textContent = "Let's be friends";
  document.querySelector("#footer-section .content-contact p").textContent = "You can send a message via the form or through the contact below";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) h2").textContent = "Contact Me";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) form div:nth-child(1) label").textContent = "Name";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) form div:nth-child(3) label").textContent = "Message";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) form center > input").value = "Send";
  document.querySelector("#footer-section .copyright span:nth-child(2)").innerHTML = `<span> Made by <span class="txt-teal-400 txt-uppercase">Windi siswandi</span> using <span class="txt-red-500"> HTML</span>, <span class="txt-blue-500">CSS</span> & <span class="txt-yellow-500">Javascript</span></span>`;


}

function setLangToIndo() {
  // navbar-secion
  document.querySelector("#navbar-section .navbar-menu li:nth-child(1) a").textContent = "Beranda";
  document.querySelector("#navbar-section .navbar-menu li:nth-child(2) a").textContent = "Tentang Saya";
  document.querySelector("#navbar-section .navbar-menu li:nth-child(5) a").textContent = "Layanan";
  document.querySelector("#navbar-section .navbar-menu li:nth-child(6) a").textContent = "Kontak";

  // hero section
  document.querySelector("#hero-section h1").innerHTML = `Halo semua, saya <span class="dblock fw-bold txt-slate-900 fs-30 fw-bold">Windi Siswandi</span>`;
  document.querySelector("#hero-section h2").textContent = `Mahasiswa Universitas Hamzanwadi`;
  document.querySelector("#hero-section p").innerHTML = `Belajar web programming itu mudah dan menyenangkan bukan.. <b class="txt-slate-900">Bukan!</b>`;
  document.querySelector('#hero-section a').textContent = `Hubungi Saya`;

  // about section
  document.querySelector("#about-section h1").textContent = "tentang saya";
  document.querySelector("#about-section .flex-colom:nth-child(2) h2").innerHTML = "Yuk, belajar web programming <br> di WinTech id";
  document.querySelector('#about-section .flex-colom:nth-child(2) p').textContent =
    'WinTech id merupakan channel youtube yang membahas seputar dunia web programming & jaringan, mulai dari UI/UX Desain, Front End, Back End, Full Stack, instalasi jaringan, dan lainnya.';
  document.querySelector("#about-section .flex-colom:nth-child(3) h2").textContent = "Keahlian";

  //profolio section
  document.querySelector("#portfolio-section .container > h1").textContent = "Proyek Terbaru";
  document.querySelector('#portfolio-section .container > p').textContent = 'Berikut beberapa proyek yang sedang saya buat tahun ini, sebagian sudah selesai dan sebagian masih jalan.';
  document.querySelector('#portfolio-section .container .flex-colom:nth-child(1) p').textContent = 'Absensi QRCODE merupakan absensi siswa berbasis web di SMKN 1 Selong. Aplikasi ini saya buat menggunakan Codeigniter 3.';
  document.querySelector('#portfolio-section .container .flex-colom:nth-child(2) p').textContent = 'Aplikasi POST merupakan aplikasi kasir pada umumnya namun aplikasi ini memiliki UI yang lebih modern.';
  document.querySelector('#portfolio-section .container .flex-colom:nth-child(3) p').textContent =
    'Company Profile merupakan aplikasi website yang khusus untuk profile sebuah perusahaan seperti produk perusahaan, tentang perusahaan dan lainnya.';

  // client section
  document.querySelector("#client-section .container > h1").textContent = "Yang Pernah Bekerjasama";
  document.querySelector('#client-section .container > p').textContent = 'Berikut beberapa instansi besar yang pernah bekerja sama.';

   // service section
   document.querySelector("#service-section .container > h2").textContent = "layanan";
   document.querySelector('#service-section .container > h1').textContent = 'Jasa Web & Jaringan Profesional';
   document.querySelector('#service-section .container > p').textContent = 'Melayani jasa pembuatan aplikasi web serta instalasi jaringan seperti Hotspot dan web server untuk usaha anda.';

   // contack section 
  document.querySelector("#footer-section .content-contact h2").textContent = "Mari Berteman";
  document.querySelector("#footer-section .content-contact p").textContent = "Anda bisa kirim pesan melalui form atau melalui kontak dibawah";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) h2").textContent = "Hubungi Saya";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) form div:nth-child(1) label").textContent = "Nama";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) form div:nth-child(3) label").textContent = "Pesan";
  document.querySelector("#footer-section .container .flex-colom:nth-child(2) form center > input").value = "Kirim";
  document.querySelector("#footer-section .copyright span:nth-child(2)").innerHTML = `<span> Dibuat oleh <span class="txt-teal-400 txt-uppercase">Windi siswandi</span> menggunakan <span class="txt-red-500"> HTML</span>, <span class="txt-blue-500">CSS</span> & <span class="txt-yellow-500">Javascript</span></span>`;

}
