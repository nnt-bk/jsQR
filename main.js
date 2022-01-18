document.getElementById('file').addEventListener('change', function (e) {
	const getData = async () => {
		// const canvas = document.createElement('canvas');
		// const ctx = canvas.getContext('2d');
		// const img = new Image();
		// console.log(e.target.files[0]);
		// img.src = URL.createObjectURL(e.target.files[0]);
		// await img.decode();
		// ctx.drawImage(img, 0, 0);
		// const imageData = ctx.getImageData(0, 0, img.width, img.height);
		// return imageData;

		function getAllIndexes(arr, val) {
			var indexes = [],
				i = -1;
			while ((i = arr.indexOf(val, i + 1)) != -1) {
				indexes.push(i);
			}
			return indexes;
		}
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();

		img.src = URL.createObjectURL(e.target.files[0]);
		img.onload = async () => {
			ctx.drawImage(img, 0, 0);
			const imageData = ctx.getImageData(0, 0, img.width, img.height);

			console.log(imageData);
			const code = await jsQR(
				imageData.data,
				imageData.width,
				imageData.height
			);
			console.log('Found QR Code', code);
			// console.log(getAllIndexes(imageData.data, 0));
		};
	};

	const handleData = async () => {
		await getData();
		// const imageData = await getData();

		// const payload = {
		// 	data: imageData.data,
		// 	width: imageData.width,
		// 	height: imageData.height,
		// };
		// console.log(imageData.data);

		// const code = jsQR(imageData.data, imageData.width, imageData.height);
		// console.log('FOUND QR Code', code);
		// payload = new FormData();
		// payload.append('name', 'Thuan Nguyen');
		// console.log(payload);
		// const serverURL = 'http://localhost:5000';
		// const response = await fetch(serverURL, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(payload),
		// 	// body: JSON.stringify({ name: 'Thuan' }),
		// });

		// console.log(response.json((reponse)));
		// response.json().then((data) => console.log(data));
	};

	handleData();
	// (async () => {
	// 	const response = await fetch('http://localhost:5000', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ firstName: 'Thuan', lastName: 'Nguyen' }),
	// 	});

	// 	response.json().then((data) => console.log(data));
	// })();
});
document.getElementById('file').addEventListener('change', function (e) {});
