// Click Top Menu
$(".contact").click(function() {
	if ($(".form-box").is(":visible")) {
		$(".form-box").fadeOut(600);
		$(".form-box li a").removeClass("fadeInUp animated");
	} else {
		$(".form-box").fadeIn(600);
		$(".form-box li a").addClass("fadeInUp animated");
	}
});

$(".form-box ul a").click(function() {
	$(".form-box").fadeOut(600);
}).append("<span>");
//Top Menu End

$(".close-form").click(function() {
  if ($(".form-box").is(":visible")) {
		$(".form-box").fadeOut(600);
		$(".form-box li a").removeClass("fadeInUp animated");
	} else {
		$(".form-box").fadeIn(600);
		$(".form-box li a").addClass("fadeInUp animated");
	}
});
