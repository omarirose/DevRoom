var config = {
    apiKey: "AIzaSyDRO_VABdZ977j8sGa0bgecv3tWiJb1AvI",
    authDomain: "c4q-grading-system.firebaseapp.com",
    databaseURL: "https://c4q-grading-system.firebaseio.com",
    projectId: "c4q-grading-system",
    storageBucket: "c4q-grading-system.appspot.com",
    messagingSenderId: "282583165744"
};
firebase.initializeApp(config);

jQuery(document).ready(function(){
	Jackbox.init()
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});
		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});
$(document).ready(function() {

	var s_round = '.s_round';
  
	$(s_round).hover(function() {
	  $('.b_round').toggleClass('b_round_hover');
	  return false;
	});
  
	$(s_round).click(function() {
	  $('.flip_box').toggleClass('flipped');
	  $(this).addClass('s_round_click');
	  $('.s_arrow').toggleClass('s_arrow_rotate');
	  $('.b_round').toggleClass('b_round_back_hover');
	  return false;
	});
  
	$(s_round).on('transitionend', function() {
	  $(this).removeClass('s_round_click');
	  $(this).addClass('s_round_back');
	  return false;
    });
    
    alltags = document.getElementsByClassName("tagselector-tag")
    for(var i=0; i<alltags.length; i++) {
        alltags[i].classList.add('active')
    }
  });

$('a[name="logout"]').on("click", function() {
	uid = firebase.auth().currentUser.uid
	Jackbox.information("Logging out. Energize!")
	setTimeout(function(){
		firebase.auth().signOut().then(function() {
			window.location.replace("/revoke/"+uid)
		})
	}, 2000);
})

$('a[name="examresponse"]').on("click", function() {
    student = this.innerHTML
    firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
        window.location.replace("/gradeexam/"+
                                document.getElementById("examidofthisexam").innerHTML+
                                student+idToken)
        console.log(idToken)
    })
})

$('a[name="home"]').on("click", function() {
	firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
		window.location.replace("/user/"+idToken)
    })
})

$('a[name="profile"]').on("click", function() {
	// window.location.replace("/profile")
})

$('a[name="examLink"]').on("click", function() {
	examid = $(this).attr('id')
	firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
		window.location.replace("/grade/"+examid+idToken)
	})
})

