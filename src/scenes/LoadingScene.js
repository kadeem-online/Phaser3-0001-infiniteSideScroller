import { SCENE_LOADING, SCENE_MAIN_MENU, TEXTURE_PLAYER_WALK } from "../Keys";
import { MainMenuScene } from "./MainMenuScene";

export class LoadingScene extends Phaser.Scene {
	constructor() {
		super(SCENE_LOADING);
	}

	preload() {
		this.load.spritesheet(TEXTURE_PLAYER_WALK, "./images/player-walk.png", {
			frameWidth: 72,
			frameHeight: 97,
			startFrame: 0,
			endFrame: 11,
		});
	}

	create() {
		// TEMPORARY: display text to indicate this is the loading scene.
		this.add
			.text(20, 20, "Loading Scene", {
				fontSize: "40px",
			})
			.setOrigin(0, 0);

		// TEMPORARY: short-circuit driectly to main menu when preload is done.
		this.scene.add(SCENE_MAIN_MENU, MainMenuScene, true, {});
		this.scene.moveAbove(this.scene.key, SCENE_MAIN_MENU);
		this.scene.stop(this.scene.key, {});
	}
}
