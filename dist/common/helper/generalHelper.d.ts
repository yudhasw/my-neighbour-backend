export declare class GeneralHelper {
    private readonly folderPath;
    constructor();
    twoDecimal(input: number): number;
    static readonly FileDictionary: Record<string, string>;
    static getFolderExtension(mimetype: string): string;
    static ensureDirectoryExists(path: string): void;
    getFolderPath(): string;
}
