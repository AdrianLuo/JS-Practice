var skillset = document.getElementsByClassName('skillset');
//alert(skillset);

function main() {
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
  	$(this).next().slideToggle(400);
    $(this).text('Projects Viewed');
    $(this).toggleClass('active');
  });
}

$(document).ready(main);