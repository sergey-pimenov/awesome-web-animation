/*** GUIDE
	Add tool in the end of object toolsList. It must be the array with
	5 elements.

	Example of tool:
	['Snap.svg', 'snapsvg.png', ['SVG'], '81', 'http://snapsvg.io']

	Explanation:
	[ | Name(1) |, | Logo(2) |, | Tags(3) | , | Size kb (4) |, | Link (5) |]

	1. Name of tool. Type: String. Must start with a capital letter;

	2. Logo of tool. Type: String. Name of image that	located in 'data/logos/'.
		 You don't need define path to image, just declatate name and extention. For example: 'snapsvg.png';

	3. Tags. Type: Array. Technologies/tags of tool. Available tags: 'SVG',
		 'DOM', 'CSS', 'Canvas', 'Scroll', 'Easing', 'GUI'. At now use only these tags;

	4. Size of tool. Type: String. Define size of tool in kilobytes. Use value 'none'
		 if tool doesn't have size;

	5. Link to tool. Type: String. Define absolute url to tool.
		 Please don't use reference links.
***/

var toolsList = [
	['Snap.svg', 'snapsvg.png', ['SVG'], '81', 'http://snapsvg.io'],
	['Svg.js', 'svgjs.png', ['SVG'], '64', 'http://svgjs.com'],
	['GSAP', 'gsap.jpg', ['DOM', 'SVG'], '41', 'https://greensock.com'],
	['Anime.js', 'animeJs.png', ['DOM'], '11', 'http://anime-js.com'],
	['Animo.js', 'animojs.svg', ['DOM'], '6', 'https://animo.js.org'],
	['CreateJs', 'createjs.svg', ['Canvas', 'DOM'], '186', 'http://www.createjs.com'],
	['Bhive', 'bhive.png', ['Canvas'], '36', 'http://www.bhivecanvas.com'],
	['Two.js', 'twojs.png', ['Canvas'], '50', 'https://two.js.org'],
	['Ocanvas', 'ocanvas.png', ['Canvas'], '73', 'http://ocanvas.org'],
	['AOS', 'aos.svg', ['Scroll'], '13', 'https://michalsnik.github.io/aos'],
	['Wow.js', 'wow-logo.jpg', ['Scroll'], '13', 'http://mynameismatthieu.com/WOW'],
	['ScrollReveal', 'scrollrevealjs.svg', ['Scroll'], '9', 'https://scrollrevealjs.org'],
	['Scroll magic', 'scrollmagic.png', ['Scroll'], '17', 'http://scrollmagic.io'],
	['Ceaser', 'ceaser.svg', ['Easing'], 'none', 'https://matthewlein.com/ceaser'],
	['Magic Animations', 'magicanimations.png', ['CSS'], '16', 'https://minimamente.com/example/magic_animations'],
	['Cubic Bezier', 'cubicbezier.svg', ['Easing'], 'none', 'http://cubic-bezier.com'],
	['Buttons', 'buttons.png', ['CSS'], '80', 'http://unicorn-ui.com/buttons'],
	['Stylie', 'stylie.png', ['GUI'], 'none', 'http://jeremyckahn.github.io/stylie'],
	['Keyframer', 'keyframer.svg', ['GUI'], 'none', 'http://alexberg.in/keyframer'],
	['Animateplus', 'animateplus.svg', ['SVG', 'CSS'], '9', 'https://github.com/bendc/animateplus'],
	['Vivus', 'vivus.png', ['SVG'], '11', 'http://maxwellito.github.io/vivus'],
	['Raphaël', 'raphaël.svg', ['SVG'], '91', 'http://dmitrybaranovskiy.github.io/raphael'],
	['Walkway', 'walkway.svg', ['SVG'], '4', 'https://connoratherton.com/walkway'],
	['BonsaiJS', 'bonsaijs.svg', ['SVG'], '130', 'http://bonsaijs.org'],
	['ProgressbarJS', 'progressbarjs.svg', ['SVG'], '21', 'http://kimmobrunfeldt.github.io/progressbar.js'],
	['SVG Morpheus', 'SVGMorpheus.svg', ['SVG'], '22', 'http://alexk111.github.io/SVG-Morpheus'],
	['VelocityJS', 'velocityjs.svg', ['SVG', 'DOM'], '43', 'http://velocityjs.org'],
	['MoveJS', 'movejs.svg', ['DOM'], '14', 'http://visionmedia.github.io/move.js'],
	['TextillateJS', 'textillatejs.svg', ['DOM'], '8', 'http://textillate.js.org'],
	['Firmin', 'firmin.svg', ['DOM'], '8', 'http://extralogical.net/projects/firmin'],
	['AliceJS', 'alicejs.png', ['DOM'], '50', 'http://blackberry.github.io/Alice'],
	['Motio', 'motio.svg', ['DOM'], '4', 'http://darsa.in/motio'],
	['Animatic', 'animaticjs.svg', ['DOM'], '22', 'http://lvivski.com/animatic'],
	['Animate.css', 'animatecss.svg', ['CSS'], '17', 'https://daneden.github.io/animate.css'],
	['Motion UI', 'motionui.svg', ['CSS'], '23', 'http://zurb.com/playground/motion-ui'],
	['CSS loaders', 'cssloaders.svg', ['GUI'], 'none', 'https://projects.lukehaas.me/css-loaders'],
	['BounceJS', 'bouncejs.svg', ['GUI'], 'none', 'http://bouncejs.com'],
	['Spinkit', 'spinkit.svg', ['GUI', 'CSS'], 'none', 'http://tobiasahlin.com/spinkit'],
	['Cssanimate', 'cssanimate.svg', ['GUI', 'CSS'], 'none', 'http://cssanimate.com'],
	['CSS Animation Kit', 'cssanimationkit.svg', ['GUI', 'CSS'], 'none', 'http://angrytools.com/css/animation'],
	['Superscrollorama', 'superscrollorama.svg', ['Scroll'], '16', 'http://johnpolacek.github.io/superscrollorama'],
	['CSS3 Animation Cheat Sheet', 'CSS3AnimationCheatSheet.svg', ['CSS'], '12', 'http://www.justinaguilar.com/animations'],
	['Skrollr', 'skrollr.svg', ['Scroll'], '12', 'http://prinzhorn.github.io/skrollr'],
	['FabricJS', 'fabricjs.svg', ['Canvas'], '248', 'http://fabricjs.com'],
	['PaperJS', 'paperjs.svg', ['Canvas'], '277', 'http://paperjs.org'],
	['Konvajs', 'konva.svg', ['Canvas'], '138', 'https://konvajs.github.io'],
	['Bezier easing', 'beziereasing.svg', ['Easing'], 'none', 'https://github.com/gre/bezier-easing'],
	['Just animate', 'just-animate.svg', ['DOM'], '14', 'https://just-animate.github.io/'],
	['Mo.js', 'mojs.svg', ['SVG'], '130', 'http://mojs.io/'],
	['Popmotion', 'popmotion.svg', ['DOM', 'SVG'], '41', 'https://popmotion.io/'],
	['PixiJS', 'pixi.png', ['Canvas'], '415', 'http://www.pixijs.com/'],
	['Glsl easings', 'glsl.svg', ['Easing'], 'none', 'https://github.com/glslify/glsl-easings']
];
