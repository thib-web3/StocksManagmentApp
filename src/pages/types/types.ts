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

export interface Supplier {
    FOU_ID: number
    NOM: string
    VIL: string
    EMAIL: string
    TEL: string
    PAY: string
}

export interface Filter {
    name: string
    info: any
}
