import './views/login-view';
import './views/create-account-view';

import { css, customElement, html, LitElement, state, TemplateResult } from 'lit-element';

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
        return html`${this.renderView()}`;
    }
    @state()
    private currentRoute = 'login';

    private updateRoute(event: CustomEvent): void
    {
        this.currentRoute = event.detail.newRoute;
    }

    private renderView(): TemplateResult
    {
        switch (this.currentRoute)
        {
            case 'login':
                return html`<login-view @updateRoute="${this.updateRoute}"> </login-view>`;
            case 'create-account':
                return html`<create-account-view @updateRoute="${this.updateRoute}"></create-account-view>`;
            default:
                return html`<login-view @updateRoute="${this.updateRoute}"> </login-view>`;
        }
    }
}