const Dragon = require('../PFW-04-CDLP/classes/dragon')

const FriendlyDragon = require('../PFW-04-CDLP/classes/friendly-dragon')

const EvilDragon = require('../PFW-04-CDLP/classes/evil-dragon')

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  ["save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
)

const smaug = new EvilDragon(
  "Smaug",
  "black",
  ["take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
)

const allDragons = Dragon.getDragons(falkor, smaug)
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.allDragons = allDragons
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
