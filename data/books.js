/*** GUIDE
	Add book in the end of object booksList. It must be the object with 4 properties.

	Example of book:
	{
		"name" : "SVG animation", // 1
		"cover" : "svg-animations.png", // 2
		"description" : `<p> // 3
							 SVG is extremely powerful, with its reduced HTTP requests and
							 crispness on any display. It becomes increasingly more interesting
							 as you explore its capabilities for responsive animation and
							 performance boons.
						 </p>`,
    "link" : "https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702" // 4
	}

	Explanation:
	1. Name of the book. Type: String.

	2. Books cover. Type: String. Name of image that	located in 'data/covers/'.
		You don't need define path to image, just declatate name and extention. For example: 'bestbook.png';

	3. Description. Type: String. Please use slanting quotes (`example`) for multilines support.
		 Please, add clear description and not more than 400 symbols.

	5. Link to book. Type: String. Define absolute url to tool. Please don't use reference links.
***/

var booksList = [
	{
		"name" : "SVG animation",
		"cover" : "svg-animations.png",
		"description" : `<p>
							 SVG is extremely powerful, with its reduced HTTP requests and
							 crispness on any display. It becomes increasingly more interesting
							 as you explore its capabilities for responsive animation and
							 performance boons. When you animate SVG, you must be aware
							 of normal image traits like composition, color, implementation,
							 and optimization. But when you animate, it increases the
							 complexity of each of these factors exponentially. </p>
							 <p> This practical book takes a deep dive into how you can to
							 solve these problems with stability, performance,
							 and creativity in mind.
						 </p>`,
    "link" : "https://www.amazon.com/SVG-Animations-Implementations-Responsive-Animation/dp/1491939702"
	},
	{
		"name" : "Creating Web Animations: Bringing Your UIs to Life",
		"cover" : "Creating-Web-Animations.png",
		"description" : `<p>
							Thanks to faster browsers, better web standards support,
							and more powerful devices, the web now defines the next
							generation of user interfaces that are fun, practical,
							fluid, and memorable. The key? Animation. But learning
							how to create animations is hard, and existing learning
							material doesn’t explain the context of the UI problem
							that animations are trying to solve. That’s where this book comes in.
						 </p>`,
        "link" : "https://www.amazon.com/Creating-Web-Animations-Bringing-Your/dp/1491957514/"
	},
	{
		"name" : "Transitions and Animations in CSS: Adding Motion with CSS",
		"cover" : "trans.jpg",
		"description" : `<p>
							Add life and depth to your web applications and improve user
							experience through the discrete use of CSS transitions and
							animations. With this concise guide, you’ll learn how to
							make page elements move or change in appearance, whether
							you want to realistically bounce a ball, gradually expand
							a drop-down menu, or simply bring attention to an
							element when users hover over it.
						 </p>`,
        "link" : "https://www.amazon.com/Transitions-Animations-CSS-Adding-Motion/dp/149192988X/"
	},
	{
		"name" : "Designing Interface Animation: Meaningful Motion for User Experience",
		"cover" : "experience.jpg",
		"description" : `<p>
							Effective interface animation deftly combines form and
							function to improve feedback, aid in orientation, direct
							attention, show causality, and express your brand's personality.
							Designing Interface Animation shows you how to create web animation
							that balances purpose and style while blending seamlessly into the
							user s experience. This book is a crash course in motion design
							theory and practice for web designers, UX professionals,
							and front-end developers alike.
						 </p>`,
        "link" : "https://www.amazon.com/Designing-Interface-Animation-Meaningful-Experience/dp/1933820322/"
	},
	{
		"name" : "Web Animation using JavaScript: Develop & Design",
		"cover" : "web.png",
		"description" : `<p>
							We've come a long way since the days of flashing banner ads
							and scrolling news tickers. Today, the stunning motion design
							of iOS and Android dramatically improves a user's experience -
							instead of detracting from it. The best sites and apps of
							today leverage animation to improve the feel and
							intuitiveness of their interfaces. Sites without animation
							are starting to feel antiquated.
						 </p>`,
        "link" : "https://www.amazon.com/Web-Animation-using-JavaScript-Develop/dp/0134096665"
	},
	{
		"name" : "CSS Animations and Transitions for the Modern Web",
		"cover" : "modern.png",
		"description" : `<p>
							Modern websites use a variety of animated effects not only to
							improve usability but also to delight and surprise users. Some
							of these effects require complex scripting or programming skills,
							but many are within the grasp of designers who are already familiar
							with CSS and HTML. CSS Animations and Transitions for the
							Modern Web shows designers how to add movement to web pages
							over time using CSS3 style definitions.
						 </p>`,
        "link" : "https://www.amazon.com/gp/product/0133980502/"
	},
	{
		"name" : "Animation in HTML, CSS, and JavaScript",
		"cover" : "anhtml.png",
		"description" : `<p>
							This book will help you create practical / usable / wickedly-cool
							animations in HTML, CSS, and JavaScript. Each chapter is
							filled with cleanly explained concepts, beautifully
							illustrated diagrams, colorific code snippets, and
							cringeworthy one-liners guaranteed to make your
							friend who laughs at everything groan.
						 </p>`,
        "link" : "https://www.amazon.com/Animation-HTML-JavaScript-Kirupa-Chinnathambi/dp/1502548704"
	},
	{
		"name" : "Foundation HTML5 Animation with JavaScript",
		"cover" : "Foundation-HTML5-Animation-with-JavaScript.jpg",
		"description" : `<p>
							Foundation HTML5 Animation with JavaScript covers everything that you need to know to create dynamic scripted animation using the HTML5 canvas. It provides information on all the relevant math you'll need, before moving on to physics concepts like acceleration, velocity, easing, springs, collision detection, conservation of momentum, 3D, and forward and inverse kinematics. Foundation HTML5 Animation with JavaScript is a fantastic resource for all web developers working in HTML5 or switching over from Flash to create standards-compliant games, applications, and animations that will work across all modern browsers and most mobile devices, including iPhones, iPads, and Android devices.
						 </p>`,
        "link" : "https://www.amazon.com/Foundation-HTML5-Animation-JavaScript-Lamberta/dp/1430236655/"
	}
];
