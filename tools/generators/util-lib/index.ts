import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
// eslint-disable-next-line
console.log('==================== schema.directory:', schema.directory);

  await libraryGenerator(host, { name: `util-${schema.name}`, directory: schema.directory});
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
