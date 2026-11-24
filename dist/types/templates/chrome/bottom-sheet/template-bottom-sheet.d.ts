import { type PwaInstallMessages } from '../../../messages';
export interface BottomSheetTemplateOptions {
    name: string;
    description: string;
    icon: string;
    install: EventListenerOrEventListenerObject;
    fallback: boolean;
    howToRequested: boolean;
    inAppBrowser: boolean;
    messages: Partial<PwaInstallMessages>;
}
declare const template: ({ name, description, icon, install, fallback, howToRequested, inAppBrowser, messages }: BottomSheetTemplateOptions) => import("lit-html").TemplateResult<1>;
export default template;
