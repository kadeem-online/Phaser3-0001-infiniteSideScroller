import { SCENE_MAIN_MENU, SCENE_STAGE } from "../Keys";
import { StageScene } from "./StageScene";

export class MainMenuScene extends Phaser.Scene {
	constructor() {
		super(SCENE_MAIN_MENU);
	}

	create() {
		// TEMPORARY: display text to indicate this is the main menu scene.
		this.add
			.text(20, 20, "Main Menu Scene", {
				fontSize: "40px",
			})
			.setOrigin(0, 0);

		// TEMPORARY: short-circuit driectly to stage when preload is done.
		this.scene.add(SCENE_STAGE, StageScene, true, {});
		this.scene.moveAbove(this.scene.key, SCENE_STAGE);
		this.scene.stop(this.scene.key, {});
	}
}
