export interface Datum {
    id: number;
    image_name: string;
    image_url: string;
    image_description:string | null;
}

export interface imageResponseType {
    data: Datum[];
}

