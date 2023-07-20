import { GitContentSource } from '@stackbit/cms-git';

import { Page } from './.stackbit/models/Page';
import { HeroSection } from './.stackbit/models/HeroSection';

export default sbConfig = {
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '16',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [Page, HeroSection],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
};