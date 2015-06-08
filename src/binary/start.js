'use strict';

import createGame from '../create-game.js';
import colors from 'colors/safe';

const game = createGame();

function executeCommand(data) {
    process.stdout.write('\n');

    var args = data.split(' ').map(function (str) {
        return str
            .replace(/\r?\n|\r/g, ' ')
            .trim();
    });

    var command = args.shift();

    switch (command) {
        case 'PLACE': {
            if (game.place(parseInt(args[0]), parseInt(args[1]), args[2])) {
                console.log(colors.green('Robot is placed and ready to engage'));
                process.stdout.write('\n');
            }

            break;
        }

        case 'LEFT': {
            game.left();
            break;
        }

        case 'RIGHT': {
            game.right();
            break;
        }

        case 'REPORT': {
            if (game.report()) {
                console.log(
                    'Robot is at position:',
                    colors.green(game.report().x + '/' + game.report().y),
                    'and facing to',
                    colors.yellow(game.report().f)
                );
            } else {
                console.log(colors.yellow('No robot is on the square table top'));
            }

            process.stdout.write('\n');
            break;
        }

        case 'MOVE': {
            game.move();
            break;
        }

        default: {
            break;
        }
    }
}

export default function () {
    process.stdout.write('\n');

    console.log('Welcome to', colors.yellow('Robots'), 'a', colors.green('class-free'), 'object oriented comand-line game.');

    process.stdout.write('\n');

    console.log(colors.cyan('First you need to place the robot with: PLACE X Y F'));

    process.stdout.write('\n');

    process.stdin.setEncoding('utf8');

    process.stdin.on('data', executeCommand);

    process.stdin.resume();
}
