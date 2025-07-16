

export type roles = "tiempo completo" | "medio  tiempo" | "temporal" | "contrato";

export interface EmployType {
    _id : string;
    email: string;
    fullName: string;
    role: roles;
    age: number;
} 