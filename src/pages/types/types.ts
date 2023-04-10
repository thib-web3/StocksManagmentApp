export interface Article {
    ART_ID: number
    REF: string
    Description: string
    Price: string
    Dimensions: string
    Supplier: string
}

export interface Articles {
    articles: Article[]
}

export interface Item {
    name: string
    reference: string
    company: string
}
