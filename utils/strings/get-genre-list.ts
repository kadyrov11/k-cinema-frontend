export const getGenreList = (index: number, length: number, name: string) =>
	index + 1 === length ? name : name + ', '

interface IArrayItem {
	name: string
}

export const getGenresString = (array: IArrayItem[]) =>
	array.map((i) => i.name).join(', ')
