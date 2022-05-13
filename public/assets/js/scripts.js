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

const formatVND = (number) => {
	const formatted = Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(number);

	return formatted.substring(0, formatted.length - 2);
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
	{
		name: "Gramophone",
		price: 1900000,
		description:
			"Máy hát hay còn gọi là máy hát đĩa hoặc kèn hát, mà từ thập niên 1980 tiến triển thành máy quay đĩa được dùng trong giới DJ xoay bàn đĩa, là một thiết bị cơ học chuyên dùng để thu âm và tái tạo âm thanh. Máy hát do nhà bác học Thô-mát Ê-đi-xơn người Mỹ phát minh vào năm 1877.",
		vietnameseName: "Máy hát đĩa kiểu cổ",
		modelFolder: "/assets/models/gramophone",
		image: "/assets/images/models/gramophone.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 0,
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
	{
		name: "Classic plastic chairs",
		price: 199000,
		description:
			"Ghế nhựa từ lâu là một vật dụng phổ biến tại Việt Nam. Mua ngay bộ 4 giá ghế nhựa có tựa lưng giá rẻ tại NVM.",
		vietnameseName: "Bộ 4 ghế nhựa",
		modelFolder: "/assets/models/classic_plastic_chairs",
		image: "/assets/images/models/classic_plastic_chairs.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 0,
				z: 4,
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
		name: "Dining table glass",
		price: 699000,
		description: "Bàn ăn mặt kính kèm 6 ghế giá mềm chỉ có tại NVM.",
		vietnameseName: "Bộ bàn ăn (1 bàn, 6 ghế) giá rẻ",
		modelFolder: "/assets/models/dining_table_glass",
		image: "/assets/images/models/dining_table_glass.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 0,
				z: 4,
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
		name: "Simple dining table",
		price: 525000,
		description: "Bàn ăn nhựa sang trọng 4 ghế giá rẻ chỉ có tại NVM.",
		vietnameseName: "Bộ bàn ăn nhựa(1 bàn, 4 ghế)",
		modelFolder: "/assets/models/simple_dining_table",
		image: "/assets/images/models/simple_dining_table.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 10,
				z: 10,
			},
			scale: {
				x: 0.01,
				y: 0.01,
				z: 0.01,
			},
		},
		texture: [0xffffff],
	},
	{
		name: "Chair",
		price: 199000,
		description:
			"Ghế nhựa có tựa lưng và có thể gấp lại giúp tiết kiệm diện tích nhà.",
		vietnameseName: "Ghế nhựa gấp có tựa lưng",
		modelFolder: "/assets/models/chair",
		image: "/assets/images/models/chair.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 10,
				z: 10,
			},
			scale: {
				x: 0.01,
				y: 0.01,
				z: 0.01,
			},
		},
		texture: [0xffffff],
	},
	{
		name: "Office chair 2",
		price: 380000,
		description:
			"Ghế dựa có phần đệm mềm thoáng khí tốt và giá cả phải chăng. Chỉ có tại NVM!",
		vietnameseName: "Ghế văn phòng đệm có tựa lưng",
		modelFolder: "/assets/models/office_chair2",
		image: "/assets/images/models/office_chair2.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1,
				z: 1,
			},
			scale: {
				x: 0.5,
				y: 0.5,
				z: 0.5,
			},
		},
		texture: [0xffffff],
	},
	{
		name: "Dining set",
		price: 830000,
		description: "Bộ bàn ghế(ăn) gồm 1 bàn và 4 ghế mẫu mã đẹp, chất lượng cao",
		vietnameseName: "Bộ bàn ăn kiểu dáng đẹp",
		modelFolder: "/assets/models/dining_set",
		image: "/assets/images/models/dining_set.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1,
				z: 1,
			},
			scale: {
				x: 0.5,
				y: 0.5,
				z: 0.5,
			},
		},
		texture: [0xffffff],
	},
	{
		name: "Analog clock",
		price: 91000,
		description:
			"Đồng hồ treo tường chính hãng, giá cả phải chăng, mua ngay kẻo lỡ",
		vietnameseName: "Đồng hồ treo tường",
		modelFolder: "/assets/models/analog_clock",
		image: "/assets/images/models/analog_clock.PNG",
		config: {
			target: {
				x: 0,
				y: 0,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1,
				z: 1,
			},
			scale: {
				x: 0.5,
				y: 0.5,
				z: 0.5,
			},
		},
		texture: [0xffffff],
	},
	{
		name: "Ornament clock",
		price: 250000,
		description:
			"Nếu bạn cảm thấy bàn làm việc hoặc bàn học quá trống rỗng, không được đẹp mắt. Còn chờ gì nữa mà không mua ngay một chiếc đồng hồ để bàn tại NVM phục vụ mục đích trang trí và quản lý thời gian.",
		vietnameseName: "Đồng hồ trang trí(để bàn)",
		modelFolder: "/assets/models/clock_ornament",
		image: "/assets/images/models/clock_ornament.PNG",
		config: {
			target: {
				x: 0,
				y: 0.3,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1,
				z: 0.5,
			},
			scale: {
				x: 1,
				y: 1,
				z: 1,
			},
		},
		texture: [0xffffff],
	},
	{
		name: "Table lamp",
		price: 130000,
		description: "Đèn để bàn cam kết giá chất lượng, giá rẻ chỉ có tại NVM",
		vietnameseName: "Đèn để bàn",
		modelFolder: "/assets/models/table_lamp",
		image: "/assets/images/models/table_lamp.PNG",
		config: {
			target: {
				x: 0,
				y: 0.5,
				z: 0,
			},
			camera: {
				x: 0,
				y: 1.5,
				z: 2,
			},
			scale: {
				x: 0.3,
				y: 0.3,
				z: 0.3,
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
