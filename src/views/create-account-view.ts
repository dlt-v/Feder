import '../ga-card';
import '../ga-heading';
import '@material/mwc-textfield';
import '@material/mwc-button';

import { css, customElement, html, LitElement, state, TemplateResult } from 'lit-element';

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
                <mwc-textfield .value=${this.userName} @change=${this.updateUserName} class="input" outlined required label="User Name"></mwc-textfield>
                <mwc-textfield .value=${this.userMail} @change=${this.updateUserMail} class="mail" outlined required label="Mail"></mwc-textfield>
                <mwc-textfield .value=${this.userPass} @change=${this.updateUserPass} class="input" outlined required type="password" label="Password"></mwc-textfield>
                <mwc-textfield .value=${this.userSecPass} @change=${this.updateUserSecPass} class="input" outlined required type="password" label="Confirm password"></mwc-textfield>
                <mwc-button id="createAccountButton" @click=${this.createAccount} class="input" raised label="Submit"></mwc-button>
            </ga-card>
            <mwc-button id="loginButton" label="Already have an account?"></mwc-button>
        `;
    }

    @state()
    private userName = '';
    @state()
    private userMail = '';
    @state()
    private userPass = '';
    @state()
    private userSecPass = '';

    private async createAccount(): Promise<void>
    {
        const user = {
            name: this.userName,
            password: this.userPass,
            mail: this.userMail
        };
        try
        {
            await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });


            this.userName = '';
            this.userMail = '';
            this.userPass = '';
            this.userSecPass = '';
        }
        catch(error)
        {
            console.log(error);

        }


    }

    private updateUserName(event: Event): void
    {
        this.userName = (event.currentTarget as HTMLInputElement).value;
    }

    private updateUserMail(event: Event): void
    {
        this.userMail = (event.currentTarget as HTMLInputElement).value;
    }

    private updateUserPass(event: Event): void
    {
        this.userPass = (event.currentTarget as HTMLInputElement).value;
    }

    private updateUserSecPass(event: Event): void
    {
        this.userSecPass = (event.currentTarget as HTMLInputElement).value;
    }

}