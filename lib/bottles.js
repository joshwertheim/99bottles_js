import { downTo } from './helpers';

class Bottles {
    constructor() {

    }

    verse(num) {
        var nextNum = num - 1
        if (num >= 3) {
            return  num + ' bottles of beer on the wall, ' +
                    num + ' bottles of beer.\n' +
                    'Take one down and pass it around, ' +
                    nextNum + ' bottles of beer on the wall.\n';
        } else if (num >= 2) {
            return  num + ' bottles of beer on the wall, ' +
                    num + ' bottles of beer.\n' +
                    'Take one down and pass it around, ' +
                    nextNum + ' bottle of beer on the wall.\n';
        } else if (num == 1) {
            return  num + ' bottle of beer on the wall, ' +
                    num + ' bottle of beer.\n' +
                    'Take it down and pass it around, ' +
                    'no more bottles of beer on the wall.\n';
        } else {
            return  'No more bottles of beer on the wall, ' +
                    'no more bottles of beer.\n' +
                    'Go to the store and buy some more, ' +
                    '99 bottles of beer on the wall.\n';
        }
    }

    verses(current, next) {
        var verseToReturn = ''
        while (current >= next) {
            if (verseToReturn) {
                verseToReturn += '\n'
            }
            var currVerse = ''
            if (current >= 3) {
                currVerse = current + ' bottles of beer on the wall, ' +
                        current + ' bottles of beer.\n' +
                        'Take one down and pass it around, ' +
                        (current-1) + ' bottles of beer on the wall.\n';
            } else if (current == 2) {
                currVerse = current + ' bottles of beer on the wall, ' +
                        current + ' bottles of beer.\n' +
                        'Take one down and pass it around, ' +
                        (current-1) + ' bottle of beer on the wall.\n';
            } else if (current == 1) {
                currVerse = current + ' bottle of beer on the wall, ' +
                        current + ' bottle of beer.\n' +
                        'Take it down and pass it around, ' +
                        'no more bottles of beer on the wall.\n';
            } else {
                currVerse = 'No more bottles of beer on the wall, ' +
                        'no more bottles of beer.\n' +
                        'Go to the store and buy some more, ' +
                        '99 bottles of beer on the wall.\n';
            }
            verseToReturn += currVerse
            current = current - 1
        }
        return verseToReturn
    }

    song() {
        return this.verses(99,0)
    }
}

module.exports = {
    Bottles
}