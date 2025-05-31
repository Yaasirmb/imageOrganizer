import { Plugin } from 'obsidian'

export default class imagageOrganizer extends Plugin{
	async onload() {
		this.registerEvent(
		this.app.workspace.on('editor-paste', (evt: ClipboardEvent, editor, view) => {
			console.log('Paste event detected via workspace:', evt);
			// You can inspect evt.clipboardData.getData('text/plain') if needed
		})
		);
}
}