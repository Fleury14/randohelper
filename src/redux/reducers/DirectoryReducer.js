const INITIAL_STATE = { games: [
  {
    title: 'Final Fantasy IV: Free Enterprise',
    srlAbbrev: 'ff4hacks',
  },
  {
    title: 'Final Fantasy Randomizer',
    srlAbbrev: 'ffhacks',
  },
  {
    title: 'Final Fantasy VI: Beyond Chaos',
    srlAbbrev: 'ff6random',
  },
  {
    title: 'A Link to the Past Randomize',
    srlAbbrev: 'alttphacks',
  },
  {
    title: 'Ocarina of Time Randomizer',
    srlAbbrev: 'oothacks',
  },
] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }

}