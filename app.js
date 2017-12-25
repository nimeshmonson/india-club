var app = angular.module("myApp",[]);

app.controller("myCtrl", function ($scope){
	var president ={
		name: "Rohit Thakare",
		position: "President",
		quote: "I squat 25 hours a day, 8 days a week.",
		dp: "assets/dps/president.jpg",
		fbLink:"https://www.facebook.com/RohitThackeray"
	};
	var vice_president ={
		name: "Yashodhan Wagh",
		position: "Vice President",
		quote: "Hey! I am Yashodhan and I am from Pune",
		dp: "assets/dps/vice_president.jpg",
		fbLink:"https://www.facebook.com/yashthewagh"
	};
	var secretary ={
		name: "Diwakar Prasad",
		position: "Secretary",
		quote: "When I came for orientation, Lehigh administration accidently sent me to the one for undergrads.",
		dp: "assets/dps/secretary.jpg",
		fbLink:"https://www.facebook.com/diwakar.prasad.75"
	};
	var treasurer ={
		name: "Anshul Sharma",
		position: "Treasurer",
		quote: "I love woollen socks! I buy so many of them that I don't have space for clothes in my dresser.",
		dp: "assets/dps/treasurer.jpg",
		fbLink:"https://www.facebook.com/anshul.ebox"
	};
	var pro ={
		name: "Sahil Arora",
		position: "PRO",
		quote: "A friend once said that, 'A party can not start without you.'",
		dp: "assets/dps/pro.jpg",
		fbLink:"https://www.facebook.com/sahil.arora.94043"
	};	
	var internal_chair ={
		name: "Deep Desai",
		position: "Internal Chair",
		quote: "'I am Deep', my vocabulistics is limited to these three words and in that specific order.",
		dp: "assets/dps/internal_chair.jpg",
		fbLink:"https://www.facebook.com/deep.desai.7"
	};
	

	$scope.eboard =[president, vice_president, secretary, treasurer, pro, internal_chair];

	var bbq ={
		event: "Fresher's barbeque",
		link:"",
		cover:"assets/events/alumni-cover.jpg",
		desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vv lorem ipsum lorem ipsum"
	}
	var ganeshpuja ={
		event: "Ganesh Pooja",
		link:"",
		cover:"assets/events/alumni-cover.jpg",
		desc:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum vv lorem ipsum lorem ipsum"
	}
	var diwali ={
		event: "Diwali Night",
		link: "",
		cover:"assets/events/alumni-cover.jpg",
		desc:""
	}
	var garba ={
		event: "Garba Night",
		link: "",
		cover:"assets/events/alumni-cover.jpg",
		desc:""
	}
	var halloween ={
		event: "Halloween Party",
		link: "",
		cover:"assets/events/alumni-cover.jpg",
		desc:""
	}
	$scope.fall = [ganeshpuja, bbq, diwali, garba, halloween];

	var holi = {
		event: "Holi",
		link: "",
		desc: ""
	}
	var breakfast = {
		event: "Indian Cultural Breakfast",
		link: "",
		desc: ""
	}
	var bazaar= {
		event: "International Bazaar",
		link: "",
		desc: ""
	}
	var multi = {
		event: "Multicultural Night",
		link: "",
		desc: ""
	}
	var discover = {
		event: "Discover India",
		link: "",
		desc: ""
	}

	$scope.spring = [bazaar, holi, breakfast, multi];

	var alumni={
		event: "India Club Alumni Weekend",
		link: "",
		desc: ""
	}
	var independence={
		event: "Independence Day",
		link: "",
		desc: ""
	}
	var retreat={
		event: "Summer Retreat",
		link: "",
		desc: ""
	}
	$scope.summer = [alumni, retreat, independence];

});

$(document).ready(function(){
	$('.photo-circle').mouseover(function(){
		$('.bio').addClass('hidden');
		$(this).children('.bio').toggleClass('hidden');
		//console.log('clicked');
		$(this).mouseout(function(){
			$(this).children('.bio').addClass('hidden');
		});
	});

	//smooth scrolling
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {

	    // Prevent default anchor click behavior
	    event.preventDefault();

	    // Store hash
	    var hash = this.hash;

	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top - 75
	    }, 900, function(){

	      // Add hash (#) to URL when done scrolling (default click behavior)
	      window.location.hash = hash;
	      });
	    } // End if 
  	});
});