
var menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px";

function togglemenu() {
    if (menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "150px"
        }
    else
        {
            menuList.style.maxHeight = "0px"
        }
}




var countDownDate = new Date("Jun 4, 2023 10:00:00").getTime();
var x = setInterval(function() {


  var now = new Date().getTime();
  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("countdown").innerHTML = days + "Hari " + hours + "Jam "
  + minutes + "Menit " + seconds + "Detik ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "DISELENGGARAKAN";
  }
}, 1000);


const kategoriUmur = document.querySelectorAll('input[name="kategori_umur"]');

		for (let i = 0; i < kategoriUmur.length; i++) {
			kategoriUmur[i].addEventListener("click", function() {
				if (kategoriUmur[i].value === "Anak-Anak") {
					document.getElementById("nama-ortu").required = true;
					document.getElementById("nama-ortu").disabled = false;
				} else {
					document.getElementById("nama-ortu").required = false;
					document.getElementById("nama-ortu").disabled = true;
				}
			});
		}


    function copyToClipboard(text) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }