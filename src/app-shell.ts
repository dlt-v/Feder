import './views/login-view';
import './views/create-account-view';

import { css, customElement, html, LitElement, state, TemplateResult } from 'lit-element';

import store from './redux/store';

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

    private unsubscribe = store.subscribe(() =>
    {
        this.currentRoute = store.getState().currentPage;
    })

    private renderView(): TemplateResult
    {
        if(this.currentRoute === 'nothing') // A temporary solution since TS expects unsubscribe method to be called at some point.
        {
            this.unsubscribe();
        }
        switch (this.currentRoute)
        {
            case 'login':
                return html`<login-view> </login-view>`;
            case 'create-account':
                return html`<create-account-view></create-account-view>`;
            default:
                return html`<login-view> </login-view>`;
        }
    }
}