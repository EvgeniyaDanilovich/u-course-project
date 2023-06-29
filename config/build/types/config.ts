export type BuildMode = 'production' | 'development';

export interface BuildPath{
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface buildEnv{
    mode: BuildMode,
    port: number,
    apiUrl: string,
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'frontend' | 'storybook' | 'jest';
}
