import { siteConfig } from '../config';

export type FSNode =
  | { type: 'file'; content: string }
  | { type: 'directory'; children: Record<string, FSNode> };

export const initialFileSystem: FSNode = siteConfig.fileSystem;

export const resolvePath = (
  cwd: ReadonlyArray<string>,
  input: string,
): ReadonlyArray<string> => {
  if (input === '~') return [];
  if (!input) return cwd;
  const segments = input.startsWith('/')
    ? input.slice(1).split('/')
    : [...cwd, ...input.split('/')];
  const resolved: string[] = [];
  for (const seg of segments) {
    if (seg === '' || seg === '.') continue;
    if (seg === '..') resolved.pop();
    else resolved.push(seg);
  }
  return resolved;
};

export const longestCommonPrefix = (strings: string[]): string => {
  if (strings.length === 0) return '';
  return strings.reduce((prefix, str) => {
    let i = 0;
    while (i < prefix.length && i < str.length && prefix[i] === str[i]) i++;
    return prefix.slice(0, i);
  });
};

export const completePath = (
  fs: FSNode,
  cwd: ReadonlyArray<string>,
  partial: string,
): string[] => {
  const lastSlash = partial.lastIndexOf('/');
  const dirInput = lastSlash === -1 ? '' : partial.slice(0, lastSlash);
  const prefix = lastSlash === -1 ? partial : partial.slice(lastSlash + 1);

  const dirNode = nodeAt(fs, resolvePath(cwd, dirInput));
  if (dirNode?.type !== 'directory') return [];

  return Object.keys(dirNode.children)
    .filter((name) => name.startsWith(prefix))
    .map((name) => (dirInput ? `${dirInput}/${name}` : name))
    .sort();
};

export const nodeAt = (
  fs: FSNode,
  path: ReadonlyArray<string>,
): FSNode | undefined =>
  path.reduce<FSNode | undefined>(
    (node, seg) =>
      node?.type === 'directory' ? node.children[seg] : undefined,
    fs,
  );