import { css, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('ga-link')
export class GaLink extends LitElement
{
    public static override styles = css`
        :host
        {
            display: block;
            margin: 25px auto;
        }

        a
        {
            text-decoration: underline;
            font-size: var(--link-font-size, 20px);
            color: rgb(98, 0, 238);
            font-weight: 500;
        }
    `;

    protected override render():TemplateResult
    {
        return html`<a href="#"><slot></slot></a>`;
    }
}