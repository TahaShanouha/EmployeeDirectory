import { IAbstractRecord } from "../models/general";


export default class DataService {
  private static baseUrl = '';

  public static async setBaseUrl(baseUrl: string) {
    if (!this.baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  public static async get(
    apirUrl: string,
    init?: RequestInit,
    secure = true,
  ): Promise<Response> {
    return this.fetch(
      this.baseUrl + apirUrl,
      {
        method: 'GET',
        ...init,
      },
      secure,
    );
  }

  public static async post(
    apirUrl: string,
    body: IAbstractRecord,
    init?: RequestInit,
    secure = true,
  ): Promise<Response> {
    return this.fetch(
      this.baseUrl + apirUrl,
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
        ...init,
      },
      secure,
    );
  }

  public static async postForm(
    apirUrl: string,
    formData: FormData,
    init?: RequestInit,
    secure?: boolean,
  ): Promise<Response> {
    return this.fetch(
      this.baseUrl + apirUrl,
      {
        method: 'POST',
        body: formData,
        ...init,
      },
      secure,
    );
  }

  public static async put(
    apirUrl: string,
    body: any,
    init?: RequestInit,
  ): Promise<Response> {
    return this.fetch(this.baseUrl + apirUrl, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      ...init,
    });
  }

  public static async fetch(
    input: RequestInfo,
    init: RequestInit,
    secure = true,
  ): Promise<Response> {
    const preInit = await this.preProcess(secure);
    const response = await fetch(input, {
      ...preInit,
      ...init,
      headers: { ...preInit.headers, ...init.headers },
    });
    await this.postProcess();

    return response;
  }

  private static preProcess(secure = true): RequestInit {
    if (secure) {
      const token = '' ;
      if (token) {
        return {
          headers: { Authorization: `Bearer ${token}` },
        };
      }
    }
    return {};
  }

  private static postProcess() {
    return null;
  }
}
