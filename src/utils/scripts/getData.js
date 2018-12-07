export function getData(url, callback) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);

	xhr.onload = function(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(xhr.responseText)
    }
	}

	xhr.send(null);
}