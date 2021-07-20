import '../ga-card';
import '../ga-heading';
import '@material/mwc-textfield';
import '@material/mwc-button';

import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('create-account-view')
export class CreateAccountView extends LitElement
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
            margin: 10px 0;
        }

        #createAccountButton
        {
            margin: 16px auto;
        }
        #loginButton {
            margin: 20px auto;
            width: 400px;
        }
    `;

    protected override render(): TemplateResult
    {
        return html`
            <ga-card class="card">
                <ga-heading>Create an account</ga-heading>
                <mwc-textfield class="input" outlined required label="User Name"></mwc-textfield>
                <mwc-textfield class="mail" outlined required label="Mail"></mwc-textfield>
                <mwc-textfield class="input" outlined required type="password" label="Password"></mwc-textfield>
                <mwc-textfield class="input" outlined required type="password" label="Confirm password"></mwc-textfield>
                <mwc-button id="createAccountButton" class="input" raised label="Submit"></mwc-button>
            </ga-card>
            <mwc-button id="loginButton" label="Already have an account?"></mwc-button>
        `;
    }
}