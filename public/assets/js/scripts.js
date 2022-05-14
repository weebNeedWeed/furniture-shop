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
		price: 6500000,
		description:
			"Ghế sofa, sô pha, ghế dài hay trường kỷ là một món đồ nội thất dành cho hai hay nhiều người cùng ngồi một lúc. Ghế gồm có phần mặt ngồi, tay vịn, tựa lưng được bọc một phần hoặc toàn bộ bằng da hay vải, dưới chỗ ngồi có lò xo và đệm. Do ghế này dài nên ngoài chức năng chủ yếu để ngồi thì còn có thể dùng để nằm ngủ.",
		vietnameseName: "Sofa",
		modelFolder: "./assets/models/sofa",
		image: "./assets/images/models/sofa.PNG",
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
		modelFolder: "./assets/models/office_chair",
		image: "./assets/images/models/office_chair.PNG",
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
			"Bàn làm việc phù hợp nhiều mục đích sử dụng. Chất lượng tốt. Giá ưu đãi.",
		vietnameseName: "Bàn làm việc",
		modelFolder: "./assets/models/computer_table",
		image: "./assets/images/models/computer_table.PNG",
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
			"Máy hát hay còn gọi là máy hát đĩa hoặc kèn hát, mà từ thập niên 1980 tiến triển thành máy quay đĩa được dùng trong giới DJ xoay bàn đĩa, là một thiết bị cơ học chuyên dùng để thu âm và tái tạo âm thanh. Máy hát do nhà bác học Thomas Edison người Mỹ phát minh vào năm 1877.",
		vietnameseName: "Máy hát đĩa kiểu cổ",
		modelFolder: "./assets/models/gramophone",
		image: "./assets/images/models/gramophone.PNG",
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
			"Ghế nhựa từ lâu là một vật dụng phổ biến tại Việt Nam. Mua ngay bộ 4 ghế nhựa có tựa lưng giá ưu đãi chỉ có tại NVM.",
		vietnameseName: "Bộ 4 ghế nhựa",
		modelFolder: "./assets/models/classic_plastic_chairs",
		image: "./assets/images/models/classic_plastic_chairs.PNG",
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
		price: 10000000,
		description: "Bàn ăn mặt kính kèm 6 ghế giá ưu đãi chỉ có tại NVM.",
		vietnameseName: "Bộ bàn ăn (1 bàn, 6 ghế)",
		modelFolder: "./assets/models/dining_table_glass",
		image: "./assets/images/models/dining_table_glass.PNG",
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
		description: "Bàn ăn nhựa sang trọng 4 ghế giá ưu đãi chỉ có tại NVM.",
		vietnameseName: "Bộ bàn ăn nhựa(1 bàn, 4 ghế)",
		modelFolder: "./assets/models/simple_dining_table",
		image: "./assets/images/models/simple_dining_table.PNG",
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
		price: 250000,
		description:
			"Ghế nhựa có tựa lưng và có thể gấp lại giúp tiết kiệm diện tích nhà.",
		vietnameseName: "Ghế nhựa gấp có tựa lưng",
		modelFolder: "./assets/models/chair",
		image: "./assets/images/models/chair.PNG",
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
		price: 480000,
		description:
			"Ghế dựa có phần đệm mềm thoáng khí tốt và giá cả phải chăng. Chỉ có tại NVM!",
		vietnameseName: "Ghế văn phòng đệm có tựa lưng",
		modelFolder: "./assets/models/office_chair2",
		image: "./assets/images/models/office_chair2.PNG",
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
		price: 3500000,
		description:
			"Bộ bàn ghế(ăn) gồm 1 bàn và 4 ghế mẫu mã đẹp, chất lượng cao.",
		vietnameseName: "Bộ bàn ăn kiểu dáng đẹp",
		modelFolder: "./assets/models/dining_set",
		image: "./assets/images/models/dining_set.PNG",
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
		price: 149000,
		description:
			"Đồng hồ treo tường chính hãng, giá cả phải chăng, mua ngay kẻo lỡ.",
		vietnameseName: "Đồng hồ treo tường",
		modelFolder: "./assets/models/analog_clock",
		image: "./assets/images/models/analog_clock.PNG",
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
			"Nếu bạn cảm thấy bàn làm việc hoặc bàn học quá trống trải, không được đẹp mắt. Còn chần chờ gì nữa mà không nhanh tay đặt mua ngay một chiếc đồng hồ để bàn tại NVM phục vụ mục đích trang trí và quản lý thời gian.",
		vietnameseName: "Đồng hồ trang trí(để bàn)",
		modelFolder: "./assets/models/clock_ornament",
		image: "./assets/images/models/clock_ornament.PNG",
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
		description: "Đèn để bàn cam kết chất lượng, giá ưu đãi chỉ có tại NVM",
		vietnameseName: "Đèn để bàn",
		modelFolder: "./assets/models/table_lamp",
		image: "./assets/images/models/table_lamp.PNG",
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
	(elm) =>
		(elm.texture = [
			0xa5d4dc, 0xcaabbf, 0xffc6ee, 0xfee2c5, 0xf7f0e6, 0xd1e5b2,
		]),
);

const NEWS = [
	{
		id: 0,
		title: "Tuyển dụng Nhân viên thiết kế nội thất",
		description: `MÔ TẢ CÔNG VIỆC
- Thiết kế nội thất (Furniture design)
- Lấy mẫu (Sampling)
- Lương: 8tr-10tr/ tháng
YÊU CẦU CÔNG VIỆC
- Kinh nghiệm: 3 năm trở lên
- Bằng Đại học /Cao đẳng
- Thông thạo: Autocad / Solid works
`,
		image: "/assets/images/news/tuyen-dung.png",
	},
	{
		id: 1,
		title: "Người dùng giờ đây đã có thể xem thử các sản phẩm 3d qua website",
		description: `Ngoài những công cụ thiết kế 3D có sẵn trên thị trường thì giờ đã có thêm những website thiết kế 3D online. Tất nhiên so với những phần mềm trên máy tính có dung lượng lên tới vài GB thì các phần mềm vẽ 3D online này chỉ hữu dụng ở một khoảng nào đó. Bạn chỉ có thể vẽ 1 số hình thù đơn giản hoặc đa số là sử dụng hình có sẵn. Mặc dù không được tiện lợi như các phần mềm nhưng nó vẫn được nhiều người sử dụng bởi những ưu điểm sau:
•	Tiện lợi, không cần cài đặt cho máy tính.
•	Không yêu cầu cấu hình cao.
•	Có thể sử dụng miễn phí và trả phí.
•	Dễ dàng thao tác, giao diện đơn giản.
•	Xuất file ra nhiều định dạng.

Top 3 Website thiết kế 3D online cực hay bạn nên thử
_ Vectary
_ SketchUp
_ Planner5D
`,
		image: "/assets/images/news/website-3d-vectary.png",
	},
	{
		id: 2,
		title: "Xu hướng nội thất thời đại 4.0 dành cho giới trẻ Việt",
		description:
			"Trong thời đại 4.0 hiện nay, giới trẻ Việt ngày càng dành nhiều sự quan tâm đến thiết kế nội thất, nhà ở. Thị hiếu nội thất ngày càng thay đổi. Đặc biệt là khi công nghệ bùng nổ, các xu hướng nội thất mới được cập nhật thường xuyên. Dưới đây là 5 xu hướng nội thất được giới trẻ yêu thích nhất.",
		image: "/assets/images/news/xu-huong.png",
	},
	{
		id: 3,
		title: "Black friday – Săn nội thất liền tay – Sale up to 70%",
		description:
			"Ngày Black Friday (Thứ 6 đen) đã không còn quá xa lạ đối với người dân Việt Nam. Black Friday diễn ra mỗi năm duy nhất một lần vào thứ sáu đầu tiên sau Lễ Tạ ơn và lễ này rơi vào ngày thứ 5 tuần thứ 4 trong tháng 11 hàng năm. ",
		image: "/assets/images/news/black-friday.png",
	},
	{
		id: 4,
		title: "Voucher ưu đãi cho 1000 khách hàng đầu tiên",
		description: `Nhân dịp cuối năm, để bày tỏ sự tri ân và xây dựng mối quan hệ “thân thiết” với khách hàng, shop sẽ tặng voucher trị giá 1.000.000đ cho 1000 khách hàng đầu tiên.
Nhanh tay nhận ngay voucher!!!
`,
		image: "/assets/images/news/voucher.png",
	},
];

// Add favicon to <head>
$("head").append(`
  <link rel="icon" type="image/png" href="./assets/images/favicon.png" />
`);
