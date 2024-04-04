import { SCENE_STAGE } from "../Keys";

export class StageScene extends Phaser.Scene {
	constructor() {
		super(SCENE_STAGE);
	}

	create() {
		// TEMPORARY: display text to indicate this is the stage scene.
		this.add
			.text(20, 20, "Stage Scene", {
				fontSize: "40px",
			})
			.setOrigin(0, 0);
	}
}
