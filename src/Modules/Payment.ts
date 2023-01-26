import { AxiosInstance } from 'axios';

export class Payment {
  constructor(private http: AxiosInstance) {}

  async getEscrowDetail(params: { order_sn: string }): Promise<{
    error: string;
    message: string;
    response: any;
    request_id: string;
  }> {
    const apiPath = 'payment/get_escrow_detail';
    const result = await this.http.get(apiPath, { params });
    return result.data;
  }
}
