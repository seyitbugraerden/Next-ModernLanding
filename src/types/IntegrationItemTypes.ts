export interface IntegrationItemTypes {
    name: string;
    icon: string;
    description: string;
}

export interface IntegrationColumnsTypes {
    className?: string;
    integrations: IntegrationItemTypes[];
}
