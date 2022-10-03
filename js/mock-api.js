const names = [
  'Superman',
  'Batman',
  'Aquaman',
  'Hulk',
  'Vision',
  'Wolverine',
  'Black Panther',
  'Ironman',
];

const api = (term) =>
  new Promise((resolve) => {
    const results = names.filter((name) =>
      name.toLowerCase().includes(term.toLowerCase())
    );
    resolve(results);
  });
