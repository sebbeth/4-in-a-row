export class GameState {
	public boardMatrix: number[][];
	public gameover: boolean;


	constructor(rows: number, columns: number) {
		this.boardMatrix = new Array(rows).fill(0).map(r => new Array(columns).fill(0));
		this.gameover = false;
		console.log(this.boardMatrix);
	}

	public checkWin(): number {

		if (this.searchForWin(1)) {
			return 1;
		}
		// if (this.searchForWin(2)) {
		// 	return 2;
		// }
		return -1;
	}


	public dropChip(column: number, player: number) {
		const emptySlot = this.findEmptySlot(this.boardMatrix[column]);
		if (emptySlot === -1) {
			console.log("Column full");
		} else {
			// Add a chip to the column
			this.boardMatrix[column][emptySlot] = player;
		}
		if (this.checkWin() !== -1) {
			this.gameover = true;
		}
	}

	private findEmptySlot(column: number[]): number {
		let slot = -1;
		column.forEach((e, i) => {
			console.log("E" + e);
			if (e === 0) {
				slot = i;
			}
		});
		return slot;
	}


	private searchForWin(player: number): boolean {
		let count = 0;
		let cursor = [0, 0];
		const target = 4;
		while (count < target) {
			console.log("COUNT " + count + " Cursor ");
			console.log(cursor);
			// Check every cell around the cursor


			count++;

		}
		return false;
	}


}