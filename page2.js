
        var navigation = document.getElementById("nav");
        var logo = document.getElementById("logoSection");
        var menuToggle = document.getElementById("menu-toggle");
        var links = document.getElementById("nav-links");
        menuToggle.addEventListener("click", function () {
            links.classList.toggle("show");
            if (links.classList.contains("show")) {
                navigation.classList.add("SmallHeight");
                links.classList.add("corner");
                logo.classList.add("gap");
            } else {
                navigation.classList.remove("SmallHeight");
                links.classList.remove("corner");
                logo.classList.remove("gap");
            }
        });

        function toggleSwitch() {
            var ball = document.getElementById('ball');
            ball.classList.toggle('active');
            if (ball.classList.contains("active")) {
                document.body.style.backgroundColor = "rgb(60,88,116)";
                ball.src = "https://cdn-icons-png.flaticon.com/128/869/869869.png";
            } else {
                document.body.style.backgroundColor = "black";
                ball.src = "https://cdn-icons-png.flaticon.com/128/1823/1823397.png";
                document.body.style.color = "white";
            }
        }

        var tabs = document.querySelectorAll(".tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", function () {
                for (var j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove("active");
                }
                this.classList.add("active");
            });
        } 

        var tab1 = document.getElementById("tab1");
        var tab2 = document.getElementById("tab2");
        var tab3 = document.getElementById("tab3");
        var tab4 = document.getElementById("tab4");

        function createGalaxyBox(galaxy) {
            var wordBox = document.createElement("div");
            wordBox.classList.add("sentence-box");
            wordBox.id = galaxy.id;
            wordBox.style.fontSize = "2rem";
            wordBox.style.marginBottom = "20px";

            var galaxyName = document.createElement("div");
                galaxyName.className = "col-12 col-md-11 col-sm-11 galaxyName";
                galaxyName.innerHTML =   galaxy.name;

            var content = document.createElement("div");
                content.classList.add("content");    

            var description = document.createElement("div");
            description.className = "galaxy-desc col-6";
            description.textContent = galaxy.description;

            var images = document.createElement("img");
            images.src = galaxy.image;
            images.className = "galaxy-image";
            images.onerror = function () {
                this.src = "https://via.placeholder.com/300x300?text=" + galaxy.name;
            };

            var dropdown = document.createElement("div");
            dropdown.className = "galaxy-dropdown ";
            var dropdownBtn = document.createElement("button");
            dropdownBtn.className = "galaxy-dropdown-btn";
            dropdownBtn.textContent = "Explore " + galaxy.name + " Planets & Comets";
            var dropdownContent = document.createElement("div");
            dropdownContent.className = "galaxy-dropdown-content";

            galaxy.items.forEach(function (item) {
                var link = document.createElement("a");
                link.href = "#";
                var itemImage = document.createElement("img");
                itemImage.src = item.image;
                itemImage.alt = item.name;
                itemImage.onerror = function () {
                    this.src = "https://via.placeholder.com/30x30?text=" + item.name;
                };
                link.appendChild(itemImage);
                link.appendChild(document.createTextNode(item.name));
                dropdownContent.appendChild(link);
            });

            dropdown.appendChild(dropdownBtn);
            dropdown.appendChild(dropdownContent);

            wordBox.appendChild(galaxyName);
            content.appendChild(description);
            content.appendChild(images);
            wordBox.appendChild(content);
            wordBox.appendChild(dropdown);
            return wordBox;
        }

        tab1.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var galaxies = [
                {
                    id: "milky-way",
                    name: "Milky Way",
                    description: "The Milky Way is moving at about 552 km/s relative to the cosmic background radiation.It’s on a collision course with the Andromeda Galaxy — they’ll merge in ~4.5 billion years to form a new galaxy sometimes called Milkomeda. If you could travel at the speed of light, it would take you ~100,000 years to cross it.",
                    image: "https://www.capturelandscapes.com/wp-content/uploads/2017/06/Alien-Trees.jpg",
                    items: [
                        { name: "Mercury", image: "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" },
                        { name: "Venus", image: "https://nineplanets.org/wp-content/uploads/2020/03/venus.png" },
                        { name: "Earth", image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png" },
                        { name: "Mars", image: "https://nineplanets.org/wp-content/uploads/2020/03/mars.png" },
                        { name: "Jupiter", image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png" },
                        { name: "Saturn", image: "https://nineplanets.org/wp-content/uploads/2020/03/saturn.png" },
                        { name: "Uranus", image: "https://nineplanets.org/wp-content/uploads/2020/03/uranus.png" },
                        { name: "Neptune", image: "https://nineplanets.org/wp-content/uploads/2020/03/neptune.png" },
                    ]
                },
                {
                    id: "andromeda",
                    name: "Andromeda",
                    description: "Closest spiral galaxy to the Milky Way.It’s approaching us at about 110 km/s — the two galaxies will collide in ~4.5 billion years, eventually merging into a giant elliptical galaxy.Can be seen with the naked eye from Earth in dark skies — it appears as a faint, smudgy spot.Has about twice as many stars as the Milky Way, making it one of the brightest galaxies in our local group.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/320px-Andromeda_Galaxy_%28with_h-alpha%29.jpg",
                    items: [
                        { name: "Hypothetical Exoplanet A", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                        { name: "Hypothetical Exoplanet B", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                        { name: "Hypothetical Comet 1", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" },
                        { name: "Hypothetical Comet 2", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" }
                    ]
                },
                {
                    id: "triangulum",
                    name: "Triangulum",
                    description: "Third-largest galaxy in the Local Group (after Andromeda and the Milky Way).Likely a satellite galaxy of Andromeda — gravitationally influenced by it.One of the most distant objects visible to the naked eye under perfect dark-sky conditions.Contains very little dust, making its stars easier for astronomers to study.",
                    image: "https://www.nasa.gov/wp-content/uploads/2023/03/archives_m33_0.jpg?w=1041",
                    items: [
                        { name: "Hypothetical Exoplanet C", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                        { name: "Hypothetical Exoplanet D", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                        { name: "Hypothetical Comet 3", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" },
                        { name: "Hypothetical Comet 4", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" }
                    ]
                }
            ];

            menu.innerHTML = "";
            galaxies.forEach(function (galaxy) {
                menu.appendChild(createGalaxyBox(galaxy));
            });
        });

        tab2.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var galaxy = {
                id: "milky-way",
                name: "Milky Way",
                description: "The Milky Way is moving at about 552 km/s relative to the cosmic background radiation.It’s on a collision course with the Andromeda Galaxy — they’ll merge in ~4.5 billion years to form a new galaxy sometimes called Milkomeda. If you could travel at the speed of light, it would take you ~100,000 years to cross it.",
                image: "https://www.capturelandscapes.com/wp-content/uploads/2017/06/Alien-Trees.jpg",
                items: [
                    { name: "Mercury", image: "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png" },
                        { name: "Venus", image: "https://nineplanets.org/wp-content/uploads/2020/03/venus.png" },
                        { name: "Earth", image: "https://nineplanets.org/wp-content/uploads/2020/03/earth.png" },
                        { name: "Mars", image: "https://nineplanets.org/wp-content/uploads/2020/03/mars.png" },
                        { name: "Jupiter", image: "https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png" },
                        { name: "Saturn", image: "https://nineplanets.org/wp-content/uploads/2020/03/saturn.png" },
                        { name: "Uranus", image: "https://nineplanets.org/wp-content/uploads/2020/03/uranus.png" },
                        { name: "Neptune", image: "https://nineplanets.org/wp-content/uploads/2020/03/neptune.png" },
                    ]
            };

            menu.innerHTML = "";
            menu.appendChild(createGalaxyBox(galaxy));
        });

        tab3.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var galaxy = {
                id: "andromeda",
                name: "Andromeda",
                description: "Closest spiral galaxy to the Milky Way.It’s approaching us at about 110 km/s — the two galaxies will collide in ~4.5 billion years, eventually merging into a giant elliptical galaxy.Can be seen with the naked eye from Earth in dark skies — it appears as a faint, smudgy spot.Has about twice as many stars as the Milky Way, making it one of the brightest galaxies in our local group.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/320px-Andromeda_Galaxy_%28with_h-alpha%29.jpg",
                items: [
                    { name: "Hypothetical Exoplanet A", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                    { name: "Hypothetical Exoplanet B", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                    { name: "Hypothetical Comet 1", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" },
                    { name: "Hypothetical Comet 2", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" }
                ]
            };

            menu.innerHTML = "";
            menu.appendChild(createGalaxyBox(galaxy));
        });

        tab4.addEventListener("click", function () {
            var menu = document.getElementById("menu");
            var galaxy = {
                id: "triangulum",
                name: "Triangulum",
                description: "Third-largest galaxy in the Local Group (after Andromeda and the Milky Way).Likely a satellite galaxy of Andromeda — gravitationally influenced by it.One of the most distant objects visible to the naked eye under perfect dark-sky conditions.Contains very little dust, making its stars easier for astronomers to study.",
                image: "https://www.nasa.gov/wp-content/uploads/2023/03/archives_m33_0.jpg?w=1041",
                items: [
                    { name: "Hypothetical Exoplanet C", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                    { name: "Hypothetical Exoplanet D", image: "https://cdn-icons-png.flaticon.com/128/1241/1241477.png" },
                    { name: "Hypothetical Comet 3", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" },
                    { name: "Hypothetical Comet 4", image: "https://cdn-icons-png.flaticon.com/128/1241/1241481.png" }
                ]
            };

            menu.innerHTML = "";
            menu.appendChild(createGalaxyBox(galaxy));
        });