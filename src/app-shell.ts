import './views/login-view';
import './views/create-account-view';

import { css, customElement, html, LitElement, state, TemplateResult } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from './redux/store';
import { actionLiterals } from './redux/reducers/actionLiterals';

@customElement('app-shell')
export class AppShell extends connect(store)(LitElement)
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

    override stateChanged(state: any):void
    {
        this.currentRoute = state.currentPage;
    }

    private renderView(): TemplateResult
    {
        switch (this.currentRoute)
        {
            case actionLiterals.changePage.options.login:
                return html`<login-view> </login-view>`;
            case actionLiterals.changePage.options.createAccount:
                return html`<create-account-view></create-account-view>`;
            default:
                return html`<login-view> </login-view>`;
        }
    }
}