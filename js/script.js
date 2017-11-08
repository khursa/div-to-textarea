;(function(){
			"use strict";


		document.onkeydown = function(ev) {

			if (ev.ctrlKey && ev.keyCode == 69) {
				edit();
				ev.preventDefault();
			}

			if (ev.keyCode == 27) {
				escape();
			}

			if (ev.ctrlKey && ev.keyCode == 83) {
				save();
				ev.preventDefault();
			} 

		}

		function edit() {
			dt_div.style.display = 'none';
			dt_text.value = dt_div.innerHTML;
			dt_text.style.display = 'block';
			dt_text.style.border
			dt_text.focus();
		}

		function escape() {
			dt_text.blur();
			dt_text.style.display = 'none';
			dt_div.style.display = 'block';
		}

		function save() {
			dt_text.style.display = 'none';
			dt_div.innerHTML = dt_text.value;
			dt_div.style.display = 'block';
		}


	})();
