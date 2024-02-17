export interface IGalleryItem {
	name: string
	link: string
	content?: {
		title: string
		subtitle?: string
	}
	posterPath: string
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'vertical' | 'horizontal'
}
