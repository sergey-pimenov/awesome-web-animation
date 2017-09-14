export function getData(url, callback) {
	var xhr = new XMLHttpRequest();

	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('GET', url, true);

	xhr.onload = function(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			callback(xhr.responseText)
    }
	}

	// 3. Отсылаем запрос
	xhr.send(null);
}