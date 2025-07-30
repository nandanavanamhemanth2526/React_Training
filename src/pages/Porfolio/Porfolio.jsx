const Portfolio = () => {
    return (
        <div id="main">
            <nav id="nav-overlay">
                <a class="navBar" href="">HOME</a>
                <a class="navBar" href="#about">ABOUT</a>
                <a class="navBar" href="#services">SERVICES</a>
                <a class="navBar" href="#projects">WORK</a>
                <a class="navBar" href="#">BLOG</a>
                <a class="navBar" href="#form-container">CONTACT</a>
            </nav>
            <img src="src\assets\intro-bg.jpg" width="1248" height="650"/>
                <div id="heading">
                    <h1>I am Hemanth Nandanavanam</h1>
                </div>
                <h2 id="subTitle">Web Developer</h2>

                <div id="about">
                    <div id="img-container"><img src="src\assets\testimonial-2.jpg" width="100px" height="130px"/></div>
                    <div id="personalinfo">
                        <p><b>Name</b> : Hemanth Nandanavanam</p>
                        <p><b>Profile</b> : AEM Developer</p>
                        <p><b>Email</b> : nandanavanamhemanth2526@gmail.com</p>
                        <p><b>Phone</b> : +91 8374637447</p>
                    </div>
                    <div id="aboutme">
                        <h2 id="title" >About me</h2>
                        <p>I am from Civil Engineering Background. Currntly working as AEM Developer in Bhasaka Technologies Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dicta similique dolorem quibusdam eum est reiciendis sint distinctio nihil aliquid corporis, qui magnam delectus culpa id natus esse eveniet hic?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ratione dolor consequuntur dolorum vero perspiciatis maxime odit ad sit labore, autem itaque similique minima eum deleniti deserunt dolores ipsum atque.</p>
                        <p>I am from Civil Engineering Background. Currntly working as AEM Developer in Bhasaka Technologies Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dicta similique dolorem quibusdam eum est reiciendis sint distinctio nihil aliquid corporis, qui magnam delectus culpa id natus esse eveniet hic?Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div id="skill">
                        <h2>Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>BOOTSTRAP</li>
                            <li>JAVA</li>
                            <li>AEM</li>
                            <li>CLOUD MANAGER</li>
                            <li>OSGI</li>
                        </ul>
                    </div>
                </div>
                <div id="services">
                    <h2 id="ser">SERVICES</h2>
                    <div class="hov" id="webdev">
                        <img src="src\assets\WebDev.webp" alt="" height="100px" width="100px" />
                            <h3>WEB DEVELOPER</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vitae corrupti praesentium quas aut rem debitis.</p>
                    </div>

                    <div class="hov" id="aemdev">
                        <img src="src\assets\AEM Dev.jpg" alt="" height="100px" width="100px" />
                            <h3>AEM DEVELOPER</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vitae corrupti praesentium quas aut rem debitis.</p>
                    </div>

                    <div class="hov" id="uidev">
                        <img src="src\assets\ui dev.png" alt="" height="100px" width="100px" />
                            <h3>UI DEVELOPER</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vitae corrupti praesentium quas aut rem debitis.</p>
                    </div>

                    <div class="hov" id="dev">
                        <img src="src\assets\testing.png" alt="" height="100px" width="100px" />
                            <h3>TESTING & DEVELOPMENT</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vitae corrupti praesentium quas aut rem debitis.</p>
                    </div>

                    <div class="hov" id="coreaem">
                        <img src="src\assets\aem core dev.png" alt="" height="100px" width="100px" />
                            <h3>CORE AEM DEVELOPMENT</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vitae corrupti praesentium quas aut rem debitis.</p>
                    </div>
                </div>
                <div id="projects">
                    <h2 id="ser">PROJECTS</h2>
                    <div class="hove" id="webdev">
                        <img src="src\assets\nikon.svg" alt="" height="100px" width="100px" />
                            <h3>NIKON</h3>
                            <p>Nikon project basically retrieve data from Content Fragements and render that on page</p>
                    </div>

                    <div class="hove" id="aemdev">
                        <img src="src\assets\visa.png" alt="" height="100px" width="100px" />
                            <h3>VISA</h3>
                            <p>Visa was founded in 1958 by Bank of America (BofA) as the BankAmericard credit card program.[1] In response to competitor Master Charge (now Mastercard).</p>
                    </div>

                    <div class="hove" id="uidev">
                        <img src="src\assets\indigo.png" alt="" height="100px" width="100px" />
                            <h3>IndiGo</h3>
                            <p>InterGlobe Aviation Limited (d/b/a IndiGo), is an Indian low-cost airline headquartered in Gurgaon, Haryana, India.[5] It is the largest airline in India by passengers carried and fleet size.</p>
                    </div>
                </div>
                <div id="form-container">
                    <h2 id="ser">Contact Us</h2>
                    <form action="#" method="POST">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required />

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />

                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit">Submit</button>
                    </form>
                        </div>
                </div>
                )
}

export default Portfolio;