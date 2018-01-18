/*** GUIDE
	Add article in the end of object articlesList. It must be the object with 4 properties.

	Example of article:
	{
		"title" : "Scaling Responsive Animations", // 1
		"date" : "19.12.16", // 2
		"link" : "https://css-tricks.com/scaling-responsive-animations/", // 3
		"type" : "text" // 4
	}

	Explanation:
	1. Title of article. Type: String.

	2. Date of publishing article. Type: String. Format: dd.mm.yy

	3. Link to article. Type: String. Define absolute url to article. Please don't use reference links.

	4. Media-type of article. Type: String. Values: "text", "video".
***/

var articlesList = [
	{
		"name" : "CSS Animation",
		"id" : "CSSAnimation",
		"articles" : [
			{
				"title" : "Scaling Responsive Animations",
				"date" : "19.12.16",
				"link" : "https://css-tricks.com/scaling-responsive-animations/",
				"type" : "text"
			},
			{
				"title" : "Swapping State with CSS Keyframes",
				"date" : "22.11.16",
				"link" : "https://css-tricks.com/swapping-state-css-keyframes/",
				"type" : "text"
			},
			{
				"title" : "The complete guide to getting 60fps animations with CSS",
				"date" : "02.11.16",
				"link" : "https://blog.gyrosco.pe/smooth-css-animations-7d8ffc2c1d29",
				"type" : "text"
			},
			{
				"title" : "Using CSS Transitions on Auto Dimensions",
				"date" : "03.10.17",
				"link" : "https://css-tricks.com/using-css-transitions-auto-dimensions/",
				"type" : "text"
			},
			{
				"title" : "Complex Responsive Animations",
				"date" : "25.06.15",
				"link" : "https://www.youtube.com/watch?v=09_8edPAsR8",
				"type" : "video"
			},
			{
				"title" : "Debugging CSS Keyframe Animations",
				"date" : "03.08.15",
				"link" : "https://css-tricks.com/debugging-css-keyframe-animations/",
				"type" : "text"
			},
			{
				"title" : "Starting CSS Animations Mid-Way",
				"date" : "19.08.2014",
				"link" : "https://css-tricks.com/starting-css-animations-mid-way/",
				"type" : "text"
			},
			{
				"title" : "Silky Smooth Animation with CSS",
				"date" : "30.09.2016",
				"link" : "https://www.youtube.com/watch?v=bEoLCZzWZX8",
				"type" : "video"
			},
			{
				"title" : "CSS Animation Tricks",
				"date" : "01.16.14",
				"link" : "https://css-tricks.com/css-animation-tricks/",
				"type" : "text"
			}
		]
	},
	{
		"name" : "SVG Animation",
		"id" : "SVGAnimation",
		"articles" : [
			{
				"title" : "Interactive Data Visualization: Animating the viewBox",
				"date" : "08.06.16",
				"link" : "https://css-tricks.com/interactive-data-visualization-animating-viewbox/",
				"type" : "text"
			},
			{
				"title" : "Animating SVG with CSS",
				"date" : "17.04.14",
				"link" : "https://css-tricks.com/animating-svg-css/",
				"type" : "text"
			},
			{
				"title" : "SVG Line Animation Tutorial with CSS & Other Fun Stuff",
				"date" : "27.04.14",
				"link" : "https://www.youtube.com/watch?v=XBdbgD2BaEI",
				"type" : "video"
			},
			{
				"title" : "“Drawing On” Animation - CSS Experiments",
				"date" : "21.07.15",
				"link" : "https://www.youtube.com/watch?v=FGblL4QHrAw",
				"type" : "video"
			},
			{
				"title" : "Create a Single Animated SVG File Containing CSS, Fonts & JavaScript",
				"date" : "08.07.15",
				"link" : "https://www.youtube.com/watch?v=S6P_N2JWSrc",
				"type" : "video"
			},
			{
				"title" : "Transforms on SVG Elements",
				"date" : "05.05.15",
				"link" : "https://css-tricks.com/transforms-on-svg-elements/",
				"type" : "text"
			},
			{
				"title" : "How SVG Shape Morphing Works",
				"date" : "24.10.14",
				"link" : "https://css-tricks.com/svg-shape-morphing-works/",
				"type" : "text"
			},
			{
				"title" : "Three Ways to Animate SVG",
				"date" : "14.12.14",
				"link" : "https://css-tricks.com/video-screencasts/135-three-ways-animate-svg/",
				"type" : "video"
			},
			{
				"title" : "The Many Tools for Shape Morphing",
				"date" : "24.04.17",
				"link" : "https://css-tricks.com/many-tools-shape-morphing/",
				"type" : "text"
			},
			{
				"title" : "Weighing SVG Animation Techniques (with Benchmarks)",
				"date" : "27.01.15",
				"link" : "https://css-tricks.com/weighing-svg-animation-techniques-benchmarks/",
				"type" : "text"
			},
			{
				"title" : "Intricate SVG Animations",
				"date" : "04.08.16",
				"link" : "https://www.youtube.com/watch?v=wc8ovZZ78SY",
				"type" : "video"
			},
			{
				"title" : "The Simple Intro to SVG Animation",
				"date" : "31.07.14",
				"link" : "https://davidwalsh.name/svg-animation",
				"type" : "text"
			},
			{
				"title" : "Masking SVG Animations",
				"date" : "15.12.13",
				"link" : "https://medium.com/@gordonnl/stylised-line-animations-ded23320ffe5",
				"type" : "text"
			},
			{
				"title" : "SVG Line Animation for the Uninitiated",
				"date" : "12.11.16",
				"link" : "https://medium.com/bitmatica-lab/svg-line-animation-for-the-uninitiated-5a65d91c6044",
				"type" : "text"
			}
		]
	}
];
