export type PackageTier = 'foundation' | 'progress' | 'mastery' | 'excellence';

export const CONVERSION_RATE = 20; // 1 LJP = 20 ETB, 1 TJP = 20 ETB
export const TJP_WITHDRAWAL_CHUNK = 70;

export function convertPointsToETB(points: number): number {
  return points * CONVERSION_RATE;
}

/**
 * Calculates withdrawable TJP chunks and remainder.
 * Must be >= 70, in multiples of 70.
 */
export function calculateTjpWithdrawal(tjpBalance: number = 0) {
  const balance = Math.floor(tjpBalance);

  if (balance < TJP_WITHDRAWAL_CHUNK) {
    return {
      withdrawableTjp: 0,
      withdrawableEtb: 0,
      lockedTjp: Number(tjpBalance.toFixed(2)),
      pointsNeededForNext: TJP_WITHDRAWAL_CHUNK - balance,
      canWithdraw: false,
    };
  }

  const withdrawableTjp = Math.floor(balance / TJP_WITHDRAWAL_CHUNK) * TJP_WITHDRAWAL_CHUNK;
  const lockedTjp = Number((tjpBalance - withdrawableTjp).toFixed(2));
  const pointsNeededForNext = TJP_WITHDRAWAL_CHUNK - (balance % TJP_WITHDRAWAL_CHUNK);

  return {
    withdrawableTjp,
    withdrawableEtb: withdrawableTjp * CONVERSION_RATE,
    lockedTjp,
    pointsNeededForNext: pointsNeededForNext === TJP_WITHDRAWAL_CHUNK ? 0 : pointsNeededForNext,
    canWithdraw: true,
  };
}