document.getElementById('file').addEventListener('change', function (e) {
	const getWidthAndHeightFromImg = (width, height) => {
		const img = new Image();
		img.src = URL.createObjectURL(e.target.files[0]);
		// await img.decode();
		img.onload = () => {
			// ctx.drawImage(img, 0, 0);
			// const imageData = ctx.getImageData(0, 0, img.width, img.height);
			console.log(img.width + ' ' + img.height);

			return {
				width: img.width,
				height: img.height,
			};
		};
		return { width, height };
	};

	(function getData() {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = URL.createObjectURL(e.target.files[0]);
		img.onload = () => {
			ctx.drawImage(img, 0, 0);
			const imageData = ctx.getImageData(0, 0, img.width, img.height);
			return {
				width: img.width,
				height: img.height,
			};
		};
		const { width, height } = getWidthAndHeightFromImg();

		console.log({ width, height });
	})();
});
