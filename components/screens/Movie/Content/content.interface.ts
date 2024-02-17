export interface ILink {
	_id: string
	link: string
	title: string
}

export interface IDescription {
	name: string
	links: ILink[]
}
