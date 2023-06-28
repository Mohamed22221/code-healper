export function filterById(list, id) {
	const resultFilter = list.filter((item) => item.id === id)
	return resultFilter;
  }