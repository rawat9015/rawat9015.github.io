// <!-- scroll top button  -->

    var button = document.getElementById("btn1");

    function scrollfun() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

            button.style.display = "block";
        }

        else {
            button.style.display = "none";
        }

    }
    window.onscroll = function () { scrollfun() };
    function topfunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



// <!-- banner animtion -->

