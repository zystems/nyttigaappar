function toggleText(i) {
	var c = document.getElementsByClassName('Case-textholder');
	var d = document.getElementsByClassName('Each-example');
	var size = window.innerWidth;
	if (size < 680) {
		switch (i) {
			case 1:
				(c[0].style.height == '0px' || c[0].style.height == 0 ? c[0].style.height = '200px' : c[0].style.height = '0px');
				c[1].style.height = '0px';
				c[2].style.height = '0px';
				break;
			case 2:
				c[0].style.height = '0px';
				(c[1].style.height == '0px' || c[1].style.height == 0 ? c[1].style.height = '200px' : c[1].style.height = '0px');
				c[2].style.height = '0px'
				break;
			case 3:
				c[0].style.height = '0px';
				c[1].style.height = '0px';
				(c[2].style.height == '0px' || c[1].style.height == 0 ? c[2].style.height = '200px' : c[2].style.height = '0px');
				break;
		}
	}
	else {
		switch (i) {
			case 1:
				c[0].style.left = 0;
				d[0].style.opacity = 1;
				c[1].style.left = '65vw';
				d[1].style.opacity = .5;
				c[2].style.left = '90vw';
				d[2].style.opacity = .5;
				break;
			case 2:
				c[0].style.left = '-90vw';
				d[0].style.opacity = .5;
				c[1].style.left = '-33vw';
				d[1].style.opacity = 1;
				c[2].style.left = '32vw';
				d[2].style.opacity = .5;
				break;
			case 3:
				c[0].style.left = '-160vw';
				d[0].style.opacity = .5;
				c[1].style.left = '-130vw';
				d[1].style.opacity = .5;
				c[2].style.left = '-67vw';
				d[2].style.opacity = 1;
				break;
		}
	}
}
jQuery(function () {

	$('.Example-imageholder-left').click(function(){toggleText(1)});
	$('.Example-imageholder-center').click(function(){toggleText(2)});
	$('.Example-imageholder-right').click(function(){toggleText(3)});
});