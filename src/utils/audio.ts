/**
 * Web Audio API synthesizer for soft, responsive UI sound effects.
 * Generates an organic, subtle bubble 'pop' sound without requiring external audio assets.
 */

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    if (!sharedAudioCtx || sharedAudioCtx.state === 'closed') {
      sharedAudioCtx = new AudioCtx();
    }

    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume().catch(() => {});
    }

    return sharedAudioCtx;
  } catch {
    return null;
  }
}

/**
 * Plays a soft, tactile bubble pop sound when opening the WhatsApp chat widget.
 */
export function playPopSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Sine wave produces a pure, round bubble tone
    osc.type = 'sine';

    // Start at a pleasant mid-high frequency and rapidly descend (classic liquid bubble pop)
    osc.frequency.setValueAtTime(680, now);
    osc.frequency.exponentialRampToValueAtTime(210, now + 0.085);

    // Smooth, soft envelope: gentle attack, fast decay to zero without clicks
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.095);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch {
    // Graceful silent fallback if browser audio policy blocks or is disabled
  }
}
