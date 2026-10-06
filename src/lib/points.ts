export type PackageTier = 'foundation' | 'progress' | 'mastery' | 'excellence';

export const LJP_TO_ETB_RATE = 20;

export function calculateBP(coursePrice: number): number {
  return coursePrice / 20;
}

export function convertLJPToETB(ljp: number): number {
  return ljp * LJP_TO_ETB_RATE;
}

const COMMISSION_MATRIX: Record<PackageTier, Record<PackageTier, number>> = {
  foundation: { foundation: 0.11, progress: 0.12, mastery: 0.135, excellence: 0.145 },
  progress:   { foundation: 0.115, progress: 0.13, mastery: 0.14,  excellence: 0.15 },
  mastery:    { foundation: 0.12, progress: 0.135, mastery: 0.145, excellence: 0.16 },
  excellence: { foundation: 0.125, progress: 0.14,  mastery: 0.15,  excellence: 0.17 },
};

export function getReferralCommissionRate(myTier: PackageTier, soldTier: PackageTier): number {
  return COMMISSION_MATRIX[myTier]?.[soldTier] ?? 0;
}

export function calculatePotentialLJP(myTier: PackageTier, soldTier: PackageTier, coursePrice: number): number {
  const rate = getReferralCommissionRate(myTier, soldTier);
  const bp = calculateBP(coursePrice);
  return Number((rate * bp).toFixed(2));
}