/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}
  

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	loop: true,
	spaceBetween: 50,
	slidesPerView: 5,
	breakpoints: {
		// when window is <= 575px
		575: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window is <= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		// when window is <= 1199px
		1199: {
			slidesPerView: 4,
			spaceBetween: 20
		},

	}
});


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
// const name=document.getElementById('name')
// const email=document.getElementById('email')
// const phone=document.getElementById('phone')
// const messge=document.getElementById('messge')
// const form= document.getElementById('form')
// const errorElement=document.getElementById('error')

 
// form.addEventListener('submit',(e)=>{
	
// 	let messages=[]
// 	if(name.value =='' || name.value== null)
// 	{
//       messages.push('Name is required')

// 	}
// 	function phonenumber(inputtxt)
// 	{
//       var phoneno=/^\(?[0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// 	  if(inputtxt.value.match(phoneno))
// 	  {
// 		  return true;
// 	  }else
// 	  {
// 		  alert("Not a valid Phone Number ")
// 		  return false;
// 	  }

// 	  let messages=[]
// 	if(messge.value =='' || messge.value== null)
// 	{
//       messages.push('message is required')

// 	}
// 	  function validateemail()  
//       {  
//            var x=document.myform.email.value;  
//            var atposition=x.indexOf("@");  
//            var dotposition=x.lastIndexOf(".");  
//            if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//            alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//            return false;  
//   }  
// }  

// 	}
// 	if(messages.length>0)
// 	{
// 	e.preventDefault()
// 	errorElement.innerText=messages.join(',')
// 	}
// })





//Get data
// const nameInput =document.querySelector("#name");
// const email =document.querySelector("#email");
// const phone =document.querySelector("#phone");
// const messge =document.querySelector('#messge');
// const success =document.querySelector('#success');
// const errorNodes =document.querySelectorAll('.error');

//validate Data
// function validateform()
// {

// 	clearMessages();
// 	let errorFlag= false;
// 	if(nameInput.ariaValueMax.length<1)
// 	{
// 		errorNodes[0].innerText="Name cannot be blank ";
// 		nameInput.classList.add("error-border");
// 		errorFlag=true;
// 	}
// 	if(!emailIsValid(email.value))
// 	{
//      errorNodes[1].innerText="Invalid mail address";
// 	 email.classList.add("error-border");
//      errorFlag=true;
// 	}
// 	if(messge.value.length<1)
// 	{
// 		errorNodes[2].innerText="please enter message";
// 		messge.classList.add("error-border");
//         errorFlag=true;
// 	   }
// 	   if(!errorFlag)
// 	   {
// 		   success.innerText="Succes!";
// 	   }
// }


//clear error /success messages

// function clearMessages()
//  {
// 	 for(let i=0;i< errorNodes.length;i++)
// 	 {
// 		 errorNodes[i].innerText="";
// 	 }
//     success.innerText="";
// 	nameInput.classList.remove("error-border");
// 	email.classList.remove("error-border");
// 	messge.classList.remove("error-border");
// 	}

	//check if email is valid

// function emailIsValid(email)
// {
// 	let pattern= /\S+@\S+\.\S+/;
// 	return pattern.test(email);
// }

 
// function validateform(){  
//  var name=document.myform.name.value;  

// if (name==null || name==""){  
// alert("Name can't be blank");  
// return false;  }}  



