# Robots

[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/meandmax/robots/master/LICENSE)
[![build](http://img.shields.io/travis/meandmax/robots/master.svg?style=flat-square)](https://travis-ci.org/meandmax/robots)
[![code climate coverage](http://img.shields.io/codeclimate/coverage/github/meandmax/robots.svg?style=flat-square)](https://codeclimate.com/github/meandmax/robots/coverage)
[![code climate](http://img.shields.io/codeclimate/github/meandmax/robots.svg?style=flat-square)](https://codeclimate.com/github/meandmax/robots)
[![dependencies](http://img.shields.io/david/meandmax/robots.svg?style=flat-square)](https://david-dm.org/meandmax/robots#info=dependencies&view=table)
[![dev dependencies](http://img.shields.io/david/dev/meandmax/robots.svg?style=flat-square)](https://david-dm.org/meandmax/robots#info=devDependencies&view=table)

A simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. It´s written in ecmascript 6 & 7 features and tested with mocha and chai.

## Installation

Install npm dependencies:

    $ npm install

Build target assets:

    $ grunt build

## Usage

    $ node binary/robots.js

If the package is installed globally you can just run:

    $ robots

## Commands

<p align="center">
  <img src="./robots.png" />
</p>

#### PLACE X Y F

Put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. If the robot is already placed, issuing another valid PLACE command will place the robot in the newly specified location.

#### MOVE

Moves the toy robot one unit forward in the direction it is currently facing.

#### LEFT

Rotates the robot 90 degrees to the left (i.e. counter-clockwise) without changing the position of the robot.

#### RIGHT

Rotates the robot 90 degrees to the right (i.e. clockwise) without changing the position of the robot.

#### REPORT

Announces the X,Y and F of the robot.

## Development

    $ grunt start

## Testing

Run tests:

    $ grunt test

Check test coverage (after running grunt test):

    $ open target/coverage.html
