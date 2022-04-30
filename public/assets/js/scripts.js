const hexToRGB = (hex) => {
	const i = hex;
	const rgb = {
		r: (i >> 16) & 0xff, // or `(i & 0xFF0000) >> 16`
		g: (i >> 8) & 0xff, // or `(i & 0x00FF00) >>  8`
		b: i & 0xff, // or ` i & 0x0000FF       `
	};

	return rgb;
};

const SHOPITEMS = [
	{
		name: "Sofa",
		price: 20,
		modelFolder: "/assets/models/sofa",
		image: "/assets/images/models/sofa.png",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1,
				z: -30,
			},
			scale: {
				x: 0.1,
				y: 0.1,
				z: 0.1,
			},
		},
		texture: [0xffffff, 0x00ff00],
	},
	{
		name: "Office chair",
		price: 30,
		modelFolder: "/assets/models/office_chair",
		image: "/assets/images/models/office_chair.png",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1,
				z: -1,
			},
			scale: {
				x: 0.8,
				y: 0.8,
				z: 0.8,
			},
		},
		texture: [0xffffff],
	},
];
