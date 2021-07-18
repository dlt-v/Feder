import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('ga-card')
export class GaCard extends LitElement
{
    public static override styles = css`
        :host
        {
            display: flex;
            flex-direction: column;
            min-width: 320px;
            max-width: 100%;
            width: max-content;
            margin: 8px;
            padding: 8px;
            border-radius: 8px;
            background-color: white;
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        }
    `;

    protected override render(): TemplateResult
    {
        return html`<slot></slot>`;
    }
}