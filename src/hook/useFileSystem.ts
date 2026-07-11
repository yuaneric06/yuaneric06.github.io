import * as React from 'react';
import { FSNode, initialFileSystem } from '../command/fileSystem';

const useFileSystem = (fileSystem: FSNode = initialFileSystem) => {
    const [fs] = React.useState<FSNode>(fileSystem);
    const [cwd, setCwd] = React.useState<ReadonlyArray<string>>([]);
    return { fs, cwd, setCwd };
};

export default useFileSystem;