import type {RenderOptions} from '../Renderer';

export default class ForeignObjectRenderer {
    options: RenderOptions;
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    render(options) {
        this.options = options;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = Math.floor(options.bounds.width * options.scale);
        this.canvas.height = Math.floor(options.bounds.height * options.scale);
        this.canvas.style.width = `${options.bounds.width}px`;
        this.canvas.style.height = `${options.bounds.height}px`;
        this.ctx.scale(this.options.scale, this.options.scale);

        options.logger.log(`ForeignObject renderer initialized with scale ${this.options.scale}`);

        const xmlns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(xmlns, 'svg');
        const foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttributeNS(null, 'width', options.bounds.width);
        svg.setAttributeNS(null, 'height', options.bounds.height);

        foreignObject.setAttributeNS(null, 'width', '100%');
        foreignObject.setAttributeNS(null, 'height', '100%');
        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);

        foreignObject.appendChild(this.element);

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                if (options.backgroundColor) {
                    this.ctx.fillStyle = options.backgroundColor.toString();
                    this.ctx.fillRect(0, 0, options.bounds.width, options.bounds.height);
                }
                this.ctx.drawImage(img, 0, 0);
                resolve(this.canvas);
            };

            img.onerror = reject;

            img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
                new XMLSerializer().serializeToString(svg)
            )}`;
        });
    }
}
