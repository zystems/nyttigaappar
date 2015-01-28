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
				d[0].style.backgroundColor = '#2e2e2e';
				c[1].style.left = '65vw';
				d[1].style.backgroundColor = '#6e6e6e';
				c[2].style.left = '90vw';
				d[2].style.backgroundColor = '#6e6e6e';
				break;
			case 2:
				c[0].style.left = '-90vw';
				d[0].style.backgroundColor = '#6e6e6e';
				c[1].style.left = '-33vw';
				d[1].style.backgroundColor = '#2e2e2e';
				c[2].style.left = '32vw';
				d[2].style.backgroundColor = '#6e6e6e';
				break;
			case 3:
				c[0].style.left = '-160vw';
				d[0].style.backgroundColor = '#6e6e6e';
				c[1].style.left = '-130vw';
				d[1].style.backgroundColor = '#6e6e6e';
				c[2].style.left = '-66vw';
				d[2].style.backgroundColor = '#2e2e2e';
				break;
		}
	}
}