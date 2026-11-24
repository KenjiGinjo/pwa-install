import type { InstallTemplateOptions } from '../types';
export interface ChromeTemplateOptions extends InstallTemplateOptions {
    install: EventListenerOrEventListenerObject;
    toggleHowTo: EventListenerOrEventListenerObject;
    howToRequested: boolean;
    isAndroidFallback: boolean;
    inAppBrowser: boolean;
    customStyles: Record<string, string>;
    compactSheet: boolean;
}
declare const template: ({ name, description, installDescription, disableDescription, disableScreenshots, disableClose, icon, manifest, installAvailable, hideDialog, install, toggleGallery, galleryRequested, toggleHowTo, howToRequested, isAndroidFallback, inAppBrowser, isRTL, messages, scheme, customStyles, compactSheet }: ChromeTemplateOptions) => import("lit-html").TemplateResult<1>;
export default template;
