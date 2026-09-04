export interface PlaybackState {
  enabled: boolean;
  reduced: boolean;
  explicitPlay: boolean;
  hovered: boolean;
  focused: boolean;
}

export function carouselPlayback(state: PlaybackState) {
  const requested = state.enabled && (!state.reduced || state.explicitPlay);
  return { requested, playing: requested && !state.hovered && !state.focused };
}
