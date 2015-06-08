'use strict';

import createRobot from './create-robot';
import createWorld from './create-world';

const direction = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

let placed = false;

export default function () {
    var robot = createRobot();

    const world = createWorld({
        width: 5,
        height: 5
    });

    const report = function () {
        if (!placed) {
            return false;
        }

        return {
            x: robot.getX(),
            y: robot.getY(),
            f: direction[robot.getF()]
        };
    };

    const place = function (x, y, f) {
        if (world.isMoveable(x, y)) {
            robot.setX(x);
            robot.setY(y);
            robot.setF(direction.indexOf(f));

            if (!placed) {
                placed = true;
            }

            return true;
        }
    };

    const left = function () {
        if (placed) {
            robot.setF(robot.getF() - 1);
        }
    };

    const right = function () {
        if (placed) {
            robot.setF(robot.getF() + 1);
        }
    };

    const move = function () {
        let x = robot.getX();
        let y = robot.getY();

        switch (robot.getF()) {
            // north
            case 0: {
                y += 1;
                break;
            }

            // east
            case 1: {
                x += 1;
                break;
            }

            // south
            case 2: {
                y -= 1;
                break;
            }

            // west
            case 3: {
                x -= 1;
                break;
            }

            default: {
                break;
            }
        }

        if (world && placed && world.isMoveable(x, y)) {
            robot.setX(x);
            robot.setY(y);
        }
    };

    return Object.freeze({
        left: left,
        right: right,
        move: move,
        place: place,
        report: report
    });
}
