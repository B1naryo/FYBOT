function substituirIframe(url) {
	const iframe = document.getElementById('my-iframe');
	if (url.includes('youtube.com') || url.includes('youtu.be')) {
		iframe.setAttribute('src', `https://www.youtube.com/embed/${obterVideoId(url)}?start=1`);
		iframe.setAttribute('title', url);
	} else if (url.includes('vimeo.com')) {
		iframe.setAttribute('src', `https://player.vimeo.com/video/${obterVideoId(url)}`);
		iframe.setAttribute('title', url);
	} else if (url.includes('facebook.com')) {
		iframe.setAttribute('src', `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0&width=560`);
		iframe.setAttribute('title', url);
	} else {
		alert('URL inválida. Tente novamente com uma URL do YouTube, Vimeo ou Facebook.');
	}
}

function obterVideoId(url) {
	if (url.includes('youtube.com')) {
		const regex = /v=([^&]+)/;
		return url.match(regex)[1];
	} else if (url.includes('youtu.be')) {
		const regex = /youtu.be\/([^&]+)/;
		return url.match(regex)[1];
	} else if (url.includes('vimeo.com')) {
		const regex = /vimeo.com\/([^&]+)/;
		return url.match(regex)[1];
	} else {
		return null;
	}
}
