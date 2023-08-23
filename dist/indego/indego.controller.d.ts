import { IndegoService } from './indego.service';
export declare class IndegoController {
    private readonly indegoService;
    constructor(indegoService: IndegoService);
    getIndegoData(): Promise<any>;
}
