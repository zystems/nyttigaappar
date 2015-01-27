function toggleText(i) {
	var c = document.getElementsByClassName('Case-textholder');
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