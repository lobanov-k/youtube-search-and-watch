const youTubeApiKey = "AIzaSyBwFE4XTwXzl2WYvaGyOXCHHplcgZNfx-I";
export function getRequestString(queryString) {
	return `https://www.googleapis.com/youtube/v3/
		search?part=snippet&maxResults=10&order=relevance
		&q=${encodeURIComponent(queryString)}&safeSearch=strict&type=video
		&key=${youTubeApiKey}`;
};