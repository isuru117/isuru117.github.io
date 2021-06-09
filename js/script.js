function getYearsOfExperience() {
    var before = moment('2019.08.28 14:00', 'YYYY.MM.DD HH:mm');
    return Math.ceil(moment().diff(before, 'months')/12);
}