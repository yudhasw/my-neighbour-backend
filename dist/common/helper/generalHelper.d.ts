export declare class GeneralHelper {
    private readonly folderPath;
    constructor();
    twoDecimal(input: number): number;
    static readonly FileDictionary: Record<string, string>;
    static getFolderExtension(mimetype: string): string;
    static ensureDirectoryExists(dirPath: string): void;
    getFolderPath(): string;
    static getFullFilePath(relativePath: string): string;
    static fileExists(relativePath: string): boolean;
    static getFileSize(relativePath: string): number;
    static deleteFile(relativePath: string): boolean;
    static deleteFileAsync(relativePath: string): Promise<boolean>;
}
