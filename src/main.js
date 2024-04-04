import Phaser from "phaser";

window.addEventListener("load", onLoad);

/**
 * Executed when the DOM loads.
 * @param {Event} event 
 */
function onLoad(event){
  const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    // scale
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT
    },
  });
  return;
}