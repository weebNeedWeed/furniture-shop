const hexToRGB = (hex) => {
	const i = hex;
	const rgb = {
		r: (i >> 16) & 0xff, // or `(i & 0xFF0000) >> 16`
		g: (i >> 8) & 0xff, // or `(i & 0x00FF00) >>  8`
		b: i & 0xff, // or ` i & 0x0000FF       `
	};

	return rgb;
};

const debounce = function (fn, time = 300) {
	let timer;

	return (...args) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn.apply(this, args);
		}, time);
	};
};

const SHOPITEMS = [
	{
		name: "Sofa",
		price: 2000000,
		description:
			"Ghế sofa, sô pha, ghế dài hay trường kỷ là một món đồ nội thất dành cho hai hay nhiều người cùng ngồi một lúc. Ghế gồm có phần mặt ngồi, tay vịn, tựa lưng được bọc một phần hoặc toàn bộ bằng da hay vải, dưới chỗ ngồi có lò xo và đệm.Do ghế này dài nên ngoài công năng chủ yếu để ngồi thì còn có thể dùng để nằm ngủ.",
		vietnameseName: "Sofa",
		modelFolder: "/assets/models/sofa",
		image: "/assets/images/models/sofa.PNG",
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
		texture: [0xffffff],
	},
	{
		name: "Office chair",
		price: 500000,
		description:
			"Ghế văn phòng là loại ghế được thiết kế chủ yếu để ngồi làm việc tại các bàn, phòng chốn công sở. Ngoài mục đích để ngồi, sản phẩm còn có cấu tạo phù hợp với thể trạng và môi trường của người dùng. Các bạn cũng có thể dễ dàng kết hợp với những chiếc bàn xếp bàn gấp tại văn phòng để làm “cặp đôi” tiện lợi cho không gian văn phòng của bạn, vừa tiết kiệm không gian và đáp ứng nhu cầu nghỉ ngơi thư giãn một cách tiện lợi.",
		vietnameseName: "Ghế văn phòng",
		modelFolder: "/assets/models/office_chair",
		image: "/assets/images/models/office_chair.PNG",
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
	{
		name: "Computer table",
		price: 699000,
		description:
			"Bàn làm việc phù hợp nhiều mục đích sử dụng. Chất lượng tốt. Giá mềm.",
		vietnameseName: "Bàn làm việc",
		modelFolder: "/assets/models/computer_table",
		image: "/assets/images/models/computer_table.PNG",
		config: {
			target: {
				x: 0,
				y: 0.5,
				z: 0,
			},
			camera: {
				x: 0,
				y: 2,
				z: -1,
			},
			scale: {
				x: 0.4,
				y: 0.4,
				z: 0.4,
			},
		},
		texture: [0xffffff],
	},
];

SHOPITEMS.forEach(
	(elm) => (elm.texture = [0xa5d4dc, 0xf7f7f7, 0xebd2d1, 0xcaabbf]),
);

// Add favicon to <head>
$("head").append(`
  <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
`);
