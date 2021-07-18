import '../ga-card';
import '../ga-heading';

import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

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
            margin: auto auto;
        }
    `;

    protected override render(): TemplateResult
    {
        return html`
            <ga-card class="card">
                <ga-heading>🇩🇪 Welcome to the German App 🇩🇪</ga-heading>
            </ga-card>
        `;
    }
}