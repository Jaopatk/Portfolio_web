new fullpage('#fullpage', {
	autoScrolling: true,
	verticalCentered: true,
	anchors: ['Home', 'About', 'Contract'],
	onLeave: function (origin, destination, direction) {
		const section = destination.item;
		const title = section.querySelector("h1");
		const ptext = section.querySelector("p");
		const tl = new TimelineMax({
			delay: 0.5
		});
		tl.fromTo(title, 0.5, {
			y: "50",
			opacity: 0
		}, {
			y: "0",
			opacity: 1
		}, {
			ease: "bounce"
		});
		tl.fromTo(ptext, 0.5, {
			y: "50",
			opacity: 0
		}, {
			y: "0",
			opacity: 1
		});


	}

});