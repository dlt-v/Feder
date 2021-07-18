import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('ga-heading')
export class GaHeading extends LitElement
{
    public static override styles = css`
        :host
        {
            display: block;
            margin: 0 auto;
        }

        h1
        {
            font-size: var(--heading-font-size, 32px);
            font-weight: 500;
        }
    `;

    protected override render():TemplateResult
    {
        return html`<h1><slot></slot></h1>`;
    }
}