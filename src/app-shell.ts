import './views/login-view';
import './views/create-account-view';

import { css, customElement, html, LitElement, state, TemplateResult } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from './redux/store';
import { changePageAction } from './redux/reducers/actionLiterals';
import { RootState } from './redux/reducers/reducer';

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
    private currentRoute = changePageAction.actionPayloads.login;

    public override stateChanged(state: RootState):void
    {
        this.currentRoute = state.paging.currentPage;
    }

    private renderView(): TemplateResult
    {
        switch (this.currentRoute)
        {
            case changePageAction.actionPayloads.login:
                return html`<login-view> </login-view>`;
            case changePageAction.actionPayloads.createAccount:
                return html`<create-account-view></create-account-view>`;
            default:
                return html`<login-view> </login-view>`;
        }
    }
}