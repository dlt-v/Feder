import '../ga-card';
import '../ga-heading';
import '@material/mwc-textfield';
import '@material/mwc-button';

import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

import { store } from '../redux/store';
import { changePageAction } from '../redux/reducers/actionLiterals';

@customElement('login-view')
export class LoginView extends LitElement
{
    public static override styles = css`
        :host
        {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .card
        {
            margin: 10vh auto 0 auto;
        }

        .input
        {
            margin: 8px 0;
        }

        #loginButton
        {
            margin: 16px auto;
        }
        #createAccountButton {
            margin: 20px auto;
            width: 400px;
        }
    `;

    protected override render(): TemplateResult
    {
        return html`
            <ga-card class="card">
                <ga-heading>🇩🇪 Welcome to the German App 🇩🇪</ga-heading>
                <mwc-textfield class="input" outlined required label="User Name"></mwc-textfield>
                <mwc-textfield class="input" outlined required type="password" label="My Textfield"></mwc-textfield>
                <mwc-button id="loginButton" class="input" raised label="Log in"></mwc-button>
            </ga-card>
            <mwc-button @click="${this.updateRoute}" id="createAccountButton" label="Don't have an account yet? Create it now!"></mwc-button>
        `;
    }

    private updateRoute(): void
    {
        store.dispatch({
            type: changePageAction.actionType,
            payload: changePageAction.actionPayloads.createAccount
        });
    }
}