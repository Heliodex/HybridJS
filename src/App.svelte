<script lang="ts">
	import { terminal, textinput, commandTyped } from "./os"
	let textbox: HTMLElement

	function focus() {
		textbox.focus()
	}
</script>

<main on:click={focus} on:keypress={focus}>
	{@html $terminal}
	<form on:submit|preventDefault={commandTyped}>
		<input bind:this={textbox} type="text" bind:value={$textinput} />
	</form>
</main>

<style lang="sass">
	main
		display: block
		font-family: "Courier New"
		white-space: pre
		margin: 1rem 
		line-height: 0.2rem

	input
		padding: 0
		height: 1rem
		font-family: "Courier New"
		font-size: 1rem
		background: #0e1628
		color: white

		outline: none
		border: none
</style>
