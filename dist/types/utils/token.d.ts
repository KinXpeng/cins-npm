export declare const token: {
    get: (TOKEN_KEY: string) => string | null;
    set: (TOKEN_KEY: string, token: string) => void;
    clear: (TOKEN_KEY: string) => void;
};
