import { LitElement } from 'lit';
import { ManifestScreenshot } from '../types/types';
import type { PwaInstallTheme } from '../templates/types';
export default class PWAGalleryElement extends LitElement {
    screenshots: ManifestScreenshot[];
    theme: 'default' | 'apple_desktop' | 'apple_mobile';
    scheme: PwaInstallTheme;
    rtl: boolean;
    static get styles(): CSSStyleSheet;
    private getScrollElements;
    private findCurrentItem;
    private scrollToPage;
    scrollToNextPage: () => void;
    scrollToPrevPage: () => void;
    private _init;
    firstUpdated(): void;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
