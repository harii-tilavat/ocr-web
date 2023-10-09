export class PricingModel {
  id!: number;
  planType!: string;
  price!: number | null;
  discount!:number | null;
  features!: {
    no_of_resercher?: number;
    no_of_sessions?: number;
    is_transcription?: boolean;
  } | null
  participant_per_month?: number | null;
}
