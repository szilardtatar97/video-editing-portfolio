export function extractYouTubeId(url: string): string | null {
	const patterns = [
		/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match?.[1]) return match[1];
	}

	return null;
}

export function getYouTubeThumbnail(url: string): string {
	const id = extractYouTubeId(url);
	// maxresdefault is native 16:9; hqdefault is 4:3 with letterboxing baked in
	return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

export function getYouTubeEmbedUrl(url: string): string {
	const id = extractYouTubeId(url);
	return id ? `https://www.youtube.com/embed/${id}` : url;
}
