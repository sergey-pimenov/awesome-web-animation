export function sortByDate (data) {
	// Get from https://learn.javascript.ru/task/sort-objects
	function compare(objectA, objectB) {
		var timeA = new Date(objectA.time_start).getTime();
		var timeB = new Date(objectB.time_start).getTime();

	  return timeA - timeB;
	}

	return data.sort(compare);
}