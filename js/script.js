window.onload = function () {
    const arrQuote = [
        quote1 = {
            author: "—John Wooden",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> The most important thing in the world is family and love"
        },

        quote2 = {
            author: "—David Allen",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> You can do anything, but not everything"
        },

        quote3 = {
            author: "—Wayne Gretzky",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> You miss 100 percent of the shots you never take"
        },

        quote4 = {
            author: "—Gandhi",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> You must be the change you wish to see in the world"
        },

        quote5 = {
            author: "—Abraham Maslow",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> To the man who only has a hammer, everything he encounters begins to look like a nail"
        },

        quote6 = {
            author: "—Basho",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Do not seek to follow in the footsteps of the men of old; seek what they sought"
        },

        quote7 = {
            author: "—Marcel Proust",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> The real voyage of discovery consists not in seeking new lands but seeing with new eyes"
        },

        quote8 = {
            author: "—Will Rogers",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Even if you’re on the right track, you’ll get run over if you just sit there"
        },

        quote9 = {
            author: "—Zig Ziglar",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily"
        },

        quote10 = {
            author: "—Oscar WIlde",
            quote: "<i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Always forgive your enemies; nothing annoys them so much"
        }
    ];
    const i = Math.floor((Math.random() * arrQuote.length));
    document.getElementById('quote').innerHTML = arrQuote[i].quote;
    document.getElementById('author').innerHTML = arrQuote[i].author;


//NAVBAR

    document.getElementById('menu').onclick = function () {
        document.getElementById('ulnav').classList.toggle('active');
    };

    document.getElementById('ulnav').onclick = function () {
        this.classList.toggle('active');
    };

//SLIDER

    var images = ["url(https://www.nysid.edu/image/home-slideshow/BFA15_Thomas.jpg)",
        "url(http://i.dailymail.co.uk/i/pix/2017/02/28/14/3DCCE5ED00000578-4267602-image-a-15_1488291042241.jpg)",
        "url(https://static.chaosgroup.com/images/assets/000/001/119/articles_2_columns/bertrand-benoit-norsouth-living-interior-design-vray-3ds-max-thumb.jpg?1490189335)",
        "url(http://devaug.com/i/2017/12/best-of-interior-design-degree-home-striking-photos-615x311.jpg)",
        "url(https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/19905151_1445223138904606_7067154252641042662_n.png?oh=48e379a2365342235d4225419922d5fb&oe=5AF26118)"
    ];

    const next = document.getElementById('next');
    const previous = document.getElementById('previous');
    let current = 0;

    next.onclick = function () {
        if (current !== (images.length - 1)) {
            document.getElementById('slider').style.backgroundImage = images[++current];
            console.log(current);
        } else {
            current = 0;
            document.getElementById('slider').style.backgroundImage = images[current];
            console.log(current);
        }

    };

    previous.onclick = function () {
        if (current !== 0) {
            document.getElementById('slider').style.backgroundImage = images[--current];
            console.log(current);
        } else {
            current = images.length - 1;
            document.getElementById('slider').style.backgroundImage = images[current];
            console.log(current);
        }

    };
};

//load images

document.getElementById('loadimages').onclick = function () {
    document.getElementById('image1').classList.remove('hide');
    document.getElementById('image2').classList.remove('hide');
    document.getElementById('image3').classList.remove('hide');
    document.getElementById('image4').classList.remove('hide');
    document.getElementById('image5').classList.remove('hide');
    document.getElementById('image6').classList.remove('hide');
    this.parentElement.remove();
};


//contact form

const form = document.getElementById('myform');  //name, email, message, submit

form.submit.onclick = function (e) {
    e.preventDefault();
};