import * as fs from 'fs';
import { join, resolve } from 'path';
import { WorkspaceContext, componentUtil, utils } from '@salesforce/lightning-lsp-common';

// load an LWC work space at the root directory
const WORKSPACE: WorkspaceContext = new WorkspaceContext([
    resolve(__dirname, '..', '..')
]);

// define typings paths
const TYPINGS_PATHS: Record<string, string[]>  = {
    'types/*': ['@types/*']
};


export async function buildTsConfig(): Promise<void> {
    const allPaths: Record<string, string[]> = {
        ...TYPINGS_PATHS
    };
    // load .js modules
    const files: string[] = await WORKSPACE.findAllModules();

    // collect the paths for all modules in the workspace
    files.forEach((file, index, array) => {
        const tag: string = componentUtil.moduleFromFile(file, true);
        const relativePath: string = utils.relativePath('./', file);
        allPaths[tag] = [`./${relativePath.replace('.js', '.ts')}`];
    });

    Object.keys(allPaths).forEach((value, key, map) => {
        console.log(value);
        console.log(allPaths[value]);
    });
}

buildTsConfig();