/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#A6D200';
    const secondaryColour = '#8CB400';

    const repeatIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0icmVwZWF0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0E2RDIwMDt9DQoJLnN0MXtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjx0aXRsZT5yZXBlYXQ8L3RpdGxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjMsMTFjLTAuMywwLjYtMC45LDEtMS41LDFoLTEuNmMtMC4xLDEuMy0wLjUsMi41LTEuMSwzLjZjLTAuOSwxLjctMi4zLDMuMi00LjEsNC4xDQoJYy0xLjcsMC45LTMuNiwxLjItNS41LDAuOWMtMS44LTAuMy0zLjUtMS4xLTQuOS0yLjNjLTAuNy0wLjctMC43LTEuOSwwLTIuNmMwLjYtMC42LDEuNi0wLjcsMi4zLTAuMkg3YzAuOSwwLjYsMS45LDAuOSwyLjksMC45DQoJczEuOS0wLjMsMi43LTAuOWMxLjEtMC44LDEuOC0yLjEsMS44LTMuNWgtMS41Yy0wLjksMC0xLjctMC43LTEuNy0xLjdjMC0wLjQsMC4yLTAuOSwwLjUtMS4ybDQuNC00LjRjMC43LTAuNiwxLjctMC42LDIuNCwwTDIzLDkuMg0KCUMyMy41LDkuNywyMy42LDEwLjQsMjMuMywxMXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMS44LDExaC0yLjZjMCwxLjUtMC4zLDIuOS0xLDQuMmMtMC44LDEuNi0yLjEsMi44LTMuNywzLjZjLTEuNSwwLjgtMy4zLDEuMS00LjksMC44Yy0xLjYtMC4yLTMuMi0xLTQuNC0yLjENCgljLTAuNC0wLjMtMC40LTAuOS0wLjEtMS4yYzAuMy0wLjQsMC45LTAuNCwxLjItMC4xbDAsMGMxLDAuNywyLjIsMS4xLDMuNCwxLjFzMi4zLTAuMywzLjMtMWMwLjktMC42LDEuNi0xLjUsMi0yLjYNCgljMC4zLTAuOSwwLjQtMS44LDAuMi0yLjhoLTIuNGMtMC40LDAtMC43LTAuMy0wLjctMC43YzAtMC4yLDAuMS0wLjMsMC4yLTAuNGw0LjQtNC40YzAuMy0wLjMsMC43LTAuMywwLjksMEwyMiw5LjgNCgljMC4zLDAuMywwLjQsMC42LDAuMywwLjlTMjIsMTEsMjEuOCwxMXoiLz4NCjwvc3ZnPg0K';

    Blockly.Blocks.cooperativeScheduler_start = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COOPERATIVESCHEDULER_START,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.cooperativeScheduler_setup = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COOPERATIVESCHEDULER_SETUP,
                message1: '%1',
                message2: 'loop',
                message3: '%1',
                message4: '%1', // Icon
                lastDummyAlign4: 'RIGHT',
                args0: [{
                    type: 'input_value',
                    name: 'NO'
                }],
                args1: [{
                    type: 'input_statement',
                    name: 'SUBSTACK'
                }],
                args3: [{
                    type: 'input_statement',
                    name: 'SUBSTACK1'
                }],
                args4: [
                    {
                        type: 'field_image',
                        src: repeatIconUrl,
                        width: 24,
                        height: 24,
                        alt: '*',
                        flip_rtl: true
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_hat']
            });
            this.setNextStatement(false, null);
        }
    };

    Blockly.Blocks.cooperativeScheduler_sleep = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.COOPERATIVESCHEDULER_SLEEP,
                args0: [{
                    type: 'input_value',
                    name: 'TIME'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
