export interface Datum {
    id: number;
    study_name: string;
    study_url: string;
}

export interface Result {
    data: Datum[];
}

export interface studyResponseType {
    code: number;
    message: string;
    result: Result;
}