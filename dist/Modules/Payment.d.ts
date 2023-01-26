import { AxiosInstance } from 'axios';
export declare class Payment {
    private http;
    constructor(http: AxiosInstance);
    getEscrowDetail(params: {
        order_sn: string;
    }): Promise<{
        error: string;
        message: string;
        response: any;
        request_id: string;
    }>;
}
