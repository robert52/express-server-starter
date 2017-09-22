/// <reference types="express" />

declare namespace Express {
    interface Response extends OkResponse {}
}

interface OkResponse {
    ok(data?: any): void;
}

declare module "okResponse";