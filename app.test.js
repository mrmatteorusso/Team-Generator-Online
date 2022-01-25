const groupPlayers = require('./app')


test('groupPlayers() calls without names and groupNum', () => {
    expect(groupPlayers()).toBe('');
});

