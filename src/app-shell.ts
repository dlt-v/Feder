import './login/login-view';

import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('app-shell')
export class AppShell extends LitElement
{
    public static override styles = css`
        :host
        {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
    `;

    protected override render(): TemplateResult
    {
        return html`
            <login-view></login-view>
        `;
    }
}