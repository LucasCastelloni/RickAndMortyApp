const getEpisodesNumber = episodes => {
  let totalEpisodesNumbers = '';
  episodes.forEach(episodeURL => {
    const episodeString = episodeURL.slice(episodeURL.lastIndexOf('/') + 1);
    totalEpisodesNumbers = totalEpisodesNumbers.concat(episodeString, ' | ');
  });
  return totalEpisodesNumbers;
};

export const CHARACTER_INFO = character => [
  {title: 'Ubicación', info: character.location.name, id: 1},
  {title: 'Especie', info: character.species, id: 2},
  {title: 'Genero', info: character.gender, id: 3},
  {title: 'Status', info: character.status, id: 4},
  {title: 'Origen', info: character.origin.name, id: 5},
  {title: 'Episodios', info: getEpisodesNumber(character.episode), id: 6},
];
